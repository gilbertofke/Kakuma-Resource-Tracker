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