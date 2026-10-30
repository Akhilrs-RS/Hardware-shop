namespace HShop.Api.DTOs;

public class OrderItemCreateDto
{
    public string ProductId { get; set; } = string.Empty;
    public string ProductName { get; set; } = string.Empty;
    public string VariantId { get; set; } = string.Empty;
    public string VariantLabel { get; set; } = string.Empty;
    public decimal UnitPrice { get; set; }
    public int Quantity { get; set; }
}

public class OrderCreateDto
{
    public string FullName { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string SiteAddress { get; set; } = string.Empty;
    public string Pincode { get; set; } = string.Empty;
    public string? Gstin { get; set; }
    public string PaymentMethod { get; set; } = "cod";
    public string OrderType { get; set; } = "Order"; // "Order" | "WhatsAppQuote"
    public List<OrderItemCreateDto> Items { get; set; } = new();
}

public class OrderResponseDto
{
    public string OrderId { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string SiteAddress { get; set; } = string.Empty;
    public decimal Subtotal { get; set; }
    public decimal GstTax { get; set; }
    public decimal ShippingCharge { get; set; }
    public decimal GrandTotal { get; set; }
    public DateTime CreatedAt { get; set; }
    public int TotalItems { get; set; }
}
