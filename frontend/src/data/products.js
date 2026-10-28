export const products = [
  // 1. PLYWOOD PRODUCTS
  {
    id: 'ply-01',
    name: 'BWP Marine Grade Plywood (IS:710)',
    category: 'plywood',
    brand: 'Century / Greenply Equivalent',
    rating: 4.9,
    reviewsCount: 128,
    badge: 'Marine Grade',
    inStock: true,
    description: '100% boiling water proof calibrated plywood made with selected hardwood core and bonded with phenol formaldehyde resin. Ideal for modular kitchens, bathrooms, and exterior furniture.',
    defaultUnit: 'sheet',
    sheetSize: '8 x 4 ft (32 sq.ft)',
    variants: [
      { id: '6mm', label: '6 mm', price: 1450, originalPrice: 1650, weight: '12 kg' },
      { id: '12mm', label: '12 mm', price: 2350, originalPrice: 2600, weight: '24 kg' },
      { id: '16mm', label: '16 mm', price: 2950, originalPrice: 3200, weight: '31 kg' },
      { id: '18mm', label: '18 mm', price: 3450, originalPrice: 3850, weight: '36 kg' },
      { id: '25mm', label: '25 mm', price: 4750, originalPrice: 5300, weight: '50 kg' }
    ],
    features: ['72 Hours Boiling Water Proof', 'Borer & Termite Proof', 'Calibrated Uniform Thickness', '15-Year Warranty'],
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ply-02',
    name: 'Commercial MR Grade Plywood (IS:303)',
    category: 'plywood',
    brand: 'TimberCraft Standard',
    rating: 4.7,
    reviewsCount: 89,
    badge: 'Best Seller',
    inStock: true,
    description: 'Moisture resistant commercial grade plywood suitable for bedroom wardrobes, living room TV units, wall paneling, and dry interior cabinetry.',
    defaultUnit: 'sheet',
    sheetSize: '8 x 4 ft (32 sq.ft)',
    variants: [
      { id: '6mm', label: '6 mm', price: 1050, originalPrice: 1250, weight: '11 kg' },
      { id: '12mm', label: '12 mm', price: 1750, originalPrice: 1980, weight: '22 kg' },
      { id: '18mm', label: '18 mm', price: 2450, originalPrice: 2800, weight: '33 kg' }
    ],
    features: ['Moisture Resistant Melamine Resin', 'Smooth Veneer Face', 'High Screw Holding Capacity', '10-Year Warranty'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ply-03',
    name: 'Russian Birch Calibrated Plywood',
    category: 'plywood',
    brand: 'EuroBirch Premium',
    rating: 4.95,
    reviewsCount: 54,
    badge: 'Premium CNC',
    inStock: true,
    description: 'Multi-ply cross-banded Birch plywood with void-free core and light aesthetic edges. Favored for CNC cutting, designer exposed furniture, and high-end cabinetry.',
    defaultUnit: 'sheet',
    sheetSize: '8 x 4 ft',
    variants: [
      { id: '12mm', label: '12 mm', price: 3400, originalPrice: 3800, weight: '25 kg' },
      { id: '18mm', label: '18 mm', price: 4600, originalPrice: 5100, weight: '37 kg' }
    ],
    features: ['Void-Free Uniform Ply Layers', 'Exposed Edge Finish Ready', 'Exceptional Structural Strength'],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ply-04',
    name: 'BWR Waterproof Shuttering Plywood',
    category: 'plywood',
    brand: 'BuildStrong Film-Faced',
    rating: 4.6,
    reviewsCount: 42,
    badge: 'Heavy Duty',
    inStock: true,
    description: 'High-density phenolic film-faced BWR plywood engineered for concrete formwork, heavy partitions, and outdoor temporary structures.',
    defaultUnit: 'sheet',
    sheetSize: '8 x 4 ft',
    variants: [
      { id: '12mm', label: '12 mm', price: 1950, originalPrice: 2200, weight: '30 kg' },
      { id: '18mm', label: '18 mm', price: 2750, originalPrice: 3100, weight: '34 kg' }
    ],
    features: ['Double-Sided Mirror Phenolic Film', 'Mirror Finish Cast', 'Reusable multiple times'],
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
  },

  // 2. MDF & HDF BOARDS
  {
    id: 'mdf-01',
    name: 'HDHMR High Moisture Resistance Green Board',
    category: 'mdf-hdf',
    brand: 'Action Tesa / Greenpanel Equivalent',
    rating: 4.88,
    reviewsCount: 164,
    badge: 'Top for Kitchens',
    inStock: true,
    description: 'High-density (850+ kg/m3) water-resistant engineered board dyed green for easy identification. Superior alternative to normal plywood for routing, PU painting, and kitchen carcasses.',
    defaultUnit: 'sheet',
    sheetSize: '8 x 4 ft (32 sq.ft)',
    variants: [
      { id: '5.5mm', label: '5.5 mm', price: 880, originalPrice: 1050, weight: '13 kg' },
      { id: '12mm', label: '12 mm', price: 1680, originalPrice: 1900, weight: '28 kg' },
      { id: '16.75mm', label: '16.75 mm', price: 2150, originalPrice: 2450, weight: '38 kg' },
      { id: '18mm', label: '18 mm', price: 2350, originalPrice: 2680, weight: '42 kg' }
    ],
    features: ['High Density (>850 kg/m3)', 'Zero Core Voids', 'Seamless Edge Routing & Profiling', 'Water Resistant Formula'],
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mdf-02',
    name: 'Plain Interior Grade MDF Board',
    category: 'mdf-hdf',
    brand: 'EcoCore Plain',
    rating: 4.65,
    reviewsCount: 78,
    badge: 'Budget Friendly',
    inStock: true,
    description: 'Smooth, uniform density fibreboard with ultra-flat surfaces on both sides. Ideal for CNC decorative jaali cutting, interior partitions, photo frames, and dry room furnishings.',
    defaultUnit: 'sheet',
    sheetSize: '8 x 4 ft',
    variants: [
      { id: '8mm', label: '8 mm', price: 790, originalPrice: 920, weight: '18 kg' },
      { id: '12mm', label: '12 mm', price: 1150, originalPrice: 1350, weight: '26 kg' },
      { id: '18mm', label: '18 mm', price: 1650, originalPrice: 1900, weight: '39 kg' }
    ],
    features: ['Ultra-Smooth Surface for Paint & Polish', 'Uniform Homogeneous Fibre Matrix', 'Easy to Cut and Router'],
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mdf-03',
    name: 'Pre-Laminated Woodgrain MDF Board (Both Sides)',
    category: 'mdf-hdf',
    brand: 'StyleLam PreLam',
    rating: 4.75,
    reviewsCount: 95,
    badge: 'Pre-Finished',
    inStock: true,
    description: 'Factory-pressed melamine decorative woodgrain paper on both faces of MDF board. Eliminates the time, labor, and cost of manual laminate pasting.',
    defaultUnit: 'sheet',
    sheetSize: '8 x 4 ft',
    variants: [
      { id: '12mm', label: '12 mm (Walnut/Oak)', price: 1780, originalPrice: 2050, weight: '27 kg' },
      { id: '18mm', label: '18 mm (Walnut/Oak)', price: 2450, originalPrice: 2850, weight: '40 kg' }
    ],
    features: ['Scratch & Stain Resistant Surface', 'Zero Laminate Pasting Needed', 'Matching PVC Edge Band Available'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mdf-04',
    name: 'Exterior Grade HDF Hardboard',
    category: 'mdf-hdf',
    brand: 'DuraHard Ultra',
    rating: 4.8,
    reviewsCount: 39,
    badge: 'High Impact',
    inStock: true,
    description: 'Ultra high density hardboard compressed under extreme pressure. Highly recommended for heavy drawer bottoms, door skins, and backing partitions.',
    defaultUnit: 'sheet',
    sheetSize: '8 x 4 ft',
    variants: [
      { id: '3.2mm', label: '3.2 mm', price: 460, originalPrice: 550, weight: '9 kg' },
      { id: '6mm', label: '6 mm', price: 790, originalPrice: 940, weight: '16 kg' }
    ],
    features: ['Extreme Density (>950 kg/m3)', 'Non-warping & stiff', 'Excellent backing support'],
    image: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=800&q=80'
  },

  // 3. SCREWS & FASTENERS (Crucial for user's request)
  {
    id: 'screw-01',
    name: 'Black Phosphate Drywall & Gypsum Screws',
    category: 'screws-fasteners',
    brand: 'FastFix Pro',
    rating: 4.9,
    reviewsCount: 312,
    badge: 'Bulk Pack of 500',
    inStock: true,
    description: 'Bugle head, coarse-thread drywall screws coated with corrosion-resistant black phosphate. Penetrates wood, MDF, and drywall studs effortlessly without splitting.',
    defaultUnit: 'box of 500 pcs',
    variants: [
      { id: '19mm', label: '3/4 inch (19 mm)', price: 210, originalPrice: 260, pack: '500 pcs' },
      { id: '25mm', label: '1 inch (25 mm)', price: 260, originalPrice: 320, pack: '500 pcs' },
      { id: '32mm', label: '1.25 inch (32 mm)', price: 320, originalPrice: 390, pack: '500 pcs' },
      { id: '38mm', label: '1.5 inch (38 mm)', price: 380, originalPrice: 460, pack: '500 pcs' },
      { id: '50mm', label: '2 inch (50 mm)', price: 490, originalPrice: 590, pack: '500 pcs' },
      { id: '75mm', label: '3 inch (75 mm)', price: 680, originalPrice: 820, pack: '500 pcs' }
    ],
    features: ['Sharp Bugle Head Countersunk', 'Coarse Deep Thread Grip', 'Corrosion Resistant Coating', 'Zero Pre-drilling in Softwood'],
    image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'screw-02',
    name: 'Zinc-Plated Wood Screws (Phillips Star Head)',
    category: 'screws-fasteners',
    brand: 'StarGrip Hardware',
    rating: 4.85,
    reviewsCount: 220,
    badge: 'Essential for Carcass',
    inStock: true,
    description: 'Full-thread zinc coated wood screws with countersunk flat head. The gold standard for assembling plywood carcasses, wardrobe boxes, and joining MDF panels.',
    defaultUnit: 'box of 500 pcs',
    variants: [
      { id: '16mm', label: '5/8 inch (16 mm)', price: 230, originalPrice: 280, pack: '500 pcs' },
      { id: '25mm', label: '1 inch (25 mm)', price: 290, originalPrice: 350, pack: '500 pcs' },
      { id: '38mm', label: '1.5 inch (38 mm)', price: 410, originalPrice: 490, pack: '500 pcs' },
      { id: '50mm', label: '2 inch (50 mm)', price: 540, originalPrice: 650, pack: '500 pcs' }
    ],
    features: ['High Tensile Carbon Steel', 'Bright Zinc Plated Against Rust', 'Cross-Recessed Star Drive'],
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'screw-03',
    name: 'Stainless Steel 304 Wood & Hinge Screws',
    category: 'screws-fasteners',
    brand: 'RustShield Marine SS',
    rating: 4.92,
    reviewsCount: 140,
    badge: '100% Rust Proof',
    inStock: true,
    description: 'Pure SS 304 grade non-magnetic screws designed specifically for fixing kitchen cabinet hinges, bathroom vanity hardware, and exterior coastal installations.',
    defaultUnit: 'box of 200 pcs',
    variants: [
      { id: '12mm', label: '1/2 inch (Hinge special)', price: 280, originalPrice: 340, pack: '200 pcs' },
      { id: '19mm', label: '3/4 inch (Auto-Hinge)', price: 340, originalPrice: 410, pack: '200 pcs' },
      { id: '25mm', label: '1 inch (Standard)', price: 420, originalPrice: 510, pack: '200 pcs' },
      { id: '38mm', label: '1.5 inch (Heavy)', price: 560, originalPrice: 670, pack: '200 pcs' }
    ],
    features: ['Genuine SS 304 Non-Magnetic', 'Lifetime Rust Resistance', 'Perfect for Damp & Coastal Areas'],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'screw-04',
    name: 'Self-Drilling Hex Washer Head Teks Screws',
    category: 'screws-fasteners',
    brand: 'DrillFast Industrial',
    rating: 4.7,
    reviewsCount: 88,
    badge: 'Metal Framing',
    inStock: true,
    description: 'Hardened point self-drilling screws capable of piercing 2mm–4mm cold-rolled steel channels, GI framework, and gypsum framing without pilot holes.',
    defaultUnit: 'box of 250 pcs',
    variants: [
      { id: '25mm', label: '1 inch (25 mm)', price: 310, originalPrice: 380, pack: '250 pcs' },
      { id: '38mm', label: '1.5 inch (38 mm)', price: 430, originalPrice: 520, pack: '250 pcs' },
      { id: '50mm', label: '2 inch (50 mm)', price: 560, originalPrice: 680, pack: '250 pcs' }
    ],
    features: ['Hardened Drill Flute Tip', 'Integrated Hex Washer Head', 'High Torsion Resistance'],
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'screw-05',
    name: 'Heavy Duty Nylon Wall Plugs & Anchor Screws',
    category: 'screws-fasteners',
    brand: 'GripMax Anchors',
    rating: 4.8,
    reviewsCount: 110,
    badge: 'Wall Mounting Kit',
    inStock: true,
    description: 'High-expansion virgin nylon wall rawl plugs paired with zinc countersunk screws for securely hanging heavy kitchen wall cabinets, TV brackets, and wardrobe backing.',
    defaultUnit: 'pack of 100 sets',
    variants: [
      { id: '6mm', label: '6 mm x 40 mm (Pack of 100)', price: 180, originalPrice: 220, pack: '100 sets' },
      { id: '8mm', label: '8 mm x 50 mm (Pack of 100)', price: 260, originalPrice: 320, pack: '100 sets' },
      { id: '10mm', label: '10 mm x 60 mm (Pack of 50)', price: 310, originalPrice: 380, pack: '50 sets' }
    ],
    features: ['Virgin High-Elastic Nylon', 'Anti-Rotation Wing Fins', 'Holds up to 45 kg per anchor in solid brick'],
    image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=800&q=80'
  },

  // 4. HARDWARE & CABINET FITTINGS
  {
    id: 'hw-01',
    name: 'Soft-Close Hydraulic Auto Concealed Hinges',
    category: 'hardware-fittings',
    brand: 'Blum / Hafele Equivalent Style',
    rating: 4.95,
    reviewsCount: 245,
    badge: '50,000 Cycles Tested',
    inStock: true,
    description: 'Precision hydraulic clip-on concealed hinges featuring seamless soft-closing buffer damper. Eliminates cabinet door slamming in modular kitchens and wardrobes.',
    defaultUnit: 'pair (2 pcs)',
    variants: [
      { id: '0crank', label: '0 Crank (Full Overlay / Direct)', price: 240, originalPrice: 300, pack: '1 Pair' },
      { id: '8crank', label: '8 Crank (Half Overlay / Twin Door)', price: 250, originalPrice: 310, pack: '1 Pair' },
      { id: '16crank', label: '16 Crank (Inset / Flush Door)', price: 260, originalPrice: 320, pack: '1 Pair' }
    ],
    features: ['Hydraulic Integrated Soft-Close Damper', 'Clip-On 3D Easy Adjustment', 'Tested for 50,000 Opening Cycles', 'Includes Screws'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hw-02',
    name: 'Telescopic Ball-Bearing Soft-Close Drawer Slides',
    category: 'hardware-fittings',
    brand: 'GlideMaster Heavy',
    rating: 4.88,
    reviewsCount: 198,
    badge: '45 kg Load Capacity',
    inStock: true,
    description: 'Full extension triple-fold drawer runners with solid steel ball bearings and dual-spring soft-closing mechanism. Smooth, silent, and reliable movement.',
    defaultUnit: 'pair (left + right)',
    variants: [
      { id: '12in', label: '12 inch (300 mm)', price: 460, originalPrice: 560, pack: '1 Pair' },
      { id: '14in', label: '14 inch (350 mm)', price: 510, originalPrice: 620, pack: '1 Pair' },
      { id: '16in', label: '16 inch (400 mm)', price: 580, originalPrice: 700, pack: '1 Pair' },
      { id: '18in', label: '18 inch (450 mm)', price: 650, originalPrice: 780, pack: '1 Pair' },
      { id: '20in', label: '20 inch (500 mm)', price: 720, originalPrice: 860, pack: '1 Pair' }
    ],
    features: ['45 kg Dynamic Weight Rating', 'Silent Dual-Hydraulic Damper', 'Full Extension Access', 'Cold Rolled Steel Body'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hw-03',
    name: 'Modern Matte Black Aluminum Profile J-Handle',
    category: 'hardware-fittings',
    brand: 'EdgeLine Luxury',
    rating: 4.8,
    reviewsCount: 82,
    badge: 'Modern Aesthetic',
    inStock: true,
    description: 'Minimalist edge-mounted J-pull aluminum profile handle for seamless handleless look across kitchen cabinets, wardrobe shutters, and bathroom vanity drawers.',
    defaultUnit: 'piece',
    variants: [
      { id: '6in', label: '150 mm (6 inch)', price: 140, originalPrice: 180 },
      { id: '8in', label: '200 mm (8 inch)', price: 190, originalPrice: 240 },
      { id: '12in', label: '300 mm (12 inch)', price: 280, originalPrice: 350 },
      { id: 'full', label: '1000 mm (Wardrobe Long Profile)', price: 680, originalPrice: 850 }
    ],
    features: ['Anodized Matte Black Finish', 'Scratch Resistant', 'Ergonomic Finger Grip'],
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hw-04',
    name: 'Multi-Purpose Drawer & Cupboard Computer Lock',
    category: 'hardware-fittings',
    brand: 'SafeGuard Security',
    rating: 4.7,
    reviewsCount: 115,
    badge: '2 Keys Included',
    inStock: true,
    description: 'Zinc alloy die-cast cylinder lock with computer dimple keys. Can be mounted on wooden drawer fronts or wardrobe doors.',
    defaultUnit: 'set',
    variants: [
      { id: '22mm', label: '22 mm Cylinder (for 18mm board)', price: 160, originalPrice: 210 },
      { id: '32mm', label: '32 mm Long Cylinder', price: 210, originalPrice: 260 }
    ],
    features: ['High Security Dimple Reversible Key', 'Anti-pick Brass Core', 'Includes Rose Ring & Screws'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
  },

  // 5. ADHESIVES, LAMINATES & EDGE BANDS
  {
    id: 'adh-01',
    name: 'Fevicol Marine Waterproof Wood Adhesive',
    category: 'adhesives-finishes',
    brand: 'Pidilite Fevicol',
    rating: 4.98,
    reviewsCount: 420,
    badge: 'Carpenter Choice',
    inStock: true,
    description: 'Specialized waterproof synthetic resin adhesive that withstands continuous moisture and boiling water. Unrivaled bonding strength for plywood, laminate, and MDF.',
    defaultUnit: 'container',
    variants: [
      { id: '1kg', label: '1 kg Pouch', price: 290, originalPrice: 330 },
      { id: '2kg', label: '2 kg Tub', price: 560, originalPrice: 640 },
      { id: '5kg', label: '5 kg Bucket', price: 1350, originalPrice: 1550 },
      { id: '10kg', label: '10 kg Contractor Bucket', price: 2550, originalPrice: 2900 },
      { id: '50kg', label: '50 kg Drum (Workshop Bulk)', price: 11800, originalPrice: 13500 }
    ],
    features: ['Tested for 48 Hours Waterproof Bonding', 'Fast Setting Formula', 'Superior Bond Strength for Marine Ply'],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'adh-02',
    name: 'HeatX Quick-Bonding Contact Adhesive',
    category: 'adhesives-finishes',
    brand: 'Fevicol HeatX',
    rating: 4.9,
    reviewsCount: 175,
    badge: 'Heat Proof',
    inStock: true,
    description: 'Heat resistant contact adhesive that bonds laminates and veneers without continuous spring clamping or masking tape. Resists up to 170°C heat.',
    defaultUnit: 'can',
    variants: [
      { id: '1L', label: '1 Liter Can', price: 480, originalPrice: 560 },
      { id: '5L', label: '5 Liter Tin', price: 2150, originalPrice: 2500 }
    ],
    features: ['Instant Bond in 10-15 Minutes', 'Withstands up to 170°C Temperature', 'Ideal for Kitchen Cooktop Surrounds'],
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'adh-03',
    name: 'PVC Edge Banding Tape Roll (0.8mm & 2mm)',
    category: 'adhesives-finishes',
    brand: 'EdgePro Matching',
    rating: 4.75,
    reviewsCount: 92,
    badge: '50m Roll',
    inStock: true,
    description: 'Flexible, UV-stabilized PVC edge banding tape used to seal and protect raw edges of plywood, MDF, and particle board against moisture and chipping.',
    defaultUnit: 'roll (50 meters)',
    variants: [
      { id: '22x0.8', label: '22mm x 0.8mm (Solid Colors)', price: 340, originalPrice: 420 },
      { id: '22x2.0', label: '22mm x 2.0mm (Woodgrain / Heavy)', price: 620, originalPrice: 750 },
      { id: '45x2.0', label: '45mm x 2.0mm (Double Board)', price: 1150, originalPrice: 1350 }
    ],
    features: ['High Impact Resistance', 'Pre-Primed Back for Strong Glue Grip', 'Matches Popular Laminate Shades'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'adh-04',
    name: 'Neutral Cure Silicone Sealant (Clear / Black / White)',
    category: 'adhesives-finishes',
    brand: 'DOW / Wacker Style Grade',
    rating: 4.82,
    reviewsCount: 130,
    badge: 'Waterproof Gap Sealer',
    inStock: true,
    description: '100% silicone non-corrosive neutral sealant designed for sealing kitchen granite counter joints, sink basins, acrylic sheets, and bathroom fixtures.',
    defaultUnit: 'cartridge (300 ml)',
    variants: [
      { id: 'clear', label: 'Transparent / Clear (300 ml)', price: 240, originalPrice: 290 },
      { id: 'black', label: 'Jet Black (300 ml)', price: 250, originalPrice: 300 },
      { id: 'white', label: 'Snow White (300 ml)', price: 250, originalPrice: 300 }
    ],
    features: ['Anti-Fungal & Anti-Bacterial', 'Neutral Non-Corrosive Cure', 'Permanent Elasticity'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  }
];
