// Données structurées pour la recherche
const searchData = {
    restaurants: [
        { id: 'resto1', name: 'AL OSTEDH', logo: '🍔', address: 'LAFAYETTE', hours: '10h-22h', type: 'restaurant', keywords: ['burger', 'crispy', 'lafayette', 'cheese', 'boeuf', 'escalope', 'sandwich'] },
        { id: 'resto2', name: 'CHICK\'IN', logo: '🌮', address: 'Centre Urbain Nord', hours: '11h-23h', type: 'restaurant', keywords: ['tacos', 'burrito', 'frenchy', 'poulet', 'burger', 'maple', 'sriracha'] },
        { id: 'resto3', name: 'Poisson & Cie', logo: '🐟', address: 'La Marsa', hours: '12h-22h', type: 'restaurant', keywords: ['poisson', 'couscous', 'paella', 'fruits de mer', 'grillé'] }
    ],
    plats: [
        // Burgers AL OSTEDH
        { name: 'Burger Crispy', resto: 'AL OSTEDH', price: '17,5 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'crispy', 'chicken', 'cheddar', 'frites'] },
        { name: 'Burger Classique', resto: 'AL OSTEDH', price: '18,6 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'classique', 'steak', 'cheddar', 'frites'] },
        { name: 'Burger Mushroom Beef', resto: 'AL OSTEDH', price: '21,9 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'mushroom', 'champignon', 'creme', 'steak', 'cheddar', 'frites'] },
        { name: 'Truffe Burger Beef', resto: 'AL OSTEDH', price: '23 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'truffe', 'champignon', 'creme', 'steak', 'cheddar', 'frites'] },
        { name: 'Burger Super Crispy', resto: 'AL OSTEDH', price: '24,1 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'super', 'crispy', 'triple', 'chicken', 'cheddar', 'frites'] },
        { name: 'Burger Double Beef', resto: 'AL OSTEDH', price: '28,5 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'double', 'beef', '300g', 'steak', 'cheddar', 'frites'] },
        
        // Sandwichs escalope AL OSTEDH
        { name: 'Spécial escalope', resto: 'AL OSTEDH', price: '8,500 DT', logo: '🥪', category: 'sandwich', type: 'plat', keywords: ['escalope', 'sandwich', 'pané', 'frites', 'base'] },
        { name: 'Spécial escalope + Gruyère', resto: 'AL OSTEDH', price: '9,900 DT', logo: '🧀', category: 'sandwich', type: 'plat', keywords: ['escalope', 'gruyère', 'fromage', 'sandwich', 'frites'] },
        { name: 'Spécial escalope + Pepperoni', resto: 'AL OSTEDH', price: '9,900 DT', logo: '🍖', category: 'sandwich', type: 'plat', keywords: ['escalope', 'pepperoni', 'épicé', 'sandwich', 'frites'] },
        { name: 'Spécial escalope + steak haché dinde', resto: 'AL OSTEDH', price: '9,900 DT', logo: '🦃', category: 'sandwich', type: 'plat', keywords: ['escalope', 'steak', 'dinde', 'sandwich', 'frites'] },
        { name: 'Spécial escalope + raclette', resto: 'AL OSTEDH', price: '9,900 DT', logo: '🧀', category: 'sandwich', type: 'plat', keywords: ['escalope', 'raclette', 'fromage', 'fondant', 'sandwich'] },
        { name: 'Spécial escalope + cheddar Irlandais', resto: 'AL OSTEDH', price: '9,900 DT', logo: '🇮🇪', category: 'sandwich', type: 'plat', keywords: ['escalope', 'cheddar', 'irlandais', 'fromage', 'sandwich'] },
        { name: 'Spécial escalope + mozzarella', resto: 'AL OSTEDH', price: '9,900 DT', logo: '🥛', category: 'sandwich', type: 'plat', keywords: ['escalope', 'mozzarella', 'fromage', 'filant', 'sandwich'] },
        
        // Pizza AL OSTEDH
        { name: 'Pizza 4 choix big max', resto: 'AL OSTEDH', price: '38,5 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', '4 choix', 'big max', 'spicy', '6 fromages', 'pepperoni', 'jambon', 'thon', 'crispy'] },
        { name: 'Pizza big max Thon / pepperoni', resto: 'AL OSTEDH', price: '33 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', 'big max', 'thon', 'pepperoni', 'spicy', '6 fromages'] },
        { name: 'Pizza Big jambon fumé & crispy', resto: 'AL OSTEDH', price: '38,5 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', 'big', 'jambon', 'fumé', 'crispy', 'spicy', '6 fromages'] },
        
        // CHICK'IN (Tacos & Burrito & Burger)
        { name: 'Frenchy Tacos', resto: 'CHICK\'IN', price: '22 DT', logo: '🌮', category: 'tacos', type: 'plat', keywords: ['tacos', 'frenchy', 'poulet', 'tenders', 'lava', 'kewpie'] },
        { name: 'Cheesy Burrito', resto: 'CHICK\'IN', price: '25 DT', logo: '🌯', category: 'tacos', type: 'plat', keywords: ['burrito', 'cheesy', 'poulet', 'cheddar', 'mozzarella', 'frite', 'boisson'] },
        { name: 'Burger Maple Sriracha', resto: 'CHICK\'IN', price: '14,4 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'maple', 'sriracha', 'poulet', 'pané', 'épicé', 'sucré', 'cheddar', 'kewpie'] },
        
        // Poisson & Cie
        { name: 'Poisson Grillé', resto: 'Poisson & Cie', price: '35 DT', logo: '🐟', category: 'fish', type: 'plat', keywords: ['poisson', 'grillé'] },
        { name: 'Couscous Poisson', resto: 'Poisson & Cie', price: '38 DT', logo: '🍚', category: 'rice', type: 'plat', keywords: ['couscous', 'poisson'] },
        { name: 'Paella Fruits de Mer', resto: 'Poisson & Cie', price: '42 DT', logo: '🥘', category: 'rice', type: 'plat', keywords: ['paella', 'fruits de mer'] }
    ]
};

let selectedSuggestionIndex = -1;

// Catégories
const categoryKeywords = {
    'pizza': ['pizza', 'margherita', 'pepperoni', '4 choix', 'big max', 'spicy', 'fromages', 'jambon', 'thon', 'crispy', 'fumé'],
    'burger': ['burger', 'crispy', 'boeuf', 'cheese', 'mushroom', 'truffe', 'double', 'maple', 'sriracha'],
    'sandwich': ['sandwich', 'panini', 'baguette', 'pain', 'escalope'],
    'tacos': ['tacos', 'burrito', 'frenchy', 'lava', 'kewpie', 'cheddar'],
    'fish': ['poisson', 'fish', 'fruits de mer'],
    'rice': ['riz', 'couscous', 'paella'],
    'salad': ['salade', 'salad', 'mezzé', 'taboulé']
};

// ===== SYSTÈME DE VÉRIFICATION DES HORAIRES =====
function getTunisiaTime() {
    let now = new Date();
    let tunisTime = new Date(now.toLocaleString("en-US", {timeZone: "Africa/Tunis"}));
    return tunisTime;
}

function isRestaurantOpen(hoursString) {
    let hoursMatch = hoursString.match(/(\d+)h[-\s](\d+)h/);
    if (!hoursMatch) return true;
    
    let openHour = parseInt(hoursMatch[1]);
    let closeHour = parseInt(hoursMatch[2]);
    
    let now = getTunisiaTime();
    let currentHour = now.getHours();
    let currentMinutes = now.getMinutes();
    let currentTime = currentHour + (currentMinutes / 60);
    
    return (currentTime >= openHour && currentTime < closeHour);
}

function updateRestaurantsStatus() {
    let restaurants = document.querySelectorAll('.restaurant-section');
    
    restaurants.forEach(restaurant => {
        let hoursElement = restaurant.querySelector('.restaurant-header p');
        let hoursText = hoursElement.textContent;
        
        let hoursMatch = hoursText.match(/(\d+)h[-\s](\d+)h/);
        
        if (hoursMatch) {
            let isOpen = isRestaurantOpen(hoursMatch[0]);
            let statusElement = restaurant.querySelector('.restaurant-status');
            
            if (!statusElement) {
                statusElement = document.createElement('div');
                statusElement.className = 'restaurant-status';
                restaurant.querySelector('.restaurant-header').appendChild(statusElement);
            }
            
            if (isOpen) {
                statusElement.innerHTML = `<span class="open-status">🟢 Ouvert jusqu'à ${hoursMatch[2]}h</span>`;
                enableRestaurantButtons(restaurant);
            } else {
                statusElement.innerHTML = `<span class="closed-status">🔴 Fermé • Réouverture ${hoursMatch[1]}h</span>`;
                disableRestaurantButtons(restaurant);
            }
        }
    });
}

function enableRestaurantButtons(restaurant) {
    restaurant.querySelectorAll('.btn-whatsapp-direct, .btn-add-to-cart').forEach(btn => {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
        btn.style.cursor = 'pointer';
    });
    
    let closedMessage = restaurant.querySelector('.closed-message');
    if (closedMessage) closedMessage.remove();
}

function disableRestaurantButtons(restaurant) {
    restaurant.querySelectorAll('.btn-whatsapp-direct, .btn-add-to-cart').forEach(btn => {
        btn.style.opacity = '0.5';
        btn.style.pointerEvents = 'none';
        btn.style.cursor = 'not-allowed';
    });
    
    if (!restaurant.querySelector('.closed-message')) {
        let message = document.createElement('div');
        message.className = 'closed-message';
        
        let hoursMatch = restaurant.querySelector('.restaurant-header p').textContent.match(/(\d+)h[-\s](\d+)h/);
        let openHour = hoursMatch ? hoursMatch[1] : '';
        
        message.innerHTML = `<span>⏰ Restaurant fermé • Réouverture à ${openHour}h</span>`;
        restaurant.querySelector('.menu-grid').insertAdjacentElement('beforebegin', message);
    }
}

// Fonction pour scroller vers le début du restaurant
function scrollToRestaurant(restaurant, platName = null) {
    if (!restaurant) return;
    
    restaurant.scrollIntoView({ behavior: 'smooth', block: 'start' });
    restaurant.style.transition = 'box-shadow 0.3s';
    restaurant.style.boxShadow = '0 0 0 3px #ff4757';
    
    if (platName) {
        setTimeout(() => {
            let plats = restaurant.querySelectorAll('.plat-card');
            plats.forEach(plat => {
                let nomPlat = plat.querySelector('h3').textContent;
                if (nomPlat.toLowerCase().includes(platName.toLowerCase())) {
                    plat.style.transition = 'box-shadow 0.3s';
                    plat.style.boxShadow = '0 0 0 3px #25D366';
                    setTimeout(() => plat.style.boxShadow = '', 2000);
                }
            });
        }, 500);
    }
    
    setTimeout(() => restaurant.style.boxShadow = '', 2000);
}

// ===== FILTRER PAR CATÉGORIE =====
function filterByCategory(category) {
    document.querySelectorAll('.category-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`.category-item[data-category="${category}"]`).classList.add('active');
    
    document.body.className = '';
    document.body.classList.add(`filtering-${category}`);
    
    if (category === 'all') {
        document.querySelectorAll('.plat-card, .restaurant-section, .special-section').forEach(el => el.style.display = 'block');
        document.getElementById('noResult')?.remove();
        updateRestaurantsStatus();
        return;
    }
    
    let resultCount = 0;
    
    // Filtrer les cartes normales
    document.querySelectorAll('.menu-grid .plat-card').forEach(plat => {
        let platCategory = plat.getAttribute('data-category');
        
        if (platCategory === category) {
            plat.style.display = 'block';
            resultCount++;
        } else {
            plat.style.display = 'none';
        }
    });
    
    // Gérer la section spéciale
    document.querySelectorAll('.special-section').forEach(section => {
        let hasVisible = false;
        section.querySelectorAll('.plat-card').forEach(plat => {
            let platCategory = plat.getAttribute('data-category');
            if (platCategory === category) {
                plat.style.display = 'block';
                hasVisible = true;
                resultCount++;
            } else {
                plat.style.display = 'none';
            }
        });
        
        section.style.display = hasVisible ? 'block' : 'none';
    });
    
    document.querySelectorAll('.restaurant-section').forEach(resto => {
        let hasVisible = resto.querySelectorAll('.plat-card[style*="block"]').length > 0;
        if (hasVisible) {
            resto.style.display = 'block';
            updateRestaurantsStatus();
        } else {
            resto.style.display = 'none';
        }
    });
    
    document.getElementById('noResult')?.remove();
    if (resultCount === 0) {
        let categoryName = document.querySelector(`.category-item[data-category="${category}"] span`).textContent;
        let noResult = document.createElement('div');
        noResult.id = 'noResult';
        noResult.className = 'no-result';
        noResult.innerHTML = `<span>😕</span><p>Aucun plat dans la catégorie "${categoryName}"</p>`;
        document.querySelector('.container').prepend(noResult);
    }
}

// ===== FILTRER PAR RESTAURANT =====
function filterByRestaurant(restoId) {
    document.getElementById('searchInput').value = '';
    document.getElementById('suggestionsList')?.classList.remove('show');
    
    document.querySelectorAll('.restaurant-section, .plat-card, .special-section').forEach(el => el.style.display = 'block');
    let targetResto = document.getElementById(restoId);
    if (targetResto) {
        scrollToRestaurant(targetResto);
        updateRestaurantsStatus();
    }
}

// ===== FILTRER PAR PLAT =====
function filterByPlat(platName) {
    document.getElementById('searchInput').value = platName;
    document.getElementById('suggestionsList')?.classList.remove('show');
    
    document.querySelectorAll('.plat-card, .special-section').forEach(plat => plat.style.display = 'block');
    
    let targetResto = null;
    document.querySelectorAll('.restaurant-section').forEach(resto => {
        let plats = resto.querySelectorAll('.plat-card');
        plats.forEach(plat => {
            if (plat.querySelector('h3').textContent.toLowerCase().includes(platName.toLowerCase())) {
                targetResto = resto;
            }
        });
    });
    
    if (targetResto) scrollToRestaurant(targetResto, platName);
    
    setTimeout(() => {
        document.querySelectorAll('.plat-card').forEach(plat => {
            let nomPlat = plat.querySelector('h3').textContent.toLowerCase();
            let categorie = plat.getAttribute('data-category').toLowerCase();
            
            let matchMotsCles = false;
            searchData.plats.forEach(p => {
                if (p.name.toLowerCase() === nomPlat) {
                    if (p.keywords.some(keyword => keyword.toLowerCase().includes(platName.toLowerCase()))) {
                        matchMotsCles = true;
                    }
                }
            });
            
            let match = nomPlat.includes(platName.toLowerCase()) || 
                        categorie.includes(platName.toLowerCase()) || 
                        matchMotsCles;
            
            plat.style.display = match ? 'block' : 'none';
        });
        
        document.querySelectorAll('.special-section').forEach(section => {
            let hasVisible = section.querySelectorAll('.plat-card[style*="block"]').length > 0;
            section.style.display = hasVisible ? 'block' : 'none';
        });
        
        document.querySelectorAll('.restaurant-section').forEach(resto => {
            let hasVisible = resto.querySelectorAll('.plat-card[style*="block"]').length > 0;
            resto.style.display = hasVisible ? 'block' : 'none';
            if (hasVisible) updateRestaurantsStatus();
        });
    }, 600);
}

// ===== SUGGESTIONS DE RECHERCHE =====
function searchSuggestions() {
    let input = document.getElementById('searchInput').value.toLowerCase().trim();
    let suggestionsList = document.getElementById('suggestionsList');
    if (input.length < 1) return suggestionsList?.classList.remove('show');
    
    let suggestions = [];
    
    searchData.restaurants.forEach(resto => {
        if ([resto.name, resto.address, ...resto.keywords].some(k => k.toLowerCase().includes(input))) {
            suggestions.push({ type: 'restaurant', icon: resto.logo, title: resto.name, subtitle: `📍 ${resto.address} • ${resto.hours}`, badge: 'Restaurant', action: `filterByRestaurant('${resto.id}')` });
        }
    });
    
    searchData.plats.forEach(plat => {
        if ([plat.name, ...plat.keywords].some(k => k.toLowerCase().includes(input))) {
            suggestions.push({ type: 'plat', icon: plat.logo, title: plat.name, subtitle: plat.resto, price: plat.price, badge: 'Plat', action: `filterByPlat('${plat.name}')` });
        }
    });
    
    displaySuggestions(suggestions.slice(0, 8));
}

function displaySuggestions(suggestions) {
    let list = document.getElementById('suggestionsList');
    if (!list) {
        list = document.createElement('div');
        list.id = 'suggestionsList';
        list.className = 'suggestions-list';
        document.querySelector('.search-container').appendChild(list);
    }
    
    list.innerHTML = suggestions.length ? suggestions.map(s => `
        <div class="suggestion-item" onclick="${s.action}">
            <div class="suggestion-icon">${s.icon}</div>
            <div class="suggestion-content">
                <div class="suggestion-title">${s.title} <span class="suggestion-badge ${s.type}">${s.badge}</span></div>
                <div class="suggestion-subtitle">${s.subtitle} ${s.price ? `<span>${s.price}</span>` : ''}</div>
            </div>
            ${s.price ? `<div class="suggestion-price">${s.price}</div>` : ''}
        </div>`).join('') : 
        `<div class="suggestion-item"><div class="suggestion-icon">🔍</div><div class="suggestion-content"><div class="suggestion-title">Aucun résultat</div></div></div>`;
    
    list.classList.add('show');
}

// ===== RECHERCHE PRINCIPALE =====
function searchRestaurant() {
    let input = document.getElementById('searchInput').value.toLowerCase().trim();
    let restaurants = document.querySelectorAll('.restaurant-section');
    let resultCount = 0;
    
    document.getElementById('noResult')?.remove();
    
    if (input === '') {
        document.querySelectorAll('.plat-card, .special-section, .restaurant-section').forEach(el => el.style.display = 'block');
        updateRestaurantsStatus();
        return;
    }
    
    restaurants.forEach(resto => {
        let nomResto = resto.querySelector('h2').textContent.toLowerCase();
        let adresse = resto.querySelector('.restaurant-header p').textContent.toLowerCase();
        let aUnResultat = false;
        
        // Chercher dans les cartes normales
        let platsNormaux = resto.querySelectorAll('.menu-grid .plat-card');
        platsNormaux.forEach(p => {
            let nom = p.querySelector('h3').textContent.toLowerCase();
            let desc = p.querySelector('.plat-description').textContent.toLowerCase();
            let prix = p.querySelector('.prix').textContent.toLowerCase();
            let categorie = p.getAttribute('data-category').toLowerCase();
            
            let matchMotsCles = false;
            searchData.plats.forEach(plat => {
                if (plat.name.toLowerCase() === p.querySelector('h3').textContent.toLowerCase()) {
                    if (plat.keywords.some(keyword => keyword.toLowerCase().includes(input))) {
                        matchMotsCles = true;
                    }
                }
            });
            
            let match = nom.includes(input) || 
                       desc.includes(input) || 
                       prix.includes(input) || 
                       categorie.includes(input) || 
                       matchMotsCles;
            
            p.style.display = match ? 'block' : 'none';
            if (match) aUnResultat = true;
        });
        
        // Chercher dans la section spéciale escalope
        let specialSection = resto.querySelector('.special-section');
        if (specialSection) {
            let platsSpeciaux = specialSection.querySelectorAll('.plat-card');
            let aUnResultatSpecial = false;
            
            platsSpeciaux.forEach(p => {
                let nom = p.querySelector('h3').textContent.toLowerCase();
                let desc = p.querySelector('.plat-description').textContent.toLowerCase();
                let prix = p.querySelector('.prix').textContent.toLowerCase();
                let categorie = p.getAttribute('data-category').toLowerCase();
                
                let matchMotsCles = false;
                searchData.plats.forEach(plat => {
                    if (plat.name.toLowerCase() === p.querySelector('h3').textContent.toLowerCase()) {
                        if (plat.keywords.some(keyword => keyword.toLowerCase().includes(input))) {
                            matchMotsCles = true;
                        }
                    }
                });
                
                let match = nom.includes(input) || 
                           desc.includes(input) || 
                           prix.includes(input) || 
                           categorie.includes(input) || 
                           matchMotsCles;
                
                p.style.display = match ? 'block' : 'none';
                if (match) {
                    aUnResultatSpecial = true;
                    aUnResultat = true;
                }
            });
            
            specialSection.style.display = aUnResultatSpecial ? 'block' : 'none';
        }
        
        if (nomResto.includes(input) || adresse.includes(input)) {
            aUnResultat = true;
            resto.querySelectorAll('.plat-card').forEach(p => p.style.display = 'block');
            if (specialSection) specialSection.style.display = 'block';
        }
        
        if (aUnResultat) {
            resto.style.display = 'block';
            resultCount++;
        } else {
            resto.style.display = 'none';
        }
    });
    
    if (resultCount === 0 && input) {
        let noResult = document.createElement('div');
        noResult.id = 'noResult';
        noResult.className = 'no-result';
        noResult.innerHTML = `<span>😕</span><p>Aucun résultat pour "${input}"</p>`;
        document.querySelector('.container').prepend(noResult);
    }
    
    document.querySelector('.category-item[data-category="all"]').classList.add('active');
    
    updateRestaurantsStatus();
}

// ===== SYSTÈME DE CHOIX POUR PIZZAS =====
let currentProduct = {
    name: '',
    price: '',
    resto: '',
    mode: 'direct'
};

function showChoiceModal(productName, productPrice, restoName, mode = 'direct') {
    currentProduct = {
        name: productName,
        price: productPrice,
        resto: restoName,
        mode: mode
    };
    
    let modal = document.getElementById('choiceModal');
    let productInfo = document.getElementById('modalProductInfo');
    
    productInfo.innerHTML = `<strong>${productName}</strong> - ${productPrice}`;
    modal.style.display = 'block';
    
    document.body.style.overflow = 'hidden';
}

function closeChoiceModal() {
    document.getElementById('choiceModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectChoice(choice) {
    closeChoiceModal();
    
    if (currentProduct.mode === 'cart') {
        addToCart(`${currentProduct.name} (${choice})`, currentProduct.price, 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788915/pizza_bigmax_thon_pepperoni_jqgogy.png', currentProduct.resto);
    } else {
        let message = `Bonjour je souhaite commander ${currentProduct.name} (${currentProduct.price}) avec ${choice} chez ${currentProduct.resto}. Merci de me confirmer la disponibilité et les frais de livraison.`;
        let encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/21651924385?text=${encodedMessage}`, '_blank');
    }
}

// ===== SYSTÈME DE PANIER =====
let cart = [];
const MAX_CART_ITEMS = 5;

function loadCart() {
    let savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function addToCart(productName, productPrice, productImage, restoName, event) {
    if (event && event.target) {
        let button = event.target.closest('.btn-add-to-cart');
        if (button) {
            button.style.transform = 'scale(0.95)';
            button.style.backgroundColor = '#25D366';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                button.style.backgroundColor = '#ff4757';
            }, 200);
        }
    }
    
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems >= MAX_CART_ITEMS) {
        showLimitModal();
        return false;
    }
    
    let existingItem = cart.find(item => item.name === productName && item.resto === restoName);
    
    if (existingItem) {
        if (totalItems + 1 > MAX_CART_ITEMS) {
            showLimitModal();
            return false;
        }
        existingItem.quantity += 1;
    } else {
        let newId = 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        
        cart.push({
            id: newId,
            name: productName,
            price: parseFloat(productPrice.replace(',', '.').replace(' DT', '')),
            priceDisplay: productPrice,
            image: productImage,
            resto: restoName,
            quantity: 1
        });
    }
    
    saveCart();
    animateCart();
    
    let panel = document.getElementById('cartPanel');
    if (!panel.classList.contains('show')) {
        panel.classList.add('show');
    }
    
    return true;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    
    if (cart.length === 0) {
        setTimeout(() => {
            document.getElementById('cartPanel').classList.remove('show');
        }, 1000);
    }
}

function updateQuantity(productId, change) {
    let itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;
    
    let item = cart[itemIndex];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    let newTotal = totalItems + change;
    
    if (newTotal > MAX_CART_ITEMS) {
        showLimitModal();
        return;
    }
    
    if (item.quantity + change <= 0) {
        removeFromCart(productId);
    } else {
        item.quantity += change;
        saveCart();
    }
}

function toggleCart() {
    let panel = document.getElementById('cartPanel');
    panel.classList.toggle('show');
    updateCartDisplay();
}

function updateCartDisplay() {
    let cartItems = document.getElementById('cartItems');
    let cartCount = document.getElementById('cartCount');
    let cartTotal = document.getElementById('cartTotal');
    let checkoutBtn = document.getElementById('checkoutBtn');
    
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Votre panier est vide</p>';
        cartTotal.textContent = '0 DT';
        checkoutBtn.disabled = true;
        return;
    }
    
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(1).replace('.', ',') + ' DT';
    checkoutBtn.disabled = false;
    
    cartItems.innerHTML = cart.map(item => {
        return `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-img" style="background-image: url('${getProductImage(item.name)}');"></div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-resto">${item.resto}</div>
                <div class="cart-item-price">${item.priceDisplay}</div>
            </div>
            <div class="cart-item-actions">
                <button class="cart-qty-btn minus" onclick="updateQuantity('${item.id}', -1)">-</button>
                <span class="cart-item-qty">${item.quantity}</span>
                <button class="cart-qty-btn plus" onclick="updateQuantity('${item.id}', 1)">+</button>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `}).join('');
}

function getProductImage(productName) {
    // AL OSTEDH
    if (productName.includes('Burger Crispy')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788845/burger_crispy_zu7tsq.png';
    if (productName.includes('Burger Classique')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788838/alostedh_zw5zjf.png';
    if (productName.includes('Burger Double Beef')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788845/burger_double_beef_hn1rtw.png';
    if (productName.includes('Burger Super Crispy')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788846/burger_super_cripsy_w5238p.png';
    if (productName.includes('Burger Mushroom Beef')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788843/burger_mushroom_beef_rmrvxl.png';
    if (productName.includes('Truffe Burger Beef')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788938/truffe_burger_beef_xqzvro.png';
    if (productName.includes('Pizza 4 choix')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788911/pizza_4choix_bigmax_efwgr9.png';
    if (productName.includes('Pizza big max Thon')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788915/pizza_bigmax_thon_pepperoni_jqgogy.png';
    if (productName.includes('Pizza Big jambon')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788918/Pizza_Big_jambon_fum%C3%A9_et_crispy_umdemv.png';
    
    // Sandwichs escalope
    if (productName.includes('Spécial escalope + Gruyère')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773900001/escalope_gruyere.png';
    if (productName.includes('Spécial escalope + Pepperoni')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773900002/escalope_pepperoni.png';
    if (productName.includes('Spécial escalope + steak haché dinde')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773900003/escalope_dinde.png';
    if (productName.includes('Spécial escalope + raclette')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773900004/escalope_raclette.png';
    if (productName.includes('Spécial escalope + cheddar Irlandais')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773900005/escalope_cheddar.png';
    if (productName.includes('Spécial escalope + mozzarella')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773900006/escalope_mozza.png';
    if (productName.includes('Spécial escalope') && !productName.includes('+')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773900000/escalope_base.png';
    
    // CHICK'IN
    if (productName.includes('Frenchy Tacos')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773804616/frenshy_tacos_c83sdp.png';
    if (productName.includes('Cheesy Burrito')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773804874/cheesy_buritto_xtij9i.png';
    if (productName.includes('Burger Maple Sriracha')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774095344/Burger_Maple_sriracha_hcj6qu.png';
    
    // Poisson & Cie
    if (productName.includes('Poisson Grillé')) return 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=100';
    if (productName.includes('Couscous Poisson')) return 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=100';
    if (productName.includes('Paella')) return 'https://images.unsplash.com/photo-1627308595171-d1b5d6712b3d?w=100';
    
    return '';
}

function animateCart() {
    let cartFloat = document.getElementById('cartFloating');
    cartFloat.style.transform = 'scale(1.2)';
    cartFloat.style.transition = 'transform 0.2s';
    setTimeout(() => {
        cartFloat.style.transform = 'scale(1)';
    }, 200);
}

function showLimitModal() {
    document.getElementById('limitModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLimitModal() {
    document.getElementById('limitModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function checkoutCart() {
    if (cart.length === 0) return;
    
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let totalFormatted = total.toFixed(1).replace('.', ',') + ' DT';
    
    let message = "Bonjour je souhaite commander :\n\n";
    
    cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} - ${item.priceDisplay}\n`;
    });
    
    message += `\nTotal: ${totalFormatted}`;
    message += `\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
    
    let encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/21651924385?text=${encodedMessage}`, '_blank');
    
    cart = [];
    saveCart();
    toggleCart();
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    let searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', () => { searchSuggestions(); searchRestaurant(); });
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') document.getElementById('suggestionsList')?.classList.remove('show');
    });
    
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !document.getElementById('suggestionsList')?.contains(e.target)) {
            document.getElementById('suggestionsList')?.classList.remove('show');
        }
    });
    
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', () => {
            filterByCategory(item.dataset.category);
            document.getElementById('searchInput').value = '';
            document.getElementById('suggestionsList')?.classList.remove('show');
        });
    });
    
    document.querySelector('.see-all')?.addEventListener('click', () => {
        filterByCategory('all');
        document.getElementById('searchInput').value = '';
        document.getElementById('suggestionsList')?.classList.remove('show');
    });
    
    searchRestaurant();
    
    setInterval(updateRestaurantsStatus, 60000);
    
    loadCart();
    
    document.addEventListener('click', function(event) {
        let panel = document.getElementById('cartPanel');
        let float = document.getElementById('cartFloating');
        
        if (!panel.contains(event.target) && !float.contains(event.target) && panel.classList.contains('show')) {
            panel.classList.remove('show');
        }
    });
});
