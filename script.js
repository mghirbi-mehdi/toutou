// ==================== DONNÉES POUR LA RECHERCHE ====================
const searchData = {
    restaurants: [
        { id: 'resto1', name: 'AL OSTEDH', logo: '🍔', address: 'LAFAYETTE', hours: '11h-00h', type: 'restaurant', keywords: ['burger', 'crispy', 'lafayette', 'cheese', 'boeuf', 'escalope', 'sandwich', 'tacos'] },
        { id: 'resto2', name: 'CHICK\'IN', logo: '🌮', address: 'Centre Urbain Nord', hours: '11h-00h', type: 'restaurant', keywords: ['tacos', 'burrito', 'frenchy', 'poulet', 'burger', 'maple', 'sriracha', 'box', 'trufflow'] },
        { id: 'resto3', name: 'King Street', logo: '🥙', address: 'Centre Ville', hours: '11h-01h', type: 'restaurant', keywords: ['makloub', 'jambon', 'thon', 'poulet', 'grillé', 'pané', 'mahboul', 'pizza', 'triplex'] },
        { id: 'resto4', name: 'La Casa De Mama', logo: '🍕', address: 'LAFAYETTE', hours: '11h-01h', type: 'restaurant', keywords: ['4 feux', 'escalope', 'jambon', 'pepperoni', 'sandwich', 'lafayette', 'italien', 'pizza', 'thon', 'exacatory', 'mitro', 'baguette', 'shawarma', 'mixte', 'anchilada', '4 fromage', 'makloub'] },
        { id: 'resto5', name: 'ZAKIA', logo: '🍗', address: 'Beb Jdid', hours: '17h-02h', type: 'restaurant', keywords: ['zakia', 'beb jdid', 'tunis', 'poulet', 'rotisserie', 'pasta', 'ojja'] },
        { id: 'resto6', name: 'DIDI', logo: '🍽️', address: 'LAFAYETTE', hours: '11h-02h', type: 'restaurant', keywords: ['didi', 'lafayette', 'tunis', 'poulet', 'makrouna', 'tastira', 'loubia', 'sandwich', 'thon', 'kafteji', 'shan', 'tounsi', 'plat'] }
    ],
    plats: [
        // ==================== AL OSTEDH ====================
        { name: 'Burger Crispy', resto: 'AL OSTEDH', price: '17,5 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'crispy', 'chicken', 'cheddar', 'frites'] },
        { name: 'Burger Classique', resto: 'AL OSTEDH', price: '18,6 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'classique', 'steak', 'cheddar', 'frites'] },
        { name: 'Cheddar cheese', resto: 'AL OSTEDH', price: '21,9 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'cheese', 'champignon', 'creme', 'steak', 'cheddar', 'frites'] },
        { name: 'Cheddar cheese', resto: 'AL OSTEDH', price: '23 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'cheese', 'champignon', 'creme', 'steak', 'cheddar', 'frites'] },
        { name: 'Burger Super Crispy', resto: 'AL OSTEDH', price: '24,1 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'super', 'crispy', 'triple', 'chicken', 'cheddar', 'frites'] },
        { name: 'Burger Double Beef', resto: 'AL OSTEDH', price: '28,5 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'double', 'beef', '300g', 'steak', 'cheddar', 'frites'] },
        { name: 'Tacos 2 viandes', resto: 'AL OSTEDH', price: '17 DT', logo: '🌮', category: 'tacos', type: 'plat', keywords: ['tacos', '2 viandes', 'boeuf', 'poulet'] },
        { name: 'Tacos escalope à la crème', resto: 'AL OSTEDH', price: '15,3 DT', logo: '🌮', category: 'tacos', type: 'plat', keywords: ['tacos', 'escalope', 'creme', 'poulet'] },
        { name: 'Tacos crispy', resto: 'AL OSTEDH', price: '15,3 DT', logo: '🌮', category: 'tacos', type: 'plat', keywords: ['tacos', 'crispy', 'poulet', 'pané'] },
        
        // ==================== SANDWICHS ESCALOPE AL OSTEDH ====================
        { name: 'Spécial escalope', resto: 'AL OSTEDH', price: '9,4 DT', logo: '🥪', category: 'sandwich', type: 'plat', keywords: ['escalope', 'sandwich', 'pané', 'base', 'gruyère', 'pepperoni', 'mozzarella', 'cheddar', 'raclette'] },
        
        // ==================== PIZZAS AL OSTEDH ====================
        { name: 'Pizza 4 choix big max', resto: 'AL OSTEDH', price: '38,5 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', '4 choix', 'big max', 'spicy', '6 fromages', 'pepperoni', 'jambon', 'thon', 'crispy'] },
        { name: 'Pizza big max Thon / pepperoni', resto: 'AL OSTEDH', price: '33 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', 'big max', 'thon', 'pepperoni', 'spicy', '6 fromages'] },
        { name: 'Pizza Big jambon fumé & crispy', resto: 'AL OSTEDH', price: '38,5 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', 'big', 'jambon', 'fumé', 'crispy', 'spicy', '6 fromages'] },
        
        // ==================== CHICK'IN ====================
        { name: 'Frenchy Tacos', resto: 'CHICK\'IN', price: '13,9 DT', logo: '🌮', category: 'tacos', type: 'plat', keywords: ['tacos', 'frenchy', 'poulet', 'tenders', 'lava', 'kewpie'] },
        { name: 'Cheesy Burrito', resto: 'CHICK\'IN', price: '13,9 DT', logo: '🌯', category: 'tacos', type: 'plat', keywords: ['burrito', 'cheesy', 'poulet', 'cheddar', 'mozzarella', 'frite'] },
        { name: 'Burger Maple Sriracha', resto: 'CHICK\'IN', price: '14,4 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'maple', 'sriracha', 'poulet', 'pané', 'épicé', 'sucré', 'cheddar', 'kewpie'] },
        { name: 'Burger Trufflow', resto: 'CHICK\'IN', price: '17,4 DT', logo: '🍔', category: 'burger', type: 'plat', keywords: ['burger', 'truffle', 'truffe', 'champignon', 'poulet', 'pané', 'emmental', 'mayonnaise', 'frites', 'boisson'] },
        { name: 'Box Original', resto: 'CHICK\'IN', price: '18,9 DT', logo: '📦', category: 'burger', type: 'plat', keywords: ['box', 'original', 'burger', 'chicky', 'sub', 'wings', 'chicken pops', 'messy fries', 'lava', 'kewpie'] },
        { name: 'Box Canada', resto: 'CHICK\'IN', price: '19,9 DT', logo: '📦', category: 'burger', type: 'plat', keywords: ['box', 'canada', 'maple', 'sriracha', 'burger', 'wings', 'chicken pops', 'frites'] },
        { name: 'Box The crisper', resto: 'CHICK\'IN', price: '24,9 DT', logo: '📦', category: 'burger', type: 'plat', keywords: ['box', 'crisper', 'filet', 'tenders', 'wings', 'popcorns', 'messy fries', 'coleslaw'] },
        { name: 'Box Tex-Mex', resto: 'CHICK\'IN', price: '18,9 DT', logo: '🌮', category: 'tacos', type: 'plat', keywords: ['box', 'tex mex', 'french taco', 'cheesy burrito', 'chicky wrap', 'wings', 'chicken pops'] },
        { name: 'OG sub', resto: 'CHICK\'IN', price: '12,4 DT', logo: '🥪', category: 'sandwich', type: 'plat', keywords: ['og', 'sub', 'tenders', 'cheddar', 'kewpie', 'harissa', 'sandwich'] },
        
        // ==================== KING STREET - MAKLOUB ====================
        { name: 'Makloub', resto: 'King Street', price: '8,5 DT', logo: '🥙', category: 'makloub', type: 'plat', keywords: ['makloub', 'jambon', 'thon', 'poulet', 'grillé', 'pané', 'riz'] },
        { name: 'Makloub Mahboul', resto: 'King Street', price: '13,9 DT', logo: '🥙', category: 'makloub', type: 'plat', keywords: ['makloub', 'mahboul', 'poulet', 'crème', 'mozzarella', 'gruyère', 'cheddar', 'harissa', 'big love', 'riz'] },
        
        // ==================== KING STREET - PIZZA ====================
        { name: 'Pizza Triplex', resto: 'King Street', price: '20,9 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', 'triplex', 'double pâtes', 'moyenne', 'max', 'family', 'jambon', 'escalope', 'pepperoni', 'mozzarella', 'cheddar', 'basilic', 'tomates cerises'] },
        
        // ==================== LA CASA DE MAMA ====================
        { name: '4 Feux', resto: 'La Casa De Mama', price: '15 DT', logo: '🔥', category: 'sandwich', type: 'plat', keywords: ['4 feux', 'escalope', 'jambon', 'pepperoni', 'sandwich', 'frites'] },
        { name: 'Pizza Thon', resto: 'La Casa De Mama', price: '7 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', 'thon', 'tomate', 'mozzarella', 'mini', 'moy', 'maxi', 'xl'] },
        { name: 'Pizza Exacatory', resto: 'La Casa De Mama', price: '15 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', 'exacatory', 'double pâte', 'escalope', 'shawarma', 'champignons', 'pepperoni', 'sauce blanche', 'tomate', 'moyenne', 'maxi', 'xl'] },
        { name: 'Pizza Mitro', resto: 'La Casa De Mama', price: '25 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', 'mitro', 'sauce tomate', 'mozzarella', 'escalope', 'shawarma', 'jambon', 'champignons', 'thon'] },
        { name: 'Pizza 4 Fromage Mini', resto: 'La Casa De Mama', price: '9 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', '4 fromage', 'mozzarella', 'cheddar', 'gruyère', 'roquefort', 'mini'] },
        { name: 'Pizza 4 Fromage MOY', resto: 'La Casa De Mama', price: '13 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', '4 fromage', 'mozzarella', 'cheddar', 'gruyère', 'roquefort', 'moy'] },
        { name: 'Pizza 4 Fromage Maxi', resto: 'La Casa De Mama', price: '16 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', '4 fromage', 'mozzarella', 'cheddar', 'gruyère', 'roquefort', 'maxi'] },
        { name: 'Pizza 4 Fromage XL', resto: 'La Casa De Mama', price: '20 DT', logo: '🍕', category: 'pizza', type: 'plat', keywords: ['pizza', '4 fromage', 'mozzarella', 'cheddar', 'gruyère', 'roquefort', 'xl'] },
        { name: 'Baguette Farcie', resto: 'La Casa De Mama', price: '10 DT', logo: '🥖', category: 'baguette', type: 'plat', keywords: ['baguette', 'farcie', 'escalope', 'shawarma', 'mixte', 'jambon', 'fromage', 'moy', 'maxi', '1 mètre'] },
        { name: 'Anchilada escalope grillée', resto: 'La Casa De Mama', price: '8 DT', logo: '🌯', category: 'sandwich', type: 'plat', keywords: ['anchilada', 'escalope', 'grillée', 'mexicain'] },
        { name: 'Anchilada escalope panée', resto: 'La Casa De Mama', price: '9 DT', logo: '🌯', category: 'sandwich', type: 'plat', keywords: ['anchilada', 'escalope', 'panée', 'mexicain'] },
        { name: 'Anchilada cordon bleu', resto: 'La Casa De Mama', price: '10 DT', logo: '🌯', category: 'sandwich', type: 'plat', keywords: ['anchilada', 'cordon bleu', 'mexicain'] },
        
        // ==================== LA CASA DE MAMA MAKLOUB ====================
        { name: 'Makloub Escalope grillée', resto: 'La Casa De Mama', price: '7.5 DT', logo: '🥙', category: 'makloub', type: 'plat', keywords: ['makloub', 'escalope', 'grillée', 'la casa', 'mama', 'riz'] },
        { name: 'Makloub Escalope panée', resto: 'La Casa De Mama', price: '8 DT', logo: '🥙', category: 'makloub', type: 'plat', keywords: ['makloub', 'escalope', 'panée', 'la casa', 'mama', 'riz'] },
        { name: 'Makloub Shawarma', resto: 'La Casa De Mama', price: '7.5 DT', logo: '🥙', category: 'makloub', type: 'plat', keywords: ['makloub', 'shawarma', 'la casa', 'mama', 'riz'] },
        { name: 'Makloub Cordon bleu', resto: 'La Casa De Mama', price: '9 DT', logo: '🥙', category: 'makloub', type: 'plat', keywords: ['makloub', 'cordon bleu', 'la casa', 'mama', 'riz'] },
        { name: 'Makloub Thon', resto: 'La Casa De Mama', price: '6 DT', logo: '🥙', category: 'makloub', type: 'plat', keywords: ['makloub', 'thon', 'la casa', 'mama', 'riz'] },
        { name: 'Makloub Jambon', resto: 'La Casa De Mama', price: '6 DT', logo: '🥙', category: 'makloub', type: 'plat', keywords: ['makloub', 'jambon', 'la casa', 'mama', 'riz'] },
        
        // ==================== ZAKIA ====================
        { name: 'Poulet Rôti', resto: 'ZAKIA', price: '8,5 DT', logo: '🍗', category: 'poulet', type: 'plat', keywords: ['poulet', 'rotisserie', 'tastira', 'makrouna', 'loubia', 'quart', 'demi', 'entier'] },
        { name: 'Pasta fruit de mer', resto: 'ZAKIA', price: '30 DT', logo: '🍝', category: 'pasta', type: 'plat', keywords: ['pasta', 'fruit de mer', 'spaghetti', 'creme', 'tomate'] },
        { name: 'Pasta escalope', resto: 'ZAKIA', price: '14 DT', logo: '🍝', category: 'pasta', type: 'plat', keywords: ['pasta', 'escalope', 'pané', 'creme'] },
        { name: 'Pasta Merguez', resto: 'ZAKIA', price: '14 DT', logo: '🍝', category: 'pasta', type: 'plat', keywords: ['pasta', 'merguez', 'épicé', 'tomate'] },
        { name: 'Ojja fruit de mer', resto: 'ZAKIA', price: '23 DT', logo: '🍳', category: 'ojja', type: 'plat', keywords: ['ojja', 'fruit de mer', 'oeuf', 'tomate'] },
        { name: 'Ojja escalope', resto: 'ZAKIA', price: '14 DT', logo: '🍳', category: 'ojja', type: 'plat', keywords: ['ojja', 'escalope', 'oeuf', 'tomate'] },
        { name: 'Ojja merguez', resto: 'ZAKIA', price: '14 DT', logo: '🍳', category: 'ojja', type: 'plat', keywords: ['ojja', 'merguez', 'oeuf', 'tomate', 'épicé'] },
        
        // ==================== DIDI POULET ====================
        { name: 'Quart de poulet', resto: 'DIDI', price: '8 DT', logo: '🍗', category: 'poulet', type: 'plat', keywords: ['poulet', 'quart', 'didi', 'makrouna', 'tastira', 'loubia'] },
        { name: 'Demi poulet', resto: 'DIDI', price: '14 DT', logo: '🍗', category: 'poulet', type: 'plat', keywords: ['poulet', 'demi', 'didi', 'makrouna', 'tastira', 'loubia'] },
        { name: 'Poulet entier', resto: 'DIDI', price: '24 DT', logo: '🍗', category: 'poulet', type: 'plat', keywords: ['poulet', 'entier', 'didi', 'makrouna', 'tastira', 'loubia'] },
        { name: 'Poulet sec', resto: 'DIDI', price: '20 DT', logo: '🍗', category: 'poulet', type: 'plat', keywords: ['poulet', 'sec', 'didi'] },
        
        // ==================== DIDI SANDWICHS ====================
        { name: 'Sandwich thon frit', resto: 'DIDI', price: '7 DT', logo: '🥪', category: 'sandwich', type: 'plat', keywords: ['sandwich', 'thon', 'frit', 'didi', 'lafayette'] },
        { name: 'Sandwich kafteji frit', resto: 'DIDI', price: '4 DT', logo: '🥪', category: 'sandwich', type: 'plat', keywords: ['sandwich', 'kafteji', 'frit', 'didi', 'lafayette', 'pomme de terre', 'oeuf'] },
        { name: 'Sandwich poulet frit', resto: 'DIDI', price: '5 DT', logo: '🥪', category: 'sandwich', type: 'plat', keywords: ['sandwich', 'poulet', 'frit', 'didi', 'lafayette'] },
        
        // ==================== DIDI SHAN TOUNSI ====================
        { name: 'Shan Tounsi', resto: 'DIDI', price: '12 DT', logo: '🍲', category: 'plat', type: 'plat', keywords: ['shan', 'tounsi', 'tunisien', 'didi', 'plat', 'traditionnel', 'couscous'] }
    ]
};

