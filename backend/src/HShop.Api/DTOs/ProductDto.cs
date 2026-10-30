namespace HShop.Api.DTOs;

public class ProductVariantDto
{
    public string Id { get; set; } = string.Empty;
    public string Label { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public decimal? OriginalPrice { get; set; }
    public string? WeightOrPack { get; set; }
}

public class ProductDto
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string Brand { get; set; } = string.Empty;
    public double Rating { get; set; }
    public int ReviewsCount { get; set; }
    public string? Badge { get; set; }
    public bool InStock { get; set; }
    public string Description { get; set; } = string.Empty;
    public string DefaultUnit { get; set; } = string.Empty;
    public string? SheetSize { get; set; }
    public string Image { get; set; } = string.Empty;
    public List<string> Features { get; set; } = new();
    public List<ProductVariantDto> Variants { get; set; } = new();
}

public class CategoryDto
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public int Count { get; set; }
    public string? Icon { get; set; }
    public string? Badge { get; set; }
    public string? Description { get; set; }
    public List<string> Subcategories { get; set; } = new();
}
