// Données structurées pour la recherche
const searchData = {
    restaurants: [
        {
            id: 'resto1',
            name: 'AL OSTEDH',
            logo: '🍔',
            address: 'LAFAYETTE',
            type: 'restaurant',
            keywords: ['burger', 'crispy', 'lafayette', 'cheese', 'boeuf']
        },
        {
            id: 'resto2',
            name: 'Saveurs d\'Orient',
            logo: '🥙',
            address: 'Ariana',
            type: 'restaurant',
            keywords: ['chawarma', 'mezzé', 'oriental', 'libanais', 'grill']
        },
        {
            id: 'resto3',
            name: 'Poisson & Cie',
            logo: '🐟',
            address: 'La Marsa',
            type: 'restaurant',
            keywords: ['poisson', 'couscous', 'paella', 'fruits de mer', 'grillé']
        }
    ],
    plats: [
        // AL OSTEDH
        { name: 'Burger Crispy', resto: 'AL OSTEDH', price: '14,9 DT', logo: '🍔', type: 'plat', keywords: ['burger', 'crispy'] },
        { name: 'Burger Classique', resto: 'AL OSTEDH', price: '16,9 DT', logo: '🍔', type: 'plat', keywords: ['burger', 'classique'] },
        { name: 'CRISPY CHEESE', resto: 'AL OSTEDH', price: '21,9 DT', logo: '🧀', type: 'plat', keywords: ['crispy', 'cheese'] },
        { name: 'BOEUF CHEESE', resto: 'AL OSTEDH', price: '22,9 DT', logo: '🥩', type: 'plat', keywords: ['boeuf', 'cheese'] },
        { name: '2 BOEUF', resto: 'AL OSTEDH', price: '24,9 DT', logo: '🥩🥩', type: 'plat', keywords: ['double', 'boeuf'] },
        { name: 'DOUBLE BOEUF CHEESE', resto: 'AL OSTEDH', price: '30,9 DT', logo: '🧀🥩', type: 'plat', keywords: ['double', 'boeuf', 'cheese'] },
        
        // Saveurs d'Orient
        { name: 'Chawarma Poulet', resto: 'Saveurs d\'Orient', price: '12 DT', logo: '🥙', type: 'plat', keywords: ['chawarma', 'poulet'] },
        { name: 'Assiette Mezzé', resto: 'Saveurs d\'Orient', price: '28 DT', logo: '🥗', type: 'plat', keywords: ['mezzé', 'assiette', 'hoummous'] },
        { name: 'Mix Grill', resto: 'Saveurs d\'Orient', price: '32 DT', logo: '🍢', type: 'plat', keywords: ['grill', 'mix', 'brochettes'] },
        
        // Poisson & Cie
        { name: 'Poisson Grillé', resto: 'Poisson & Cie', price: '35 DT', logo: '🐟', type: 'plat', keywords: ['poisson', 'grillé'] },
        { name: 'Couscous Poisson', resto: 'Poisson & Cie', price: '38 DT', logo: '🍚', type: 'plat', keywords: ['couscous', 'poisson'] },
        { name: 'Paella Fruits de Mer', resto: 'Poisson & Cie', price: '42 DT', logo: '🥘', type: 'plat', keywords: ['paella', 'fruits de mer'] }
    ]
};

let selectedSuggestionIndex = -1;

// Fonction de recherche avec suggestions
function searchSuggestions() {
    let input = document.getElementById('searchInput').value.toLowerCase().trim();
    let suggestionsList = document.getElementById('suggestionsList');
    
    if (input.length < 1) {
        suggestionsList.classList.remove('show');
        return;
    }
    
    let suggestions = [];
    
    // Chercher dans les restaurants
    searchData.restaurants.forEach(resto => {
        if (resto.name.toLowerCase().includes(input) || 
            resto.address.toLowerCase().includes(input) ||
            resto.keywords.some(k => k.includes(input))) {
            suggestions.push({
                type: 'restaurant',
                icon: resto.logo,
                title: resto.name,
                subtitle: `📍 ${resto.address}`,
                badge: 'Restaurant',
                action: function() { filterByRestaurant(resto.id); }
            });
        }
    });
    
    // Chercher dans les plats
    searchData.plats.forEach(plat => {
        if (plat.name.toLowerCase().includes(input) || 
            plat.keywords.some(k => k.includes(input))) {
            suggestions.push({
                type: 'plat',
                icon: plat.logo,
                title: plat.name,
                subtitle: plat.resto,
                price: plat.price,
                badge: 'Plat',
                action: function() { filterByPlat(plat.name); }
            });
        }
    });
    
    // Limiter à 8 suggestions
    suggestions = suggestions.slice(0, 8);
    
    // Afficher les suggestions
    displaySuggestions(suggestions);
}

