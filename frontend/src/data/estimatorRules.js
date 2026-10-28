export const estimatorProjects = [
  {
    id: 'kitchen',
    title: 'Modular Kitchen (Carcass & Shutters)',
    tagline: 'Waterproof BWP Marine Ply / HDHMR, soft-close hinges, and stainless screws.',
    icon: 'UtensilsCrossed',
    inputLabel: 'Kitchen Running Length (in Feet)',
    defaultValue: 12,
    unit: 'ft',
    min: 6,
    max: 30,
    calculate: (runningFeet) => {
      const carcassSheets = Math.ceil(runningFeet / 2.2);
      const backingSheets = Math.ceil(runningFeet / 4);
      const shutterSheets = Math.ceil(runningFeet / 3);
      const hingePairs = Math.ceil(runningFeet * 1.5);
      const drawerPairs = Math.ceil(runningFeet / 3);
      const screwBoxes1_5 = Math.ceil(runningFeet / 12);
      const hingeScrewBoxes = Math.ceil(runningFeet / 10);
      const adhesiveBuckets = Math.ceil(runningFeet / 10);
      const edgeBandRolls = Math.ceil(runningFeet / 8);

      return [
        {
          productId: 'ply-01',
          variantId: '18mm',
          name: 'BWP Marine Grade Plywood 18mm (Carcass & Base)',
          category: 'Boards',
          quantity: carcassSheets,
          unit: 'Sheets',
          unitPrice: 3450,
          reason: '100% Waterproof base for sink, cooking, and storage carcass.'
        },
        {
          productId: 'mdf-01',
          variantId: '18mm',
          name: 'HDHMR Green Board 18mm (Shutters & Overhead)',
          category: 'Boards',
          quantity: shutterSheets,
          unit: 'Sheets',
          unitPrice: 2350,
          reason: 'Smooth profile routing and high moisture resistance for shutters.'
        },
        {
          productId: 'ply-01',
          variantId: '6mm',
          name: 'BWP Marine Plywood 6mm (Backing Panels)',
          category: 'Boards',
          quantity: backingSheets,
          unit: 'Sheets',
          unitPrice: 1450,
          reason: 'Durable moisture barrier for rear cabinet walls.'
        },
        {
          productId: 'screw-02',
          variantId: '38mm',
          name: '1.5" Zinc-Plated Wood Screws (Box of 500 pcs)',
          category: 'Screws & Fasteners',
          quantity: screwBoxes1_5,
          unit: 'Boxes',
          unitPrice: 410,
          reason: 'Firm carcass corner joinery and board fixing.'
        },
        {
          productId: 'screw-03',
          variantId: '19mm',
          name: '3/4" SS 304 Rust-Proof Hinge Screws (Box of 200 pcs)',
          category: 'Screws & Fasteners',
          quantity: hingeScrewBoxes,
          unit: 'Boxes',
          unitPrice: 340,
          reason: 'Essential non-rusting screws for kitchen hinge mounting.'
        },
        {
          productId: 'screw-05',
          variantId: '8mm',
          name: 'Heavy Duty 8mm Nylon Wall Plugs & Screws (100 sets)',
          category: 'Screws & Fasteners',
          quantity: 1,
          unit: 'Pack',
          unitPrice: 260,
          reason: 'Securely hanging overhead wall cabinets to solid brick/concrete.'
        },
        {
          productId: 'hw-01',
          variantId: '0crank',
          name: 'Soft-Close Concealed Auto Hinges (0 Crank)',
          category: 'Hardware',
          quantity: hingePairs,
          unit: 'Pairs',
          unitPrice: 240,
          reason: 'Silent hydraulic closure on all shutter doors.'
        },
        {
          productId: 'hw-02',
          variantId: '18in',
          name: '18" Telescopic Soft-Close Drawer Slides',
          category: 'Hardware',
          quantity: drawerPairs,
          unit: 'Pairs',
          unitPrice: 650,
          reason: 'Heavy-duty smooth full-extension cutlery and thali baskets.'
        },
        {
          productId: 'adh-01',
          variantId: '5kg',
          name: 'Fevicol Marine Waterproof Adhesive (5 kg Bucket)',
          category: 'Adhesives',
          quantity: adhesiveBuckets,
          unit: 'Bucket',
          unitPrice: 1350,
          reason: 'Waterproof joint gluing.'
        },
        {
          productId: 'adh-03',
          variantId: '22x2.0',
          name: 'PVC Edge Banding Tape 22x2mm (50m Roll)',
          category: 'Adhesives',
          quantity: edgeBandRolls,
          unit: 'Rolls',
          unitPrice: 620,
          reason: 'Water sealing and edge protection for all exposed plywood edges.'
        }
      ];
    }
  },
  {
    id: 'wardrobe',
    title: 'Bedroom Wardrobe with Loft',
    tagline: 'Sturdy 18mm Commercial MR Plywood, 6mm backing, hinges, and full screw pack.',
    icon: 'Layers',
    inputLabel: 'Wardrobe Width (in Feet)',
    defaultValue: 8,
    unit: 'ft',
    min: 4,
    max: 20,
    calculate: (widthFeet) => {
      const carcassSheets = Math.ceil(widthFeet * 0.9);
      const backingSheets = Math.ceil(widthFeet * 0.35);
      const shutterSheets = Math.ceil(widthFeet * 0.45);
      const hingePairs = Math.ceil(widthFeet * 1.8);
      const drawerPairs = Math.max(2, Math.ceil(widthFeet / 3));
      const screwBox = Math.ceil(widthFeet / 8);

      return [
        {
          productId: 'ply-02',
          variantId: '18mm',
          name: 'Commercial MR Grade Plywood 18mm (Carcass & Shelves)',
          category: 'Boards',
          quantity: carcassSheets,
          unit: 'Sheets',
          unitPrice: 2450,
          reason: 'High screw retention and sturdy partition walls for clothing storage.'
        },
        {
          productId: 'ply-02',
          variantId: '6mm',
          name: 'Commercial MR Grade Plywood 6mm (Backing)',
          category: 'Boards',
          quantity: backingSheets,
          unit: 'Sheets',
          unitPrice: 1050,
          reason: 'Rigid rear wall dust protection.'
        },
        {
          productId: 'mdf-03',
          variantId: '18mm',
          name: 'Pre-Laminated Woodgrain MDF 18mm (Shutters & Loft Doors)',
          category: 'Boards',
          quantity: shutterSheets,
          unit: 'Sheets',
          unitPrice: 2450,
          reason: 'Ready-to-use luxury woodgrain finish with no laminate pasting delay.'
        },
        {
          productId: 'screw-01',
          variantId: '38mm',
          name: '1.5" Black Drywall Screws (Box of 500 pcs)',
          category: 'Screws & Fasteners',
          quantity: screwBox,
          unit: 'Boxes',
          unitPrice: 380,
          reason: 'Deep-bite carcass framing and shelf cleat fasteners.'
        },
        {
          productId: 'screw-02',
          variantId: '16mm',
          name: '5/8" Zinc Screws for Hinges & Hardware (500 pcs)',
          category: 'Screws & Fasteners',
          quantity: 1,
          unit: 'Box',
          unitPrice: 230,
          reason: 'Exact length to anchor hinges without piercing 18mm board.'
        },
        {
          productId: 'hw-01',
          variantId: '0crank',
          name: 'Soft-Close Concealed Auto Hinges (0 Crank)',
          category: 'Hardware',
          quantity: hingePairs,
          unit: 'Pairs',
          unitPrice: 240,
          reason: 'Provides 3 hinges per full 7ft shutter door for anti-sag.'
        },
        {
          productId: 'hw-02',
          variantId: '16in',
          name: '16" Telescopic Soft-Close Drawer Slides',
          category: 'Hardware',
          quantity: drawerPairs,
          unit: 'Pairs',
          unitPrice: 580,
          reason: 'Smooth internal drawer operation.'
        },
        {
          productId: 'hw-04',
          variantId: '22mm',
          name: 'Multi-Purpose Cupboard Computer Lock',
          category: 'Hardware',
          quantity: 2,
          unit: 'Sets',
          unitPrice: 160,
          reason: 'Lockable jewelry / private locker compartments.'
        },
        {
          productId: 'adh-01',
          variantId: '5kg',
          name: 'Fevicol Marine Waterproof Adhesive (5 kg Bucket)',
          category: 'Adhesives',
          quantity: 1,
          unit: 'Bucket',
          unitPrice: 1350,
          reason: 'Carcass dowels and edge joint strength.'
        }
      ];
    }
  },
  {
    id: 'tv-unit',
    title: 'Modern TV Console & Fluted Panelling',
    tagline: 'HDHMR routing boards, wall anchors, profile handles, and fasteners.',
    icon: 'Tv',
    inputLabel: 'Wall Width (in Feet)',
    defaultValue: 10,
    unit: 'ft',
    min: 6,
    max: 18,
    calculate: (wallWidth) => {
      const hdhmrSheets = Math.ceil(wallWidth / 3.5);
      const plySheets = Math.max(1, Math.ceil(wallWidth / 6));
      const drawerPairs = Math.ceil(wallWidth / 4);

      return [
        {
          productId: 'mdf-01',
          variantId: '18mm',
          name: 'HDHMR Green Board 18mm (Fluted Panelling & Floating Console)',
          category: 'Boards',
          quantity: hdhmrSheets,
          unit: 'Sheets',
          unitPrice: 2350,
          reason: 'High density for CNC grooving, louvers, and sleek paint finish.'
        },
        {
          productId: 'ply-02',
          variantId: '12mm',
          name: 'Commercial MR Plywood 12mm (Wall Base Framework)',
          category: 'Boards',
          quantity: plySheets,
          unit: 'Sheets',
          unitPrice: 1750,
          reason: 'Solid wall backing grid for hiding wiring and mounting TV.'
        },
        {
          productId: 'screw-05',
          variantId: '8mm',
          name: '8mm Nylon Wall Plugs & Anchor Screws (100 sets)',
          category: 'Screws & Fasteners',
          quantity: 1,
          unit: 'Pack',
          unitPrice: 260,
          reason: 'Firmly mounting floating TV console and heavy panel frames.'
        },
        {
          productId: 'screw-01',
          variantId: '32mm',
          name: '1.25" Drywall Fasteners (Box of 500 pcs)',
          category: 'Screws & Fasteners',
          quantity: 1,
          unit: 'Box',
          unitPrice: 320,
          reason: 'Fastening panels into battens without protruding.'
        },
        {
          productId: 'hw-02',
          variantId: '14in',
          name: '14" Telescopic Drawer Slides',
          category: 'Hardware',
          quantity: drawerPairs,
          unit: 'Pairs',
          unitPrice: 510,
          reason: 'Console media storage drawers.'
        },
        {
          productId: 'hw-03',
          variantId: '8in',
          name: 'Matte Black Aluminum J-Handle (200mm)',
          category: 'Hardware',
          quantity: drawerPairs,
          unit: 'Pieces',
          unitPrice: 190,
          reason: 'Sleek luxury hardware accent.'
        },
        {
          productId: 'adh-02',
          variantId: '1L',
          name: 'HeatX Quick Contact Adhesive (1 Liter Can)',
          category: 'Adhesives',
          quantity: 1,
          unit: 'Can',
          unitPrice: 480,
          reason: 'Instant bonding of decorative charcoal louvers & acrylic sheets.'
        }
      ];
    }
  }
];
