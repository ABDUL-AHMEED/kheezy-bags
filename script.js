// script.js
const allBags = [
    // --- GROUP 1: ADORN BAG SERIES ---
    { id: "adorn-black", name: "Adorn Bag (Black croc) 💜", price: 11000, desc: "Slay effortlessly with our flagship layout.", image: "pics1.jpg", tags: "black dark adorn crocodile skin textured leather luxury bag hand bags shoulder classy premium quality arm candy hot chic corporate office designer" },
    { id: "adorn-blue", name: "Adorn Bag (Blue croc) 💜", price: 11000, desc: "Slay effortlessly with our flagship layout.", image: "pics2.jpg", tags: "blue navy dark blue adorn crocodile skin textured leather luxury bag hand bags shoulder classy premium quality arm candy hot chic corporate office designer" },
    { id: "adorn-cream", name: "Adorn Bag (Cream croc) 💜", price: 11000, desc: "Slay effortlessly with our flagship layout.", image: "pics3.jpg", tags: "cream beige offwhite white off-white adorn crocodile skin textured leather luxury bag hand bags shoulder classy premium quality arm candy hot chic corporate office designer light" },
    { id: "adorn-gold", name: "Adorn Bag (Gold Metallic) 💜", price: 11000, desc: "Slay effortlessly with our flagship layout.", image: "pics4.jpg", tags: "gold shiny metallic yellow shimmer adorn textured leather luxury bag hand bags shoulder classy premium quality arm candy hot chic party wedding owambe bright designer" },
    { id: "adorn-red", name: "Adorn Bag (Red croc) 💜", price: 11000, desc: "Slay effortlessly with our flagship layout.", image: "pics5.jpg", tags: "red crimson maroon wine adorn crocodile skin textured leather luxury bag hand bags shoulder classy premium quality arm candy hot chic corporate office designer bright bold" },

    // --- GROUP 2: AJOKE CHAIN BAG SERIES ---
    { id: "ajoke-cream", name: "Ajoke Chain Bag (Cream/Beige) 💜", price: 15500, desc: "Common is boring, dare to be beautifully unique.", image: "pics6.jpg", tags: "cream beige offwhite white off-white ajoke chain strap maxi shoulder leather bag bags gold chain luxury premium statement chunky large big handle" },
    { id: "ajoke-black", name: "Ajoke Chain Bag (Classic Black) 💜", price: 15500, desc: "Common is boring, dare to be beautifully unique.", image: "pics7.jpg", tags: "black dark classic ajoke chain strap maxi shoulder leather bag bags gold chain luxury premium statement chunky large big handle corporate office sleek" },
    { id: "ajoke-winered", name: "Ajoke Chain Bag (Wine croc) 💜", price: 15500, desc: "Common is boring, dare to be beautifully unique.", image: "pics8.jpg", tags: "wine red burgundy dark red croc crocodile skin ajoke chain strap maxi shoulder leather bag bags gold chain luxury premium statement chunky large big handle maroon" },
    { id: "ajoke-silver", name: "Ajoke Chain Bag (Silver Metallic) 💜", price: 15500, desc: "Common is boring, dare to be beautifully unique.", image: "pics9.jpg", tags: "silver grey gray metallic shiny glitz ajoke chain strap maxi shoulder leather bag bags chain luxury premium statement chunky large big handle party dinner" },

    // --- GROUP 3: LEATHER TOTE BAG SERIES ---
    { id: "tote-purple", name: "Leather Tote Bag (Purple Glitter) 💜", price: 12500, desc: "Demure, cutesy. This bag sets standard trends.", image: "pics10.jpg", tags: "purple lavender violet sparkle glitter shiny leather tote large hand bag bags set clutch purses handbag big capacity school work simple aesthetic" },
    { id: "tote-pink", name: "Leather Tote Bag (Pink) 💜", price: 12500, desc: "Demure, cutesy. This bag sets standard trends.", image: "pics11.jpg", tags: "pink rose magenta fuchsia pastel leather tote large hand bag bags set clutch purses handbag big capacity school work simple aesthetic cute girly" },

    // --- GROUP 4: AYAH BAG SERIES ---
    { id: "ayah-black", name: "Ayah Bag (Black Lizard) 💜", price: 14000, desc: "Exquisite elongated structured luxury accentuation.", image: "pics12.jpg", tags: "black dark snake skin lizard texture long structure ayah handle bag bags knot classy designer structural unique weird shape luxury side cross-body crossbody" },
    { id: "ayah-yellow", name: "Ayah Bag (Yellow Chevron) 💜", price: 14000, desc: "Exquisite elongated structured luxury accentuation.", image: "pics13.jpg", tags: "yellow cream pastel beige chevron striping v patterns patterns long structure ayah handle bag bags knot bright light designer structural unique cross-body crossbody" },
    { id: "ayah-wine", name: "Ayah Bag (Wine croc) 💜", price: 14000, desc: "Exquisite elongated structured luxury accentuation.", image: "pics14.jpg", tags: "wine red burgundy deep red croc crocodile texture skin long structure ayah handle bag bags knot maroon classy designer structural unique cross-body crossbody" },
    { id: "ayah-striped", name: "Ayah Bag (Blue/White Stripes) 💜", price: 14000, desc: "Exquisite elongated structured luxury accentuation.", image: "pics15.jpg", tags: "blue white light blue striped sky patterns abstract texture lines long structure ayah handle bag bags knot designer structural unique cross-body crossbody" },

    // --- GROUP 5: PANDORA BAG SERIES ---
    { id: "pandora-red", name: "Pandora Bag (Bright Red) 💜", price: 11000, desc: "Curvy, structured profile that's giving all layout aesthetics.", image: "pics16.jpg", tags: "red bright red crimson pandora small handle shoulder mini elegant bag bags curve curved structured cute aesthetic cross-body crossbody small purse" },
    { id: "pandora-black", name: "Pandora Bag (Classic Black) 💜", price: 11000, desc: "Curvy, structured profile that's giving all layout aesthetics.", image: "pics17.jpg", tags: "black dark sleek pandora small handle shoulder mini elegant bag bags curve curved structured cute aesthetic cross-body crossbody small purse corporate night out" },
    { id: "pandora-pink", name: "Pandora Bag (Royal Blue) 💜", price: 11000, desc: "Curvy, structured profile that's giving all layout aesthetics.", image: "pics18.jpg", tags: "blue royal blue deep ocean navy pandora small handle shoulder mini elegant bag bags curve curved structured cute aesthetic cross-body crossbody small purse" },
    { id: "pandora-blue", name: "Pandora Bag (light pink) 💜", price: 11000, desc: "Curvy, structured profile that's giving all layout aesthetics.", image: "pics19.jpg", tags: "pink light pink rose peach pastel pandora small handle shoulder mini elegant bag bags curve curved structured cute aesthetic cross-body crossbody small purse girly" },

    // --- GROUP 6: ZAINNY BAG SERIES ---
    { id: "zainny-orange", name: "Zainny Bag (Orange) 💜", price: 8000, desc: "Small in size, massive on general style statement.", image: "pics24.jpg", tags: "orange bright smooth ring gold handle zainny mini clutch purse bag bags envelope small tiny micro purse underarm pochette" },
    { id: "zainny-yellow", name: "Zainny Bag (Yellow) 💜", price: 8000, desc: "Small in size, massive on general style statement.", image: "pics20.jpg", tags: "yellow bright pastel smooth ring gold handle zainny mini clutch purse bag bags envelope small tiny micro purse underarm pochette lemon" },
    { id: "zainny-black", name: "Zainny Bag (Classic Black) 💜", price: 8000, desc: "Small in size, massive on general style statement.", image: "pics25.jpg", tags: "black dark classic smooth ring gold handle zainny mini clutch purse bag bags envelope small tiny micro purse underarm pochette simple" },
    { id: "zainny-green", name: "Zainny Bag (Classic pink) 💜", price: 8000, desc: "Small in size, massive on general style statement.", image: "pics23.jpg", tags: "pink light pink rose peach pastel pandora small handle shoulder mini elegant bag bags curve curved structured cute aesthetic cross-body crossbody small purse girly" },
    { id: "zainny-burgundy", name: "Zainny Bag (Burgundy Red) 💜", price: 8000, desc: "Small in size, massive on general style statement.", image: "pics21.jpg", tags: "burgundy wine crimson dark red red smooth ring gold handle zainny mini clutch purse bag bags envelope small tiny micro purse underarm pochette maroon" },
    { id: "zainny-cream", name: "Zainny Bag (Cream/Beige) 💜", price: 8000, desc: "Small in size, massive on general style statement.", image: "pics22.jpg", tags: "cream beige offwhite white off-white smooth ring gold handle zainny mini clutch purse bag bags envelope small tiny micro purse underarm pochette light" },

    // --- GROUP 7: LAPTOP BAG SERIES ---
    { id: "laptop-navy", name: "Executive Laptop Bag (Navy Blue) 💜", price: 25000, desc: "Sleek spatial accommodation for laptops, devices, and diaries.", image: "pics26.jpg", tags: "blue navy blue dark blue corporate laptop bags executive office case handle leather briefcase documents professional computer macbook ipad work workplace large big structured device" },
    { id: "laptop-black", name: "Executive Laptop Bag (Sleek Black) 💜", price: 25000, desc: "Sleek spatial accommodation for laptops, devices, and diaries.", image: "pics27.jpg", tags: "black dark corporate laptop bags executive office case handle leather briefcase documents professional computer macbook ipad work workplace large big structured device clean" },
    { id: "laptop-wine", name: "Executive Laptop Bag (Wine Red) 💜", price: 25000, desc: "Sleek spatial accommodation for laptops, devices, and diaries.", image: "pics28.jpg", tags: "wine red burgundy deep red corporate laptop bags executive office case handle leather briefcase documents professional computer macbook ipad work workplace large big structured device maroon" },

    // --- GROUP 8: SCRUNCHED HANDLE SHOULDER BAG SERIES ---
    { id: "scrunched-yellow", name: "Scrunched Shoulder Bag (Soft Yellow) 💜", price: 10500, desc: "Trendy cloud ruched aesthetic for chic day outings.", image: "pics29.jpg", tags: "yellow lemon cream soft pastel scrunched shoulder handle cloud bag bags ruched ruffle soft fluffy gather casual cute underarm minimalist" },
    { id: "scrunched-black", name: "Scrunched Shoulder Bag (Classic Black) 💜", price: 10500, desc: "Trendy cloud ruched aesthetic for chic day outings.", image: "pics30.jpg", tags: "black dark matte scrunched shoulder handle cloud bag bags ruched ruffle soft fluffy gather casual cute underarm minimalist basic" }
];