// Afficher les suggestions
function displaySuggestions(suggestions) {
    let suggestionsList = document.getElementById('suggestionsList');
    
    if (!suggestionsList) {
        suggestionsList = document.createElement('div');
        suggestionsList.id = 'suggestionsList';
        suggestionsList.className = 'suggestions-list';
        document.querySelector('.search-container').appendChild(suggestionsList);
    }
    
    if (suggestions.length === 0) {
        suggestionsList.innerHTML = `
            <div class="suggestion-item">
                <div class="suggestion-icon">🔍</div>
                <div class="suggestion-content">
                    <div class="suggestion-title">Aucun résultat</div>
                    <div class="suggestion-subtitle">Essayez avec d'autres mots</div>
                </div>
            </div>
        `;
    } else {
        suggestionsList.innerHTML = suggestions.map((s, index) => {
            // Créer une fonction unique pour chaque suggestion
            let clickHandler = `suggestionClick_${index}`;
            window[clickHandler] = s.action;
            
            return `
                <div class="suggestion-item" onclick="${clickHandler}()">
                    <div class="suggestion-icon">${s.icon}</div>
                    <div class="suggestion-content">
                        <div class="suggestion-title">
                            ${s.title}
                            <span class="suggestion-badge ${s.type}">${s.badge}</span>
                        </div>
                        <div class="suggestion-subtitle">
                            ${s.subtitle}
                            ${s.price ? `<span>${s.price}</span>` : ''}
                        </div>
                    </div>
                    ${s.price ? `<div class="suggestion-price">${s.price}</div>` : ''}
                </div>
            `;
        }).join('');
    }
    
    suggestionsList.classList.add('show');
    selectedSuggestionIndex = -1;
}

// Filtrer par restaurant
function filterByRestaurant(restoId) {
    document.getElementById('searchInput').value = '';
    document.getElementById('suggestionsList').classList.remove('show');
    
    // Réinitialiser l'affichage
    let restaurants = document.querySelectorAll('.restaurant-section');
    restaurants.forEach(r => r.style.display = 'block');
    
    // Réinitialiser l'affichage des plats
    restaurants.forEach(resto => {
        resto.querySelectorAll('.plat-card').forEach(plat => plat.style.display = 'block');
    });
    
    // Mettre en surbrillance le restaurant sélectionné
    let targetResto = document.getElementById(restoId);
    if (targetResto) {
        targetResto.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetResto.style.transition = 'box-shadow 0.3s';
        targetResto.style.boxShadow = '0 0 0 3px #ff4757';
        setTimeout(() => {
            targetResto.style.boxShadow = '';
        }, 2000);
    }
}

// Filtrer par plat
function filterByPlat(platName) {
    document.getElementById('searchInput').value = platName;
    document.getElementById('suggestionsList').classList.remove('show');
    
    // Utiliser la fonction de recherche existante
    searchRestaurant();
    
    // Mettre en surbrillance les plats correspondants
    setTimeout(() => {
        let plats = document.querySelectorAll('.plat-card');
        plats.forEach(plat => {
            let nomPlat = plat.querySelector('h3').textContent;
            if (nomPlat.toLowerCase().includes(platName.toLowerCase())) {
                plat.style.transition = 'box-shadow 0.3s';
                plat.style.boxShadow = '0 0 0 3px #25D366';
                plat.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => {
                    plat.style.boxShadow = '';
                }, 2000);
            }
        });
    }, 100);
}

// Navigation au clavier
function handleKeyNavigation(e) {
    let suggestions = document.querySelectorAll('.suggestion-item');
    let suggestionsList = document.getElementById('suggestionsList');
    
    if (!suggestionsList || !suggestionsList.classList.contains('show')) return;
    
    // Flèche bas
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, suggestions.length - 1);
        updateSelectedSuggestion(suggestions);
    }
    // Flèche haut
    else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, -1);
        updateSelectedSuggestion(suggestions);
    }
    // Entrée
    else if (e.key === 'Enter' && selectedSuggestionIndex >= 0) {
        e.preventDefault();
        suggestions[selectedSuggestionIndex].click();
    }
    // Échap
    else if (e.key === 'Escape') {
        suggestionsList.classList.remove('show');
    }
}

