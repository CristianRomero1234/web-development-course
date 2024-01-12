# How to create a modal

**Usefull links:**
[Medium Author: Idorenyin Udoh, tutorial how to create a modal using](https://medium.com/@idorenyinudoh10/mastering-modals-a-comprehensive-guide-to-building-modals-with-the-html-dialog-element-ae64a3c2bab7)


# Modal Using HTML `<dialog>` Element

## Introduction

This documentation guides you through the process of creating a modal using the HTML `<dialog>` element. A modal is an UI component that overlays the main content, typically used to display additional information, forms, or alerts.

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modal Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Your HTML content goes here -->

    <!-- The modal dialog -->
    <dialog id="myModal">
        <!-- Modal content -->
        <div>
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
            <button id="closeModal">Close</button>
        </div>
    </dialog>

    <!-- Trigger button to open the modal -->
    <button id="openModal">Open Modal</button>

    <script src="script.js"></script>
</body>
</html>
```

## CSS Styles (styles.css)

```css
/* Add your CSS styles here */

/* Style for the overlay backdrop */
dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
}

/* Style for the modal container */
dialog {
    border: none;
    padding: 16px;
    width: 300px;
    background-color: #fff;
}
```

## JavaScript (script.js)

```javascript
// Add your JavaScript code here

document.getElementById('openModal').addEventListener('click', function() {
    // Open the modal when the button is clicked
    document.getElementById('myModal').showModal();
});

document.getElementById('closeModal').addEventListener('click', function() {
    // Close the modal when the close button is clicked
    document.getElementById('myModal').close();
});
```

## Explanation

1. **HTML Structure:**
   - The `<dialog>` element is used to create the modal container.
   - Inside the `<dialog>`, there is a `<div>` containing the modal content.
   - A trigger button (`<button id="openModal">Open Modal</button>`) is used to open the modal.
   - The dialog is linked to an external stylesheet (`styles.css`) and JavaScript file (`script.js`).

2. **CSS Styles:**
   - `dialog::backdrop` styles the overlay backdrop when the modal is open.
   - `dialog` styles the modal container, specifying its appearance.

3. **JavaScript:**
   - Event listeners are added to the open and close buttons.
   - Clicking the "Open Modal" button triggers the `showModal()` method on the dialog, displaying the modal.
   - Clicking the "Close" button inside the modal triggers the `close()` method on the dialog, hiding the modal.

*This lesson is developed making use of AI LLM system*