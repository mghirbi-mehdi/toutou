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
        { name: 'Truffe Burger Beef', resto: 'AL OSTEDH', price: '21,9 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'truffe', 'champignon', 'creme', 'steak', 'cheddar', 'frites'] },
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

function getClosingTimeMessage(restoName, hoursString) {
    let hoursMatch = hoursString.match(/(\d+)h[-\s](\d+)h/);
    if (!hoursMatch) return "";
    
    let closeHour = parseInt(hoursMatch[2]);
    let openHour = parseInt(hoursMatch[1]);
    let now = getTunisiaTime();
    let currentHour = now.getHours();
    
    if (currentHour >= closeHour) {
        return `🔴 Fermé • Réouverture demain à ${openHour}h`;
    } else {
        return `🟢 Ouvert • Fermeture à ${closeHour}h`;
    }
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
        btn.innerHTML = '<i class="fab fa-whatsapp"></i> Commander';
        btn.title = 'Commander';
    });
    
    let closedMessage = restaurant.querySelector('.closed-message');
    if (closedMessage) closedMessage.remove();
}

function disableRestaurantButtons(restaurant) {
    restaurant.querySelectorAll('.btn-whatsapp').forEach(btn => {
        btn.style.opacity = '0.5';
        btn.style.pointerEvents = 'none';
        btn.style.backgroundColor = '#dc3545';
        btn.innerHTML = '<i class="fas fa-clock"></i> Fermé';
        btn.title = 'Restaurant fermé';
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

// Sélectionner une option et envoyer vers WhatsApp
function selectChoice(choice) {
    let message = `Bonjour je souhaite commander ${currentProduct.name} (${currentProduct.price}) avec ${choice} chez ${currentProduct.resto}. Merci de me confirmer la disponibilité et les frais de livraison.`;
    
    let encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/21651924385?text=${encodedMessage}`, '_blank');
    
    closeChoiceModal();
}

// Fermer le modal si on clique en dehors
window.onclick = function(event) {
    let modal = document.getElementById('choiceModal');
    if (event.target == modal) {
        closeChoiceModal();
    }
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
});
