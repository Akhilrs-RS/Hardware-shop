using HShop.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace HShop.Api.Data;

public static class DbInitializer
{
    public static async Task InitializeAsync(HShopDbContext context)
    {
        // Automatically ensure schema is created
        await context.Database.EnsureCreatedAsync();

        if (await context.Categories.AnyAsync())
        {
            return; // DB already seeded
        }

        // 1. Categories
        var categories = new List<Category>
        {
            new()
            {
                Id = "plywood",
                Name = "Plywood & Boards",
                Slug = "plywood",
                Icon = "Layers",
                Badge = "Popular",
                Description = "BWP Marine 710, BWR Grade, Commercial MR & Calibrated Birch Ply.",
                Subcategories = new() { "Marine Grade (IS 710)", "Commercial MR", "Calibrated Ply", "Birch Ply" }
            },
            new()
            {
                Id = "mdf-hdf",
                Name = "MDF & HDF Panels",
                Slug = "mdf-hdf",
                Icon = "Square",
                Badge = "Trending",
                Description = "HDHMR green boards, pre-laminated MDF, and high-density fibreboards.",
                Subcategories = new() { "HDHMR Water Resistant", "Plain Interior MDF", "Pre-Laminated MDF", "Exterior Grade HDF" }
            },
            new()
            {
                Id = "screws-fasteners",
                Name = "Screws & Fasteners",
                Slug = "screws-fasteners",
                Icon = "Hammer",
                Badge = "Bulk Pack",
                Description = "Drywall gypsum screws, wood screws (SS/Zinc), self-drilling & anchors.",
                Subcategories = new() { "Wood Screws", "Drywall Screws", "Self-Drilling Teks", "Wall Anchors & Plugs" }
            },
            new()
            {
                Id = "hardware-fittings",
                Name = "Hardware & Fittings",
                Slug = "hardware-fittings",
                Icon = "Wrench",
                Badge = "Soft-Close",
                Description = "Hydraulic concealed hinges, telescopic drawer slides, handles & locks.",
                Subcategories = new() { "Auto Concealed Hinges", "Telescopic Drawer Slides", "Profile Handles", "Locks & Latches" }
            },
            new()
            {
                Id = "adhesives-finishes",
                Name = "Adhesives & Edge Bands",
                Slug = "adhesives-finishes",
                Icon = "Paintbrush",
                Description = "Waterproof wood glue, HeatX contact adhesive, silicone, and PVC edge bands.",
                Subcategories = new() { "Wood Adhesives", "Contact Adhesives", "PVC Edge Bands", "Silicone Sealants" }
            }
        };

        await context.Categories.AddRangeAsync(categories);
        await context.SaveChangesAsync();

        // 2. Products and Variants
        var products = new List<Product>
        {
            // Plywood
            new()
            {
                Id = "ply-01",
                Name = "BWP Marine Grade Plywood (IS:710)",
                CategoryId = "plywood",
                Brand = "Century / Greenply Equivalent",
                Rating = 4.9,
                ReviewsCount = 128,
                Badge = "Marine Grade",
                InStock = true,
                Description = "100% boiling water proof calibrated plywood made with selected hardwood core and bonded with phenol formaldehyde resin. Ideal for modular kitchens, bathrooms, and exterior furniture.",
                DefaultUnit = "sheet",
                SheetSize = "8 x 4 ft (32 sq.ft)",
                ImageUrl = "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80",
                Features = new() { "72 Hours Boiling Water Proof", "Borer & Termite Proof", "Calibrated Uniform Thickness", "15-Year Warranty" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "6mm", Label = "6 mm", Price = 1450, OriginalPrice = 1650, WeightOrPack = "12 kg" },
                    new() { VariantCode = "12mm", Label = "12 mm", Price = 2350, OriginalPrice = 2600, WeightOrPack = "24 kg" },
                    new() { VariantCode = "16mm", Label = "16 mm", Price = 2950, OriginalPrice = 3200, WeightOrPack = "31 kg" },
                    new() { VariantCode = "18mm", Label = "18 mm", Price = 3450, OriginalPrice = 3850, WeightOrPack = "36 kg" },
                    new() { VariantCode = "25mm", Label = "25 mm", Price = 4750, OriginalPrice = 5300, WeightOrPack = "50 kg" }
                }
            },
            new()
            {
                Id = "ply-02",
                Name = "Commercial MR Grade Plywood (IS:303)",
                CategoryId = "plywood",
                Brand = "TimberCraft Standard",
                Rating = 4.7,
                ReviewsCount = 89,
                Badge = "Best Seller",
                InStock = true,
                Description = "Moisture resistant commercial grade plywood suitable for bedroom wardrobes, living room TV units, wall paneling, and dry interior cabinetry.",
                DefaultUnit = "sheet",
                SheetSize = "8 x 4 ft (32 sq.ft)",
                ImageUrl = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Moisture Resistant Melamine Resin", "Smooth Veneer Face", "High Screw Holding Capacity", "10-Year Warranty" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "6mm", Label = "6 mm", Price = 1050, OriginalPrice = 1250, WeightOrPack = "11 kg" },
                    new() { VariantCode = "12mm", Label = "12 mm", Price = 1750, OriginalPrice = 1980, WeightOrPack = "22 kg" },
                    new() { VariantCode = "18mm", Label = "18 mm", Price = 2450, OriginalPrice = 2800, WeightOrPack = "33 kg" }
                }
            },
            new()
            {
                Id = "ply-03",
                Name = "Russian Birch Calibrated Plywood",
                CategoryId = "plywood",
                Brand = "EuroBirch Premium",
                Rating = 4.95,
                ReviewsCount = 54,
                Badge = "Premium CNC",
                InStock = true,
                Description = "Multi-ply cross-banded Birch plywood with void-free core and light aesthetic edges. Favored for CNC cutting, designer exposed furniture, and high-end cabinetry.",
                DefaultUnit = "sheet",
                SheetSize = "8 x 4 ft",
                ImageUrl = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Void-Free Uniform Ply Layers", "Exposed Edge Finish Ready", "Exceptional Structural Strength" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "12mm", Label = "12 mm", Price = 3400, OriginalPrice = 3800, WeightOrPack = "25 kg" },
                    new() { VariantCode = "18mm", Label = "18 mm", Price = 4600, OriginalPrice = 5100, WeightOrPack = "37 kg" }
                }
            },
            new()
            {
                Id = "ply-04",
                Name = "BWR Waterproof Shuttering Plywood",
                CategoryId = "plywood",
                Brand = "BuildStrong Film-Faced",
                Rating = 4.6,
                ReviewsCount = 42,
                Badge = "Heavy Duty",
                InStock = true,
                Description = "High-density phenolic film-faced BWR plywood engineered for concrete formwork, heavy partitions, and outdoor temporary structures.",
                DefaultUnit = "sheet",
                SheetSize = "8 x 4 ft",
                ImageUrl = "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Double-Sided Mirror Phenolic Film", "Mirror Finish Cast", "Reusable multiple times" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "12mm", Label = "12 mm", Price = 1950, OriginalPrice = 2200, WeightOrPack = "30 kg" },
                    new() { VariantCode = "18mm", Label = "18 mm", Price = 2750, OriginalPrice = 3100, WeightOrPack = "34 kg" }
                }
            },

            // MDF & HDF
            new()
            {
                Id = "mdf-01",
                Name = "HDHMR High Moisture Resistance Green Board",
                CategoryId = "mdf-hdf",
                Brand = "Action Tesa / Greenpanel Equivalent",
                Rating = 4.88,
                ReviewsCount = 164,
                Badge = "Top for Kitchens",
                InStock = true,
                Description = "High-density (850+ kg/m3) water-resistant engineered board dyed green for easy identification. Superior alternative to normal plywood for routing, PU painting, and kitchen carcasses.",
                DefaultUnit = "sheet",
                SheetSize = "8 x 4 ft (32 sq.ft)",
                ImageUrl = "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80",
                Features = new() { "High Density (>850 kg/m3)", "Zero Core Voids", "Seamless Edge Routing & Profiling", "Water Resistant Formula" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "5.5mm", Label = "5.5 mm", Price = 880, OriginalPrice = 1050, WeightOrPack = "13 kg" },
                    new() { VariantCode = "12mm", Label = "12 mm", Price = 1680, OriginalPrice = 1900, WeightOrPack = "28 kg" },
                    new() { VariantCode = "16.75mm", Label = "16.75 mm", Price = 2150, OriginalPrice = 2450, WeightOrPack = "38 kg" },
                    new() { VariantCode = "18mm", Label = "18 mm", Price = 2350, OriginalPrice = 2680, WeightOrPack = "42 kg" }
                }
            },
            new()
            {
                Id = "mdf-02",
                Name = "Plain Interior Grade MDF Board",
                CategoryId = "mdf-hdf",
                Brand = "EcoCore Plain",
                Rating = 4.65,
                ReviewsCount = 78,
                Badge = "Budget Friendly",
                InStock = true,
                Description = "Smooth, uniform density fibreboard with ultra-flat surfaces on both sides. Ideal for CNC decorative jaali cutting, interior partitions, photo frames, and dry room furnishings.",
                DefaultUnit = "sheet",
                SheetSize = "8 x 4 ft",
                ImageUrl = "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Ultra-Smooth Surface for Paint & Polish", "Uniform Homogeneous Fibre Matrix", "Easy to Cut and Router" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "8mm", Label = "8 mm", Price = 790, OriginalPrice = 920, WeightOrPack = "18 kg" },
                    new() { VariantCode = "12mm", Label = "12 mm", Price = 1150, OriginalPrice = 1350, WeightOrPack = "26 kg" },
                    new() { VariantCode = "18mm", Label = "18 mm", Price = 1650, OriginalPrice = 1900, WeightOrPack = "39 kg" }
                }
            },
            new()
            {
                Id = "mdf-03",
                Name = "Pre-Laminated Woodgrain MDF Board (Both Sides)",
                CategoryId = "mdf-hdf",
                Brand = "StyleLam PreLam",
                Rating = 4.75,
                ReviewsCount = 95,
                Badge = "Pre-Finished",
                InStock = true,
                Description = "Factory-pressed melamine decorative woodgrain paper on both faces of MDF board. Eliminates the time, labor, and cost of manual laminate pasting.",
                DefaultUnit = "sheet",
                SheetSize = "8 x 4 ft",
                ImageUrl = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Scratch & Stain Resistant Surface", "Zero Laminate Pasting Needed", "Matching PVC Edge Band Available" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "12mm", Label = "12 mm (Walnut/Oak)", Price = 1780, OriginalPrice = 2050, WeightOrPack = "27 kg" },
                    new() { VariantCode = "18mm", Label = "18 mm (Walnut/Oak)", Price = 2450, OriginalPrice = 2850, WeightOrPack = "40 kg" }
                }
            },
            new()
            {
                Id = "mdf-04",
                Name = "Exterior Grade HDF Hardboard",
                CategoryId = "mdf-hdf",
                Brand = "DuraHard Ultra",
                Rating = 4.8,
                ReviewsCount = 39,
                Badge = "High Impact",
                InStock = true,
                Description = "Ultra high density hardboard compressed under extreme pressure. Highly recommended for heavy drawer bottoms, door skins, and backing partitions.",
                DefaultUnit = "sheet",
                SheetSize = "8 x 4 ft",
                ImageUrl = "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Extreme Density (>950 kg/m3)", "Non-warping & stiff", "Excellent backing support" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "3.2mm", Label = "3.2 mm", Price = 460, OriginalPrice = 550, WeightOrPack = "9 kg" },
                    new() { VariantCode = "6mm", Label = "6 mm", Price = 790, OriginalPrice = 940, WeightOrPack = "16 kg" }
                }
            },

            // Screws & Fasteners
            new()
            {
                Id = "screw-01",
                Name = "Black Phosphate Drywall & Gypsum Screws",
                CategoryId = "screws-fasteners",
                Brand = "FastFix Pro",
                Rating = 4.9,
                ReviewsCount = 312,
                Badge = "Bulk Pack of 500",
                InStock = true,
                Description = "Bugle head, coarse-thread drywall screws coated with corrosion-resistant black phosphate. Penetrates wood, MDF, and drywall studs effortlessly without splitting.",
                DefaultUnit = "box of 500 pcs",
                ImageUrl = "https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Sharp Bugle Head Countersunk", "Coarse Deep Thread Grip", "Corrosion Resistant Coating", "Zero Pre-drilling in Softwood" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "19mm", Label = "3/4 inch (19 mm)", Price = 210, OriginalPrice = 260, WeightOrPack = "500 pcs" },
                    new() { VariantCode = "25mm", Label = "1 inch (25 mm)", Price = 260, OriginalPrice = 320, WeightOrPack = "500 pcs" },
                    new() { VariantCode = "32mm", Label = "1.25 inch (32 mm)", Price = 320, OriginalPrice = 390, WeightOrPack = "500 pcs" },
                    new() { VariantCode = "38mm", Label = "1.5 inch (38 mm)", Price = 380, OriginalPrice = 460, WeightOrPack = "500 pcs" },
                    new() { VariantCode = "50mm", Label = "2 inch (50 mm)", Price = 490, OriginalPrice = 590, WeightOrPack = "500 pcs" },
                    new() { VariantCode = "75mm", Label = "3 inch (75 mm)", Price = 680, OriginalPrice = 820, WeightOrPack = "500 pcs" }
                }
            },
            new()
            {
                Id = "screw-02",
                Name = "Zinc-Plated Wood Screws (Phillips Star Head)",
                CategoryId = "screws-fasteners",
                Brand = "StarGrip Hardware",
                Rating = 4.85,
                ReviewsCount = 220,
                Badge = "Essential for Carcass",
                InStock = true,
                Description = "Full-thread zinc coated wood screws with countersunk flat head. The gold standard for assembling plywood carcasses, wardrobe boxes, and joining MDF panels.",
                DefaultUnit = "box of 500 pcs",
                ImageUrl = "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
                Features = new() { "High Tensile Carbon Steel", "Bright Zinc Plated Against Rust", "Cross-Recessed Star Drive" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "16mm", Label = "5/8 inch (16 mm)", Price = 230, OriginalPrice = 280, WeightOrPack = "500 pcs" },
                    new() { VariantCode = "25mm", Label = "1 inch (25 mm)", Price = 290, OriginalPrice = 350, WeightOrPack = "500 pcs" },
                    new() { VariantCode = "38mm", Label = "1.5 inch (38 mm)", Price = 410, OriginalPrice = 490, WeightOrPack = "500 pcs" },
                    new() { VariantCode = "50mm", Label = "2 inch (50 mm)", Price = 540, OriginalPrice = 650, WeightOrPack = "500 pcs" }
                }
            },
            new()
            {
                Id = "screw-03",
                Name = "Stainless Steel 304 Wood & Hinge Screws",
                CategoryId = "screws-fasteners",
                Brand = "RustShield Marine SS",
                Rating = 4.92,
                ReviewsCount = 140,
                Badge = "100% Rust Proof",
                InStock = true,
                Description = "Pure SS 304 grade non-magnetic screws designed specifically for fixing kitchen cabinet hinges, bathroom vanity hardware, and exterior coastal installations.",
                DefaultUnit = "box of 200 pcs",
                ImageUrl = "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Genuine SS 304 Non-Magnetic", "Lifetime Rust Resistance", "Perfect for Damp & Coastal Areas" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "12mm", Label = "1/2 inch (Hinge special)", Price = 280, OriginalPrice = 340, WeightOrPack = "200 pcs" },
                    new() { VariantCode = "19mm", Label = "3/4 inch (Auto-Hinge)", Price = 340, OriginalPrice = 410, WeightOrPack = "200 pcs" },
                    new() { VariantCode = "25mm", Label = "1 inch (Standard)", Price = 420, OriginalPrice = 510, WeightOrPack = "200 pcs" },
                    new() { VariantCode = "38mm", Label = "1.5 inch (Heavy)", Price = 560, OriginalPrice = 670, WeightOrPack = "200 pcs" }
                }
            },
            new()
            {
                Id = "screw-04",
                Name = "Self-Drilling Hex Washer Head Teks Screws",
                CategoryId = "screws-fasteners",
                Brand = "DrillFast Industrial",
                Rating = 4.7,
                ReviewsCount = 88,
                Badge = "Metal Framing",
                InStock = true,
                Description = "Hardened point self-drilling screws capable of piercing 2mm–4mm cold-rolled steel channels, GI framework, and gypsum framing without pilot holes.",
                DefaultUnit = "box of 250 pcs",
                ImageUrl = "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Hardened Drill Flute Tip", "Integrated Hex Washer Head", "High Torsion Resistance" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "25mm", Label = "1 inch (25 mm)", Price = 310, OriginalPrice = 380, WeightOrPack = "250 pcs" },
                    new() { VariantCode = "38mm", Label = "1.5 inch (38 mm)", Price = 430, OriginalPrice = 520, WeightOrPack = "250 pcs" },
                    new() { VariantCode = "50mm", Label = "2 inch (50 mm)", Price = 560, OriginalPrice = 680, WeightOrPack = "250 pcs" }
                }
            },
            new()
            {
                Id = "screw-05",
                Name = "Heavy Duty Nylon Wall Plugs & Anchor Screws",
                CategoryId = "screws-fasteners",
                Brand = "GripMax Anchors",
                Rating = 4.8,
                ReviewsCount = 110,
                Badge = "Wall Mounting Kit",
                InStock = true,
                Description = "High-expansion virgin nylon wall rawl plugs paired with zinc countersunk screws for securely hanging heavy kitchen wall cabinets, TV brackets, and wardrobe backing.",
                DefaultUnit = "pack of 100 sets",
                ImageUrl = "https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Virgin High-Elastic Nylon", "Anti-Rotation Wing Fins", "Holds up to 45 kg per anchor in solid brick" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "6mm", Label = "6 mm x 40 mm (Pack of 100)", Price = 180, OriginalPrice = 220, WeightOrPack = "100 sets" },
                    new() { VariantCode = "8mm", Label = "8 mm x 50 mm (Pack of 100)", Price = 260, OriginalPrice = 320, WeightOrPack = "100 sets" },
                    new() { VariantCode = "10mm", Label = "10 mm x 60 mm (Pack of 50)", Price = 310, OriginalPrice = 380, WeightOrPack = "50 sets" }
                }
            },

            // Hardware & Fittings
            new()
            {
                Id = "hw-01",
                Name = "Soft-Close Hydraulic Auto Concealed Hinges",
                CategoryId = "hardware-fittings",
                Brand = "Blum / Hafele Equivalent Style",
                Rating = 4.95,
                ReviewsCount = 245,
                Badge = "50,000 Cycles Tested",
                InStock = true,
                Description = "Precision hydraulic clip-on concealed hinges featuring seamless soft-closing buffer damper. Eliminates cabinet door slamming in modular kitchens and wardrobes.",
                DefaultUnit = "pair (2 pcs)",
                ImageUrl = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Hydraulic Integrated Soft-Close Damper", "Clip-On 3D Easy Adjustment", "Tested for 50,000 Opening Cycles", "Includes Screws" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "0crank", Label = "0 Crank (Full Overlay / Direct)", Price = 240, OriginalPrice = 300, WeightOrPack = "1 Pair" },
                    new() { VariantCode = "8crank", Label = "8 Crank (Half Overlay / Twin Door)", Price = 250, OriginalPrice = 310, WeightOrPack = "1 Pair" },
                    new() { VariantCode = "16crank", Label = "16 Crank (Inset / Flush Door)", Price = 260, OriginalPrice = 320, WeightOrPack = "1 Pair" }
                }
            },
            new()
            {
                Id = "hw-02",
                Name = "Telescopic Ball-Bearing Soft-Close Drawer Slides",
                CategoryId = "hardware-fittings",
                Brand = "GlideMaster Heavy",
                Rating = 4.88,
                ReviewsCount = 198,
                Badge = "45 kg Load Capacity",
                InStock = true,
                Description = "Full extension triple-fold drawer runners with solid steel ball bearings and dual-spring soft-closing mechanism. Smooth, silent, and reliable movement.",
                DefaultUnit = "pair (left + right)",
                ImageUrl = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
                Features = new() { "45 kg Dynamic Weight Rating", "Silent Dual-Hydraulic Damper", "Full Extension Access", "Cold Rolled Steel Body" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "12in", Label = "12 inch (300 mm)", Price = 460, OriginalPrice = 560, WeightOrPack = "1 Pair" },
                    new() { VariantCode = "14in", Label = "14 inch (350 mm)", Price = 510, OriginalPrice = 620, WeightOrPack = "1 Pair" },
                    new() { VariantCode = "16in", Label = "16 inch (400 mm)", Price = 580, OriginalPrice = 700, WeightOrPack = "1 Pair" },
                    new() { VariantCode = "18in", Label = "18 inch (450 mm)", Price = 650, OriginalPrice = 780, WeightOrPack = "1 Pair" },
                    new() { VariantCode = "20in", Label = "20 inch (500 mm)", Price = 720, OriginalPrice = 860, WeightOrPack = "1 Pair" }
                }
            },
            new()
            {
                Id = "hw-03",
                Name = "Modern Matte Black Aluminum Profile J-Handle",
                CategoryId = "hardware-fittings",
                Brand = "EdgeLine Luxury",
                Rating = 4.8,
                ReviewsCount = 82,
                Badge = "Modern Aesthetic",
                InStock = true,
                Description = "Minimalist edge-mounted J-pull aluminum profile handle for seamless handleless look across kitchen cabinets, wardrobe shutters, and bathroom vanity drawers.",
                DefaultUnit = "piece",
                ImageUrl = "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Anodized Matte Black Finish", "Scratch Resistant", "Ergonomic Finger Grip" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "6in", Label = "150 mm (6 inch)", Price = 140, OriginalPrice = 180 },
                    new() { VariantCode = "8in", Label = "200 mm (8 inch)", Price = 190, OriginalPrice = 240 },
                    new() { VariantCode = "12in", Label = "300 mm (12 inch)", Price = 280, OriginalPrice = 350 },
                    new() { VariantCode = "full", Label = "1000 mm (Wardrobe Long Profile)", Price = 680, OriginalPrice = 850 }
                }
            },
            new()
            {
                Id = "hw-04",
                Name = "Multi-Purpose Drawer & Cupboard Computer Lock",
                CategoryId = "hardware-fittings",
                Brand = "SafeGuard Security",
                Rating = 4.7,
                ReviewsCount = 115,
                Badge = "2 Keys Included",
                InStock = true,
                Description = "Zinc alloy die-cast cylinder lock with computer dimple keys. Can be mounted on wooden drawer fronts or wardrobe doors.",
                DefaultUnit = "set",
                ImageUrl = "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
                Features = new() { "High Security Dimple Reversible Key", "Anti-pick Brass Core", "Includes Rose Ring & Screws" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "22mm", Label = "22 mm Cylinder (for 18mm board)", Price = 160, OriginalPrice = 210 },
                    new() { VariantCode = "32mm", Label = "32 mm Long Cylinder", Price = 210, OriginalPrice = 260 }
                }
            },

            // Adhesives & Finishes
            new()
            {
                Id = "adh-01",
                Name = "Fevicol Marine Waterproof Wood Adhesive",
                CategoryId = "adhesives-finishes",
                Brand = "Pidilite Fevicol",
                Rating = 4.98,
                ReviewsCount = 420,
                Badge = "Carpenter Choice",
                InStock = true,
                Description = "Specialized waterproof synthetic resin adhesive that withstands continuous moisture and boiling water. Unrivaled bonding strength for plywood, laminate, and MDF.",
                DefaultUnit = "container",
                ImageUrl = "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Tested for 48 Hours Waterproof Bonding", "Fast Setting Formula", "Superior Bond Strength for Marine Ply" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "1kg", Label = "1 kg Pouch", Price = 290, OriginalPrice = 330 },
                    new() { VariantCode = "2kg", Label = "2 kg Tub", Price = 560, OriginalPrice = 640 },
                    new() { VariantCode = "5kg", Label = "5 kg Bucket", Price = 1350, OriginalPrice = 1550 },
                    new() { VariantCode = "10kg", Label = "10 kg Contractor Bucket", Price = 2550, OriginalPrice = 2900 },
                    new() { VariantCode = "50kg", Label = "50 kg Drum (Workshop Bulk)", Price = 11800, OriginalPrice = 13500 }
                }
            },
            new()
            {
                Id = "adh-02",
                Name = "HeatX Quick-Bonding Contact Adhesive",
                CategoryId = "adhesives-finishes",
                Brand = "Fevicol HeatX",
                Rating = 4.9,
                ReviewsCount = 175,
                Badge = "Heat Proof",
                InStock = true,
                Description = "Heat resistant contact adhesive that bonds laminates and veneers without continuous spring clamping or masking tape. Resists up to 170°C heat.",
                DefaultUnit = "can",
                ImageUrl = "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Instant Bond in 10-15 Minutes", "Withstands up to 170°C Temperature", "Ideal for Kitchen Cooktop Surrounds" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "1L", Label = "1 Liter Can", Price = 480, OriginalPrice = 560 },
                    new() { VariantCode = "5L", Label = "5 Liter Tin", Price = 2150, OriginalPrice = 2500 }
                }
            },
            new()
            {
                Id = "adh-03",
                Name = "PVC Edge Banding Tape Roll (0.8mm & 2mm)",
                CategoryId = "adhesives-finishes",
                Brand = "EdgePro Matching",
                Rating = 4.75,
                ReviewsCount = 92,
                Badge = "50m Roll",
                InStock = true,
                Description = "Flexible, UV-stabilized PVC edge banding tape used to seal and protect raw edges of plywood, MDF, and particle board against moisture and chipping.",
                DefaultUnit = "roll (50 meters)",
                ImageUrl = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                Features = new() { "High Impact Resistance", "Pre-Primed Back for Strong Glue Grip", "Matches Popular Laminate Shades" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "22x0.8", Label = "22mm x 0.8mm (Solid Colors)", Price = 340, OriginalPrice = 420 },
                    new() { VariantCode = "22x2.0", Label = "22mm x 2.0mm (Woodgrain / Heavy)", Price = 620, OriginalPrice = 750 },
                    new() { VariantCode = "45x2.0", Label = "45mm x 2.0mm (Double Board)", Price = 1150, OriginalPrice = 1350 }
                }
            },
            new()
            {
                Id = "adh-04",
                Name = "Neutral Cure Silicone Sealant (Clear / Black / White)",
                CategoryId = "adhesives-finishes",
                Brand = "DOW / Wacker Style Grade",
                Rating = 4.82,
                ReviewsCount = 130,
                Badge = "Waterproof Gap Sealer",
                InStock = true,
                Description = "100% silicone non-corrosive neutral sealant designed for sealing kitchen granite counter joints, sink basins, acrylic sheets, and bathroom fixtures.",
                DefaultUnit = "cartridge (300 ml)",
                ImageUrl = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
                Features = new() { "Anti-Fungal & Anti-Bacterial", "Neutral Non-Corrosive Cure", "Permanent Elasticity" },
                Variants = new List<ProductVariant>
                {
                    new() { VariantCode = "clear", Label = "Transparent / Clear (300 ml)", Price = 240, OriginalPrice = 290 },
                    new() { VariantCode = "black", Label = "Jet Black (300 ml)", Price = 250, OriginalPrice = 300 },
                    new() { VariantCode = "white", Label = "Snow White (300 ml)", Price = 250, OriginalPrice = 300 }
                }
            }
        };

        await context.Products.AddRangeAsync(products);
        await context.SaveChangesAsync();
    }
}
