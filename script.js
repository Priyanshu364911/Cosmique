const products = {
    "force-green": {
        name: "Cosmique Force Green",
        tagline: "Limited Edition Timepiece",
        year: "2002",
        collection: "Force Series",
        caseMaterial: "316L Stainless Steel",
        movement: "Swiss Automatic",
        waterResistance: "100M",
        dial: "Bold Green Sunburst",
        crystal: "Sapphire with Anti-Reflective Coating",
        strap: "Genuine Leather with Deployment Clasp",
        mainImage: "watches/watch1.jpeg",
        thumbnails: [
            "watches/watch12.jpg",
            "watches/watch10.jpg",
            "watches/watch11.jpg"
        ]
    },
    "ocean-blue": {
        name: "Cosmique Oceania IV",
        tagline: "Luxury Dive Watch",
        year: "2010",
        collection: "Ocean Series",
        caseMaterial: "Titanium",
        movement: "Japanese Quartz",
        waterResistance: "200M",
        dial: "Deep Blue with Luminous Markers",
        crystal: "Sapphire Crystal",
        strap: "Rubber Strap with Stainless Buckle",
        mainImage: "watches/watch41.jpg",
        thumbnails: [
            "watches/watch10.jpg",
            "watches/watch11.jpg",
            "watches/watch12.jpg"
        ]
    },
    "moon-black": {
        name: "Cosmique Moon One",
        tagline: "Cosmic with Luxury",
        year: "2013",
        collection: "Moon Series",
        caseMaterial: "Titanium",
        movement: "Swiss Quartz",
        waterResistance: "20M",
        dial: "Black Matte",
        crystal: "Sapphire Crystal",
        strap: "Black Leather Strap with Stainless Buckle",
        mainImage: "watches/watch2.jpeg",
        thumbnails: [
            "watches/watch10.jpg",
            "watches/watch12.jpg",
            "watches/watch11.jpg"
        ]
    },
    "forest-green": {
        name: "Cosmique Forest",
        tagline: "Luxury touch with Feel of Nature",
        year: "1992",
        collection: "Forest Series",
        caseMaterial: "Platinum",
        movement: "Swiss Quartz",
        waterResistance: "100M",
        dial: "Silver",
        crystal: "Sapphire Crystal",
        strap: "Green Leather Strap with Golden Buckle",
        mainImage: "watches/watch3.jpeg",
        thumbnails: [
            "watches/watch12.jpg",
            "watches/watch10.jpg",
            "watches/watch11.jpg"
        ]
    },
    "cloud-white":{
        name: "Cosmique Cloud Blue",
        tagline: "Feel Like Breeze with Cloudy Sky",
        year: "1988",
        collection: "Cloud Series",
        caseMaterial: "Ruby",
        movement: "Crystal Quartz",
        waterResistance: "100M",
        dial: "Silver",
        crystal: "Sapphire Crystal",
        strap: "Blue Strap with Platinum Buckle",
        mainImage: "watches/watch51.jpg",
        thumbnails: [
            "watches/watch11.jpg",
            "watches/watch12.jpg",
            "watches/watch10.jpg"
        ]
    }
};


function getProductID() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function loadProduct() {
    const productID = getProductID();
    const product = products[productID];

    if (product) {
        document.title = `Product Details - ${product.name}`;
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-tagline").textContent = product.tagline;
        document.getElementById("main-image").src = product.mainImage;
        const specsContainer = document.getElementById("product-specs");
        specsContainer.innerHTML = `
            <div class="spec-item"><strong>Year of Manufacturing:</strong> ${product.year}</div>
            <div class="spec-item"><strong>Collection:</strong> ${product.collection}</div>
            <div class="spec-item"><strong>Case Material:</strong> ${product.caseMaterial}</div>
            <div class="spec-item"><strong>Movement:</strong> ${product.movement}</div>
            <div class="spec-item"><strong>Water Resistance:</strong> ${product.waterResistance}</div>
            <div class="spec-item"><strong>Dial:</strong> ${product.dial}</div>
            <div class="spec-item"><strong>Crystal:</strong> ${product.crystal}</div>
            <div class="spec-item"><strong>Strap:</strong> ${product.strap}</div>
            <div class="spec-item"><strong>Limited Edition:</strong> ${product.limitedEdition}</div>
        `;

        const thumbnailsContainer = document.getElementById("thumbnails");
        thumbnailsContainer.innerHTML = product.thumbnails
            .map(img => `<img src="${img}" alt="Thumbnail" class="thumbnail">`)
            .join("");

    } else {
        document.body.innerHTML = "<h1 style='color: white; text-align: center;'>Product not found</h1>";
    }
}

window.onload = loadProduct;
