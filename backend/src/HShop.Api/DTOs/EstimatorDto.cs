namespace HShop.Api.DTOs;

public class EstimatorRequestDto
{
    public string ProjectId { get; set; } = "kitchen"; // "kitchen", "wardrobe", "tv-unit"
    public double Dimension { get; set; } = 12; // running feet or width
}

public class EstimatorItemDto
{
    public string ProductId { get; set; } = string.Empty;
    public string VariantId { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public int Quantity { get; set; }
    public string Unit { get; set; } = string.Empty;
    public decimal UnitPrice { get; set; }
    public decimal TotalPrice => UnitPrice * Quantity;
    public string Reason { get; set; } = string.Empty;
}

public class EstimatorResultDto
{
    public string ProjectId { get; set; } = string.Empty;
    public string ProjectTitle { get; set; } = string.Empty;
    public double Dimension { get; set; }
    public string Unit { get; set; } = "ft";
    public decimal EstimatedTotal { get; set; }
    public List<EstimatorItemDto> Items { get; set; } = new();
}
