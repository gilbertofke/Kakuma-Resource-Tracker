//This section demonstrates how to grab DOM Elements for manipulation
const form = document.getElementById('resourceForm');
const resourcesList = document.getElementById('resourcesList'); // FIXED: Corrected ID from resourceList to resourcesList
const counter = document.getElementById('counter');
const searchInput = document.querySelector('.search-input');
const filterButtons = document.querySelectorAll('.filter-btn');

//This section demonstrates how to handle state management in Javascript
let resources = JSON.parse(localStorage.getItem('resources')) || [];
let currentFilter = "all";
let searchTerm = '';

//This section demonstrates how we should initialize our Javascript application
function init(){
    renderResources();
    bindEvents();
    updateCounter();
};

// In this section we demonstrate how to bind events in JS
function bindEvents(){
    form.addEventListener('submit', handleFormSubmit);
    searchInput.addEventListener('input', handleSearch);
    // FIXED: Changed resourceList to resourcesList
    resourcesList.addEventListener('click', handleResourceClick);
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
}

//This section demonstrates how to handle events in JS
function handleFormSubmit(e){
    e.preventDefault();

    // FIXED: Corrected form data collection
    const resource = {
        name: document.getElementById('resourceName').value.trim(),
        type: document.getElementById('resourceType').value,
        location: document.getElementById('resourceLocation').value.trim(),
        id: Date.now().toString(),
        dateAdded: new Date().toLocaleDateString()
    };
    
    if(validateForm(resource)){
        addResource(resource);
        form.reset();
        clearErrors();
    }
}

// ADDED: Missing function to handle filter button clicks
function handleFilter(e) {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    // Update current filter
    currentFilter = e.target.dataset.filter;
    
    // Re-render resources with new filter
    renderResources();
}

//This section demonstrates how to implement form validation in JS
function validateForm(resource){
    let isValid = true;
    if(!resource.name){
        showError('nameError', 'Resource name is required');
        isValid = false;
    }
    if(!resource.type){
        showError('typeError', 'Resource type is required');
        isValid = false;
    }
    if(!resource.location){
        showError('locationError', 'Resource location is required');
        isValid = false;
    }
    return isValid;
}

function showError(elementId, message){
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrors(){
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
}

//This section demonstrates how we implement the functionality for rendering and filtering of resources.
function renderResources(){
    let filteredResources = filterResources(resources, currentFilter, searchTerm);
    // FIXED: Changed resourceList to resourcesList
    resourcesList.innerHTML = filteredResources.map(resource =>
        `
        <div class="resource-card" data-type="${resource.type}">
            <button class="delete-btn" data-id="${resource.id}">&times;</button>
            <h3>${resource.name}</h3>
            <p class="meta">
                <span class="type">${getTypeIcon(resource.type)} ${formatResourceType(resource.type)}</span>
                <span class="location"> 📍 Zone ${resource.location}</span>
            </p>
            <small>Added: ${resource.dateAdded}</small>
        </div> 
        `
    ).join('');
}

// ADDED: Helper function to format resource type for display
function formatResourceType(type) {
    // Capitalize first letter of each word
    return type.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function filterResources(resources, filterType, searchTerm){
    return resources.filter(resource => {
        const matchesFilter = filterType === "all" || resource.type === filterType;
        // FIXED: Enhanced search to also check for resource type
        const matchesSearch = !searchTerm || 
            resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.type.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesFilter && matchesSearch;
    });
}

// Handle search functionality
function handleSearch(e) {
    searchTerm = e.target.value.trim(); // FIXED: Added trim() to handle whitespace in search
    renderResources();
}

// Handle resource click events (delete)
function handleResourceClick(e) {
    if (e.target.classList.contains('delete-btn')) {
        const id = e.target.dataset.id;
        resources = resources.filter(resource => resource.id !== id);
        saveToLocalStorage();
        renderResources();
        updateCounter();
    }
}

// Get icon based on resource type
function getTypeIcon(type) {
    // FIXED: Updated icons to match the resource types from HTML
    const icons = {
        'water': '💧',
        'food': '🍲',
        'medical': '🏥'
    };
    return icons[type] || '📍';
}

// Update resource counter
function updateCounter() {
    counter.textContent = resources.length;
}

// Add new resource
function addResource(resource) {
    resources.push(resource);
    saveToLocalStorage();
    renderResources();
    updateCounter();
}

//This last section demonstrates how to integrate local storage functionality to our app
function saveToLocalStorage(){
    localStorage.setItem('resources', JSON.stringify(resources));
}

//Initialize the App
init();
