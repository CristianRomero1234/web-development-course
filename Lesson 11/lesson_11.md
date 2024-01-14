# Introduction to Java Programming

## Exploring the World of Java

### Basic Information

Java is a powerful, versatile, and widely-used programming language that follows the "Write Once, Run Anywhere" principle. Developed by Sun Microsystems (now owned by Oracle), Java has become a cornerstone in various domains, including web development, mobile applications (Android), enterprise systems, and more. Known for its portability, robustness, and readability, Java is an excellent choice for building scalable and platform-independent applications.

### Core Concepts

#### Object-Oriented Programming (OOP)

Java is an object-oriented language, which means it revolves around the concept of objects. Key OOP principles in Java include encapsulation, inheritance, and polymorphism. These principles help structure code, promote reusability, and enhance maintainability.

#### Platform Independence

Java achieves platform independence through the Java Virtual Machine (JVM). Java code is compiled into bytecode, which can run on any device with a JVM. This "write once, run anywhere" capability is one of Java's major strengths.

#### Syntax and Structure

Java's syntax is similar to C++, making it easy for programmers familiar with C-based languages. A Java program is structured into classes, each containing methods (functions). The entry point for a Java application is the `main` method.

---

## Building a Simple REST API Server

### Setting Up a Basic Java Server

Let's delve into creating a straightforward Java server that provides a REST API with a "hello world" endpoint.

### Java Code for Simple Server

Create a file named `SimpleServer.java` and add the following code:

```java
import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class SimpleServer {
    public static void main(String[] args) throws IOException {
        // Create a simple HTTP server on port 8000
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);

        // Create a context for the "/hello" endpoint
        server.createContext("/hello", new HelloHandler());

        // Start the server
        server.start();

        System.out.println("Server started on port 8000. Visit http://localhost:8000/hello to see the response.");
    }

    // Custom handler for the "/hello" endpoint
    static class HelloHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            // Get the response message
            String response = "Hello, World! This is a simple REST API.";

            // Set the response headers
            exchange.getResponseHeaders().set("Content-Type", "text/plain");
            exchange.sendResponseHeaders(200, response.length());

            // Send the response to the client
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(response.getBytes());
            }
        }
    }
}
```

### Running the Server

Certainly! To compile and run the Java server example, follow these instructions:

#### Prerequisites:

1. **Java Development Kit (JDK):** Ensure that you have the Java Development Kit installed on your system. You can download it from [Oracle's website](https://www.oracle.com/java/technologies/javase-downloads.html) or use an OpenJDK distribution.

#### Compilation and Execution:

1. **Save the Code:**
   - Copy the Java code provided in the previous example and save it to a file named `SimpleServer.java`. Make sure the file extension is `.java`.

2. **Open a Terminal or Command Prompt:**
   - Open a terminal or command prompt on your system.

3. **Navigate to the Directory:**
   - Use the `cd` command to navigate to the directory where `SimpleServer.java` is saved.

   ```bash
   cd path/to/your/directory
   ```

4. **Compile the Java Code:**
   - Use the `javac` command to compile the Java source code.

   ```bash
   javac SimpleServer.java
   ```

   This will generate a compiled bytecode file named `SimpleServer.class`.

5. **Run the Java Server:**
   - Use the `java` command to run the compiled Java program.

   ```bash
   java SimpleServer
   ```

   You should see the message: "Server started on port 8000. Visit http://localhost:8000/hello to see the response."

6. **Test the REST API:**
   - Open a web browser and visit `http://localhost:8000/hello` to see the "hello world" response.

### Note:

- Keep the terminal or command prompt open while the server is running. To stop the server, press `Ctrl + C` in the terminal.

- Ensure that port 8000 is available and not blocked by a firewall.

Following these steps should allow you to compile and run the Java server example on your local machine. If you encounter any issues, double-check that your JDK is properly installed and the PATH environment variable is set.

---

Congratulations! You've explored the fundamentals of Java and created a basic server with a REST API endpoint. As you continue your Java journey, delve into advanced topics like multithreading, exception handling, and Java frameworks for web development. 

Good Luck! C.R