using HShop.Api.Data;
using HShop.Api.DTOs;
using HShop.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HShop.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private readonly HShopDbContext _context;

    public OrdersController(HShopDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<OrderResponseDto>> CreateOrder([FromBody] OrderCreateDto request)
    {
        if (request == null || request.Items == null || request.Items.Count == 0)
        {
            return BadRequest(new { message = "Order must contain at least one item." });
        }

        if (string.IsNullOrWhiteSpace(request.FullName) || string.IsNullOrWhiteSpace(request.Phone))
        {
            return BadRequest(new { message = "Full name and phone number are required." });
        }

        var orderId = "HSHOP-" + Random.Shared.Next(100000, 999999);

        decimal subtotal = request.Items.Sum(i => i.UnitPrice * i.Quantity);
        decimal gstTax = Math.Round(subtotal * 0.18m, 2);
        bool isFreeShipping = subtotal >= 10000m;
        decimal shippingCharge = subtotal == 0 ? 0 : isFreeShipping ? 0 : 500m;
        decimal grandTotal = subtotal + gstTax + shippingCharge;

        var order = new Order
        {
            Id = orderId,
            FullName = request.FullName.Trim(),
            Phone = request.Phone.Trim(),
            SiteAddress = request.SiteAddress.Trim(),
            Pincode = request.Pincode.Trim(),
            Gstin = request.Gstin?.Trim(),
            PaymentMethod = request.PaymentMethod,
            OrderType = request.OrderType,
            Subtotal = subtotal,
            GstTax = gstTax,
            ShippingCharge = shippingCharge,
            GrandTotal = grandTotal,
            Status = "Confirmed",
            CreatedAt = DateTime.UtcNow,
            Items = request.Items.Select(i => new OrderItem
            {
                OrderId = orderId,
                ProductId = i.ProductId,
                ProductName = i.ProductName,
                VariantCode = i.VariantId,
                VariantLabel = i.VariantLabel,
                UnitPrice = i.UnitPrice,
                Quantity = i.Quantity,
                TotalPrice = i.UnitPrice * i.Quantity
            }).ToList()
        };

        await _context.Orders.AddAsync(order);
        await _context.SaveChangesAsync();

        var response = new OrderResponseDto
        {
            OrderId = order.Id,
            Status = order.Status,
            FullName = order.FullName,
            Phone = order.Phone,
            SiteAddress = order.SiteAddress,
            Subtotal = order.Subtotal,
            GstTax = order.GstTax,
            ShippingCharge = order.ShippingCharge,
            GrandTotal = order.GrandTotal,
            CreatedAt = order.CreatedAt,
            TotalItems = order.Items.Sum(i => i.Quantity)
        };

        return CreatedAtAction(nameof(GetOrderById), new { id = order.Id }, response);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Order>> GetOrderById(string id)
    {
        var order = await _context.Orders
            .Include(o => o.Items)
            .AsNoTracking()
            .FirstOrDefaultAsync(o => o.Id == id);

        if (order == null)
        {
            return NotFound(new { message = $"Order with id '{id}' not found." });
        }

        return Ok(order);
    }

    [HttpGet]
    public async Task<ActionResult<List<OrderResponseDto>>> GetRecentOrders()
    {
        var orders = await _context.Orders
            .Include(o => o.Items)
            .OrderByDescending(o => o.CreatedAt)
            .Take(20)
            .AsNoTracking()
            .ToListAsync();

        var dtos = orders.Select(o => new OrderResponseDto
        {
            OrderId = o.Id,
            Status = o.Status,
            FullName = o.FullName,
            Phone = o.Phone,
            SiteAddress = o.SiteAddress,
            Subtotal = o.Subtotal,
            GstTax = o.GstTax,
            ShippingCharge = o.ShippingCharge,
            GrandTotal = o.GrandTotal,
            CreatedAt = o.CreatedAt,
            TotalItems = o.Items.Sum(i => i.Quantity)
        }).ToList();

        return Ok(dtos);
    }
}
