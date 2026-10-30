using HShop.Api.Data;
using HShop.Api.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HShop.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly HShopDbContext _context;

    public CategoriesController(HShopDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<CategoryDto>>> GetCategories()
    {
        var categories = await _context.Categories
            .Include(c => c.Products)
            .AsNoTracking()
            .ToListAsync();

        var dtos = categories.Select(c => new CategoryDto
        {
            Id = c.Id,
            Name = c.Name,
            Slug = c.Slug,
            Icon = c.Icon,
            Badge = c.Badge,
            Description = c.Description,
            Subcategories = c.Subcategories,
            Count = c.Products.Count
        }).ToList();

        // Include "All Products" synthetic category as convenience
        var totalCount = await _context.Products.CountAsync();
        dtos.Insert(0, new CategoryDto
        {
            Id = "all",
            Name = "All Products",
            Slug = "all",
            Count = totalCount,
            Description = "Explore full inventory of boards, screws, hardware, and adhesives."
        });

        return Ok(dtos);
    }
}
