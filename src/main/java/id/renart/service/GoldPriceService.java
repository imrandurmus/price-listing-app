package id.renart.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class GoldPriceService {

    private static final String COINGECKO_API = "https://api.coingecko.com/api/v3/simple/price?ids=gold&vs_currencies=usd";

    public double getGoldPriceInUSD() {
        RestTemplate restTemplate = new RestTemplate();

        try {
            Map<String, Map<String, Double>> response = restTemplate.getForObject(COINGECKO_API, Map.class);
            return response.get("gold").get("usd");
        } catch (Exception e) {
            // fallback value if API fails (e.g., 70 USD/gram)
            return 70.0;
        }
    }
}
