# Kakuma Resource Tracker

A web-based application designed to help track and manage community resources in the Kakuma refugee camp. This application provides an intuitive interface for managing various types of resources including water points, food distribution centers, and medical aid facilities.

## Features

- **Resource Management**: Add, view, and delete community resources
- **Resource Types**: Support for different resource categories:
  - 💧 Water Points
  - 🍲 Food Distribution Centers
  - 🏥 Medical Aid Facilities
- **Real-time Filtering**: Filter resources by type (water, food, medical)
- **Search Functionality**: Search resources by name, type, or location
- **Resource Counter**: Track the total number of registered resources
- **Persistent Storage**: Data persistence using browser's local storage
- **Responsive Design**: Mobile-friendly interface

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic understanding of HTML, CSS, and JavaScript

### Installation

1. Clone or download this repository to your local machine
2. No additional dependencies or build steps required
3. Open `index.html` in your web browser

## Project Structure

```
├── index.html          # Main HTML structure
├── styles.css         # CSS styling and layout
├── app.js             # Application logic and functionality
└── README.md          # Project documentation
```

## Implementation Details

### HTML Structure (`index.html`)

- Semantic HTML5 elements for better accessibility
- Form section for adding new resources
- Filter buttons and search input for resource management
- Dynamic resource list section

### Styling (`styles.css`)

- CSS Custom Properties (variables) for consistent theming
- Responsive grid layout for resource cards
- Mobile-first design approach
- Visual feedback for user interactions
- Card-based UI with distinctive styling for different resource types

### JavaScript Implementation (`app.js`)

#### Core Features

1. **State Management**
   - Local storage integration for data persistence
   - Real-time state updates

2. **Event Handling**
   - Form submission validation
   - Resource filtering and search
   - Delete resource functionality

3. **DOM Manipulation**
   - Dynamic rendering of resource cards
   - Real-time counter updates
   - Error message handling

#### Code Organization

- Modular function structure
- Clear separation of concerns
- Event delegation for better performance
- Form validation with error handling

## Usage Guide

### Adding a Resource

1. Fill in the resource details:
   - Name of the resource
   - Select resource type (Water, Food, or Medical)
   - Enter location (Zone)
2. Click "Add Resource" button
3. The resource will appear in the list below

### Managing Resources

1. **Filtering**:
   - Use the filter buttons to view specific resource types
   - Click "All" to view all resources

2. **Searching**:
   - Type in the search box to find resources
   - Search works across resource names, types, and locations

3. **Deleting**:
   - Click the delete button (×) on any resource card to remove it

## Technical Concepts

### DOM Manipulation
- Direct DOM element selection and manipulation
- Event delegation for dynamic elements
- Template literals for HTML generation

### State Management
- Centralized state management
- Local storage integration
- Real-time state updates

### Event Handling
- Form submission and validation
- Click event handling
- Input event handling for search

### Data Persistence
- Local storage API usage
- JSON data structure
- State synchronization

## Best Practices Implemented

1. **Code Organization**
   - Modular function structure
   - Clear naming conventions
   - Consistent code formatting

2. **Error Handling**
   - Form validation
   - User feedback
   - Error message display

3. **Performance**
   - Event delegation
   - Efficient DOM updates
   - Optimized rendering

4. **User Experience**
   - Responsive design
   - Visual feedback
   - Intuitive interface

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).