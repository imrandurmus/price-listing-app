# Product Listing API – Spring Boot

This is a backend service that serves product data from a JSON file and calculates prices based on real-time gold prices. Built for a full-stack assignment.

---

## What It Does

- Loads product data from `products.json`
- Calculates price for each product using:

(popularityScore + 1) × weight × goldPrice

- Retrieves live gold price from CoinGecko
- Adds a popularity score out of 5 (1 decimal precision)
- Supports basic filtering by price and popularity

---

## Stack

- Java 17
- Spring Boot 3
- Jackson (for JSON)
- RestTemplate (for external API calls)

---

## API – `/products`

**Method:** `GET`

### Query Parameters (optional)

| Name            | Description             |
|-----------------|-------------------------|
| `minPrice`      | Minimum price           |
| `maxPrice`      | Maximum price           |
| `minPopularity` | Minimum popularityScore |
| `maxPopularity` | Maximum popularityScore |

### Example

/products?minPrice=200&maxPopularity=0.8


---

## Running the Project

Make sure you have Java 17+ and Maven installed.

```bash
./mvnw spring-boot:run
Or run it from your IDE using the main class.

The API will be available at:
http://localhost:8080/products
```

## Notes
Gold price is fetched from CoinGecko. If the API fails, a fallback price of 70.0 USD/gram is used.

CORS is enabled globally to allow frontend integration.

Product data is loaded from src/main/resources/products.json.
