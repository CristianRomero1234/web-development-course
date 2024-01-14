# Introduction to PHP

# Introduction to PHP and Creating a Simple REST API

## Lesson Overview:

In this introductory lesson, we'll learn that PHP (Hypertext Preprocessor) is, a server-side scripting language widely used for web development. 
As well, we'll get the links to resources for further learning and an example for creating a basic REST API with a "hello world" endpoint.

Let's begin!

## What is PHP?

**PHP Basics:**
- PHP is a server-side scripting language designed for web development.
- It is embedded in HTML and executed on the server, generating dynamic content.
- PHP code is processed by the server before being sent to the browser.

**Key Features:**
- Easy integration with HTML.
- Support for various databases.
- Extensive community support and a large set of libraries.

## Where to Find Official Documentation?

**PHP Official Documentation:**
- [PHP Manual](https://www.php.net/manual/en/): The official resource for PHP documentation.
- [PHP Getting Started](https://www.php.net/manual/en/getting-started.php): A guide for beginners.

## Creating a Simple REST API

**Requirements:**

- A server environment with PHP installed.
- A text editor for writing PHP code.

**Step 1: Setup and Structure:**

- Create a new directory for your project.
- Inside the directory, create an `index.php` file.

**Step 2: Writing the REST API Code:**

```php
<?php
// Simple REST API with a "hello world" endpoint

// Check if the request is a GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Check if the requested endpoint is "hello"
    if (isset($_GET['endpoint']) && $_GET['endpoint'] === 'hello') {
        // Prepare a response in JSON format
        $response = [
            'message' => 'Hello, World!'
        ];

        // Set the content type to JSON
        header("Content-Type: application/json");

        // Output the JSON response
        echo json_encode($response);
    } else {
        // If the endpoint is not "hello", return a 404 error
        http_response_code(404);
        echo json_encode(['error' => 'Endpoint not found']);
    }
} else {
    // If the request is not a GET request, return a 405 error
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
}
?>

```

**Explanation:**

- We check if the request is a GET request using `$_SERVER['REQUEST_METHOD'] === 'GET'`.
- We then check if the requested endpoint is `"hello"` using `isset($_GET['endpoint']) && $_GET['endpoint'] === 'hello'`.
- If both conditions are met, we prepare a simple JSON response with a "Hello, World!" message.
- We set the content type to JSON using header("Content-Type: application/json").
- If the conditions are not met, we return appropriate HTTP error codes (404 for "Not Found" and 405 for "Method Not Allowed").

**Further Enhancements:**

- Expand the API by adding more endpoints or handling different HTTP methods.
- Connect to a database to fetch dynamic data.
- Implement error handling and validation.

**Step 3: Testing the API:**

- Save the `index.php` file.
- Start your PHP development server (e.g., `php -S localhost:8000`).
- Open your browser and visit `http://localhost:8000/?endpoint=hello`.



## Conclusion:

This lesson provided a basic understanding of PHP, where to find official documentation, and a hands-on experience in creating a simple REST API. As you explore PHP further, you'll discover its versatility in web development, making it a valuable skill for building dynamic and interactive websites.


Good Luck! C.R