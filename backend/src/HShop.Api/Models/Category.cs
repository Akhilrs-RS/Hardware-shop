namespace HShop.Api.Models;

public class Category
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? Icon { get; set; }
    public string? Badge { get; set; }
    public string? Description { get; set; }
    public List<string> Subcategories { get; set; } = new();

    public ICollection<Product> Products { get; set; } = new List<Product>();
}
