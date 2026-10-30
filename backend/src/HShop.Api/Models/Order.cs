namespace HShop.Api.Models;

public class Order
{
    public string Id { get; set; } = string.Empty; // e.g. "HSHOP-123456"
    public string FullName { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string SiteAddress { get; set; } = string.Empty;
    public string Pincode { get; set; } = string.Empty;
    public string? Gstin { get; set; }
    public string PaymentMethod { get; set; } = "cod"; // "cod", "upi", "neft"
    public decimal Subtotal { get; set; }
    public decimal GstTax { get; set; }
    public decimal ShippingCharge { get; set; }
    public decimal GrandTotal { get; set; }
    public string Status { get; set; } = "Pending"; // "Pending", "Confirmed", "Dispatched", "Delivered"
    public string OrderType { get; set; } = "Order"; // "Order" or "WhatsAppQuote"
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<OrderItem> Items { get; set; } = new List<OrderItem>();
}
