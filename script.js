// Données structurées pour la recherche
const searchData = {
    restaurants: [
        { id: 'resto1', name: 'AL OSTEDH', logo: '🍔', address: 'LAFAYETTE', type: 'restaurant', keywords: ['burger', 'crispy', 'lafayette', 'cheese', 'boeuf'] },
        { id: 'resto2', name: 'Saveurs d\'Orient', logo: '🥙', address: 'Ariana', type: 'restaurant', keywords: ['chawarma', 'mezzé', 'oriental', 'libanais', 'grill'] },
        { id: 'resto3', name: 'Poisson & Cie', logo: '🐟', address: 'La Marsa', type: 'restaurant', keywords: ['poisson', 'couscous', 'paella', 'fruits de mer', 'grillé'] }
    ],
    plats: [
        { name: 'Burger Crispy', resto: 'AL OSTEDH', price: '14,9 DT', logo: '🍔', type: 'plat', keywords: ['burger', 'crispy'] },
        { name: 'Burger Classique', resto: 'AL OSTEDH', price: '16,9 DT', logo: '🍔', type: 'plat', keywords: ['burger', 'classique'] },
        { name: 'CRISPY CHEESE', resto: 'AL OSTEDH', price: '21,9 DT', logo: '🧀', type: 'plat', keywords: ['crispy', 'cheese'] },
        { name: 'BOEUF CHEESE', resto: 'AL OSTEDH', price: '22,9 DT', logo: '🥩', type: 'plat', keywords: ['boeuf', 'cheese'] },
        { name: '2 BOEUF', resto: 'AL OSTEDH', price: '24,9 DT', logo: '🥩🥩', type: 'plat', keywords: ['double', 'boeuf'] },
        { name: 'DOUBLE BOEUF CHEESE', resto: 'AL OSTEDH', price: '30,9 DT', logo: '🧀🥩', type: 'plat', keywords: ['double', 'boeuf', 'cheese'] },
        { name: 'Chawarma Poulet', resto: 'Saveurs d\'Orient', price: '12 DT', logo: '🥙', type: 'plat', keywords: ['chawarma', 'poulet'] },
        { name: 'Assiette Mezzé', resto: 'Saveurs d\'Orient', price: '28 DT', logo: '🥗', type: 'plat', keywords: ['mezzé', 'assiette', 'hoummous'] },
        { name: 'Mix Grill', resto: 'Saveurs d\'Orient', price: '32 DT', logo: '🍢', type: 'plat', keywords: ['grill', 'mix', 'brochettes'] },
        { name: 'Poisson Grillé', resto: 'Poisson & Cie', price: '35 DT', logo: '🐟', type: 'plat', keywords: ['poisson', 'grillé'] },
        { name: 'Couscous Poisson', resto: 'Poisson & Cie', price: '38 DT', logo: '🍚', type: 'plat', keywords: ['couscous', 'poisson'] },
        { name: 'Paella Fruits de Mer', resto: 'Poisson & Cie', price: '42 DT', logo: '🥘', type: 'plat', keywords: ['paella', 'fruits de mer'] }
    ]
};

let selectedSuggestionIndex = -1;

// Catégories
const categoryKeywords = {
    'pizza': ['pizza', 'margherita', 'pepperoni'],
    'burger': ['burger', 'crispy', 'boeuf', 'cheese'],
    'chicken': ['poulet', 'chicken', 'chawarma'],
    'fish': ['poisson', 'fish', 'fruits de mer'],
    'rice': ['riz', 'couscous', 'paella'],
    'salad': ['salade', 'salad', 'mezzé', 'taboulé']
};

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
        return;
    }
    
    let keywords = categoryKeywords[category] || [category];
    let resultCount = 0;
    
    document.querySelectorAll('.plat-card').forEach(plat => {
        let nomPlat = plat.querySelector('h3').textContent.toLowerCase();
        let description = plat.querySelector('.plat-description').textContent.toLowerCase();
        let shouldShow = keywords.some(k => nomPlat.includes(k) || description.includes(k)) || 
                        plat.getAttribute('data-category') === category;
        
        plat.style.display = shouldShow ? 'block' : 'none';
        if (shouldShow) resultCount++;
    });
    
    document.querySelectorAll('.restaurant-section').forEach(resto => {
        let hasVisible = resto.querySelectorAll('.plat-card[style*="block"]').length > 0;
        resto.style.display = hasVisible ? 'block' : 'none';
    });
    
    document.getElementById('noResult')?.remove();
    if (resultCount === 0) {
        let noResult = document.createElement('div');
        noResult.id = 'noResult';
        noResult.className = 'no-result';
        noResult.innerHTML = `<span>😕</span><p>Aucun plat dans cette catégorie</p>`;
        document.querySelector('.container').prepend(noResult);
    }
}

// Filtrer par restaurant
function filterByRestaurant(restoId) {
    document.getElementById('searchInput').value = '';
    document.getElementById('suggestionsList')?.classList.remove('show');
    
    document.querySelectorAll('.restaurant-section, .plat-card').forEach(el => el.style.display = 'block');
    let targetResto = document.getElementById(restoId);
    if (targetResto) scrollToRestaurant(targetResto);
}

// Filtrer par plat (VERSION SIMPLIFIÉE avec scroll vers le début du resto)
function filterByPlat(platName) {
    document.getElementById('searchInput').value = platName;
    document.getElementById('suggestionsList')?.classList.remove('show');
    
    // Afficher tous les plats
    document.querySelectorAll('.plat-card').forEach(plat => plat.style.display = 'block');
    
    // Trouver le restaurant du plat
    let targetResto = null;
    document.querySelectorAll('.restaurant-section').forEach(resto => {
        let plats = resto.querySelectorAll('.plat-card');
        plats.forEach(plat => {
            if (plat.querySelector('h3').textContent.toLowerCase().includes(platName.toLowerCase())) {
                targetResto = resto;
            }
        });
    });
    
    // Scroller vers le début du restaurant et surligner
    if (targetResto) scrollToRestaurant(targetResto, platName);
    
    // Filtrer pour n'afficher que les plats similaires
    setTimeout(() => {
        document.querySelectorAll('.plat-card').forEach(plat => {
            let nomPlat = plat.querySelector('h3').textContent.toLowerCase();
            plat.style.display = nomPlat.includes(platName.toLowerCase()) ? 'block' : 'none';
        });
        
        document.querySelectorAll('.restaurant-section').forEach(resto => {
            let hasVisible = resto.querySelectorAll('.plat-card[style*="block"]').length > 0;
            resto.style.display = hasVisible ? 'block' : 'none';
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
            suggestions.push({ type: 'restaurant', icon: resto.logo, title: resto.name, subtitle: `📍 ${resto.address}`, badge: 'Restaurant', action: `filterByRestaurant('${resto.id}')` });
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
});
