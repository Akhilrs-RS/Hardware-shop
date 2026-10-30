namespace HShop.Api.Models;

public class ProductVariant
{
    public int Id { get; set; }
    public string ProductId { get; set; } = string.Empty;
    public string VariantCode { get; set; } = string.Empty; // e.g. "6mm", "18mm", "19mm"
    public string Label { get; set; } = string.Empty;       // e.g. "6 mm", "3/4 inch (19 mm)"
    public decimal Price { get; set; }
    public decimal? OriginalPrice { get; set; }
    public string? WeightOrPack { get; set; }              // e.g. "12 kg", "500 pcs"

    public Product? Product { get; set; }
}
