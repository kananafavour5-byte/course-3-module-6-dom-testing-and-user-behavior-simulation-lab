// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

const button = document.getElementById("simulate-click");
const form = document.getElementById("user-form");
const error = document.getElementById("error-message");
const input = document.getElementById("user-input");
// const container = document.getElementById("dynamic-content");

function addElementToDOM(id, text) {
    const container = document.getElementById(id);
    if (!container) return;

    const el = document.createElement("div");
    el.textContent = text;  
    container.appendChild(el);
}

function removeElementFromDOM(id) {
    const el = document.getElementById(id);
    if (el) {
        el.remove();
    }
}

function simulateClick(id, text) {
    const container = document.getElementById(id);
    if (!container) return;

    const el = document.createElement("div");
    el.textContent = text;
    container.appendChild(el);
}

function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
}

function clearError(){
    error.textContent = "";
    error.classList.add("hidden");
}

function handleFormSubmit(formId, targetId) {
    const form = document.getElementById(formId);
    const input = document.getElementById("user-input");
    const error = document.getElementById("error-message");
    const target = document.getElementById(targetId);

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (input.value.trim() === "") {
            error.textContent = "Input cannot be empty";
            error.classList.remove("hidden");
            return;
        }

        error.textContent = "";
        error.classList.add("hidden");

        const el = document.createElement("div");
        el.textContent = input.value;
        target.appendChild(el);

        input.value = "";
    });
}


if (button) {
button.addEventListener('click', () => {
    addElementToDOM("dynamic-content", "Button clicked");
})
}


    handleFormSubmit("user-form", "dynamic-content")



module.exports = {addElementToDOM,
    removeElementFromDOM,
    showError, clearError, 
    handleFormSubmit,
    simulateClick};


