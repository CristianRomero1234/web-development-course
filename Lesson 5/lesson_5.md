# Grid display of Cards Array (with Modal).

**Useful links:**
- [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [W3 Schools, grid layout module](https://www.w3schools.com/css/css_grid.asp)
- [My take on the Exercise](https://cristianromero1234.github.io/web-development-course/Lesson%205/lesson_5.html)


## Introduction

In this lesson, we'll learn how to use JavaScript to dynamically create an array of 20 card elements and display them in a CSS grid of 4x5. Each card will follow the structure provided in the example HTML.

## Prerequisites

Make sure you have a basic understanding of HTML, CSS, and JavaScript. Familiarity with DOM manipulation is beneficial.

## HTML and CSS Setup

Before we start, ensure you have the necessary HTML and CSS structure for a single card in your document. The provided example card structure is as follows:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 35%;
            border-radius: 5px;
        }

        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        img {
            border-radius: 5px 5px 0 0;
        }

        .container {
            padding: 2px 16px;
        }
    </style>
</head>
<body>
    <!-- Card Example -->
    <h2>(W3 schools) Round Card</h2>

    <div class="card">
        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>Jane Doe</b></h4> 
            <p>Interior Designer</p> 
        </div>
    </div>
</body>
</html>
```

## JavaScript Implementation

Now, let's use JavaScript to dynamically create an array of 20 cards and display them in a grid.

```html
<!-- Include this script in the HTML body section -->
<script>
    // Step 1: Get the body element
    const body = document.body;

    // Step 2: Create an array to store card data
    const cardData = [
        { name: 'John Doe', occupation: 'Developer', image: 'https://example.com/john.jpg' },
        // Add data for the remaining cards
    ];

    // Step 3: Create a function to generate a card element
        function createCard(data) {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = data.image;
            img.alt = 'Avatar';
            img.style.width = '100%';

            const container = document.createElement('div');
            container.classList.add('container');

            const nameHeading = document.createElement('h4');
            nameHeading.innerHTML = `<b>${data.name}</b>`;

            const occupationParagraph = document.createElement('p');
            occupationParagraph.textContent = data.occupation;

            container.appendChild(nameHeading);
            container.appendChild(occupationParagraph);

            card.appendChild(img);
            card.appendChild(container);

            // Step 3.1: Create a hidden dialog for each card
            const dialog = document.createElement('dialog');
            const dialogContent = document.createElement('div');
            dialogContent.innerHTML = `<h2>${data.name}</h2><p>${data.occupation}</p>`;
            const dialogImg = document.createElement('img');
            dialogImg.src = data.image;
            dialogImg.alt = 'Avatar';
            dialogImg.style.width = '50%';
            const closeBtn = document.createElement('button');
            closeBtn.textContent = 'Close';
            closeBtn.addEventListener('click', () => dialog.close());
            dialog.appendChild(dialogImg);
            dialog.appendChild(dialogContent);
            dialog.appendChild(closeBtn);
            body.appendChild(dialog);

            // Step 3.2: Add click event to open the dialog when the card is clicked
            card.addEventListener('click', () => dialog.showModal());

            return card;
        }

        // Step 4: Create a function to display cards in a grid
        function displayCards(cards) {
            const gridContainer = document.createElement('div');
            gridContainer.style.display = 'grid';
            gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'; // 4 columns
            gridContainer.style.gridGap = '16px'; // Adjust as needed

            cards.forEach((data) => {
                const card = createCard(data);
                gridContainer.appendChild(card);
            });

            body.appendChild(gridContainer);
        }

        // Step 5: Call the displayCards function with the cardData array
        displayCards(cardData);
    </script>
```

## Conclusion

By following these steps, you've learned how to dynamically generate an array of card elements using JavaScript and display them in a grid layout. Customize the cardData array with your desired card information and adjust the grid layout as needed. This knowledge can be applied to create dynamic content on web pages.

*This lesson was developed making use of AI LLM system*