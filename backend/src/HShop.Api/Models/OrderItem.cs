namespace HShop.Api.Models;

public class OrderItem
{
    public int Id { get; set; }
    public string OrderId { get; set; } = string.Empty;
    public string ProductId { get; set; } = string.Empty;
    public string ProductName { get; set; } = string.Empty;
    public string VariantCode { get; set; } = string.Empty;
    public string VariantLabel { get; set; } = string.Empty;
    public decimal UnitPrice { get; set; }
    public int Quantity { get; set; }
    public decimal TotalPrice { get; set; }

    public Order? Order { get; set; }
}
