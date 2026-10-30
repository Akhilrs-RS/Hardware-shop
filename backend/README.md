# H-Shop Backend (.NET 8 Web API + MySQL 8.0)

A containerized ASP.NET Core 8 Web API backend connecting to a MySQL 8.0 database, serving the **H-Shop** hardware and interior woodwork e-commerce platform.

---

## 1. Quick Start with Docker (Recommended)

Make sure Docker Desktop is running on your machine, then run:

```bash
cd backend
docker compose up -d --build
```

### Services Started:
- **.NET 8 Web API**: [http://localhost:5000](http://localhost:5000)
- **Swagger / OpenAPI Documentation**: [http://localhost:5000/swagger](http://localhost:5000/swagger)
- **Health Check Endpoint**: [http://localhost:5000/health](http://localhost:5000/health)
- **MySQL Database Server**: Port `3306`

To view container logs:
```bash
docker compose logs -f api
```

To stop all containers:
```bash
docker compose down
```

To stop containers and reset the database volume:
```bash
docker compose down -v
```

---

## 2. Local Development (Without Docker API container)

If you have a local MySQL server (or run only the database in Docker):

```bash
# 1. Start only MySQL in Docker
cd backend
docker compose up -d db

# 2. Run the .NET API locally
cd src/HShop.Api
dotnet run
```

---

## 3. API Endpoints Catalog

### Categories
- `GET /api/categories` - Fetch all material categories (Plywood, MDF, Screws, Hardware, Adhesives).

### Products
- `GET /api/products` - List products with optional query filters:
  - `?category=plywood`
  - `?thickness=18mm`
  - `?screwSize=38mm`
  - `?search=marine`
  - `?inStockOnly=true`
  - `?sortBy=rating` | `price-asc` | `price-desc` | `name`
- `GET /api/products/{id}` - Fetch single product specifications and all variants (e.g. `/api/products/ply-01`).

### Estimator (Interior Work Material Calculator)
- `GET /api/estimator/projects` - List available interior projects (`kitchen`, `wardrobe`, `tv-unit`).
- `POST /api/estimator/calculate` - Calculate required sheet counts, matching screws, hinges, and adhesives:
  ```json
  {
    "projectId": "kitchen",
    "dimension": 12
  }
  ```

### Orders & Quotes
- `POST /api/orders` - Submit job-site checkout order or WhatsApp BOM quotation.
- `GET /api/orders/{id}` - Retrieve order by reference ID (e.g. `/api/orders/HSHOP-123456`).
- `GET /api/orders` - List recent orders.
