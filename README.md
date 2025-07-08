
---

# Price Listing App – Full Stack (Spring Boot + React)

This is a **full-stack product listing application** built for a technical assignment.
It consists of:

* A **Spring Boot** backend that calculates product prices based on live gold prices
* A **React + Vite** frontend that displays the products with color swatches, carousels, and filters

---

## Backend – Spring Boot API

### Features

* Loads products from `products.json`

* Fetches **live gold price** from [CoinGecko](https://www.coingecko.com/)

* Calculates product price as:

  ```
  (popularityScore + 1) × weight × goldPrice
  ```

* Exposes `/products` endpoint with optional filters

* Adds a derived popularity rating (out of 5, 1 decimal)

---

### Stack

* Java 17
* Spring Boot 3
* Jackson (JSON parsing)
* RestTemplate (external HTTP calls)

---

### API – `/products`

**Method:** `GET`
**URL:** `/products`

#### Optional Query Parameters:

| Name            | Description                     |
| --------------- | ------------------------------- |
| `minPrice`      | Minimum price                   |
| `maxPrice`      | Maximum price                   |
| `minPopularity` | Minimum popularity (0.0 to 1.0) |
| `maxPopularity` | Maximum popularity (0.0 to 1.0) |

**Example:**

```
/products?minPrice=100&maxPopularity=0.6
```

---

### Running Backend Locally

```bash
./mvnw spring-boot:run
```

or run via your IDE using the main class.
Backend will be live at: `http://localhost:8080/products`

 Product data is stored in:
`src/main/resources/products.json`

 If gold price API fails, a fallback value of `$70.0/gram` is used.

 CORS is enabled for frontend integration.

---

##  Frontend – React (Vite + TypeScript)

###  Features

* Fetches product data from the backend API
* Renders **product cards** with:

  * Name, price, and popularity
  * **Color swatches** (Yellow, White, Rose Gold)
  * Image updates on swatch click
  * **Star-based rating**
  * Responsive **carousel** with swipe + arrows

---

###  Stack

* React 19
* TypeScript
* Vite
* Tailwind CSS
* Swiper.js (carousel)

---

### Running Frontend Locally

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at:
`http://localhost:5173/`

---

## Deployment

* Backend is deployed on **Railway**
* Frontend is deployed on **Vercel**

You can access the live project here:

* **Frontend**: [https://price-listing-app-n69e-3zy0mwdyw-ids-projects-7399d589.vercel.app](https://price-listing-app-n69e-3zy0mwdyw-ids-projects-7399d589.vercel.app)
* **Backend**: [https://price-listing-app-production.up.railway.app/products](https://price-listing-app-production.up.railway.app/products)

> The frontend fetches data directly from the hosted backend.

---

## Project Structure

```
price-listing-app/
│
├── backend/       → Spring Boot service
│   └── products.json
│
└── frontend/      → React + Vite app
    └── src/components/
```

---

