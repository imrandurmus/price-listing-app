package id.renart.service;



import id.renart.model.Product;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    private final GoldPriceService goldPriceService;

    public ProductService(GoldPriceService goldPriceService) {
        this.goldPriceService = goldPriceService;
    }

    public List<Product> getAllProducts() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            InputStream inputStream = new ClassPathResource("products.json").getInputStream();
            List<Product> products = mapper.readValue(inputStream, new TypeReference<List<Product>>() {});
            double goldPrice = goldPriceService.getGoldPriceInUSD();

            for (Product product : products) {
                double price = (product.getPopularityScore() + 1) * product.getWeight() * goldPrice;
                double popularityOutOf5 = Math.round(product.getPopularityScore() * 5 * 10.0) / 10.0;

                product.setPrice(price);
                product.setPopularityOutOf5(popularityOutOf5);
            }
            return products;
        } catch (IOException e) {
            throw new RuntimeException("Failed to load products.json", e);
        }
    }

    public List<Product> getFilteredProducts(Double minPrice, Double maxPrice, Double minPopularity, Double maxPopularity) {
        List<Product> filtered = new ArrayList<>();
        for (Product p : getAllProducts()) {
            if ((minPrice == null || p.getPrice() >= minPrice) &&
                    (maxPrice == null || p.getPrice() <= maxPrice) &&
                    (minPopularity == null || p.getPopularityScore() >= minPopularity) &&
                    (maxPopularity == null || p.getPopularityScore() <= maxPopularity)) {
                filtered.add(p);
            }
        }
        return filtered;
    }
}
