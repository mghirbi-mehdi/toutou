// Données structurées pour la recherche
const searchData = {
    restaurants: [
        { id: 'resto1', name: 'AL OSTEDH', logo: '🍔', address: 'LAFAYETTE', hours: '10h-22h', type: 'restaurant', keywords: ['burger', 'crispy', 'lafayette', 'cheese', 'boeuf'] },
        { id: 'resto2', name: 'Saveurs d\'Orient', logo: '🥙', address: 'Ariana', hours: '11h-23h', type: 'restaurant', keywords: ['chawarma', 'mezzé', 'oriental', 'libanais', 'grill'] },
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
        
        // Pizza AL OSTEDH
        { name: 'Pizza 4 choix big max', resto: 'AL OSTEDH', price: '38,5 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', '4 choix', 'big max', 'spicy', '6 fromages', 'pepperoni', 'jambon', 'thon', 'crispy'] },
        { name: 'Pizza big max Thon / pepperoni', resto: 'AL OSTEDH', price: '33 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', 'big max', 'thon', 'pepperoni', 'spicy', '6 fromages'] },
        { name: 'Pizza Big jambon fumé & crispy', resto: 'AL OSTEDH', price: '38,5 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', 'big', 'jambon', 'fumé', 'crispy', 'spicy', '6 fromages'] },
        
        // Saveurs d'Orient
        { name: 'Chawarma Poulet', resto: 'Saveurs d\'Orient', price: '12 DT', logo: '🥙', category: 'chicken', type: 'plat', keywords: ['chawarma', 'poulet'] },
        { name: 'Assiette Mezzé', resto: 'Saveurs d\'Orient', price: '28 DT', logo: '🥗', category: 'salad', type: 'plat', keywords: ['mezzé', 'assiette', 'hoummous'] },
        { name: 'Mix Grill', resto: 'Saveurs d\'Orient', price: '32 DT', logo: '🍢', category: 'chicken', type: 'plat', keywords: ['grill', 'mix', 'brochettes'] },
        
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
    'burger': ['burger', 'crispy', 'boeuf', 'cheese', 'mushroom', 'truffe', 'double'],
    'chicken': ['poulet', 'chicken', 'chawarma'],
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
    restaurant.querySelectorAll('.btn-whatsapp').forEach(btn => {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
        btn.style.backgroundColor = '#25D366';
        btn.style.cursor = 'pointer';
    });
    
    let closedMessage = restaurant.querySelector('.closed-message');
    if (closedMessage) closedMessage.remove();
}

