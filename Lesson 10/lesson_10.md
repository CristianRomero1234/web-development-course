# Introduction to Python 

---


### Basic Information

Python is a versatile and high-level programming language known for its simplicity and readability. It is widely used for web development, data science, artificial intelligence, automation, and more. Python's syntax is clean and easy to understand, making it an excellent language for beginners.

### Official Documentation

To explore Python further and access official documentation, visit the [Python Official Website](https://www.python.org/). The website provides comprehensive documentation, tutorials, and resources for Python programmers.

---

## Creating a Simple REST API Server

### Setting Up a Simple Server

Python allows you to create a basic HTTP server without using any external frameworks. Let's create a simple Python script to serve as a REST API with a "hello world" endpoint.

### Python Code for Simple Server

Create a file named `simple_server.py` and add the following code:

```python
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs

class SimpleRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_url = urlparse(self.path)
        query_params = parse_qs(parsed_url.query)

        if parsed_url.path == '/hello':
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()

            name = query_params.get('name', ['World'])[0]
            message = f'Hello, {name}!'
            self.wfile.write(message.encode())
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'404 Not Found')

def run_server(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, SimpleRequestHandler)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()
```

### Running the Server

Open a terminal, navigate to the directory containing `simple_server.py`, and run the following command:

```bash
python simple_server.py
```

This will start the server on `http://localhost:8000`. Open a web browser and visit `http://localhost:8000/hello?name=YourName` to see the "hello world" response.

---

You've created a simple Python script to serve a basic REST API.

# Conclusion:

Congratulations on completing this introductory lesson to Python programming! You've taken the first steps into the vast and dynamic world of Python, a language renowned for its simplicity and versatility. Let's recap the key points covered in this lesson:

## 1. Python Basics:
   - Python is a high-level programming language known for readability and simplicity.
   - It is widely used in various domains, including web development, data science, artificial intelligence, and automation.

## 2. Getting Started:
   - Explore Python further by visiting the [official Python website](https://www.python.org/).
   - The official documentation provides extensive resources, tutorials, and information for Python programmers.

## 3. Simple REST API Server:
   - You've created a basic HTTP server in Python without using external frameworks.
   - The server responds to GET requests at the "/hello" endpoint, showcasing a "hello world" message.

## What's Next?
   - As you continue your Python journey, consider exploring more advanced topics, such as data structures, functions, and object-oriented programming.
   - Dive into Python frameworks like Flask and Django for web development, and learn about libraries such as NumPy and Pandas for data science.

## Stay Curious:
   - Python's vast ecosystem and supportive community offer endless possibilities. Embrace the curiosity to explore and build exciting projects.

Remember, learning to code is a journey, and each step forward brings new insights and capabilities. Whether you're a beginner or an experienced developer, Python offers a welcoming environment to enhance your skills and bring your ideas to life. 

Good Luck! C.R