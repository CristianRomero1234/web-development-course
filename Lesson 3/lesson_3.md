# How to Create a Card

**Useful links:**

[W3 schools How to create a card with CSS](https://www.w3schools.com/howto/howto_css_cards.asp)

Certainly! Here's the Markdown documentation for the provided HTML and CSS code:

```markdown
# Round Card Example Documentation

## Introduction

This documentation explains the structure and styling of a round card using HTML and CSS. The code creates a card with a round shape and a hover effect.

## HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        /* Add your CSS styles here */
    </style>
</head>
<body>
    <!-- Your HTML content goes here -->

</body>
</html>
```

## CSS Styles (Presented within a `<style>` tag)

```html
<style>
    /* Add your CSS styles here */

    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 40%;
        border-radius: 5px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    img {
        border-radius: 5px 5px 0 0;
        width: 100%;
    }

    .container {
        padding: 2px 16px;
    }
</style>
```

## Card Structure

```html
<div class="card">
    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style="width:100%">
    <div class="container">
        <h4><b>Jane Doe</b></h4> 
        <p>Interior Designer</p> 
    </div>
</div>
```

## Explanation for  provided code

- The `card` class is used to define the card container with box-shadow and transition effects.
- The `hover` pseudo-class is applied to the card for the hover effect.
- The `img` element inside the card has a border-radius to create a rounded top.
- The `container` class provides padding to the content inside the card.

Cards are used in Web development as representations for data that have an image and some othe descriptions.