let selectedSuggestionIndex = -1;

// ==================== CATÉGORIES POUR LE FILTRAGE ====================
const categoryKeywords = {
    'pizza': ['pizza', 'margherita', 'pepperoni', '4 choix', 'big max', 'spicy', 'fromages', 'jambon', 'thon', 'crispy', 'fumé', 'triplex', 'double pâtes', 'moyenne', 'max', 'family', 'escalope', 'basilic', 'mini', 'moy', 'maxi', 'xl', 'exacatory', 'shawarma', 'champignons', 'mitro', '4 fromage', 'roquefort'],
    'burger': ['burger', 'crispy', 'boeuf', 'cheese', 'mushroom', 'truffe', 'double', 'maple', 'sriracha', 'trufflow'],
    'sandwich': ['sandwich', 'panini', 'baguette', 'pain', 'escalope', 'wrap', '4 feux', 'anchilada', 'cordon bleu', 'mexicain', 'thon', 'kafteji', 'poulet frit'],
    'tacos': ['tacos', 'burrito', 'frenchy', 'lava', 'kewpie', 'cheddar', 'box', 'wings', 'nuggets', '2 viandes', 'escalope à la crème', 'crispy'],
    'baguette': ['baguette', 'farcie', 'escalope', 'shawarma', 'mixte', 'jambon', 'fromage', 'moy', 'maxi', '1 mètre'],
    'makloub': ['makloub', 'riz', 'jambon', 'thon', 'poulet', 'grillé', 'pané', 'mozzarella', 'harissa', 'mahboul', 'crème', 'gruyère', 'cheddar', 'big love', 'escalope', 'shawarma', 'cordon bleu', 'la casa', 'mama'],
    'poulet': ['poulet', 'rotisserie', 'tastira', 'makrouna', 'loubia', 'quart', 'demi', 'entier', 'sec'],
    'pasta': ['pasta', 'spaghetti', 'fruit de mer', 'escalope', 'merguez', 'creme', 'tomate'],
    'ojja': ['ojja', 'oeuf', 'tomate', 'fruit de mer', 'escalope', 'merguez'],
    'plat': ['plat', 'principal', 'specialite', 'shan', 'tounsi', 'couscous', 'traditionnel']
};

// ==================== FERMETURE EXCEPTIONNELLE DES RESTAURANTS ====================
const forceClosed = {
    'resto1': false,
    'resto2': false,
    'resto3': false,
    'resto4': false,
    'resto5': false,
    'resto6': false
};

// ==================== SYSTÈME DE VÉRIFICATION DES HORAIRES ====================
function getTunisiaTime() {
    let now = new Date();
    let tunisTime = new Date(now.toLocaleString("en-US", {timeZone: "Africa/Tunis"}));
    return tunisTime;
}

function isRestaurantOpen(restaurantId, hoursString) {
    if (forceClosed[restaurantId] === true) return false;
    let hoursMatch = hoursString.match(/(\d+)h[-\s](\d+)h/);
    if (!hoursMatch) return true;
    let openHour = parseInt(hoursMatch[1]);
    let closeHour = parseInt(hoursMatch[2]);
    let now = getTunisiaTime();
    let currentHour = now.getHours();
    let currentMinutes = now.getMinutes();
    let currentTime = currentHour + (currentMinutes / 60);
    
    if (closeHour < openHour) {
        return (currentTime >= openHour || currentTime < closeHour);
    } else {
        return (currentTime >= openHour && currentTime < closeHour);
    }
}

function updateRestaurantsStatus() {
    let restaurants = document.querySelectorAll('.restaurant-section');
    restaurants.forEach(restaurant => {
        let restoId = restaurant.id;
        let hoursElement = restaurant.querySelector('.restaurant-header p');
        let hoursText = hoursElement.textContent;
        let hoursMatch = hoursText.match(/(\d+)h[-\s](\d+)h/);
        if (hoursMatch) {
            let isOpen = isRestaurantOpen(restoId, hoursMatch[0]);
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
                if (forceClosed[restoId] === true) {
                    statusElement.innerHTML = `<span class="closed-status">🔴 Fermé exceptionnellement aujourd'hui</span>`;
                } else {
                    statusElement.innerHTML = `<span class="closed-status">🔴 Fermé • Réouverture ${hoursMatch[1]}h</span>`;
                }
                disableRestaurantButtons(restaurant);
            }
        }
    });
    
    if (cart.length > 0) {
        updateCartDisplay();
    }
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
        if (forceClosed[restaurant.id] === true) {
            message.innerHTML = `<span>⏰ Restaurant fermé exceptionnellement aujourd'hui</span>`;
        } else {
            message.innerHTML = `<span>⏰ Restaurant fermé • Réouverture à ${openHour}h</span>`;
        }
        restaurant.querySelector('.menu-grid').insertAdjacentElement('beforebegin', message);
    }
}

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