let shoppingCart = {};

function displayProducts(productsToRender) {
    const grid = document.getElementById("productGrid");
    if (!grid) return;
    grid.innerHTML = ""; 

    if(productsToRender.length === 0) {
        grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; padding: 40px; color: #776579; font-weight:600;">No bags found matching your active search parameter.</p>`;
        return;
    }

    productsToRender.forEach(bag => {
        const currentQty = shoppingCart[bag.id] ? shoppingCart[bag.id].qty : 0;
        let controlMarkup = currentQty === 0 ? 
            `<button class="add-btn" onclick="modifyItem('${bag.id}', 1)">+ Add to Cart</button>` : 
            `<div class="qty-control">
                <button class="qty-btn" onclick="modifyItem('${bag.id}', -1)">-</button>
                <span class="qty-number">${currentQty}</span>
                <button class="qty-btn" onclick="modifyItem('${bag.id}', 1)">+</button>
             </div>`;

        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="image-wrapper"><img src="${bag.image}" alt="${bag.name}" onerror="this.onerror=null; this.src='logo.jpg.jpeg';"></div>
            <div class="product-info">
                <div>
                    <h3>${bag.name}</h3>
                    <p class="product-desc">${bag.desc}</p>
                </div>
                <div>
                    <p class="price">₦${bag.price.toLocaleString()}</p>
                    <div class="cart-controls" id="controls-${bag.id}">${controlMarkup}</div>
                </div>
            </div>`;
        grid.appendChild(card);
    });
}

function modifyItem(bagId, change) {
    const foundBag = allBags.find(b => b.id === bagId);
    if (!shoppingCart[bagId]) {
        shoppingCart[bagId] = { name: foundBag.name, price: foundBag.price, qty: 0 };
    }
    shoppingCart[bagId].qty += change;
    if (shoppingCart[bagId].qty <= 0) delete shoppingCart[bagId];
    refreshCardControl(bagId);
    refreshStickyCartBar();
}

function refreshCardControl(bagId) {
    const targetDiv = document.getElementById(`controls-${bagId}`);
    if(!targetDiv) return;
    const currentQty = shoppingCart[bagId] ? shoppingCart[bagId].qty : 0;
    targetDiv.innerHTML = currentQty === 0 ? 
        `<button class="add-btn" onclick="modifyItem('${bagId}', 1)">+ Add to Cart</button>` : 
        `<div class="qty-control">
            <button class="qty-btn" onclick="modifyItem('${bagId}', -1)">-</button>
            <span class="qty-number">${currentQty}</span>
            <button class="qty-btn" onclick="modifyItem('${bagId}', 1)">+</button>
         </div>`;
}

function refreshStickyCartBar() {
    const bar = document.getElementById("floatingCart");
    const countSpan = document.getElementById("cartCount");
    const totalSpan = document.getElementById("cartTotal");
    if (!bar || !countSpan || !totalSpan) return;
    
    let activeTotalQty = 0, activeTotalPrice = 0;
    for (let key in shoppingCart) {
        activeTotalQty += shoppingCart[key].qty;
        activeTotalPrice += (shoppingCart[key].price * shoppingCart[key].qty);
    }
    
    if(activeTotalQty > 0) {
        bar.style.display = "flex";
        countSpan.innerText = `${activeTotalQty} item${activeTotalQty > 1 ? 's' : ''}`;
        totalSpan.innerText = `₦${activeTotalPrice.toLocaleString()}`;
    } else {
        bar.style.display = "none";
    }
}

function filterProducts() {
    // Clean out special characters or punctuation, convert to lower case
    const cleanInput = document.getElementById("shopSearch").value
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()🛍️🔍💬]/g, " ");

    // Split entry by spaces into individual search terms
    const rawWords = cleanInput.split(" ").filter(word => word.trim() !== "");

    // Ignore common search filler words that don't help filtering
    const fillerWords = ["i", "want", "to", "buy", "a", "the", "and", "for", "with", "show", "me", "some"];
    const searchWords = rawWords.filter(word => !fillerWords.includes(word));

    // Show everything if field is reset or empty
    if (searchWords.length === 0) {
        displayProducts(allBags);
        return;
    }

    // Evaluate catalog items against search phrases
    const matches = allBags.filter(bag => {
        const bagName = bag.name.toLowerCase();
        const bagTags = bag.tags.toLowerCase();
        const bagDesc = bag.desc.toLowerCase();

        return searchWords.every(word => {
            // Check matching target keywords directly
            if (bagName.includes(word) || bagTags.includes(word) || bagDesc.includes(word)) {
                return true;
            }

            // Fallback checking to chop trailing plural markers
            if (word.endsWith('s') && word.length > 2) {
                const singularWord = word.slice(0, -1);
                if (bagName.includes(singularWord) || bagTags.includes(singularWord) || bagDesc.includes(singularWord)) {
                    return true;
                }
            }
            return false;
        });
    });

    displayProducts(matches);
}

// Fire initial grid build routine
displayProducts(allBags);
