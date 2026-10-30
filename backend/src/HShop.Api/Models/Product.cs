namespace HShop.Api.Models;

public class Product
{
    public string Id { get; set; } = string.Empty; // e.g. "ply-01"
    public string Name { get; set; } = string.Empty;
    public string CategoryId { get; set; } = string.Empty;
    public string Brand { get; set; } = string.Empty;
    public double Rating { get; set; } = 4.8;
    public int ReviewsCount { get; set; } = 0;
    public string? Badge { get; set; }
    public bool InStock { get; set; } = true;
    public string Description { get; set; } = string.Empty;
    public string DefaultUnit { get; set; } = "sheet";
    public string? SheetSize { get; set; }
    public string ImageUrl { get; set; } = string.Empty;
    public List<string> Features { get; set; } = new();

    public Category? Category { get; set; }
    public ICollection<ProductVariant> Variants { get; set; } = new List<ProductVariant>();
}