// ==================== FILTRES CORRIGÉS ====================
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
    
    document.querySelectorAll('.menu-grid .plat-card').forEach(plat => {
        let platCategory = plat.getAttribute('data-category');
        if (platCategory === category) {
            plat.style.display = 'block';
            resultCount++;
        } else {
            plat.style.display = 'none';
        }
    });
    
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
        let hasVisiblePlat = false;
        const normalPlats = resto.querySelectorAll('.menu-grid .plat-card');
        normalPlats.forEach(plat => {
            if (plat.style.display === 'block') {
                hasVisiblePlat = true;
            }
        });
        
        const specialSection = resto.querySelector('.special-section');
        if (specialSection && specialSection.style.display === 'block') {
            hasVisiblePlat = true;
        }
        
        if (hasVisiblePlat) {
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
            let categorie = plat.getAttribute('data-category').toLowerCase();
            let matchMotsCles = false;
            searchData.plats.forEach(p => {
                if (p.name.toLowerCase() === nomPlat) {
                    if (p.keywords.some(keyword => keyword.toLowerCase().includes(platName.toLowerCase()))) {
                        matchMotsCles = true;
                    }
                }
            });
            let isEscalopeSupplement = false;
            const escalopeSupplements = ['gruyère', 'pepperoni', 'cheddar', 'mozzarella', 'steak', 'raclette'];
            if (platName.toLowerCase().includes('escalope')) {
                if (nomPlat === 'spécial escalope') {
                    isEscalopeSupplement = true;
                }
                if (escalopeSupplements.some(sup => platName.toLowerCase().includes(sup))) {
                    if (nomPlat === 'spécial escalope') {
                        isEscalopeSupplement = true;
                    }
                }
            }
            if (platName.toLowerCase().includes('escalope') && platName.toLowerCase().includes('+')) {
                if (nomPlat === 'spécial escalope') {
                    isEscalopeSupplement = true;
                }
            }
            let isMakloub = false;
            if (platName.toLowerCase().includes('makloub') || platName.toLowerCase().includes('jambon') || platName.toLowerCase().includes('thon') || platName.toLowerCase().includes('poulet')) {
                if (nomPlat === 'classics - makloubs') {
                    isMakloub = true;
                }
            }
            let match = nomPlat.includes(platName.toLowerCase()) || 
                        categorie.includes(platName.toLowerCase()) || 
                        matchMotsCles ||
                        isEscalopeSupplement ||
                        isMakloub;
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

// ==================== SUGGESTIONS DE RECHERCHE ====================
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
    const escalopeSupplements = ['gruyère', 'pepperoni', 'cheddar', 'mozzarella', 'raclette'];
    if (escalopeSupplements.some(sup => input.includes(sup)) || (input.includes('escalope') && input.includes('+'))) {
        suggestions.push({ type: 'plat', icon: '🥪', title: 'Spécial escalope', subtitle: 'AL OSTEDH', price: '9,4 DT', badge: 'Plat', action: `filterByPlat('Spécial escalope')` });
    }
    if (input.includes('makloub') || input.includes('jambon') || input.includes('thon') || input.includes('poulet') || input.includes('mahboul') || input.includes('crème')) {
        suggestions.push({ type: 'plat', icon: '🥙', title: 'Makloub Mahboul', subtitle: 'King Street', price: '13,9 DT', badge: 'Plat', action: `filterByPlat('Makloub Mahboul')` });
        suggestions.push({ type: 'plat', icon: '🥙', title: 'Classics - Makloubs', subtitle: 'King Street', price: 'À partir de 8,5 DT', badge: 'Plat', action: `filterByPlat('Makloub')` });
    }
    if (input.includes('pizza') || input.includes('triplex') || input.includes('double pâtes')) {
        suggestions.push({ type: 'plat', icon: '🍕', title: 'Pizza Triplex (Double Pâtes)', subtitle: 'King Street', price: 'À partir de 20,9 DT', badge: 'Plat', action: `filterByPlat('Pizza Triplex')` });
    }
    if (input.includes('4 feux') || input.includes('la casa') || input.includes('mama') || input.includes('italien')) {
        suggestions.push({ type: 'plat', icon: '🔥', title: '4 Feux', subtitle: 'La Casa De Mama', price: '15 DT', badge: 'Plat', action: `filterByPlat('4 Feux')` });
        suggestions.push({ type: 'restaurant', icon: '🍕', title: 'La Casa De Mama', subtitle: '📍 LAFAYETTE • 11h-23h', badge: 'Restaurant', action: `filterByRestaurant('resto4')` });
    }
    if (input.includes('pizza thon') || (input.includes('pizza') && input.includes('thon')) || input.includes('thon')) {
        suggestions.push({ type: 'plat', icon: '🍕', title: 'Pizza Thon', subtitle: 'La Casa De Mama', price: 'À partir de 7 DT', badge: 'Plat', action: `filterByPlat('Pizza Thon')` });
    }
    if (input.includes('pizza exacatory') || (input.includes('pizza') && input.includes('exacatory')) || input.includes('exacatory')) {
        suggestions.push({ type: 'plat', icon: '🍕', title: 'Pizza Exacatory', subtitle: 'La Casa De Mama', price: 'À partir de 15 DT', badge: 'Plat', action: `filterByPlat('Pizza Exacatory')` });
    }
    if (input.includes('pizza mitro') || (input.includes('pizza') && input.includes('mitro')) || input.includes('mitro')) {
        suggestions.push({ type: 'plat', icon: '🍕', title: 'Pizza Mitro', subtitle: 'La Casa De Mama', price: '25 DT', badge: 'Plat', action: `filterByPlat('Pizza Mitro')` });
    }
    if (input.includes('pizza 4 fromage') || (input.includes('pizza') && input.includes('4 fromage')) || input.includes('roquefort')) {
        suggestions.push({ type: 'restaurant', icon: '🍕', title: 'La Casa De Mama', subtitle: '📍 LAFAYETTE • 11h-23h', badge: 'Restaurant', action: `filterByRestaurant('resto4')` });
        suggestions.push({ type: 'plat', icon: '🍕', title: 'Pizza 4 Fromage Mini', subtitle: 'La Casa De Mama', price: '9 DT', badge: 'Plat', action: `filterByPlat('Pizza 4 Fromage Mini')` });
        suggestions.push({ type: 'plat', icon: '🍕', title: 'Pizza 4 Fromage MOY', subtitle: 'La Casa De Mama', price: '13 DT', badge: 'Plat', action: `filterByPlat('Pizza 4 Fromage MOY')` });
        suggestions.push({ type: 'plat', icon: '🍕', title: 'Pizza 4 Fromage Maxi', subtitle: 'La Casa De Mama', price: '16 DT', badge: 'Plat', action: `filterByPlat('Pizza 4 Fromage Maxi')` });
        suggestions.push({ type: 'plat', icon: '🍕', title: 'Pizza 4 Fromage XL', subtitle: 'La Casa De Mama', price: '20 DT', badge: 'Plat', action: `filterByPlat('Pizza 4 Fromage XL')` });
    }
    if (input.includes('baguette') || input.includes('farcie') || input.includes('escalope') || input.includes('shawarma') || input.includes('mixte')) {
        suggestions.push({ type: 'plat', icon: '🥖', title: 'Baguette Farcie', subtitle: 'La Casa De Mama', price: 'À partir de 10 DT', badge: 'Plat', action: `filterByPlat('Baguette Farcie')` });
    }
    if (input.includes('sandwich') || input.includes('anchilada') || input.includes('mexicain') || input.includes('cordon bleu')) {
        suggestions.push({ type: 'restaurant', icon: '🍕', title: 'La Casa De Mama', subtitle: '📍 LAFAYETTE • 11h-23h', badge: 'Restaurant', action: `filterByRestaurant('resto4')` });
        suggestions.push({ type: 'plat', icon: '🌯', title: 'Anchilada escalope grillée', subtitle: 'La Casa De Mama', price: '8 DT', badge: 'Plat', action: `filterByPlat('Anchilada escalope grillée')` });
        suggestions.push({ type: 'plat', icon: '🌯', title: 'Anchilada escalope panée', subtitle: 'La Casa De Mama', price: '9 DT', badge: 'Plat', action: `filterByPlat('Anchilada escalope panée')` });
        suggestions.push({ type: 'plat', icon: '🌯', title: 'Anchilada cordon bleu', subtitle: 'La Casa De Mama', price: '10 DT', badge: 'Plat', action: `filterByPlat('Anchilada cordon bleu')` });
    }
    if (input.includes('zakia') || input.includes('poulet') || input.includes('tastira') || input.includes('makrouna') || input.includes('loubia')) {
        suggestions.push({ type: 'restaurant', icon: '🍗', title: 'ZAKIA', subtitle: '📍 Beb Jdid • 11h-23h', badge: 'Restaurant', action: `filterByRestaurant('resto5')` });
        suggestions.push({ type: 'plat', icon: '🍗', title: 'Poulet Rôti', subtitle: 'ZAKIA', price: 'À partir de 8,5 DT', badge: 'Plat', action: `filterByPlat('Poulet Rôti')` });
    }
    if (input.includes('pasta') || input.includes('fruit de mer') || input.includes('escalope') || input.includes('merguez')) {
        suggestions.push({ type: 'restaurant', icon: '🍗', title: 'ZAKIA', subtitle: '📍 Beb Jdid • 11h-23h', badge: 'Restaurant', action: `filterByRestaurant('resto5')` });
        suggestions.push({ type: 'plat', icon: '🍝', title: 'Pasta fruit de mer', subtitle: 'ZAKIA', price: '30 DT', badge: 'Plat', action: `filterByPlat('Pasta fruit de mer')` });
        suggestions.push({ type: 'plat', icon: '🍝', title: 'Pasta escalope', subtitle: 'ZAKIA', price: '14 DT', badge: 'Plat', action: `filterByPlat('Pasta escalope')` });
        suggestions.push({ type: 'plat', icon: '🍝', title: 'Pasta Merguez', subtitle: 'ZAKIA', price: '14 DT', badge: 'Plat', action: `filterByPlat('Pasta Merguez')` });
    }
    if (input.includes('ojja') || input.includes('oeuf') || input.includes('tomate')) {
        suggestions.push({ type: 'restaurant', icon: '🍗', title: 'ZAKIA', subtitle: '📍 Beb Jdid • 11h-23h', badge: 'Restaurant', action: `filterByRestaurant('resto5')` });
        suggestions.push({ type: 'plat', icon: '🍳', title: 'Ojja fruit de mer', subtitle: 'ZAKIA', price: '23 DT', badge: 'Plat', action: `filterByPlat('Ojja fruit de mer')` });
        suggestions.push({ type: 'plat', icon: '🍳', title: 'Ojja escalope', subtitle: 'ZAKIA', price: '14 DT', badge: 'Plat', action: `filterByPlat('Ojja escalope')` });
        suggestions.push({ type: 'plat', icon: '🍳', title: 'Ojja merguez', subtitle: 'ZAKIA', price: '14 DT', badge: 'Plat', action: `filterByPlat('Ojja merguez')` });
    }
    if (input.includes('tacos') || input.includes('2 viandes') || input.includes('escalope à la crème') || input.includes('crispy')) {
        suggestions.push({ type: 'restaurant', icon: '🍔', title: 'AL OSTEDH', subtitle: '📍 LAFAYETTE • 10h-22h', badge: 'Restaurant', action: `filterByRestaurant('resto1')` });
        suggestions.push({ type: 'plat', icon: '🌮', title: 'Tacos 2 viandes', subtitle: 'AL OSTEDH', price: '17 DT', badge: 'Plat', action: `filterByPlat('Tacos 2 viandes')` });
        suggestions.push({ type: 'plat', icon: '🌮', title: 'Tacos escalope à la crème', subtitle: 'AL OSTEDH', price: '15,3 DT', badge: 'Plat', action: `filterByPlat('Tacos escalope à la crème')` });
        suggestions.push({ type: 'plat', icon: '🌮', title: 'Tacos crispy', subtitle: 'AL OSTEDH', price: '15,3 DT', badge: 'Plat', action: `filterByPlat('Tacos crispy')` });
    }
    if (input.includes('didi')) {
        suggestions.push({ type: 'restaurant', icon: '🍽️', title: 'DIDI', subtitle: '📍 LAFAYETTE • 11h-23h', badge: 'Restaurant', action: `filterByRestaurant('resto6')` });
    }
    if (input.includes('sandwich') && input.includes('didi')) {
        suggestions.push({ type: 'plat', icon: '🥪', title: 'Sandwich thon frit', subtitle: 'DIDI', price: '7 DT', badge: 'Plat', action: `filterByPlat('Sandwich thon frit')` });
        suggestions.push({ type: 'plat', icon: '🥪', title: 'Sandwich kafteji frit', subtitle: 'DIDI', price: '4 DT', badge: 'Plat', action: `filterByPlat('Sandwich kafteji frit')` });
        suggestions.push({ type: 'plat', icon: '🥪', title: 'Sandwich poulet frit', subtitle: 'DIDI', price: '5 DT', badge: 'Plat', action: `filterByPlat('Sandwich poulet frit')` });
    }
    if (input.includes('shan') || input.includes('tounsi') || input.includes('plat')) {
        suggestions.push({ type: 'plat', icon: '🍲', title: 'Shan Tounsi', subtitle: 'DIDI', price: '12 DT', badge: 'Plat', action: `filterByPlat('Shan Tounsi')` });
    }
    if (input.includes('makloub') && input.includes('la casa')) {
        suggestions.push({ type: 'plat', icon: '🥙', title: 'Makloub Escalope grillée', subtitle: 'La Casa De Mama', price: '7.5 DT', badge: 'Plat', action: `filterByPlat('Makloub Escalope grillée')` });
        suggestions.push({ type: 'plat', icon: '🥙', title: 'Makloub Escalope panée', subtitle: 'La Casa De Mama', price: '8 DT', badge: 'Plat', action: `filterByPlat('Makloub Escalope panée')` });
        suggestions.push({ type: 'plat', icon: '🥙', title: 'Makloub Shawarma', subtitle: 'La Casa De Mama', price: '7.5 DT', badge: 'Plat', action: `filterByPlat('Makloub Shawarma')` });
        suggestions.push({ type: 'plat', icon: '🥙', title: 'Makloub Cordon bleu', subtitle: 'La Casa De Mama', price: '9 DT', badge: 'Plat', action: `filterByPlat('Makloub Cordon bleu')` });
        suggestions.push({ type: 'plat', icon: '🥙', title: 'Makloub Thon', subtitle: 'La Casa De Mama', price: '6 DT', badge: 'Plat', action: `filterByPlat('Makloub Thon')` });
        suggestions.push({ type: 'plat', icon: '🥙', title: 'Makloub Jambon', subtitle: 'La Casa De Mama', price: '6 DT', badge: 'Plat', action: `filterByPlat('Makloub Jambon')` });
    }
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
    const uniqueSuggestions = [];
    const seen = new Set();
    for (const s of suggestions) {
        const key = s.title + s.subtitle;
        if (!seen.has(key)) {
            seen.add(key);
            uniqueSuggestions.push(s);
        }
    }
    list.innerHTML = uniqueSuggestions.length ? uniqueSuggestions.map(s => `
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
            let match = nom.includes(input) || desc.includes(input) || prix.includes(input) || categorie.includes(input) || matchMotsCles;
            const escalopeSupplements = ['gruyère', 'pepperoni', 'cheddar', 'mozzarella', 'steak', 'raclette'];
            if (input.includes('escalope')) {
                if (nom === 'spécial escalope') match = true;
                if (escalopeSupplements.some(sup => input.includes(sup))) {
                    if (nom === 'spécial escalope') match = true;
                }
            }
            if (input.includes('escalope') && input.includes('+')) {
                if (nom === 'spécial escalope') match = true;
            }
            if (input.includes('makloub') || input.includes('jambon') || input.includes('thon') || input.includes('poulet') || input.includes('mahboul') || input.includes('crème')) {
                if (nom === 'classics - makloubs') match = true;
                if (nom === 'makloub mahboul') match = true;
            }
            if (input.includes('pizza') || input.includes('triplex') || input.includes('double pâtes')) {
                if (nom === 'pizza triplex (double pâtes)') match = true;
            }
            if (input.includes('4 feux') || input.includes('la casa') || input.includes('mama')) {
                if (nom === '4 feux') match = true;
            }
            if (input.includes('pizza thon') || (input.includes('pizza') && input.includes('thon'))) {
                if (nom === 'pizza thon') match = true;
            }
            if (input.includes('pizza exacatory') || (input.includes('pizza') && input.includes('exacatory'))) {
                if (nom === 'pizza exacatory') match = true;
            }
            if (input.includes('pizza mitro') || (input.includes('pizza') && input.includes('mitro'))) {
                if (nom === 'pizza mitro') match = true;
            }
            if (input.includes('pizza 4 fromage') || (input.includes('pizza') && input.includes('4 fromage')) || input.includes('roquefort')) {
                if (nom === 'pizza 4 fromage mini') match = true;
                if (nom === 'pizza 4 fromage moy') match = true;
                if (nom === 'pizza 4 fromage maxi') match = true;
                if (nom === 'pizza 4 fromage xl') match = true;
            }
            if (input.includes('baguette') || input.includes('farcie') || input.includes('escalope') || input.includes('shawarma') || input.includes('mixte')) {
                if (nom === 'baguette farcie') match = true;
            }
            if (input.includes('anchilada') || input.includes('mexicain') || input.includes('cordon bleu')) {
                if (nom === 'anchilada escalope grillée') match = true;
                if (nom === 'anchilada escalope panée') match = true;
                if (nom === 'anchilada cordon bleu') match = true;
            }
            if (input.includes('poulet') || input.includes('tastira') || input.includes('makrouna') || input.includes('loubia')) {
                if (nom === 'poulet rôti') match = true;
            }
            if (input.includes('pasta') || input.includes('fruit de mer') || input.includes('escalope') || input.includes('merguez')) {
                if (nom === 'pasta fruit de mer') match = true;
                if (nom === 'pasta escalope') match = true;
                if (nom === 'pasta merguez') match = true;
            }
            if (input.includes('ojja') || input.includes('oeuf') || input.includes('tomate')) {
                if (nom === 'ojja fruit de mer') match = true;
                if (nom === 'ojja escalope') match = true;
                if (nom === 'ojja merguez') match = true;
            }
            if (input.includes('tacos') || input.includes('2 viandes') || input.includes('escalope à la crème') || input.includes('crispy')) {
                if (nom === 'tacos 2 viandes') match = true;
                if (nom === 'tacos escalope à la crème') match = true;
                if (nom === 'tacos crispy') match = true;
            }
            if (input.includes('didi')) {
                if (nomResto.includes('didi')) match = true;
            }
            if (input.includes('sandwich thon') || input.includes('sandwich kafteji') || input.includes('sandwich poulet')) {
                if (nom === 'sandwichs') match = true;
            }
            if (input.includes('shan') || input.includes('tounsi')) {
                if (nom === 'shan tounsi') match = true;
            }
            if (input.includes('makloub') && input.includes('la casa')) {
                if (nom === 'makloub') match = true;
            }
            p.style.display = match ? 'block' : 'none';
            if (match) aUnResultat = true;
        });
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
                let match = nom.includes(input) || desc.includes(input) || prix.includes(input) || categorie.includes(input) || matchMotsCles;
                const escalopeSupplements = ['gruyère', 'pepperoni', 'cheddar', 'mozzarella', 'steak', 'raclette'];
                if (input.includes('escalope')) {
                    if (nom === 'spécial escalope') match = true;
                    if (escalopeSupplements.some(sup => input.includes(sup))) {
                        if (nom === 'spécial escalope') match = true;
                    }
                }
                if (input.includes('escalope') && input.includes('+')) {
                    if (nom === 'spécial escalope') match = true;
                }
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

// ==================== MODAL PIZZA (AL OSTEDH) ====================
let currentProduct = { name: '', price: '', resto: '', mode: 'direct' };

function showChoiceModal(productName, productPrice, restoName, mode = 'direct') {
    currentProduct = { name: productName, price: productPrice, resto: restoName, mode: mode };
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
    let productName = `${currentProduct.name} (${choice})`;
    let price = currentProduct.price;
    let resto = currentProduct.resto;
    
    if (currentProduct.mode === 'cart') {
        addToCart(productName, price, 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788915/pizza_bigmax_thon_pepperoni_jqgogy.png', resto);
    } else {
        let message = `Ma commande :\n• ${productName} (${resto}) x1 - ${price}\nTotal (hors livraison) : ${price}\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ==================== MODAL ESCALOPE ====================
const escalopeOptionsList = [
    { name: "Spécial escalope", price: "9,4 DT" },
    { name: "Spécial escalope + Gruyère", price: "10,9 DT" },
    { name: "Spécial escalope + Pepperoni", price: "10,9 DT" },
    { name: "Spécial escalope + cheddar Irlandais", price: "10,9 DT" },
    { name: "Spécial escalope + mozzarella", price: "10,9 DT" }
];

let currentEscalopeMode = null;

function showEscalopeModal(mode) {
    currentEscalopeMode = mode;
    const modal = document.getElementById('escalopeModal');
    const optionsContainer = document.getElementById('escalopeOptions');
    if (!modal || !optionsContainer) return;
    
    optionsContainer.innerHTML = escalopeOptionsList.map(opt => `
        <div class="escalope-option-btn" onclick="selectEscalopeOption('${opt.name.replace(/'/g, "\\'")}', '${opt.price}')">
            <div class="escalope-option-name">${opt.name}</div>
            <div class="escalope-option-price">${opt.price}</div>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeEscalopeModal() {
    const modal = document.getElementById('escalopeModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectEscalopeOption(productName, productPrice) {
    closeEscalopeModal();
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774131090/Sadwich_escalope_lahxch.png';
    const restoName = 'AL OSTEDH';
    if (currentEscalopeMode === 'cart') {
        addToCart(productName, productPrice, imageUrl, restoName);
    } else {
        let message = `Ma commande :\n• ${productName} (${restoName}) x1 - ${productPrice}\nTotal (hors livraison) : ${productPrice}\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ==================== MODAL MAKLOUB (KING STREET) ====================
const makloubOptionsList = [
    { name: "Jambon fumé", price: "8,5 DT", ingredients: "Jambon fumé, mozzarella, frites, harissa, sauce à l'ail, oignons, tomate" },
    { name: "Thon", price: "8,9 DT", ingredients: "Thon, mozzarella, frites, harissa, sauce à l'ail, oignons, tomate" },
    { name: "Poulet grillé", price: "8,9 DT", ingredients: "Poulet grillé, mozzarella, frites, harissa, sauce à l'ail, oignons, tomate" },
    { name: "Poulet pané", price: "8,9 DT", ingredients: "Poulet pané, mozzarella, frites, harissa, sauce à l'ail, oignons, tomate" }
];

let currentMakloubMode = null;

function showMakloubModal(mode) {
    currentMakloubMode = mode;
    const modal = document.getElementById('makloubModal');
    const optionsContainer = document.getElementById('makloubOptions');
    if (!modal || !optionsContainer) return;
    
    optionsContainer.innerHTML = makloubOptionsList.map(opt => `
        <div class="makloub-option-btn" onclick="selectMakloubOption('${opt.name.replace(/'/g, "\\'")}', '${opt.price}', '${opt.ingredients.replace(/'/g, "\\'")}')">
            <div style="flex: 1;">
                <div class="makloub-option-header">
                    <span class="makloub-option-name">${opt.name}</span>
                    <span class="makloub-option-price">${opt.price}</span>
                </div>
                <div class="makloub-option-ingredients">${opt.ingredients}</div>
            </div>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeMakloubModal() {
    const modal = document.getElementById('makloubModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectMakloubOption(productName, productPrice, ingredients) {
    closeMakloubModal();
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774510751/makloub_king_street_or1ngo.png';
    const restoName = 'King Street';
    const fullProductName = `Makloub ${productName}`;
    if (currentMakloubMode === 'cart') {
        addToCart(fullProductName, productPrice, imageUrl, restoName);
    } else {
        let message = `Ma commande :\n• ${fullProductName} (${restoName}) x1 - ${productPrice}\nTotal (hors livraison) : ${productPrice}\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ==================== MODAL PIZZA TRIPLEX ====================
const pizzaTriplexOptionsList = [
    { name: "Moyenne", price: "20,9 DT", size: "30 cm", description: "Jambon fumé, escalope, pepperoni, mozzarella, cheddar, sauce tomate, basilic, tomates cerises" },
    { name: "Max", price: "26,9 DT", size: "40 cm", description: "Jambon fumé, escalope, pepperoni, mozzarella, cheddar, sauce tomate, basilic, tomates cerises" },
    { name: "Family", price: "33,9 DT", size: "50 cm", description: "Jambon fumé, escalope, pepperoni, mozzarella, cheddar, sauce tomate, basilic, tomates cerises" }
];

let currentPizzaTriplexMode = null;

function showPizzaTriplexModal(mode) {
    currentPizzaTriplexMode = mode;
    const modal = document.getElementById('pizzaTriplexModal');
    const optionsContainer = document.getElementById('pizzaTriplexOptions');
    if (!modal || !optionsContainer) return;
    
    optionsContainer.innerHTML = pizzaTriplexOptionsList.map(opt => `
        <div class="pizza-option-btn" onclick="selectPizzaTriplexOption('${opt.name}', '${opt.price}', '${opt.size}', '${opt.description.replace(/'/g, "\\'")}')">
            <div style="flex: 1;">
                <div class="pizza-option-name">${opt.name} (${opt.size})</div>
                <div class="pizza-option-desc">${opt.description}</div>
            </div>
            <div class="pizza-option-price">${opt.price}</div>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePizzaTriplexModal() {
    const modal = document.getElementById('pizzaTriplexModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectPizzaTriplexOption(size, price, pizzaSize, description) {
    closePizzaTriplexModal();
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774519318/pizza_triplex_kyfy3c.png';
    const restoName = 'King Street';
    const fullProductName = `Pizza Triplex (Double Pâtes) ${size} (${pizzaSize})`;
    if (currentPizzaTriplexMode === 'cart') {
        addToCart(fullProductName, price, imageUrl, restoName);
    } else {
        let message = `Ma commande :\n• ${fullProductName} (${restoName}) x1 - ${price}\nTotal (hors livraison) : ${price}\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ==================== MODAL PIZZA THON (LA CASA DE MAMA) ====================
const pizzaThonOptionsList = [
    { name: "Mini", price: "7 DT", size: "Mini", description: "Sauce tomate, mozzarella, thon" },
    { name: "MOY", price: "10 DT", size: "Moyenne", description: "Sauce tomate, mozzarella, thon" },
    { name: "MAXI", price: "14,5 DT", size: "Maxi", description: "Sauce tomate, mozzarella, thon" },
    { name: "XL", price: "18 DT", size: "XL", description: "Sauce tomate, mozzarella, thon" }
];

let currentPizzaThonMode = null;

function showPizzaThonModal(mode) {
    currentPizzaThonMode = mode;
    const modal = document.getElementById('pizzaThonModal');
    const optionsContainer = document.getElementById('pizzaThonOptions');
    if (!modal || !optionsContainer) return;
    
    optionsContainer.innerHTML = pizzaThonOptionsList.map(opt => `
        <div class="pizza-option-btn" onclick="selectPizzaThonOption('${opt.name}', '${opt.price}', '${opt.size}', '${opt.description.replace(/'/g, "\\'")}')">
            <div style="flex: 1;">
                <div class="pizza-option-name">${opt.name} (${opt.size})</div>
                <div class="pizza-option-desc">${opt.description}</div>
            </div>
            <div class="pizza-option-price">${opt.price}</div>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePizzaThonModal() {
    const modal = document.getElementById('pizzaThonModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectPizzaThonOption(size, price, pizzaSize, description) {
    closePizzaThonModal();
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774537477/pizza_resto4_vr1i1h.png';
    const restoName = 'La Casa De Mama';
    const fullProductName = `Pizza Thon ${size} (${pizzaSize})`;
    if (currentPizzaThonMode === 'cart') {
        addToCart(fullProductName, price, imageUrl, restoName);
    } else {
        let message = `Ma commande :\n• ${fullProductName} (${restoName}) x1 - ${price}\nTotal (hors livraison) : ${price}\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ==================== MODAL PIZZA EXACATORY (LA CASA DE MAMA) ====================
const pizzaExacatoryOptionsList = [
    { name: "Moyenne", price: "15 DT", size: "Moyenne", description: "Double pâte, escalope, shawarma, champignons, pepperoni, sauce blanche ou tomate" },
    { name: "Maxi", price: "20 DT", size: "Maxi", description: "Double pâte, escalope, shawarma, champignons, pepperoni, sauce blanche ou tomate" },
    { name: "XL", price: "25 DT", size: "XL", description: "Double pâte, escalope, shawarma, champignons, pepperoni, sauce blanche ou tomate" }
];

let currentPizzaExacatoryMode = null;

function showPizzaExacatoryModal(mode) {
    currentPizzaExacatoryMode = mode;
    const modal = document.getElementById('pizzaExacatoryModal');
    const optionsContainer = document.getElementById('pizzaExacatoryOptions');
    if (!modal || !optionsContainer) return;
    
    optionsContainer.innerHTML = pizzaExacatoryOptionsList.map(opt => `
        <div class="pizza-option-btn" onclick="selectPizzaExacatoryOption('${opt.name}', '${opt.price}', '${opt.size}', '${opt.description.replace(/'/g, "\\'")}')">
            <div style="flex: 1;">
                <div class="pizza-option-name">${opt.name}</div>
                <div class="pizza-option-desc">${opt.description}</div>
            </div>
            <div class="pizza-option-price">${opt.price}</div>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePizzaExacatoryModal() {
    const modal = document.getElementById('pizzaExacatoryModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectPizzaExacatoryOption(size, price, pizzaSize, description) {
    closePizzaExacatoryModal();
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774537501/Pizza_exacatory_ci73dm.png';
    const restoName = 'La Casa De Mama';
    const fullProductName = `Pizza Exacatory ${size} (${pizzaSize})`;
    if (currentPizzaExacatoryMode === 'cart') {
        addToCart(fullProductName, price, imageUrl, restoName);
    } else {
        let message = `Ma commande :\n• ${fullProductName} (${restoName}) x1 - ${price}\nTotal (hors livraison) : ${price}\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ==================== MODAL BAGUETTE FARCIE (LA CASA DE MAMA) ====================
const baguetteTailleOptions = [
    { name: "Moy", price: "10" },
    { name: "Maxi", price: "16" },
    { name: "1 Mètre", price: "25" }
];

const baguetteViandeOptions = [
    { name: "Escalope" },
    { name: "Shawarma" },
    { name: "Mixte (Escalope + Shawarma)" }
];

let currentBaguetteMode = null;
let selectedBaguetteTaille = null;
let selectedBaguetteViande = null;

function showBaguetteModal(mode) {
    currentBaguetteMode = mode;
    selectedBaguetteTaille = null;
    selectedBaguetteViande = null;
    
    const modal = document.getElementById('baguetteModal');
    const optionsContainer = document.getElementById('baguetteOptions');
    if (!modal || !optionsContainer) return;
    
    let html = '<div class="baguette-step"><div class="baguette-step-title">1. Choisissez la taille :</div><div class="baguette-size-grid">';
    baguetteTailleOptions.forEach(opt => {
        html += `<div class="baguette-size-btn" onclick="selectTailleBaguette('${opt.name}', '${opt.price}')">
                    <div class="baguette-size-name">${opt.name}</div>
                    <div class="baguette-size-price">${opt.price} DT</div>
                </div>`;
    });
    html += '</div></div>';
    html += '<div id="baguetteViandeStep" style="display: none;"><div class="baguette-step-title">2. Choisissez la viande :</div><div class="baguette-viande-grid">';
    baguetteViandeOptions.forEach(opt => {
        html += `<div class="baguette-viande-btn" onclick="selectViandeBaguette('${opt.name}')">
                    <div class="baguette-viande-name">${opt.name}</div>
                </div>`;
    });
    html += '</div></div>';
    html += '<div id="baguetteConfirmDiv" style="display: none; margin-top: 1rem;"><button class="baguette-confirm-btn" onclick="confirmerBaguette()">✅ Valider la commande</button></div>';
    
    optionsContainer.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function selectTailleBaguette(taille, prix) {
    selectedBaguetteTaille = { taille, prix: prix };
    document.querySelectorAll('.baguette-size-btn').forEach(btn => btn.classList.remove('selected'));
    event.target.closest('.baguette-size-btn').classList.add('selected');
    document.getElementById('baguetteViandeStep').style.display = 'block';
}

function selectViandeBaguette(viandeName) {
    selectedBaguetteViande = { viandeName };
    document.querySelectorAll('.baguette-viande-btn').forEach(btn => btn.classList.remove('selected'));
    event.target.closest('.baguette-viande-btn').classList.add('selected');
    document.getElementById('baguetteConfirmDiv').style.display = 'block';
}

function confirmerBaguette() {
    if (!selectedBaguetteTaille || !selectedBaguetteViande) {
        alert("Veuillez d'abord choisir la taille et la viande !");
        return;
    }
    
    const productName = `Baguette Farcie ${selectedBaguetteTaille.taille} (${selectedBaguetteViande.viandeName} + Jambon + Fromage)`;
    const productPrice = selectedBaguetteTaille.prix;
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775256523/Baguette_Farcie_epgizq.png';
    const restoName = 'La Casa De Mama';
    
    closeBaguetteModal();
    
    if (currentBaguetteMode === 'cart') {
        addToCart(productName, productPrice, imageUrl, restoName, null);
        document.getElementById('cartPanel').classList.add('show');
    } else {
        let message = `Ma commande :\n• ${productName} (${restoName}) x1 - ${productPrice} DT\nTotal (hors livraison) : ${productPrice} DT\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

function closeBaguetteModal() {
    const modal = document.getElementById('baguetteModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    selectedBaguetteTaille = null;
    selectedBaguetteViande = null;
}

// ==================== MODAL POULET (ZAKIA) ====================
const pouletTailleOptions = [
    { name: "Quart de poulet", prices: { tastira: "9", makrouna: "8.5", loubia: "8.5" } },
    { name: "Demi poulet", prices: { tastira: "15", makrouna: "14", loubia: "14" } },
    { name: "Poulet entier", prices: { tastira: "23", makrouna: "22", loubia: "22" } }
];

const pouletAccompagnementOptions = [
    { name: "Tastira" },
    { name: "Makrouna" },
    { name: "Loubia" }
];

let currentPouletMode = null;
let selectedPouletTaille = null;
let selectedPouletAccompagnement = null;
let selectedPouletPrice = null;

function showPouletModal(mode) {
    currentPouletMode = mode;
    selectedPouletTaille = null;
    selectedPouletAccompagnement = null;
    selectedPouletPrice = null;
    
    const modal = document.getElementById('pouletModal');
    const optionsContainer = document.getElementById('pouletOptions');
    if (!modal || !optionsContainer) return;
    
    let html = '<div class="poulet-step"><div class="poulet-step-title">1. Choisissez la taille :</div><div class="poulet-size-grid">';
    pouletTailleOptions.forEach(opt => {
        html += `<div class="poulet-size-btn" onclick="selectTaillePoulet('${opt.name}')">
                    <div class="poulet-size-name">${opt.name}</div>
                </div>`;
    });
    html += '</div></div>';
    html += '<div id="pouletAccompagnementStep" style="display: none;"><div class="poulet-step-title">2. Choisissez l\'accompagnement :</div><div class="poulet-accompagnement-grid">';
    
    if (selectedPouletTaille) {
        const tailleObj = pouletTailleOptions.find(t => t.name === selectedPouletTaille);
        pouletAccompagnementOptions.forEach(opt => {
            let price = '';
            if (opt.name === 'Tastira') price = tailleObj.prices.tastira;
            else if (opt.name === 'Makrouna') price = tailleObj.prices.makrouna;
            else price = tailleObj.prices.loubia;
            
            html += `<div class="poulet-accompagnement-btn" onclick="selectAccompagnementPoulet('${opt.name}', '${price}')">
                        <div class="poulet-accompagnement-name">${opt.name}</div>
                        <div class="poulet-accompagnement-price">${price} DT</div>
                    </div>`;
        });
    } else {
        pouletAccompagnementOptions.forEach(opt => {
            html += `<div class="poulet-accompagnement-btn" onclick="selectAccompagnementPoulet('${opt.name}', '')">
                        <div class="poulet-accompagnement-name">${opt.name}</div>
                        <div class="poulet-accompagnement-price">- DT</div>
                    </div>`;
        });
    }
    
    html += '</div></div>';
    html += '<div id="pouletConfirmDiv" style="display: none; margin-top: 1rem;"><button class="poulet-confirm-btn" onclick="confirmerPoulet()">✅ Valider la commande</button></div>';
    
    optionsContainer.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function selectTaillePoulet(taille) {
    selectedPouletTaille = taille;
    document.querySelectorAll('.poulet-size-btn').forEach(btn => btn.classList.remove('selected'));
    event.target.closest('.poulet-size-btn').classList.add('selected');
    
    const tailleObj = pouletTailleOptions.find(t => t.name === selectedPouletTaille);
    const accompagnementGrid = document.querySelector('.poulet-accompagnement-grid');
    
    if (accompagnementGrid) {
        let newHtml = '';
        pouletAccompagnementOptions.forEach(opt => {
            let price = '';
            if (opt.name === 'Tastira') price = tailleObj.prices.tastira;
            else if (opt.name === 'Makrouna') price = tailleObj.prices.makrouna;
            else price = tailleObj.prices.loubia;
            
            newHtml += `<div class="poulet-accompagnement-btn" onclick="selectAccompagnementPoulet('${opt.name}', '${price}')">
                            <div class="poulet-accompagnement-name">${opt.name}</div>
                            <div class="poulet-accompagnement-price">${price} DT</div>
                        </div>`;
        });
        accompagnementGrid.innerHTML = newHtml;
    }
    
    document.getElementById('pouletAccompagnementStep').style.display = 'block';
}

function selectAccompagnementPoulet(accompagnement, price) {
    selectedPouletAccompagnement = accompagnement;
    selectedPouletPrice = price;
    document.querySelectorAll('.poulet-accompagnement-btn').forEach(btn => btn.classList.remove('selected'));
    event.target.closest('.poulet-accompagnement-btn').classList.add('selected');
    document.getElementById('pouletConfirmDiv').style.display = 'block';
}

function confirmerPoulet() {
    if (!selectedPouletTaille || !selectedPouletAccompagnement) {
        alert("Veuillez d'abord choisir la taille et l'accompagnement !");
        return;
    }
    
    const productName = `${selectedPouletTaille} - ${selectedPouletAccompagnement}`;
    const price = selectedPouletPrice;
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774901380/poulet_zakia_sgcmsc.png';
    const restoName = 'ZAKIA';
    
    closePouletModal();
    
    if (currentPouletMode === 'cart') {
        addToCart(productName, price, imageUrl, restoName);
        document.getElementById('cartPanel').classList.add('show');
    } else {
        let message = `Ma commande :\n• ${productName} (${restoName}) x1 - ${price} DT\nTotal (hors livraison) : ${price} DT\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

function closePouletModal() {
    const modal = document.getElementById('pouletModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    selectedPouletTaille = null;
    selectedPouletAccompagnement = null;
    selectedPouletPrice = null;
}

// ==================== MODAL PASTA (ZAKIA) ====================
const pastaOptionsList = [
    { name: "Pasta fruit de mer", price: "30" },
    { name: "Pasta escalope", price: "14" },
    { name: "Pasta Merguez", price: "14" }
];

let currentPastaMode = null;

function showPastaModal(mode) {
    currentPastaMode = mode;
    const modal = document.getElementById('pastaModal');
    const optionsContainer = document.getElementById('pastaOptions');
    if (!modal || !optionsContainer) return;
    
    optionsContainer.innerHTML = pastaOptionsList.map(opt => `
        <div class="pasta-option-btn" onclick="selectPastaOption('${opt.name}', '${opt.price}')">
            <span class="pasta-option-name">${opt.name}</span>
            <span class="pasta-option-price">${opt.price} DT</span>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePastaModal() {
    const modal = document.getElementById('pastaModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectPastaOption(productName, price) {
    closePastaModal();
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774951259/pasta_zakia_faedmq.png';
    const restoName = 'ZAKIA';
    
    if (currentPastaMode === 'cart') {
        addToCart(productName, price, imageUrl, restoName);
        document.getElementById('cartPanel').classList.add('show');
    } else {
        let message = `Ma commande :\n• ${productName} (${restoName}) x1 - ${price} DT\nTotal (hors livraison) : ${price} DT\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ==================== MODAL OJJA (ZAKIA) ====================
const ojjaOptionsList = [
    { name: "Ojja fruit de mer", price: "23" },
    { name: "Ojja escalope", price: "14" },
    { name: "Ojja merguez", price: "14" }
];

let currentOjjaMode = null;

function showOjjaModal(mode) {
    currentOjjaMode = mode;
    const modal = document.getElementById('ojjaModal');
    const optionsContainer = document.getElementById('ojjaOptions');
    if (!modal || !optionsContainer) return;
    
    optionsContainer.innerHTML = ojjaOptionsList.map(opt => `
        <div class="ojja-option-btn" onclick="selectOjjaOption('${opt.name}', '${opt.price}')">
            <span class="ojja-option-name">${opt.name}</span>
            <span class="ojja-option-price">${opt.price} DT</span>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeOjjaModal() {
    const modal = document.getElementById('ojjaModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectOjjaOption(productName, price) {
    closeOjjaModal();
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774951260/ojja_zakia_ximfo4.png';
    const restoName = 'ZAKIA';
    
    if (currentOjjaMode === 'cart') {
        addToCart(productName, price, imageUrl, restoName);
        document.getElementById('cartPanel').classList.add('show');
    } else {
        let message = `Ma commande :\n• ${productName} (${restoName}) x1 - ${price} DT\nTotal (hors livraison) : ${price} DT\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ==================== MODAL ANCHILADA (LA CASA DE MAMA) ====================
const anchiladaOptionsList = [
    { name: "Anchilada escalope grillée", price: "8" },
    { name: "Anchilada escalope panée", price: "9" },
    { name: "Anchilada cordon bleu", price: "10" }
];

let currentAnchiladaMode = null;

function showAnchiladaModal(mode) {
    currentAnchiladaMode = mode;
    const modal = document.getElementById('anchiladaModal');
    const optionsContainer = document.getElementById('anchiladaOptions');
    if (!modal || !optionsContainer) return;
    
    optionsContainer.innerHTML = anchiladaOptionsList.map(opt => `
        <div class="anchilada-option-btn" onclick="selectAnchiladaOption('${opt.name}', '${opt.price}')">
            <span class="anchilada-option-name">${opt.name}</span>
            <span class="anchilada-option-price">${opt.price} DT</span>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAnchiladaModal() {
    const modal = document.getElementById('anchiladaModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectAnchiladaOption(productName, price) {
    closeAnchiladaModal();
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775069633/Anchilada_zixtsi.png';
    const restoName = 'La Casa De Mama';
    
    if (currentAnchiladaMode === 'cart') {
        addToCart(productName, price, imageUrl, restoName);
        document.getElementById('cartPanel').classList.add('show');
    } else {
        let message = `Ma commande :\n• ${productName} (${restoName}) x1 - ${price} DT\nTotal (hors livraison) : ${price} DT\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ==================== MODAL PIZZA 4 FROMAGE (LA CASA DE MAMA) ====================
const pizzaQuatreFromagesOptionsList = [
    { name: "Mini", price: "9", size: "Mini" },
    { name: "MOY", price: "13", size: "Moyenne" },
    { name: "Maxi", price: "16", size: "Maxi" },
    { name: "XL", price: "20", size: "XL" }
];

let currentPizzaQuatreFromagesMode = null;

function showPizzaQuatreFromagesModal(mode) {
    currentPizzaQuatreFromagesMode = mode;
    const modal = document.getElementById('pizzaQuatreFromagesModal');
    const optionsContainer = document.getElementById('pizzaQuatreFromagesOptions');
    if (!modal || !optionsContainer) return;
    
    optionsContainer.innerHTML = pizzaQuatreFromagesOptionsList.map(opt => `
        <div class="pizza-option-btn" onclick="selectPizzaQuatreFromagesOption('${opt.name}', '${opt.price}', '${opt.size}')">
            <div style="flex: 1;">
                <div class="pizza-option-name">${opt.name}</div>
                <div class="pizza-option-desc">Pizza 4 Fromage ${opt.size}</div>
            </div>
            <div class="pizza-option-price">${opt.price} DT</div>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePizzaQuatreFromagesModal() {
    const modal = document.getElementById('pizzaQuatreFromagesModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectPizzaQuatreFromagesOption(size, price, pizzaSize) {
    closePizzaQuatreFromagesModal();
    const productName = `Pizza 4 Fromage ${size} (${pizzaSize})`;
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775131136/pizza_lacasademama_qubsqh.png';
    const restoName = 'La Casa De Mama';
    
    if (currentPizzaQuatreFromagesMode === 'cart') {
        addToCart(productName, price, imageUrl, restoName);
        document.getElementById('cartPanel').classList.add('show');
    } else {
        let message = `Ma commande :\n• ${productName} (${restoName}) x1 - ${price} DT\nTotal (hors livraison) : ${price} DT\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ==================== MODAL TACOS (AL OSTEDH) ====================
const tacosAlOstedhOptionsList = [
    { name: "Tacos 2 viandes", price: "17" },
    { name: "Tacos escalope à la crème", price: "15.3" },
    { name: "Tacos crispy", price: "15.3" }
];

let currentTacosAlOstedhMode = null;

function showTacosAlOstedhModal(mode) {
    currentTacosAlOstedhMode = mode;
    const modal = document.getElementById('tacosAlOstedhModal');
    const optionsContainer = document.getElementById('tacosAlOstedhOptions');
    if (!modal || !optionsContainer) return;
    
    optionsContainer.innerHTML = tacosAlOstedhOptionsList.map(opt => `
        <div class="tacos-option-btn" onclick="selectTacosAlOstedhOption('${opt.name}', '${opt.price}')">
            <span class="tacos-option-name">${opt.name}</span>
            <span class="tacos-option-price">${opt.price} DT</span>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeTacosAlOstedhModal() {
    const modal = document.getElementById('tacosAlOstedhModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectTacosAlOstedhOption(productName, price) {
    closeTacosAlOstedhModal();
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775152509/tacos_alostedhhh_l5qajp.png';
    const restoName = 'AL OSTEDH';
    
    if (currentTacosAlOstedhMode === 'cart') {
        addToCart(productName, price, imageUrl, restoName);
        document.getElementById('cartPanel').classList.add('show');
    } else {
        let message = `Ma commande :\n• ${productName} (${restoName}) x1 - ${price} DT\nTotal (hors livraison) : ${price} DT\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ==================== MODAL POULET (DIDI) ====================
const pouletDidiTailleOptions = [
    { name: "Quart de poulet", prices: { makrouna: "8", tastira: "8", loubia: "8" } },
    { name: "Demi poulet", prices: { makrouna: "14", tastira: "14", loubia: "14" } },
    { name: "Poulet entier", prices: { makrouna: "24", tastira: "24", loubia: "24" } },
    { name: "Poulet sec", prices: { makrouna: "20", tastira: "20", loubia: "20" }, noAccompaniment: true }
];

const pouletDidiAccompagnementOptions = [
    { name: "Makrouna" },
    { name: "Tastira" },
    { name: "Loubia" }
];

let currentPouletDidiMode = null;
let selectedPouletDidiTaille = null;
let selectedPouletDidiAccompagnement = null;
let selectedPouletDidiPrice = null;

function showPouletDidiModal(mode) {
    currentPouletDidiMode = mode;
    selectedPouletDidiTaille = null;
    selectedPouletDidiAccompagnement = null;
    selectedPouletDidiPrice = null;
    
    const modal = document.getElementById('pouletDidiModal');
    const optionsContainer = document.getElementById('pouletDidiOptions');
    if (!modal || !optionsContainer) return;
    
    let html = '<div class="poulet-didi-step"><div class="poulet-didi-step-title">1. Choisissez la taille :</div><div class="poulet-didi-size-grid">';
    pouletDidiTailleOptions.forEach(opt => {
        html += `<div class="poulet-didi-size-btn" onclick="selectTaillePouletDidi('${opt.name}')">
                    <div class="poulet-didi-size-name">${opt.name}</div>
                </div>`;
    });
    html += '</div></div>';
    html += '<div id="pouletDidiAccompagnementStep" style="display: none;"><div class="poulet-didi-step-title">2. Choisissez l\'accompagnement :</div><div class="poulet-didi-accompagnement-grid">';
    
    if (selectedPouletDidiTaille) {
        const tailleObj = pouletDidiTailleOptions.find(t => t.name === selectedPouletDidiTaille);
        if (tailleObj && tailleObj.noAccompaniment) {
            document.getElementById('pouletDidiAccompagnementStep').style.display = 'none';
            document.getElementById('pouletDidiConfirmDiv').style.display = 'block';
            return;
        } else if (tailleObj) {
            pouletDidiAccompagnementOptions.forEach(opt => {
                let price = '';
                if (opt.name === 'Makrouna') price = tailleObj.prices.makrouna;
                else if (opt.name === 'Tastira') price = tailleObj.prices.tastira;
                else if (opt.name === 'Loubia') price = tailleObj.prices.loubia;
                
                html += `<div class="poulet-didi-accompagnement-btn" onclick="selectAccompagnementPouletDidi('${opt.name}', '${price}')">
                            <div class="poulet-didi-accompagnement-name">${opt.name}</div>
                            <div class="poulet-didi-accompagnement-price">${price} DT</div>
                        </div>`;
            });
        }
    } else {
        pouletDidiAccompagnementOptions.forEach(opt => {
            html += `<div class="poulet-didi-accompagnement-btn" onclick="selectAccompagnementPouletDidi('${opt.name}', '')">
                        <div class="poulet-didi-accompagnement-name">${opt.name}</div>
                        <div class="poulet-didi-accompagnement-price">- DT</div>
                    </div>`;
        });
    }
    
    html += '</div></div>';
    html += '<div id="pouletDidiConfirmDiv" style="display: none; margin-top: 1rem;"><button class="poulet-didi-confirm-btn" onclick="confirmerPouletDidi()">✅ Valider la commande</button></div>';
    
    optionsContainer.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function selectTaillePouletDidi(taille) {
    selectedPouletDidiTaille = taille;
    document.querySelectorAll('.poulet-didi-size-btn').forEach(btn => btn.classList.remove('selected'));
    event.target.closest('.poulet-didi-size-btn').classList.add('selected');
    
    const tailleObj = pouletDidiTailleOptions.find(t => t.name === selectedPouletDidiTaille);
    
    if (tailleObj && tailleObj.noAccompaniment) {
        document.getElementById('pouletDidiAccompagnementStep').style.display = 'none';
        document.getElementById('pouletDidiConfirmDiv').style.display = 'block';
        return;
    }
    
    const accompagnementGrid = document.querySelector('.poulet-didi-accompagnement-grid');
    
    if (accompagnementGrid && tailleObj) {
        let newHtml = '';
        pouletDidiAccompagnementOptions.forEach(opt => {
            let price = '';
            if (opt.name === 'Makrouna') price = tailleObj.prices.makrouna;
            else if (opt.name === 'Tastira') price = tailleObj.prices.tastira;
            else if (opt.name === 'Loubia') price = tailleObj.prices.loubia;
            
            newHtml += `<div class="poulet-didi-accompagnement-btn" onclick="selectAccompagnementPouletDidi('${opt.name}', '${price}')">
                            <div class="poulet-didi-accompagnement-name">${opt.name}</div>
                            <div class="poulet-didi-accompagnement-price">${price} DT</div>
                        </div>`;
        });
        accompagnementGrid.innerHTML = newHtml;
    }
    
    document.getElementById('pouletDidiAccompagnementStep').style.display = 'block';
}

function selectAccompagnementPouletDidi(accompagnement, price) {
    selectedPouletDidiAccompagnement = accompagnement;
    selectedPouletDidiPrice = price;
    document.querySelectorAll('.poulet-didi-accompagnement-btn').forEach(btn => btn.classList.remove('selected'));
    event.target.closest('.poulet-didi-accompagnement-btn').classList.add('selected');
    document.getElementById('pouletDidiConfirmDiv').style.display = 'block';
}

function confirmerPouletDidi() {
    if (!selectedPouletDidiTaille) {
        alert("Veuillez d'abord choisir la taille !");
        return;
    }
    
    const tailleObj = pouletDidiTailleOptions.find(t => t.name === selectedPouletDidiTaille);
    let productName = '';
    let price = '';
    
    if (tailleObj && tailleObj.noAccompaniment) {
        productName = `Poulet sec`;
        price = "20";
    } else {
        if (!selectedPouletDidiAccompagnement) {
            alert("Veuillez d'abord choisir l'accompagnement !");
            return;
        }
        productName = `${selectedPouletDidiTaille} - ${selectedPouletDidiAccompagnement}`;
        price = selectedPouletDidiPrice;
    }
    
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775152523/poulet_didi_yicgsm.png';
    const restoName = 'DIDI';
    
    closePouletDidiModal();
    
    if (currentPouletDidiMode === 'cart') {
        addToCart(productName, price, imageUrl, restoName);
        document.getElementById('cartPanel').classList.add('show');
    } else {
        let message = `Ma commande :\n• ${productName} (${restoName}) x1 - ${price} DT\nTotal (hors livraison) : ${price} DT\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

function closePouletDidiModal() {
    const modal = document.getElementById('pouletDidiModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    selectedPouletDidiTaille = null;
    selectedPouletDidiAccompagnement = null;
    selectedPouletDidiPrice = null;
}

// ==================== MODAL SANDWICHS (DIDI) ====================
const sandwichDidiOptionsList = [
    { name: "Sandwich thon ", price: "7", description: "avec frite" },
    { name: "Sandwich kafteji ", price: "4", description: "avec frite" },
    { name: "Sandwich poulet ", price: "5", description: "avec frite" }
];

let currentSandwichDidiMode = null;

function showSandwichDidiModal(mode) {
    currentSandwichDidiMode = mode;
    const modal = document.getElementById('sandwichDidiModal');
    const optionsContainer = document.getElementById('sandwichDidiOptions');
    if (!modal || !optionsContainer) return;
    
    optionsContainer.innerHTML = sandwichDidiOptionsList.map(opt => `
        <div class="sandwich-didi-option-btn" onclick="selectSandwichDidiOption('${opt.name.replace(/'/g, "\\'")}', '${opt.price}', '${opt.description.replace(/'/g, "\\'")}')">
            <div style="flex: 1;">
                <div class="sandwich-didi-option-name">${opt.name}</div>
                <div class="sandwich-didi-option-description">${opt.description}</div>
            </div>
            <div class="sandwich-didi-option-price">${opt.price} DT</div>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSandwichDidiModal() {
    const modal = document.getElementById('sandwichDidiModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectSandwichDidiOption(productName, price, description) {
    closeSandwichDidiModal();
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775152551/sandwich_thon_frite_didi_k2g3p2.png';
    const restoName = 'DIDI';
    const fullProductName = productName;
    
    if (currentSandwichDidiMode === 'cart') {
        addToCart(fullProductName, price, imageUrl, restoName);
        document.getElementById('cartPanel').classList.add('show');
    } else {
        let message = `Ma commande :\n• ${fullProductName} (${restoName}) x1 - ${price} DT\nTotal (hors livraison) : ${price} DT\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ==================== MODAL MAKLOUB (LA CASA DE MAMA) ====================
// ==================== MODAL MAKLOUB (LA CASA DE MAMA) ====================
const makloubLaCasaOptionsList = [
    { name: "Escalope grillée", price: "7.5", description: "" },
    { name: "Escalope panée", price: "8", description: "" },
    { name: "Shawarma", price: "7.5", description: "" },
    { name: "Cordon bleu", price: "9", description: "" },
    { name: "Thon", price: "6", description: "" },
    { name: "Jambon", price: "6", description: "" }
];

let currentMakloubLaCasaMode = null;

function showMakloubLaCasaModal(mode) {
    currentMakloubLaCasaMode = mode;
    const modal = document.getElementById('makloubLaCasaModal');
    const optionsContainer = document.getElementById('makloubLaCasaOptions');
    if (!modal || !optionsContainer) return;
    
    optionsContainer.innerHTML = makloubLaCasaOptionsList.map(opt => `
        <div class="makloub-lacasa-option-btn" onclick="selectMakloubLaCasaOption('${opt.name.replace(/'/g, "\\'")}', '${opt.price}', '${opt.description.replace(/'/g, "\\'")}')">
            <div style="flex: 1;">
                <div class="makloub-lacasa-option-name">${opt.name}</div>
            </div>
            <div class="makloub-lacasa-option-price">${opt.price} DT</div>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeMakloubLaCasaModal() {
    const modal = document.getElementById('makloubLaCasaModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectMakloubLaCasaOption(productName, price, description) {
    closeMakloubLaCasaModal();
    const imageUrl = 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775257405/makloub_jdid_ljdsyh.png';
    const restoName = 'La Casa De Mama';
    const fullProductName = `Makloub ${productName}`;
    
    if (currentMakloubLaCasaMode === 'cart') {
        addToCart(fullProductName, price, imageUrl, restoName);
        document.getElementById('cartPanel').classList.add('show');
    } else {
        let message = `Ma commande :\n• ${fullProductName} (${restoName}) x1 - ${price} DT\nTotal (hors livraison) : ${price} DT\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;
        window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    }
}
// ==================== SYSTÈME DE PANIER AVEC FRITES ====================
let cart = [];
const MAX_CART_ITEMS = 5;
const FRITES_PRICE = 2.5;
const FRITES_NAME = "🍟 Frites supplémentaires";

function addFritesToCart() {
    if (cart.length === 0) {
        alert("Veuillez d'abord ajouter un plat avant d'ajouter des frites !");
        return;
    }
    
    const restoName = cart[0].resto;
    const existingFrites = cart.find(item => item.name === FRITES_NAME && item.resto === restoName);
    
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems >= MAX_CART_ITEMS) {
        showLimitModal();
        return;
    }
    
    if (existingFrites) {
        if (totalItems + 1 > MAX_CART_ITEMS) {
            showLimitModal();
            return;
        }
        existingFrites.quantity += 1;
        existingFrites.priceDisplay = (existingFrites.price * existingFrites.quantity).toFixed(1).replace('.', ',') + ' DT';
    } else {
        cart.push({
            id: 'frites_' + Date.now(),
            name: FRITES_NAME,
            price: FRITES_PRICE,
            priceDisplay: FRITES_PRICE.toFixed(1).replace('.', ',') + ' DT',
            image: '🍟',
            resto: restoName,
            quantity: 1,
            isEmoji: true
        });
    }
    
    saveCart();
    animateCart();
    
    const fritesBtn = document.getElementById('addFritesBtn');
    if (fritesBtn) {
        fritesBtn.style.animation = 'fritesPulse 0.3s ease';
        setTimeout(() => {
            fritesBtn.style.animation = '';
        }, 300);
    }
}

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
    
    let cleanPrice = productPrice.toString().replace(' DT', '').replace(',', '.').trim();
    let priceNumber = parseFloat(cleanPrice);
    let priceDisplay = priceNumber.toFixed(1).replace('.', ',') + ' DT';
    
    let existingItem = cart.find(item => item.name === productName && item.resto === restoName);
    if (existingItem) {
        if (totalItems + 1 > MAX_CART_ITEMS) {
            showLimitModal();
            return false;
        }
        existingItem.quantity += 1;
        existingItem.priceDisplay = (existingItem.price * existingItem.quantity).toFixed(1).replace('.', ',') + ' DT';
    } else {
        let newId = 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        cart.push({
            id: newId,
            name: productName,
            price: priceNumber,
            priceDisplay: priceDisplay,
            image: productImage,
            resto: restoName,
            quantity: 1,
            isEmoji: false
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
        setTimeout(() => document.getElementById('cartPanel').classList.remove('show'), 1000);
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
        item.priceDisplay = (item.price * item.quantity).toFixed(1).replace('.', ',') + ' DT';
        saveCart();
    }
}

function toggleCart() {
    let panel = document.getElementById('cartPanel');
    panel.classList.toggle('show');
    updateCartDisplay();
}

function checkCartRestaurantsStatus() {
    if (cart.length === 0) return { allOpen: true, closedRestos: [] };
    
    const closedRestos = [];
    const checkedRestos = new Set();
    
    cart.forEach(item => {
        const restoName = item.resto;
        if (!checkedRestos.has(restoName)) {
            checkedRestos.add(restoName);
            
            let restoSection = null;
            if (restoName === 'AL OSTEDH') restoSection = document.getElementById('resto1');
            else if (restoName === 'CHICK\'IN') restoSection = document.getElementById('resto2');
            else if (restoName === 'King Street') restoSection = document.getElementById('resto3');
            else if (restoName === 'La Casa De Mama') restoSection = document.getElementById('resto4');
            else if (restoName === 'ZAKIA') restoSection = document.getElementById('resto5');
            else if (restoName === 'DIDI') restoSection = document.getElementById('resto6');
            
            if (restoSection) {
                const hoursElement = restoSection.querySelector('.restaurant-header p');
                const hoursText = hoursElement.textContent;
                const hoursMatch = hoursText.match(/(\d+)h[-\s](\d+)h/);
                
                if (hoursMatch) {
                    const isOpen = isRestaurantOpen(restoSection.id, hoursMatch[0]);
                    if (!isOpen) {
                        closedRestos.push(restoName);
                    }
                }
            }
        }
    });
    
    return { allOpen: closedRestos.length === 0, closedRestos };
}

function showRestaurantClosedModal(closedRestos) {
    const modal = document.createElement('div');
    modal.className = 'restaurant-closed-modal';
    modal.innerHTML = `
        <div class="restaurant-closed-content">
            <div class="restaurant-closed-header">
                <span class="restaurant-closed-icon">🔴</span>
                <h3>Restaurant fermé</h3>
            </div>
            <div class="restaurant-closed-body">
                <p>Le(s) restaurant(s) suivant(s) est/sont fermé(s) actuellement :</p>
                <ul>
                    ${closedRestos.map(resto => `<li><strong>${resto}</strong></li>`).join('')}
                </ul>
                <p>Veuillez retirer les articles de ces restaurants ou attendre leur réouverture pour finaliser votre commande.</p>
                <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">⏰ Horaires d'ouverture :<br>
                • AL OSTEDH : 11h - 00h<br>
                • CHICK'IN : 11h - 00h<br>
                • King Street : 11h - 01h<br>
                • La Casa De Mama : 11h - 01h<br>
                • ZAKIA : 17h - 02h<br>
                • DIDI : 11h - 02h</p>
            </div>
            <div class="restaurant-closed-footer">
                <button class="restaurant-closed-btn" onclick="this.closest('.restaurant-closed-modal').remove(); document.body.style.overflow = 'auto';">Compris</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    });
}

function updateCartDisplay() {
    let cartItems = document.getElementById('cartItems');
    let cartCount = document.getElementById('cartCount');
    let cartTotal = document.getElementById('cartTotal');
    let checkoutBtn = document.getElementById('checkoutBtn');
    let fritesBtn = document.getElementById('addFritesBtn');
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Votre panier est vide</p>';
        cartTotal.textContent = '0 DT';
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = '0.5';
        if (fritesBtn) fritesBtn.style.display = 'none';
        return;
    }
    
    if (fritesBtn) fritesBtn.style.display = 'flex';
    
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(1).replace('.', ',') + ' DT';
    
    const { allOpen, closedRestos } = checkCartRestaurantsStatus();
    
    if (!allOpen) {
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = '0.5';
        checkoutBtn.style.cursor = 'not-allowed';
        checkoutBtn.title = 'Restaurant(s) fermé(s) actuellement';
    } else {
        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = '1';
        checkoutBtn.style.cursor = 'pointer';
        checkoutBtn.title = '';
    }
    
    let itemsHtml = cart.map(item => {
        const isEmoji = item.isEmoji || item.image === '🍟';
        const imageContent = isEmoji ? 
            `<div class="cart-item-img emoji-img" style="background: #f8f9fa; display: flex; align-items: center; justify-content: center; font-size: 1.8rem;">🍟</div>` :
            `<div class="cart-item-img" style="background-image: url('${getProductImage(item.name)}');"></div>`;
        
        const restoHtml = item.name === "🍟 Frites supplémentaires" ? 
            '' : 
            `<div class="cart-item-resto">${item.resto}</div>`;
        
        return `
        <div class="cart-item" data-id="${item.id}">
            ${imageContent}
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                ${restoHtml}
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
    
    if (!allOpen && closedRestos.length > 0) {
        itemsHtml = `
            <div class="cart-warning">
                <div style="background: #fff3cd; color: #856404; padding: 0.8rem; border-radius: 8px; margin-bottom: 1rem; font-size: 0.8rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span>⚠️</span>
                    <span>Le restaurant <strong>${closedRestos.join(', ')}</strong> est fermé. Retirez ses articles pour commander.</span>
                </div>
            </div>
        ` + itemsHtml;
    }
    
    cartItems.innerHTML = itemsHtml;
}

function checkoutCart() {
    if (cart.length === 0) return;
    
    const { allOpen, closedRestos } = checkCartRestaurantsStatus();
    
    if (!allOpen) {
        showRestaurantClosedModal(closedRestos);
        return;
    }
    
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let totalFormatted = total.toFixed(1).replace('.', ',') + ' DT';
    
    let message = "Ma commande :\n";
    cart.forEach(item => {
        message += `• ${item.name} (${item.resto}) x${item.quantity} - ${item.priceDisplay}\n`;
    });
    message += `Total (hors livraison) : ${totalFormatted}\n\n`;
    message += `Merci de me confirmer la disponibilité et les frais de livraison.`;
    
    window.open(`https://wa.me/21651924385?text=${encodeURIComponent(message)}`, '_blank');
    cart = [];  
    saveCart();
    toggleCart();
}

function getProductImage(productName) {
    // AL OSTEDH
    if (productName.includes('Burger Crispy')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788845/burger_crispy_zu7tsq.png';
    if (productName.includes('Burger Classique')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788838/alostedh_zw5zjf.png';
    if (productName.includes('Burger Double Beef')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788845/burger_double_beef_hn1rtw.png';
    if (productName.includes('Burger Super Crispy')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788846/burger_super_cripsy_w5238p.png';
    if (productName.includes('Cheddar cheese') && productName.includes('21,9')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788843/burger_mushroom_beef_rmrvxl.png';
    if (productName.includes('Cheddar cheese') && productName.includes('23')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788938/truffe_burger_beef_xqzvro.png';
    if (productName.includes('Pizza 4 choix')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788911/pizza_4choix_bigmax_efwgr9.png';
    if (productName.includes('Pizza big max Thon')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788915/pizza_bigmax_thon_pepperoni_jqgogy.png';
    if (productName.includes('Pizza Big jambon')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773788918/Pizza_Big_jambon_fum%C3%A9_et_crispy_umdemv.png';
    if (productName.includes('Tacos')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775152509/tacos_alostedhhh_l5qajp.png';
    // Escalope
    if (productName.includes('Spécial escalope')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774131090/Sadwich_escalope_lahxch.png';
    // CHICK'IN
    if (productName.includes('Frenchy Tacos')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773804616/frenshy_tacos_c83sdp.png';
    if (productName.includes('Cheesy Burrito')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1773804874/cheesy_buritto_xtij9i.png';
    if (productName.includes('Burger Maple Sriracha')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774095344/Burger_Maple_sriracha_hcj6qu.png';
    if (productName.includes('Burger Trufflow')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774098227/Burger_Trufflow_Truffe_et_champignon_j9ddz4.png';
    if (productName.includes('Box Original')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774099274/Box_original_b1mgt2.png';
    if (productName.includes('Box Canada')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774129079/Box_canada_z91li8.png';
    if (productName.includes('Box The crisper')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774129687/Box_the_crisper_xwx58h.png';
    if (productName.includes('Box Tex-Mex')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774129851/Box_tex_mex_dkiwne.png';
    if (productName.includes('OG sub')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774129969/OG_SUB_d08hft.png';
    // King Street
    if (productName.includes('Makloub Mahboul')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774510734/makloub_mahboul_srroyh.png';
    if (productName.includes('Makloub') && !productName.includes('Mahboul') && !productName.includes('La Casa')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774510751/makloub_king_street_or1ngo.png';
    if (productName.includes('Pizza Triplex')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774519318/pizza_triplex_kyfy3c.png';
    // La Casa De Mama
    if (productName.includes('4 Feux')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774537520/4_Feux_ggi87s.png';
    if (productName.includes('Pizza Thon')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774537477/pizza_resto4_vr1i1h.png';
    if (productName.includes('Pizza Exacatory')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774537501/Pizza_exacatory_ci73dm.png';
    if (productName.includes('Pizza Mitro')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774537477/pizza_mitro_resto4_fmamta.png';
    if (productName.includes('Pizza 4 Fromage')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775131136/pizza_lacasademama_qubsqh.png';
    if (productName.includes('Baguette Farcie')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775256523/Baguette_Farcie_epgizq.png';
    if (productName.includes('Anchilada')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775069633/Anchilada_zixtsi.png';
    if (productName.includes('Makloub') && productName.includes('La Casa')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775257405/makloub_jdid_ljdsyh.png';
    // ZAKIA
    if (productName.includes('Quart') || productName.includes('Demi') || productName.includes('Poulet entier') || productName.includes('Tastira') || productName.includes('Makrouna') || productName.includes('Loubia')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774901380/poulet_zakia_sgcmsc.png';
    if (productName.includes('Pasta') || productName.includes('fruit de mer') || productName.includes('escalope') || productName.includes('Merguez')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774951259/pasta_zakia_faedmq.png';
    if (productName.includes('Ojja') || productName.includes('oeuf')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774951260/ojja_zakia_ximfo4.png';
    if (productName.includes('ZAKIA') || productName.includes('Zakia')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1774900511/zakia_logo_whzfbt.png';
    // DIDI
    if (productName.includes('Poulet sec')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775152523/poulet_didi_yicgsm.png';
    if (productName.includes('Quart') || productName.includes('Demi') || productName.includes('Poulet entier')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775152523/poulet_didi_yicgsm.png';
    if (productName.includes('Sandwich thon frit') || productName.includes('Sandwich kafteji frit') || productName.includes('Sandwich poulet frit') || productName.includes('Sandwich thon') || productName.includes('Sandwich kafteji') || productName.includes('Sandwich poulet')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775152551/sandwich_thon_frite_didi_k2g3p2.png';
    if (productName.includes('Shan Tounsi')) return 'https://res.cloudinary.com/dajtosaqx/image/upload/v1775152532/shan_tounsi_didi_sohp3n.png';
    return '';
}

function animateCart() {
    let cartFloat = document.getElementById('cartFloating');
    cartFloat.style.transform = 'scale(1.2)';
    setTimeout(() => cartFloat.style.transform = 'scale(1)', 200);
}

function showLimitModal() {
    document.getElementById('limitModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLimitModal() {
    document.getElementById('limitModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ==================== INITIALISATION ====================
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
