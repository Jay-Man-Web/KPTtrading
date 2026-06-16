const carParts = [
    {
        partNumber: "SKU-0001",
        name: "Oscar Engine Oil (500ml)",
        description: "Premium grade motor oil formulation optimized for daily engine protection and smooth thermal performance.",
        price: "R40",
        imageUrl: "images/0001.png"
    },
    {
        partNumber: "SKU-0002",
        name: "Oscar Engine Oil (5L)",
        description: "High-performance bulk motor oil designed for comprehensive wear protection and extended engine life cycles.",
        price: "R320",
        imageUrl: "images/0002.png"
    },
    {
        partNumber: "SKU-0003",
        name: "Hyundai H100 Alternator",
        description: "Heavy-duty replacement alternator engineered to restore optimal electrical charging systems for commercial fleet use.",
        price: "R2700",
        imageUrl: "images/0003.png"
    },
    {
        partNumber: "SKU-0004",
        name: "Nissan NP300 KA24 Fuel Injectors",
        description: "Precision-engineered fuel injectors built for stable fuel atomization and restored fuel economy in KA24 engines.",
        price: "R1350",
        imageUrl: "images/0004.png"
    },
    {
        partNumber: "SKU-0005",
        name: "Toyota Dyna Clutch Master Cylinder",
        description: "Direct-fit OEM specification hydraulic cylinder to ensure responsive and smooth gear-shifting capabilities.",
        price: "R390",
        imageUrl: "images/0005.png"
    },
    {
        partNumber: "SKU-0006",
        name: "Nissan Livina Adjuster Pocket VVTI",
        description: "Variable Valve Timing (VVT-i) camshaft sprocket adjuster pocket engineered for accurate timing restoration.",
        price: "R2390",
        imageUrl: "images/0006.png"
    },
    {
        partNumber: "SKU-0007",
        name: "Hyundai i10 / i20 Ignition Coil Pack",
        description: "High-output multi-spark coil pack to eliminate cylinder misfires and restore dependable engine ignition.",
        price: "R1500",
        imageUrl: "images/0007.png"
    },
    {
        partNumber: "SKU-0008",
        name: "Mahindra XUV500 Fan Belt Tensioner",
        description: "Automotive-grade drive belt tensioner assembly designed to keep serpentine accessories operating silently.",
        price: "R1750",
        imageUrl: "images/0008.png"
    },
    {
        partNumber: "SKU-0009",
        name: "Ford / Mazda F6 Fuel Pump Assembly",
        description: "Reliable, high-flow fuel pump providing sustained operational line pressure for optimal combustion delivery.",
        price: "R475",
        imageUrl: "images/0009.png"
    },
    {
        partNumber: "SKU-0010",
        name: "Ford / Mazda BE Electronic Distributor",
        description: "Complete assembly electronic distributor setup intended for accurate timing intervals and ignition spark distribution.",
        price: "R570",
        imageUrl: "images/0010.png"
    },
    {
        partNumber: "SKU-0011",
        name: "Hyundai Atos Cylinder Head Gasket",
        description: "High-density multi-layer steel head gasket offering tight compression sealing properties against combustion leaks.",
        price: "R350",
        imageUrl: "images/0011.png"
    },
    {
        partNumber: "SKU-0012",
        name: "Toyota Yaris (2005) Left Engine Mounting",
        description: "Durable rubber-to-metal bonded left-side engine mount designed to dampen chassis vibrations and cabin resonance.",
        price: "R1350",
        imageUrl: "images/0012.png"
    },
    {
        partNumber: "SKU-0013",
        name: "Toyota Quantum Air Filter Housing (Large)",
        description: "Standard full-size impact-resistant intake air box casing designed for optimal induction track filtration protection.",
        price: "R550",
        imageUrl: "images/0013.png"
    },
    {
        partNumber: "SKU-0014",
        name: "Toyota Quantum Air Filter Housing (Small)",
        description: "Compact variation layout air cleaner outer casing structure crafted to shield engines from airborne particulates.",
        price: "R450",
        imageUrl: "images/0014.png"
    },
    {
        partNumber: "SKU-0015",
        name: "Toyota Tazz LuK Clutch Kit",
        description: "Premium LuK clutch kit bundle containing pressure plate, clutch disc, and release bearing configurations.",
        price: "R1550",
        imageUrl: "images/0015.png"
    },
    {
        partNumber: "SKU-0016",
        name: "Ford Ranger Headlight Assemblies (Pair)",
        description: "Clear-lens replacement front headlight assemblies offering optimized night visibility projection capabilities.",
        price: "R7500",
        imageUrl: "images/0016.png"
    },
    {
        partNumber: "SKU-0017",
        name: "Toyota 3RZ Timing Chain Tensioner",
        description: "Precision mechanical guide tensioner engineered to maintain internal block timing chain rigidity under load.",
        price: "R370",
        imageUrl: "images/0017.png"
    },
    {
        partNumber: "SKU-0018",
        name: "Opel Corsa 1.4 Engine Mounting",
        description: "High-grade structural rubber core mount designed to securely seat and align the 1.4 powertrain block.",
        price: "R370",
        imageUrl: "images/0018.png"
    },
    {
        partNumber: "SKU-0019",
        name: "Toyota Hilux / Fortuner 2.5 D4D (2005-2016) Service Kit",
        description: "Complete periodic maintenance package bundle including clean air, oil, and fuel filter components.",
        price: "R1150",
        imageUrl: "images/0019.png"
    },
    {
        partNumber: "SKU-0020",
        name: "Datsun GO Ball Joints & Tie Rod Ends Kit",
        description: "Heavy-duty steering linkage update overhaul kit containing load-bearing ball joints and adjustable outer tie rod ends.",
        price: "R690",
        imageUrl: "images/0020.png"
    },
    {
        partNumber: "SKU-0021",
        name: "Nissan NP200 Control Arms",
        description: "Structural suspension lower control arms equipped with pre-pressed bushings to keep proper front-wheel geometry.",
        price: "R590",
        imageUrl: "images/0021.png"
    }
];

const grid = document.getElementById('product-grid');

function displayItems() {
    grid.innerHTML = carParts.map((item, index) => `
        <div class="item-card fade-in-element" style="animation-delay: ${index * 0.05}s; opacity: 0;">
            <div class="item-img" style="background-image: url('${item.imageUrl}'); background-size: cover; background-position: center;">
                ${!item.imageUrl ? '<p style="padding: 80px 0; color: #475569;">No Image</p>' : ''}
            </div>
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <p class="price" style="color: #10b981; font-weight: bold; margin-top: 10px;">${item.price}</p>
        </div>
    `).join('');
}

displayItems();