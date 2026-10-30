using HShop.Api.Data;
using HShop.Api.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HShop.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly HShopDbContext _context;

    public ProductsController(HShopDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<ProductDto>>> GetProducts(
        [FromQuery] string? category,
        [FromQuery] string? search,
        [FromQuery] string? thickness,
        [FromQuery] string? screwSize,
        [FromQuery] bool? inStockOnly,
        [FromQuery] string? sortBy = "featured")
    {
        var query = _context.Products
            .Include(p => p.Variants)
            .AsNoTracking()
            .AsQueryable();

        // 1. Filter by category
        if (!string.IsNullOrWhiteSpace(category) && category.ToLowerInvariant() != "all")
        {
            query = query.Where(p => p.CategoryId == category);
        }

        // 2. Filter by inStock
        if (inStockOnly.HasValue && inStockOnly.Value)
        {
            query = query.Where(p => p.InStock);
        }

        // 3. Search query
        if (!string.IsNullOrWhiteSpace(search))
        {
            var q = search.Trim().ToLower();
            query = query.Where(p =>
                p.Name.ToLower().Contains(q) ||
                p.CategoryId.ToLower().Contains(q) ||
                p.Brand.ToLower().Contains(q) ||
                p.Description.ToLower().Contains(q) ||
                p.Variants.Any(v => v.Label.ToLower().Contains(q))
            );
        }

        // 4. Thickness filter
        if (!string.IsNullOrWhiteSpace(thickness))
        {
            var th = thickness.Trim().ToLower();
            query = query.Where(p => p.Variants.Any(v => v.Label.ToLower().Contains(th)));
        }

        // 5. Screw size filter
        if (!string.IsNullOrWhiteSpace(screwSize))
        {
            var sz = screwSize.Trim().ToLower();
            query = query.Where(p => p.Variants.Any(v => v.Label.ToLower().Contains(sz)));
        }

        var list = await query.ToListAsync();

        // 6. Map to DTOs
        var dtos = list.Select(p => new ProductDto
        {
            Id = p.Id,
            Name = p.Name,
            Category = p.CategoryId,
            Brand = p.Brand,
            Rating = p.Rating,
            ReviewsCount = p.ReviewsCount,
            Badge = p.Badge,
            InStock = p.InStock,
            Description = p.Description,
            DefaultUnit = p.DefaultUnit,
            SheetSize = p.SheetSize,
            Image = p.ImageUrl,
            Features = p.Features,
            Variants = p.Variants.Select(v => new ProductVariantDto
            {
                Id = v.VariantCode,
                Label = v.Label,
                Price = v.Price,
                OriginalPrice = v.OriginalPrice,
                WeightOrPack = v.WeightOrPack
            }).ToList()
        }).ToList();

        // 7. Sort
        dtos = sortBy?.ToLowerInvariant() switch
        {
            "rating" => dtos.OrderByDescending(p => p.Rating).ToList(),
            "price-asc" => dtos.OrderBy(p => p.Variants.FirstOrDefault()?.Price ?? 0).ToList(),
            "price-desc" => dtos.OrderByDescending(p => p.Variants.FirstOrDefault()?.Price ?? 0).ToList(),
            "name" => dtos.OrderBy(p => p.Name).ToList(),
            _ => dtos // default featured
        };

        return Ok(dtos);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ProductDto>> GetProductById(string id)
    {
        var product = await _context.Products
            .Include(p => p.Variants)
            .AsNoTracking()
            .FirstOrDefaultAsync(p => p.Id == id);

        if (product == null)
        {
            return NotFound(new { message = $"Product with id '{id}' not found." });
        }

        var dto = new ProductDto
        {
            Id = product.Id,
            Name = product.Name,
            Category = product.CategoryId,
            Brand = product.Brand,
            Rating = product.Rating,
            ReviewsCount = product.ReviewsCount,
            Badge = product.Badge,
            InStock = product.InStock,
            Description = product.Description,
            DefaultUnit = product.DefaultUnit,
            SheetSize = product.SheetSize,
            Image = product.ImageUrl,
            Features = product.Features,
            Variants = product.Variants.Select(v => new ProductVariantDto
            {
                Id = v.VariantCode,
                Label = v.Label,
                Price = v.Price,
                OriginalPrice = v.OriginalPrice,
                WeightOrPack = v.WeightOrPack
            }).ToList()
        };

        return Ok(dto);
    }
}
