package id.renart.controller;

import id.renart.model.Product;
import id.renart.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getFilteredProducts(
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) Double minPopularity,
            @RequestParam(required = false) Double maxPopularity
    ) {
        return productService.getFilteredProducts(minPrice, maxPrice, minPopularity, maxPopularity);
    }
}