function updateSelectedSuggestion(suggestions) {
    suggestions.forEach((s, i) => {
        if (i === selectedSuggestionIndex) {
            s.classList.add('selected');
            s.scrollIntoView({ block: 'nearest' });
        } else {
            s.classList.remove('selected');
        }
    });
}

// Fonction de recherche existante modifiée
function searchRestaurant() {
    let input = document.getElementById('searchInput').value.toLowerCase().trim();
    let restaurants = document.querySelectorAll('.restaurant-section');
    let resultCount = 0;
    
    // Enlever l'ancien message "aucun résultat" s'il existe
    let oldNoResult = document.getElementById('noResult');
    if (oldNoResult) oldNoResult.remove();
    
    restaurants.forEach(restaurant => {
        let nomResto = restaurant.querySelector('h2').textContent.toLowerCase();
        let adresse = restaurant.querySelector('.restaurant-header p').textContent.toLowerCase();
        let plats = restaurant.querySelectorAll('.plat-card');
        let restoVisible = false;
        
        // Vérifier si le nom du resto ou l'adresse correspond
        if (nomResto.includes(input) || adresse.includes(input)) {
            restoVisible = true;
            restaurant.style.display = 'block';
            plats.forEach(plat => plat.style.display = 'block');
            resultCount++;
        } else {
            // Chercher dans les plats
            let platTrouve = false;
            plats.forEach(plat => {
                let nomPlat = plat.querySelector('h3').textContent.toLowerCase();
                let description = plat.querySelector('.plat-description').textContent.toLowerCase();
                let prix = plat.querySelector('.prix').textContent.toLowerCase();
                
                if (nomPlat.includes(input) || description.includes(input) || prix.includes(input)) {
                    plat.style.display = 'block';
                    platTrouve = true;
                    restoVisible = true;
                } else {
                    plat.style.display = 'none';
                }
            });
            
            // Si un plat est trouvé, afficher le resto
            if (platTrouve) {
                restaurant.style.display = 'block';
                resultCount++;
            } else {
                restaurant.style.display = 'none';
            }
        }
    });
    
    // Message si aucun résultat
    if (resultCount === 0 && input !== '') {
        let noResult = document.createElement('div');
        noResult.id = 'noResult';
        noResult.className = 'no-result';
        noResult.innerHTML = `
            <span>😕</span>
            <p>Aucun résultat pour "<strong>${input}</strong>"</p>
            <p>Essayez avec d'autres mots-clés :</p>
            <p>
                <span class="highlight" onclick="document.getElementById('searchInput').value='burger'; searchSuggestions(); searchRestaurant();">burger</span> 
                <span class="highlight" onclick="document.getElementById('searchInput').value='poulet'; searchSuggestions(); searchRestaurant();">poulet</span> 
                <span class="highlight" onclick="document.getElementById('searchInput').value='poisson'; searchSuggestions(); searchRestaurant();">poisson</span>
                <span class="highlight" onclick="document.getElementById('searchInput').value='LAFAYETTE'; searchSuggestions(); searchRestaurant();">LAFAYETTE</span>
            </p>
        `;
        document.querySelector('.container').insertBefore(noResult, document.querySelector('.restaurant-section'));
    }
}

// Fonction pour réinitialiser la recherche
function resetSearch() {
    let input = document.getElementById('searchInput');
    if (input.value === '') {
        location.reload();
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    let searchInput = document.getElementById('searchInput');
    
    // Créer le conteneur pour l'autocomplete s'il n'existe pas
    if (!document.getElementById('suggestionsList')) {
        let suggestionsList = document.createElement('div');
        suggestionsList.id = 'suggestionsList';
        suggestionsList.className = 'suggestions-list';
        document.querySelector('.search-container').appendChild(suggestionsList);
    }
    
    // Ajouter les événements
    searchInput.addEventListener('input', searchSuggestions);
    searchInput.addEventListener('keydown', handleKeyNavigation);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter' && e.key !== 'Escape') {
            searchRestaurant();
        }
    });
    
    searchInput.addEventListener('search', function(e) {
        if (this.value === '') {
            location.reload();
        }
    });
    
    // Cacher les suggestions en cliquant ailleurs
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !document.getElementById('suggestionsList')?.contains(e.target)) {
            document.getElementById('suggestionsList')?.classList.remove('show');
        }
    });
    
    // Initialiser la recherche
    searchRestaurant();
});