function disableRestaurantButtons(restaurant) {
    restaurant.querySelectorAll('.btn-whatsapp').forEach(btn => {
        btn.style.opacity = '0.5';
        btn.style.pointerEvents = 'none';
        btn.style.backgroundColor = '#dc3545';
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

// Filtrer par catégorie
function filterByCategory(category) {
    document.querySelectorAll('.category-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`.category-item[data-category="${category}"]`).classList.add('active');
    
    if (category === 'all') {
        document.querySelectorAll('.plat-card, .restaurant-section').forEach(el => el.style.display = 'block');
        document.getElementById('noResult')?.remove();
        updateRestaurantsStatus();
        return;
    }
    
    let resultCount = 0;
    
    document.querySelectorAll('.plat-card').forEach(plat => {
        let platCategory = plat.getAttribute('data-category');
        
        if (platCategory === category) {
            plat.style.display = 'block';
            resultCount++;
        } else {
            plat.style.display = 'none';
        }
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

// Filtrer par restaurant
function filterByRestaurant(restoId) {
    document.getElementById('searchInput').value = '';
    document.getElementById('suggestionsList')?.classList.remove('show');
    
    document.querySelectorAll('.restaurant-section, .plat-card').forEach(el => el.style.display = 'block');
    let targetResto = document.getElementById(restoId);
    if (targetResto) {
        scrollToRestaurant(targetResto);
        updateRestaurantsStatus();
    }
}

// Filtrer par plat
function filterByPlat(platName) {
    document.getElementById('searchInput').value = platName;
    document.getElementById('suggestionsList')?.classList.remove('show');
    
    document.querySelectorAll('.plat-card').forEach(plat => plat.style.display = 'block');
    
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
            plat.style.display = nomPlat.includes(platName.toLowerCase()) ? 'block' : 'none';
        });
        
        document.querySelectorAll('.restaurant-section').forEach(resto => {
            let hasVisible = resto.querySelectorAll('.plat-card[style*="block"]').length > 0;
            resto.style.display = hasVisible ? 'block' : 'none';
            if (hasVisible) updateRestaurantsStatus();
        });
    }, 600);
}

// Suggestions de recherche
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

// Recherche principale
function searchRestaurant() {
    let input = document.getElementById('searchInput').value.toLowerCase().trim();
    let restaurants = document.querySelectorAll('.restaurant-section');
    let resultCount = 0;
    
    document.getElementById('noResult')?.remove();
    
    restaurants.forEach(resto => {
        let nomResto = resto.querySelector('h2').textContent.toLowerCase();
        let adresse = resto.querySelector('.restaurant-header p').textContent.toLowerCase();
        let plats = resto.querySelectorAll('.plat-card');
        
        if (nomResto.includes(input) || adresse.includes(input)) {
            resto.style.display = 'block';
            plats.forEach(p => p.style.display = 'block');
            resultCount++;
        } else {
            let hasMatch = false;
            plats.forEach(p => {
                let nom = p.querySelector('h3').textContent.toLowerCase();
                let desc = p.querySelector('.plat-description').textContent.toLowerCase();
                let match = nom.includes(input) || desc.includes(input) || p.querySelector('.prix').textContent.toLowerCase().includes(input);
                p.style.display = match ? 'block' : 'none';
                if (match) hasMatch = true;
            });
            resto.style.display = hasMatch ? 'block' : 'none';
            if (hasMatch) resultCount++;
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
    document.querySelectorAll('.category-item:not([data-category="all"])').forEach(i => i.classList.remove('active'));
    
    updateRestaurantsStatus();
}

// ===== SYSTÈME DE CHOIX POUR PIZZAS =====
let currentProduct = {
    name: '',
    price: '',
    resto: ''
};

// Afficher le modal de choix
function showChoiceModal(productName, productPrice, restoName) {
    currentProduct = {
        name: productName,
        price: productPrice,
        resto: restoName
    };
    
    let modal = document.getElementById('choiceModal');
    let productInfo = document.getElementById('modalProductInfo');
    
    productInfo.innerHTML = `<strong>${productName}</strong> - ${productPrice}`;
    modal.style.display = 'block';
    
    document.body.style.overflow = 'hidden';
}

// Fermer le modal
function closeChoiceModal() {
    document.getElementById('choiceModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Sélectionner une option
function selectChoice(choice) {
    closeChoiceModal();
    // Ajouter au panier avec le choix
    addToCart(`${currentProduct.name} (${choice})`, currentProduct.price, 'pizza_bigmax_thon_pepperoni.PNG', currentProduct.resto);
}

// ===== SYSTÈME DE PANIER =====
let cart = [];
const MAX_CART_ITEMS = 5;

// Charger le panier depuis localStorage
function loadCart() {
    let savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Sauvegarder le panier dans localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Ajouter au panier
function addToCart(productName, productPrice, productImage, restoName) {
    // Vérifier la limite du panier
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems >= MAX_CART_ITEMS) {
        showLimitModal();
        return false;
    }
    
    // Vérifier si le produit existe déjà (avec le même nom et resto)
    let existingItem = cart.find(item => item.name === productName && item.resto === restoName);
    
    if (existingItem) {
        // Vérifier la limite avec la nouvelle quantité
        if (totalItems + 1 > MAX_CART_ITEMS) {
            showLimitModal();
            return false;
        }
        existingItem.quantity += 1;
    } else {
        // Créer un ID unique
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
    
    // Afficher le panier automatiquement
    let panel = document.getElementById('cartPanel');
    if (!panel.classList.contains('show')) {
        panel.classList.add('show');
    }
    
    return true;
}

// Retirer du panier
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    
    // Si le panier devient vide, fermer le panier après 1 seconde
    if (cart.length === 0) {
        setTimeout(() => {
            document.getElementById('cartPanel').classList.remove('show');
        }, 1000);
    }
}

// Modifier la quantité
function updateQuantity(productId, change) {
    // Trouver l'index de l'article
    let itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;
    
    let item = cart[itemIndex];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    let newTotal = totalItems + change;
    
    // Vérifier la limite maximum
    if (newTotal > MAX_CART_ITEMS) {
        showLimitModal();
        return;
    }
    
    // Vérifier si on peut ajouter/retirer
    if (item.quantity + change <= 0) {
        // Supprimer l'article si quantité devient 0
        removeFromCart(productId);
    } else {
        // Mettre à jour la quantité
        item.quantity += change;
        saveCart();
    }
}

// Afficher le panier
function toggleCart() {
    let panel = document.getElementById('cartPanel');
    panel.classList.toggle('show');
    updateCartDisplay();
}

// Mettre à jour l'affichage du panier
function updateCartDisplay() {
    let cartItems = document.getElementById('cartItems');
    let cartCount = document.getElementById('cartCount');
    let cartTotal = document.getElementById('cartTotal');
    let checkoutBtn = document.getElementById('checkoutBtn');
    
    // Mettre à jour le compteur
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Votre panier est vide</p>';
        cartTotal.textContent = '0 DT';
        checkoutBtn.disabled = true;
        return;
    }
    
    // Calculer le total
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(1).replace('.', ',') + ' DT';
    checkoutBtn.disabled = false;
    
    // Afficher les articles avec des IDs uniques et des fonctions correctes
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

// Obtenir l'image du produit
function getProductImage(productName) {
    if (productName.includes('Burger Crispy')) return 'burger_crispy.PNG';
    if (productName.includes('Burger Classique')) return 'alostedh.PNG';
    if (productName.includes('Burger Double Beef')) return 'burger_double_beef.PNG';
    if (productName.includes('Burger Super Crispy')) return 'burger_super_cripsy.PNG';
    if (productName.includes('Burger Mushroom Beef')) return 'burger_mushroom_beef.PNG';
    if (productName.includes('Truffe Burger Beef')) return 'truffe_burger_beef.PNG';
    if (productName.includes('Pizza 4 choix')) return 'pizza_4choix_bigmax.PNG';
    if (productName.includes('Pizza big max Thon')) return 'pizza_bigmax_thon_pepperoni.PNG';
    if (productName.includes('Pizza Big jambon')) return 'Pizza_Big_jambon_fumé_et_crispy.PNG';
    if (productName.includes('Chawarma')) return 'https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=100';
    if (productName.includes('Assiette Mezzé')) return 'https://images.unsplash.com/photo-1576363343742-1b2f9b55f5b3?w=100';
    if (productName.includes('Mix Grill')) return 'https://images.unsplash.com/photo-1631452180519-0140c5983fc6?w=100';
    if (productName.includes('Poisson Grillé')) return 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=100';
    if (productName.includes('Couscous Poisson')) return 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=100';
    if (productName.includes('Paella')) return 'https://images.unsplash.com/photo-1627308595171-d1b5d6712b3d?w=100';
    return '';
}

// Animer le panier quand on ajoute un article
function animateCart() {
    let cartFloat = document.getElementById('cartFloating');
    cartFloat.style.transform = 'scale(1.2)';
    cartFloat.style.transition = 'transform 0.2s';
    setTimeout(() => {
        cartFloat.style.transform = 'scale(1)';
    }, 200);
}

// Afficher le modal de limite
function showLimitModal() {
    document.getElementById('limitModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fermer le modal de limite
function closeLimitModal() {
    document.getElementById('limitModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Finaliser la commande
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
    
    // Vider le panier après commande
    cart = [];
    saveCart();
    toggleCart();
}

// Initialisation
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
    
    // Charger le panier
    loadCart();
    
    // Fermer le panier si on clique en dehors
    document.addEventListener('click', function(event) {
        let panel = document.getElementById('cartPanel');
        let float = document.getElementById('cartFloating');
        
        if (!panel.contains(event.target) && !float.contains(event.target) && panel.classList.contains('show')) {
            panel.classList.remove('show');
        }
    });
});
