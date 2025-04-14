//This section demonstartes how to grab DOM Elements for manipulation
const form = document.getElementById('resourceForm');
const resourceList=document.getElementById("resourceList");
const counter=document.getElementById('counter');
const searchInput=document.querySelector('.search-input');
const filterButtons=document.querySelectorAll('.filter-btn');

//This section demonstrates how to handles state management in Javascript
let resources =JSON.parse(localStorage.getItem('resources'));
let currentFilter="All";
let searchTerm='';

//This section demonstrates how we should intialize our Javascript application
function init(){
renderResources();
bindEvents();
updateCounter();

};[]

// In this section we demonstrate how to bind events in JS

function bindEvents(){
    form.addEventListener('submit',handleFormSubmit);
    searchInput.addEventListener('input', handleSearch);
    resourceList.addEventListener('click',handleRespurceClick);
    filterButtons.forEach(btn=>{
        btn.addEventListener('click',handleFilter);
    });
}

//This section demonstrates how to handle events in JS
function handleFormSubmit(e){
    e.preventDefault();

const formData= new FormData(form);
const resource ={
    name: formData.get('resourceName').trim(),
    type: formData.get('resourceType'),
    location: formData.get('resourceLocation').trim(),
    id: Date.now().toString(),
    dateAdded: new Date().toLocaleDateString()
};
if(validateForm(resource)){
    addResource(resource);
    form.reset();
    clearErrors();
}
};[];

//This seection demonstrates how to implment form validation in JS
function validateForm(resource){
let isValid=true;
if(!resource.name){
    showError('nameError', 'Resource name is required');
    isValid=false;
}
if(!resource.type){
    showError('typeError', 'Resource type is required');
    isValid=false;
}
if(!resource.location){
    showError('locationError', 'Resource location is required');
    isValid=false;
}
return isValid;

}

function showError(elementId, message){
    const errorElement=document.getElementById(elementId);
    errorElement.textContent=message;
}
function clearErrors(){
    document.querySelectorAll('.error-message').forEach(el=>{
        el.textContent='';
    });
}