using HShop.Api.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace HShop.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EstimatorController : ControllerBase
{
    [HttpGet("projects")]
    public IActionResult GetProjects()
    {
        var projects = new[]
        {
            new
            {
                Id = "kitchen",
                Title = "Modular Kitchen (Carcass & Shutters)",
                Tagline = "Waterproof BWP Marine Ply / HDHMR, soft-close hinges, and stainless screws.",
                DefaultValue = 12,
                Unit = "ft",
                Min = 6,
                Max = 30
            },
            new
            {
                Id = "wardrobe",
                Title = "Bedroom Wardrobe with Loft",
                Tagline = "Sturdy 18mm Commercial MR Plywood, 6mm backing, hinges, and full screw pack.",
                DefaultValue = 8,
                Unit = "ft",
                Min = 4,
                Max = 20
            },
            new
            {
                Id = "tv-unit",
                Title = "Modern TV Console & Fluted Panelling",
                Tagline = "HDHMR routing boards, wall anchors, profile handles, and fasteners.",
                DefaultValue = 10,
                Unit = "ft",
                Min = 6,
                Max = 18
            }
        };

        return Ok(projects);
    }

    [HttpPost("calculate")]
    public ActionResult<EstimatorResultDto> Calculate([FromBody] EstimatorRequestDto request)
    {
        double dimension = request.Dimension > 0 ? request.Dimension : 12;
        var items = new List<EstimatorItemDto>();
        string title;

        switch (request.ProjectId?.ToLowerInvariant())
        {
            case "wardrobe":
                title = "Bedroom Wardrobe with Loft";
                int wCarcass = (int)Math.Ceiling(dimension * 0.9);
                int wBacking = (int)Math.Ceiling(dimension * 0.35);
                int wShutter = (int)Math.Ceiling(dimension * 0.45);
                int wHinges = (int)Math.Ceiling(dimension * 1.8);
                int wDrawers = Math.Max(2, (int)Math.Ceiling(dimension / 3.0));
                int wScrewBox = (int)Math.Ceiling(dimension / 8.0);

                items.Add(new() { ProductId = "ply-02", VariantId = "18mm", Name = "Commercial MR Grade Plywood 18mm (Carcass & Shelves)", Category = "Boards", Quantity = wCarcass, Unit = "Sheets", UnitPrice = 2450, Reason = "High screw retention and sturdy partition walls for clothing storage." });
                items.Add(new() { ProductId = "ply-02", VariantId = "6mm", Name = "Commercial MR Grade Plywood 6mm (Backing)", Category = "Boards", Quantity = wBacking, Unit = "Sheets", UnitPrice = 1050, Reason = "Rigid rear wall dust protection." });
                items.Add(new() { ProductId = "mdf-03", VariantId = "18mm", Name = "Pre-Laminated Woodgrain MDF 18mm (Shutters & Loft Doors)", Category = "Boards", Quantity = wShutter, Unit = "Sheets", UnitPrice = 2450, Reason = "Ready-to-use luxury woodgrain finish with no laminate pasting delay." });
                items.Add(new() { ProductId = "screw-01", VariantId = "38mm", Name = "1.5\" Black Drywall Screws (Box of 500 pcs)", Category = "Screws & Fasteners", Quantity = wScrewBox, Unit = "Boxes", UnitPrice = 380, Reason = "Deep-bite carcass framing and shelf cleat fasteners." });
                items.Add(new() { ProductId = "screw-02", VariantId = "16mm", Name = "5/8\" Zinc Screws for Hinges & Hardware (500 pcs)", Category = "Screws & Fasteners", Quantity = 1, Unit = "Box", UnitPrice = 230, Reason = "Exact length to anchor hinges without piercing 18mm board." });
                items.Add(new() { ProductId = "hw-01", VariantId = "0crank", Name = "Soft-Close Concealed Auto Hinges (0 Crank)", Category = "Hardware", Quantity = wHinges, Unit = "Pairs", UnitPrice = 240, Reason = "Provides 3 hinges per full 7ft shutter door for anti-sag." });
                items.Add(new() { ProductId = "hw-02", VariantId = "16in", Name = "16\" Telescopic Soft-Close Drawer Slides", Category = "Hardware", Quantity = wDrawers, Unit = "Pairs", UnitPrice = 580, Reason = "Smooth internal drawer operation." });
                items.Add(new() { ProductId = "hw-04", VariantId = "22mm", Name = "Multi-Purpose Cupboard Computer Lock", Category = "Hardware", Quantity = 2, Unit = "Sets", UnitPrice = 160, Reason = "Lockable jewelry / private locker compartments." });
                items.Add(new() { ProductId = "adh-01", VariantId = "5kg", Name = "Fevicol Marine Waterproof Adhesive (5 kg Bucket)", Category = "Adhesives", Quantity = 1, Unit = "Bucket", UnitPrice = 1350, Reason = "Carcass dowels and edge joint strength." });
                break;

            case "tv-unit":
                title = "Modern TV Console & Fluted Panelling";
                int tvHdhmr = (int)Math.Ceiling(dimension / 3.5);
                int tvPly = Math.Max(1, (int)Math.Ceiling(dimension / 6.0));
                int tvDrawers = (int)Math.Ceiling(dimension / 4.0);

                items.Add(new() { ProductId = "mdf-01", VariantId = "18mm", Name = "HDHMR Green Board 18mm (Fluted Panelling & Floating Console)", Category = "Boards", Quantity = tvHdhmr, Unit = "Sheets", UnitPrice = 2350, Reason = "High density for CNC grooving, louvers, and sleek paint finish." });
                items.Add(new() { ProductId = "ply-02", VariantId = "12mm", Name = "Commercial MR Plywood 12mm (Wall Base Framework)", Category = "Boards", Quantity = tvPly, Unit = "Sheets", UnitPrice = 1750, Reason = "Solid wall backing grid for hiding wiring and mounting TV." });
                items.Add(new() { ProductId = "screw-05", VariantId = "8mm", Name = "8mm Nylon Wall Plugs & Anchor Screws (100 sets)", Category = "Screws & Fasteners", Quantity = 1, Unit = "Pack", UnitPrice = 260, Reason = "Firmly mounting floating TV console and heavy panel frames." });
                items.Add(new() { ProductId = "screw-01", VariantId = "32mm", Name = "1.25\" Drywall Fasteners (Box of 500 pcs)", Category = "Screws & Fasteners", Quantity = 1, Unit = "Box", UnitPrice = 320, Reason = "Fastening panels into battens without protruding." });
                items.Add(new() { ProductId = "hw-02", VariantId = "14in", Name = "14\" Telescopic Drawer Slides", Category = "Hardware", Quantity = tvDrawers, Unit = "Pairs", UnitPrice = 510, Reason = "Console media storage drawers." });
                items.Add(new() { ProductId = "hw-03", VariantId = "8in", Name = "Matte Black Aluminum J-Handle (200mm)", Category = "Hardware", Quantity = tvDrawers, Unit = "Pieces", UnitPrice = 190, Reason = "Sleek luxury hardware accent." });
                items.Add(new() { ProductId = "adh-02", VariantId = "1L", Name = "HeatX Quick Contact Adhesive (1 Liter Can)", Category = "Adhesives", Quantity = 1, Unit = "Can", UnitPrice = 480, Reason = "Instant bonding of decorative charcoal louvers & acrylic sheets." });
                break;

            case "kitchen":
            default:
                title = "Modular Kitchen (Carcass & Shutters)";
                int kCarcass = (int)Math.Ceiling(dimension / 2.2);
                int kBacking = (int)Math.Ceiling(dimension / 4.0);
                int kShutter = (int)Math.Ceiling(dimension / 3.0);
                int kHinges = (int)Math.Ceiling(dimension * 1.5);
                int kDrawers = (int)Math.Ceiling(dimension / 3.0);
                int kScrews15 = (int)Math.Ceiling(dimension / 12.0);
                int kHingeScrews = (int)Math.Ceiling(dimension / 10.0);
                int kAdhesives = (int)Math.Ceiling(dimension / 10.0);
                int kEdgeBands = (int)Math.Ceiling(dimension / 8.0);

                items.Add(new() { ProductId = "ply-01", VariantId = "18mm", Name = "BWP Marine Grade Plywood 18mm (Carcass & Base)", Category = "Boards", Quantity = kCarcass, Unit = "Sheets", UnitPrice = 3450, Reason = "100% Waterproof base for sink, cooking, and storage carcass." });
                items.Add(new() { ProductId = "mdf-01", VariantId = "18mm", Name = "HDHMR Green Board 18mm (Shutters & Overhead)", Category = "Boards", Quantity = kShutter, Unit = "Sheets", UnitPrice = 2350, Reason = "Smooth profile routing and high moisture resistance for shutters." });
                items.Add(new() { ProductId = "ply-01", VariantId = "6mm", Name = "BWP Marine Plywood 6mm (Backing Panels)", Category = "Boards", Quantity = kBacking, Unit = "Sheets", UnitPrice = 1450, Reason = "Durable moisture barrier for rear cabinet walls." });
                items.Add(new() { ProductId = "screw-02", VariantId = "38mm", Name = "1.5\" Zinc-Plated Wood Screws (Box of 500 pcs)", Category = "Screws & Fasteners", Quantity = kScrews15, Unit = "Boxes", UnitPrice = 410, Reason = "Firm carcass corner joinery and board fixing." });
                items.Add(new() { ProductId = "screw-03", VariantId = "19mm", Name = "3/4\" SS 304 Rust-Proof Hinge Screws (Box of 200 pcs)", Category = "Screws & Fasteners", Quantity = kHingeScrews, Unit = "Boxes", UnitPrice = 340, Reason = "Essential non-rusting screws for kitchen hinge mounting." });
                items.Add(new() { ProductId = "screw-05", VariantId = "8mm", Name = "Heavy Duty 8mm Nylon Wall Plugs & Screws (100 sets)", Category = "Screws & Fasteners", Quantity = 1, Unit = "Pack", UnitPrice = 260, Reason = "Securely hanging overhead wall cabinets to solid brick/concrete." });
                items.Add(new() { ProductId = "hw-01", VariantId = "0crank", Name = "Soft-Close Concealed Auto Hinges (0 Crank)", Category = "Hardware", Quantity = kHinges, Unit = "Pairs", UnitPrice = 240, Reason = "Silent hydraulic closure on all shutter doors." });
                items.Add(new() { ProductId = "hw-02", VariantId = "18in", Name = "18\" Telescopic Soft-Close Drawer Slides", Category = "Hardware", Quantity = kDrawers, Unit = "Pairs", UnitPrice = 650, Reason = "Heavy-duty smooth full-extension cutlery and thali baskets." });
                items.Add(new() { ProductId = "adh-01", VariantId = "5kg", Name = "Fevicol Marine Waterproof Adhesive (5 kg Bucket)", Category = "Adhesives", Quantity = kAdhesives, Unit = "Bucket", UnitPrice = 1350, Reason = "Waterproof joint gluing." });
                items.Add(new() { ProductId = "adh-03", VariantId = "22x2.0", Name = "PVC Edge Banding Tape 22x2mm (50m Roll)", Category = "Adhesives", Quantity = kEdgeBands, Unit = "Rolls", UnitPrice = 620, Reason = "Water sealing and edge protection for all exposed plywood edges." });
                break;
        }

        var result = new EstimatorResultDto
        {
            ProjectId = request.ProjectId ?? "kitchen",
            ProjectTitle = title,
            Dimension = dimension,
            Unit = "ft",
            EstimatedTotal = items.Sum(i => i.TotalPrice),
            Items = items
        };

        return Ok(result);
    }
}
