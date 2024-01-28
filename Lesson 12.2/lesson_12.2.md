 Studies Assistant Web App: "How to create a Notepad": Part 1

## Useful links

- [W3Schools Bootstrap 5 tutorial](https://www.w3schools.com/bootstrap5/bootstrap_get_started.php)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Plain Text Compare](https://text-compare.com)
- [HTML Code Compare](https://onlinetextcompare.com/html)
- The original version of the [Studies Assistant Web App tutorial](https://cristianromero1234.github.io/App_asistente_estudio/)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

Welcome for this tutorial on "How to create a Notepad": Part 1.

We will assume you've completed [Lesson 12](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012/lesson_12.md) and [Lesson 12.1](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E1/lesson_12%2E1.md).

Let's carry on with the next steps!

Following up with the code from the [previous lesson](https://github.com/CristianRomero1234/web-development-course/tree/main/Lesson%2012%2E1/lesson_12%2E1.md),

We will edit the "accordion-item" for Notepad.

Locate the analog code of the following snippet in your HTML file: 

```html
<!--The other code that already exist in your index.html -->
</section>
<section class="accordion-item" id="AccItemThree">
    <h2 class="accordion-header" id="headingAccItemThree">
        <button class="accordion-button" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseThree"
                aria-expanded="true" 
                aria-controls="collapseThree"
        >
            Notepad
        </button>            
    </h2>
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body"> Notepad: YET TO IMPLEMENT</section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
```

### Steps (continuation)

#### Step 12

Inside of the `<section>` with class "accordion-body".

Let's create a `<form>` tag, with the `style` attribute  value equal to "padding: 5px;"

Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <!--Add the next line -->
                <form style="padding: 5px;"></form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 13

Create two `<fieldset>` tags inside the `<form>`.

Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <!--Add the next line -->
                    <fieldset id="notepad-toolbar"></fieldset>
                    <!--Add the next line -->
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 14

Inside `<fieldset>` with id "notepad-toolbar", we will create a toolbar with options like Italic, Bold, Underline, also, we will create a dropdown menu with other options like saving to [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), or downloading text as a file.

Create a `<button>` tag with the following attributes:

- `class="btn btn-light"`
- `onclick="document.execCommand('italic',false,null);"`
- `title="Italicize Highlighted Text"`
- `type="button"` 

[document.execCommand() is deprecated](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand) and might not be supported in your browser.

Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <!--Add the next line -->
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <!--Add the next line -->
                            <i>I</i>
                            <!--Add the next line -->
                        </button>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 15

Inside `<fieldset>` with id "notepad-toolbar", Create a `<button>` tag with the following attributes:

- `type="button"` 
- `class="btn btn-light"`
- `onclick="document.execCommand( 'bold',false,null);"`
- `title="Bold Highlighted Text"`

Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <!--Add the next line -->
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <!--Add the next line -->
                           <b>B</b>
                           <!--Add the next line -->
                        </button>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 
#### Step 16

One more `<button>` for the undeline. 

Attributes are: 

- ` type="button"` 
- `class="btn btn-light"`
- `onclick="document.execCommand( 'underline',false,null);"`
- `title='Underline Highlighted Text'`

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <b>B</b>
                        </button>
                         <!--Add the next line -->
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'underline',false,null);" title='Underline Highlighted Text'>
                             <!--Add the next line -->
                            <u>U</u>
                             <!--Add the next line -->
                        </button>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 17

Now let's create the dropdown menu for "Other options".

Create a `<section>` with `class` "btn-group" and `role` "group".

Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <b>B</b>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'underline',false,null);" title='Underline Highlighted Text'>
                            <u>U</u>
                        </button>
                          <!--Add the next line -->
                        <section class="btn-group" role="group"></section>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 18 

Inside of the new `<section>`, create a `<button>` with the following attributes:

- `id="btnGroupDrop1" `
- `type="button"` 
- `class="btn btn-light dropdown-toggle"`
- `data-bs-toggle="dropdown"` 
- `aria-expanded="false"`

Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <b>B</b>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'underline',false,null);" title='Underline Highlighted Text'>
                            <u>U</u>
                        </button>
                        <section class="btn-group" role="group">
                            <!--Add the next line -->
                            <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                               <!--Add the next line -->
                               Other options
                               <!--Add the next line -->
                            </button>
                        </section>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 19

To group the other options in the notepad.

Create an unordered list `<ul>` with the following attributes: 

- `class="dropdown-menu"`
- `aria-labelledby="btnGroupDrop1"`


Example code:

```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <b>B</b>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'underline',false,null);" title='Underline Highlighted Text'>
                            <u>U</u>
                        </button>
                        <section class="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                               Other options
                            </button>
                             <!--Add the next line -->
                            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1"></ul>
                        </section>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 

#### Step 20

We will write the `<a>` tags with class "dropdown-item".

As de dropdown menu is a list, the `<a>` tags need to be inside a `<li>`. 


```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <b>B</b>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'underline',false,null);" title='Underline Highlighted Text'>
                            <u>U</u>
                        </button>
                        <section class="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                               Other options
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <!--Add the next line -->
                                <li><a class="dropdown-item" href="#">Download file</a></li>
                                <!--Add the next line -->
                                <li><a class="dropdown-item" href="#">Save to LocalStorage</a></li>
                            </ul>
                        </section>
                    </fieldset>
                    <fieldset id="notepad-text-area"></fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
``` 
Our HTML file, now should look more like this:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <title>App my Studies tool: Notepad</title>
</head>
<body>
    <!-- A grey horizontal navbar that becomes vertical on small screens -->
    <nav class="navbar navbar-expand-sm bg-light">
        <section class="container-fluid">
            <!-- Links -->
            <ul class="navbar-nav">
                <li class="nav-item" id="dropdown">
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Google Docs</a></li>
                        <li><a class="dropdown-item" href="#">Online PDF editor</a></li>
                        <li><a class="dropdown-item" href="#">Notepad</a></li>
                    </ul>
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Text Management
                        Tools</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pomodoro</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">To-Do List</a>
                </li>
                <li class="nav-item">
                    <a target="_blank" href="https://www.google.com/">
                        <img alt="Google"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png"
                            style=" margin-left: 3px; max-height: 40px;" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://calendar.google.com/calendar">
                        <img alt="Google Calendar"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png"
                            style="max-height: 40px ; margin-left: 3px;" height="75" />
                    </a>
                </li>
            </ul>
        </section>
    </nav>
    <!--Content area of "Studies tool" Web page-->
    <section class="accordion" id="accordion-parent-container">
        <section class="accordion-item" id="AccItemOne">
            <h2 class="accordion-header" id="headingAccItemOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Pomodoro
                </button>
            </h2>
            <section id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingAccItemOne"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body"> POMODORO: YET TO IMPLEMENT</section>
            </section>
        </section>
        <section class="accordion-item" id="AccItemTwo">
            <h2 class="accordion-header" id="headingAccItemTwo">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    To-Do List
                </button>
            </h2>
            <section id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingAccItemTwo"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body"> To-Do List: YET TO IMPLEMENT</section>
            </section>
        </section>
        <section class="accordion-item" id="AccItemThree">
            <h2 class="accordion-header" id="headingAccItemThree">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                    aria-expanded="true" aria-controls="collapseThree">
                    Notepad
                </button>
            </h2>
            <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body">
                    <form style="padding: 5px;">
                        <fieldset id="notepad-toolbar">
                            <button type="button" class="btn btn-light"
                                onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                                <i>I</i>
                            </button>
                            <button type="button" class="btn btn-light"
                                onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                                <b>B</b>
                            </button>
                            <button type="button" class="btn btn-light"
                                onclick="document.execCommand( 'underline',false,null);"
                                title='Underline Highlighted Text'>
                                <u>U</u>
                            </button>
                            <section class="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Other options
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <!--Add the next line -->
                                    <li><a class="dropdown-item" href="#">Download file</a></li>
                                    <!--Add the next line -->
                                    <li><a class="dropdown-item" href="#">Save to LocalStorage</a></li>
                                </ul>
                            </section>
                        </fieldset>
                        <fieldset id="notepad-text-area">Some text</fieldset>
                    </form>
                </section>
            </section>
        </section>
    </section>
    </section>
</body>
</html>
```

#### Step 21

Add styles to `<fieldset id="notepad-text-area">Some text</fieldset>`.

Example code: 


```html
<!--The other code that already exist in your index.html -->
    <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree" data-bs-parent="#accordion-parent-container">
            <section class="accordion-body">
                <form style="padding: 5px;">
                    <fieldset id="notepad-toolbar">
                        <button type="button" class="btn btn-light" onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                            <i>I</i>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                           <b>B</b>
                        </button>
                        <button type="button" class="btn btn-light" onclick="document.execCommand( 'underline',false,null);" title='Underline Highlighted Text'>
                            <u>U</u>
                        </button>
                        <section class="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                               Other options
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <li><a class="dropdown-item" href="#">Download file</a></li>
                                <li><a class="dropdown-item" href="#">Save to LocalStorage</a></li>
                            </ul>
                        </section>
                    </fieldset>
                    <!-- in your index.html, update the next line accordingly -->
                    <fieldset id="notepad-text-area" contenteditable="true"
                    style="border: 2px solid black; border-radius:15px; min-height: 200px; padding:10px; margin-top:5px;">Some Text</fieldset>
                </form>
            </section>
    </section>
</section>
<!--The other code that already exist in your index.html -->
```

#### Step 22

Let's create the necessary code for persisting the test written to the notes in Browser's LocalStorage.

First, create the `<script>` tag in your index.html:

```html
<!--The other code that already exist in your index.html -->
 <fieldset id="notepad-text-area" 
           contenteditable="true"
           style="border: 2px solid black; border-radius:15px; min-height: 200px; padding:10px; margin-top:5px;">
    Some Text
</fieldset>
<!-- in your index.html, append the next line -->
<script></script>
<!--The other code that already exist in your index.html -->
```
#### Step 23

Then, inside the `<script>` tag we will create the following constants:

- `const NOTEPAD_INNERHTML_LOCALSTORAGE_KEY`
- `const ID_OF_NOTEPAD_TEXT_AREA`
- `const NOTEPAD_TEXT_AREA_ELEMENT`

*Explanation for you to update the values of the constants by yourself*

- `NOTEPAD_INNERHTML_LOCALSTORAGE_KEY` will be used as the source of truth for the name of LocalStorage key that holds the innerHTML property of the Notepad's text area element.

- `ID_OF_NOTEPAD_TEXT_AREA` will be the id value of Notepad's text area.

- `NOTEPAD_TEXT_AREA_ELEMENT` is used for referencing the HTML elment of Notepad's text area using `ID_OF_NOTEPAD_TEXT_AREA`.

```html
<!--The other code that already exist in your index.html -->
 <fieldset id="notepad-text-area" 
           contenteditable="true"
           style="border: 2px solid black; border-radius:15px; min-height: 200px; padding:10px; margin-top:5px;">
    Some Text
</fieldset>

<script>
    // in your index.html, append the next line 
    const NOTEPAD_INNERHTML_LOCALSTORAGE_KEY = 'savedInnerHTML';
    // in your index.html, append the next line 
    const ID_OF_NOTEPAD_TEXT_AREA = "notepad-text-area";
    // in your index.html, append the next line 
    const NOTEPAD_TEXT_AREA_ELEMENT = document.querySelector("#" + ID_OF_NOTEPAD_TEXT_AREA);
</script>
<!--The other code that already exist in your index.html -->
```

### Step 24

Then we will create some helper methods, "isEmptyString", "retrieveFromLocalStorage", "saveToLocalStorage", "saveToLocalStorageOnlyText" and "cleanLocalStorage".

Let's consider the following code example:

```html
<!--The other code that already exist in your index.html -->
 <fieldset id="notepad-text-area" 
           contenteditable="true"
           style="border: 2px solid black; border-radius:15px; min-height: 200px; padding:10px; margin-top:5px;">
    Some Text
</fieldset>

<script>
    const NOTEPAD_INNERHTML_LOCALSTORAGE_KEY = 'savedInnerHTML';
    const ID_OF_NOTEPAD_TEXT_AREA = "notepad-text-area";
    const NOTEPAD_TEXT_AREA_ELEMENT = document.querySelector("#" + ID_OF_NOTEPAD_TEXT_AREA);
    // in your index.html, append the next line 
     let isEmptyString = (stringToCheck) => {
        // in your index.html, append the next line 
        return stringToCheck.trim() === '';
        // in your index.html, append the next line 
    }
    // in your index.html, append the next line 
    let retrieveFromLocalStorage = (key) => {
     // in your index.html, append the next line 
        let valueFromLocalStorage = localStorage.getItem(key);
     // in your index.html, append the next line 
        return valueFromLocalStorage;
    // in your index.html, append the next line 
    };
    // in your index.html, append the next line 
    let saveToLocalStorage = (key, value) => {
        // in your index.html, append the next line 
        if (key !== undefined && key !== null) {
            // in your index.html, append the next line 
            if (!isEmptyString(key) && !isEmptyString(value)) {
                // in your index.html, append the next line 
                localStorage.setItem(key, value);
                // in your index.html, append the next line 
            }
            // in your index.html, append the next line 
        }
        // in your index.html, append the next line 
    };
    // in your index.html, append the next line 
    let saveToLocalStorageOnlyText = (value) => {
        // in your index.html, append the next line 
        if (value.trim() !== '') {
            // in your index.html, append the next line 
            saveToLocalStorage('savedInnerText', value);
            // in your index.html, append the next line 
        }
        // in your index.html, append the next line 
    };
    // in your index.html, append the next line 
    let cleanLocalStorage = (key) =>{
        // in your index.html, append the next line 
        if(key === null || key === undefined){
            // in your index.html, append the next line 
            localStorage.setItem(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY, '');
            // in your index.html, append the next line 
        }else{
            // in your index.html, append the next line 
            localStorage.setItem(key, '');
            // in your index.html, append the next line 
        }
        // in your index.html, append the next line 
    };
</script>
<!--The other code that already exist in your index.html -->
```

#### Step 24

Add a "keydown" Event Listener to the document and check the event key is "Enter", in that case we want to save the contents of notepad to localStorage.

```html
<!--The other code that already exist in your index.html -->
 <fieldset id="notepad-text-area" 
           contenteditable="true"
           style="border: 2px solid black; border-radius:15px; min-height: 200px; padding:10px; margin-top:5px;">
    Some Text
</fieldset>

<script>
    const NOTEPAD_INNERHTML_LOCALSTORAGE_KEY = 'savedInnerHTML';
    const ID_OF_NOTEPAD_TEXT_AREA = "notepad-text-area";
    const NOTEPAD_TEXT_AREA_ELEMENT = document.querySelector("#" + ID_OF_NOTEPAD_TEXT_AREA);
     let isEmptyString = (stringToCheck) => {
        return stringToCheck.trim() === '';
    }
    let retrieveFromLocalStorage = (key) => {
        let valueFromLocalStorage = localStorage.getItem(key);
        return valueFromLocalStorage;
    };
    let saveToLocalStorage = (key, value) => {
        if (key !== undefined && key !== null) {
            if (!isEmptyString(key) && !isEmptyString(value)) {
                localStorage.setItem(key, value);
            }
        }
    };
    let saveToLocalStorageOnlyText = (value) => {
        if (value.trim() !== '') {
            saveToLocalStorage('savedInnerText', value);
        }
    };
    let cleanLocalStorage = (key) =>{
        if(key === null || key === undefined){
            localStorage.setItem(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY, '');
        }else{
            localStorage.setItem(key, '');
        }
    };
     // in your index.html, append the next line 
    document.addEventListener("keydown", function (event) {
         // in your index.html, append the next line 
        if (event.key === "Enter") {
             // in your index.html, append the next line 
            saveToLocalStorageOnlyText(NOTEPAD_TEXT_AREA_ELEMENT.innerText);
             // in your index.html, append the next line 
            saveToLocalStorage(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY, NOTEPAD_TEXT_AREA_ELEMENT.innerHTML);
             // in your index.html, append the next line 
            console.log("Saving to localStorage because Enter was Pressed")
        }
    }); 
</script>
<!--The other code that already exist in your index.html -->
```
#### Step 25

Update the text shown to user in the notepad field.

Add the following line inside the `<script>` tag:

```javascript
NOTEPAD_TEXT_AREA_ELEMENT.innerHTML = isEmptyString(retrieveFromLocalStorage('savedInnerHTML'))  === true ? "Press enter to save to Browser's local storage" :  localStorage.getItem('savedInnerHTML');
```
Then your index.html file should look like: 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <title>App my Studies tool: Notepad</title>
</head>

<body>
    <!-- A grey horizontal navbar that becomes vertical on small screens -->
    <nav class="navbar navbar-expand-sm bg-light">
        <section class="container-fluid">
            <!-- Links -->
            <ul class="navbar-nav">
                <li class="nav-item" id="dropdown">
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Google Docs</a></li>
                        <li><a class="dropdown-item" href="#">Online PDF editor</a></li>
                        <li><a class="dropdown-item" href="#">Notepad</a></li>
                    </ul>
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Text Management
                        Tools</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pomodoro</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">To-Do List</a>
                </li>
                <li class="nav-item">
                    <a target="_blank" href="https://www.google.com/">
                        <img alt="Google"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png"
                            style=" margin-left: 3px; max-height: 40px;" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://calendar.google.com/calendar">
                        <img alt="Google Calendar"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png"
                            style="max-height: 40px ; margin-left: 3px;" height="75" />
                    </a>
                </li>
            </ul>
        </section>
    </nav>
    <!--Content area of "Studies tool" Web page-->
    <section class="accordion" id="accordion-parent-container">
        <section class="accordion-item" id="AccItemOne">
            <h2 class="accordion-header" id="headingAccItemOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Pomodoro
                </button>
            </h2>
            <section id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingAccItemOne"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body"> POMODORO: YET TO IMPLEMENT</section>
            </section>
        </section>
        <section class="accordion-item" id="AccItemTwo">
            <h2 class="accordion-header" id="headingAccItemTwo">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    To-Do List
                </button>
            </h2>
            <section id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingAccItemTwo"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body"> To-Do List: YET TO IMPLEMENT</section>
            </section>
        </section>
        <section class="accordion-item" id="AccItemThree">
            <h2 class="accordion-header" id="headingAccItemThree">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                    aria-expanded="true" aria-controls="collapseThree">
                    Notepad
                </button>
            </h2>
            <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body">
                    <form style="padding: 5px;">
                        <fieldset id="notepad-toolbar">
                            <button type="button" class="btn btn-light"
                                onclick="document.execCommand('italic',false,null);" title="Italicize Highlighted Text">
                                <i>I</i>
                            </button>
                            <button type="button" class="btn btn-light"
                                onclick="document.execCommand( 'bold',false,null);" title="Bold Highlighted Text">
                                <b>B</b>
                            </button>
                            <button type="button" class="btn btn-light"
                                onclick="document.execCommand( 'underline',false,null);"
                                title='Underline Highlighted Text'>
                                <u>U</u>
                            </button>
                            <section class="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Other options
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <li><a class="dropdown-item" href="#">Download file</a></li>
                                    <li><a class="dropdown-item" href="#">Save to LocalStorage</a></li>
                                </ul>
                            </section>
                        </fieldset>
                        <fieldset id="notepad-text-area" contenteditable="true"
                            style="border: 2px solid black; border-radius:15px; min-height: 200px; padding:10px; margin-top:5px;">
                            Some Text
                        </fieldset>
                        <script>
                            const NOTEPAD_INNERHTML_LOCALSTORAGE_KEY = 'savedInnerHTML';
                            const ID_OF_NOTEPAD_TEXT_AREA = "notepad-text-area";
                            const NOTEPAD_TEXT_AREA_ELEMENT = document.querySelector("#" + ID_OF_NOTEPAD_TEXT_AREA);
                            let isEmptyString = (stringToCheck) => {
                                return stringToCheck.trim() === '';
                            }
                            let retrieveFromLocalStorage = (key) => {
                                let valueFromLocalStorage = localStorage.getItem(key);
                                return valueFromLocalStorage;
                            }
                            let saveToLocalStorage = (key, value) => {
                                if (key !== undefined && key !== null) {
                                    if (!isEmptyString(key) && !isEmptyString(value)) {
                                        localStorage.setItem(key, value);
                                    }
                                }
                            };
                            let saveToLocalStorageOnlyText = (value) => {
                                if (value.trim() !== '') {
                                    saveToLocalStorage('savedInnerText', value);
                                }
                            };
                            document.addEventListener("keydown", function (event) {
                                if (event.key === "Enter") {
                                    saveToLocalStorageOnlyText(NOTEPAD_TEXT_AREA_ELEMENT.innerText)
                                    saveToLocalStorage(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY, NOTEPAD_TEXT_AREA_ELEMENT.innerHTML);
                                    console.log("Saving to localStorage because Enter was Pressed")
                                }
                            });                            
                            let cleanLocalStorage = (key) =>{
                                if(key === null || key === undefined){
                                    localStorage.setItem(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY, '');
                                }else{
                                    localStorage.setItem(key, '');
                                }
                            };
                            NOTEPAD_TEXT_AREA_ELEMENT.innerHTML = isEmptyString(retrieveFromLocalStorage('savedInnerHTML'))  === true ? "Press enter to save to Browser's local storage" : localStorage.getItem('savedInnerHTML');
                        </script>
                    </form>
                </section>
            </section>
        </section>
    </section>
</body>
</html>
```
Your next tasks, regarding the Notepad are:

1. Write a Javascript function, to download contents of Notepad as a file.
    1.1. use the `onclick` attribute of `<li><a class="dropdown-item" href="#">Download file</a></li>` to call the function you created "to download contents of Notepad as a file".
2. Create a button `<button>` or link `<a>`for clearing Browser's localStorage (make use of the example code for `let cleanLocalStorage` as the `onclick` attribute).


You should open your index.html file in the Browser and check the notepad.

I decided to re-write the Notepad as a "verbose script" in hopes that it exemplifies better the necessary logic to build a Notepad app that opens in the browser.

Please consider the code below and compare it with the code in the previous example block. 

You'll notice tha re writing the Notepad as JavaScript code, uses many more lines of code to achieve the same UI look, but as practice it will help you to better understand the implementation. 

The provided example can still be refactored to use better programming practices, consider this when transcribing.

Other useful features that can be implemented (not in the provided code), are handling multiple "files" and letting the user to work on multiple subjects without having to save a copy to their computer disk when they desire to work on other things. 



```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <title>App my Studies tool: Notepad</title>
</head>

<body>
    <!-- A grey horizontal navbar that becomes vertical on small screens -->
    <nav class="navbar navbar-expand-sm bg-light">
        <section class="container-fluid">
            <!-- Links -->
            <ul class="navbar-nav">
                <li class="nav-item" id="dropdown">
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Google Docs</a></li>
                        <li><a class="dropdown-item" href="#">Online PDF editor</a></li>
                        <li><a class="dropdown-item" href="#">Notepad</a></li>
                    </ul>
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Text Management
                        Tools</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pomodoro</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">To-Do List</a>
                </li>
                <li class="nav-item">
                    <a target="_blank" href="https://www.google.com/">
                        <img alt="Google"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png"
                            style=" margin-left: 3px; max-height: 40px;" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://calendar.google.com/calendar">
                        <img alt="Google Calendar"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png"
                            style="max-height: 40px ; margin-left: 3px;" height="75" />
                    </a>
                </li>
            </ul>
        </section>
    </nav>
    <!--Content area of "Studies tool" Web page-->
    <section class="accordion" id="accordion-parent-container">
        <section class="accordion-item" id="AccItemOne">
            <h2 class="accordion-header" id="headingAccItemOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Pomodoro
                </button>
            </h2>
            <section id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingAccItemOne"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body"> POMODORO: YET TO IMPLEMENT</section>
            </section>
        </section>
        <section class="accordion-item" id="AccItemTwo">
            <h2 class="accordion-header" id="headingAccItemTwo">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    To-Do List
                </button>
            </h2>
            <section id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingAccItemTwo"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body"> To-Do List: YET TO IMPLEMENT</section>
            </section>
        </section>
        <section class="accordion-item" id="AccItemThree">
            <h2 class="accordion-header" id="headingAccItemThree">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                    aria-expanded="true" aria-controls="collapseThree">
                    Notepad
                </button>
            </h2>
            <section id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingAccItemThree"
                data-bs-parent="#accordion-parent-container">
                <section class="accordion-body" id="collapseThreeAccordionBody">
                    <script>
                        /*
                       "What you see is what you get text editor component." 

                        - Relies on Bootstrap v 5.3 or greater being available.
                        - Written as a verbose-syntax script to be used as an example to DOM manipulation with Javascript.

                        */
                        /* Area to define constants for Verbose readability of code*/
                        const CHARACTER_HASH = "#";
                        const CHARACTER_UPPERCASE_B = "B";
                        const CHARACTER_UPPERCASE_I = "I";
                        const CHARACTER_UPPERCASE_U = "U";
                        const COMMAND_BOLD = "bold";
                        const COMMAND_ITALIC = 'italic';
                        const COMMAND_UNDERLINE = 'underline';
                        const DEFAULT_FILENAME = 'studies_assistant_notes';
                        const EMPTY_STRING = '';
                        const EVENT_KEYDOWN = "keydown";
                        const MIME_TEXT_PLAIN_TYPE = 'text/plain';
                        const MIME_TEXT_HTML_TYPE = 'text/html';
                        const STRING_BUTTON = "button";
                        const STRING_CLEAR_LOCALSTORAGE = "Clear Browser's Localstorage";
                        const STRING_DOWNLOAD_FILE = "Download file";
                        const STRING_GROUP = "group";
                        const STRING_OTHER_OPTIONS = " Other options";
                        const STRING_SAVE_TO_LOCALSTORAGE = "Save to Browser's LocalStorage";


                        /*HTML tagnames*/
                        const ANCHOR_TAGNAME = 'a';
                        const BOLD_TAGNAME = 'b';
                        const BUTTON_TAGNAME = STRING_BUTTON;
                        const DIALOG_TAGNAME = 'dialog';
                        const FIELDSET_TAGNAME = 'fieldset';
                        const FORM_TAGNAME = 'form';
                        const HEADING_2_TAGNAME = 'h2';
                        const INPUT_TAGNAME = 'input';
                        const ITALIC_TAGNAME = 'i';
                        const LABEL_TAGNAME = 'label';
                        const LISTITEM_TAGNAME = 'li';
                        const SELECT_TAGNAME = 'select';
                        const SECTION_TAGNAME = 'section';
                        const OPTION_TAGNAME = 'option';
                        const UNDERLINE_TAGNAME = 'u';
                        const UNORDEREDLIST_TAGNAME = 'ul';


                        /* BootStrap Classes used*/
                        const BOOTSTRAP_CLASS_ACCORDION_BODY = "accordion-body";
                        const BOOTSTRAP_CLASS_FORM_CONTROL = "form-control";
                        const BOOTSTRAP_CLASS_BTN = "btn";
                        const BOOTSTRAP_CLASS_BTN_LIGHT = "btn-light";
                        const BOOTSTRAP_CLASS_BTN_GROUP = "btn-group";
                        const BOOTSTRAP_CLASS_DROPDOWN = "dropdown";
                        const BOOTSTRAP_CLASS_DROPDOWN_ITEM = "dropdown-item";
                        const BOOTSTRAP_CLASS_DROPDOWN_MENU = "dropdown-menu";
                        const BOOTSTRAP_CLASS_DROPDOWN_TOGGLE = "dropdown-toggle";


                        //notepad  related constants and Verbose wrappers for values
                        const NOTEPAD_PARENT_ELEMENT_ID = "collapseThreeAccordionBody";//change this value to reuse the notepad app in other  Bootstrap projects. "change this "
                        const NOTEPAD_TEXT_AREA_ID = "notepad-text-area";
                        const NOTEPAD_TEXT_AREA_USAGE_HINT = "Write your notes, then Press enter to save to Browser's local storage";
                        const NOTEPAD_TOOLBAR_OTHER_OPTIONS_MENU_BUTON_OPEN_ID = "btnGroupDrop1";
                        /* Area to define localStorage Keys*/
                        const NOTEPAD_INNERTEXT_LOCALSTORAGE_KEY = 'savedInnerText';
                        const NOTEPAD_INNERHTML_LOCALSTORAGE_KEY = 'savedInnerHTML';

                        /*Download Modal related constants*/
                        const MODAL_ID = "modal";
                        const MODAL_TITLE = "Save as file";
                        const MODAL_FILENAME_INPUT_ID = "fileNameUser";
                        const MODAL_FILENAME_INPUT_TYPE = "text";
                        const MODAL_DOWNLOAD_BUTTON_TEXT = "Download file";
                        const MODAL_CLOSE_BUTTON_TEXT = "Close";
                        const MODAL_STYLES_STRING = "border: none; border-radius:25px; padding: 16px; padding: 30px; min-height: 300px; width: 350px; background-color: #fff;";
                        const MODAL_DROPDOWN_LABEL_INNERTEXT = "File extension";
                        const MODAL_DROPDOWN_ID = "fileExtensions";
                        const MODAL_DROPDOWN_INPUT_PLACEHOLDER = "File name example: studies_assistant_notes";

                        /*Messages to be displayed*/
                        const MESSAGE_NO_CONTENTS_DOWNLOAD = "No contents to download";
                        const MESSAGE_NOTHING_WAS_SAVED = "Nothing was saved.";
                        const MESSAGE_ENTER_WAS_PRESSED = "Saving to localStorage because Enter was Pressed";
                        const MESSAGE_MODAL_DROPDOWN_VALUE_EMPTY = "Dropdown in modal element in HTML value is empty";


                        /* Verbose wrappers for browser provided functions*/
                        const browserAlertMessage = (message) => {
                            alert(message);
                        };
                        const querySelectorId = (elementId) => {
                            return document.querySelector(CHARACTER_HASH + elementId);
                        }
                        const createHTMLElement = (tagname) => {
                            return document.createElement(tagname);
                        };

                        // Function to handle italic button click
                        const handleItalicButtonClick = () => {
                            document.execCommand(COMMAND_ITALIC, false, null);
                        }
                        // Function to handle bold button click
                        const handleBoldButtonClick = () => {
                            document.execCommand(COMMAND_BOLD, false, null);
                        }
                        // Function to handle underline button click
                        const handleUnderlineButtonClick = () => {
                            document.execCommand(COMMAND_UNDERLINE, false, null);
                        }

                        /* Area to define arrow functions supporting Notepad features */

                        const isUndefinedOrNull = (objectToCheck) => {
                            if (objectToCheck === undefined || objectToCheck === null) {
                                return true;
                            }
                            return false;
                            //returns boolean
                        };
                        const isEmptyString = (stringToCheck) => {
                            if (typeof stringToCheck === 'string' || stringToCheck instanceof String) {
                                return isUndefinedOrNull(stringToCheck) ? true : (stringToCheck.trim() === EMPTY_STRING);
                            }
                            return true;
                            //returns boolean
                        };
                        const saveToLocalStorage = (key, value) => {
                            if (isEmptyString(key)) {
                                browserAlertMessage(MESSAGE_NOTHING_WAS_SAVED);
                            } else {
                                localStorage.setItem(key, value);
                            }
                            // returns "void"
                        };
                        const cleanLocalStorage = (key) => {
                            if (isEmptyString(key)) {
                                cleanLocalStorage(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY);
                                cleanLocalStorage(NOTEPAD_INNERTEXT_LOCALSTORAGE_KEY);
                                return;
                            }
                            saveToLocalStorage(key, EMPTY_STRING);
                            // returns "void"
                        };
                        const updateLocalStoragewithTextAndHTMLFromElement = (elementId, localStorageKeyText, localStorageKeyHTML) => {
                            let element = querySelectorId(elementId);
                            saveToLocalStorage(localStorageKeyText, element.innerText);
                            saveToLocalStorage(localStorageKeyHTML, element.innerHTML);
                        };
                        const updateLocalStorageWithNotePadContents = () => {
                            updateLocalStoragewithTextAndHTMLFromElement(NOTEPAD_TEXT_AREA_ID, NOTEPAD_INNERTEXT_LOCALSTORAGE_KEY, NOTEPAD_INNERHTML_LOCALSTORAGE_KEY);
                        };
                        const retrieveFromLocalStorage = (key) => {
                            return isEmptyString(key) ? EMPTY_STRING : localStorage.getItem(key);
                            //returns string
                        };
                        const isLocalStorageValueForKeyEmpty = (key) => {
                            return isEmptyString(retrieveFromLocalStorage(key));
                        };
                        const setElementInnerHTMLWithLocalStorageText = (contentEditableElement, localStorageKey, fallBackMessage) => {
                            contentEditableElement.innerHTML = isLocalStorageValueForKeyEmpty(localStorageKey) ? fallBackMessage : retrieveFromLocalStorage(localStorageKey);

                        }
                        const listenForKeyboardEnterOrSpaceKey = () => {
                            document.addEventListener(EVENT_KEYDOWN, function (event) {
                                if (event.key === "Enter" || event.key == " " || event.code == "Space") {
                                    updateLocalStorageWithNotePadContents();
                                    console.log(MESSAGE_ENTER_WAS_PRESSED);
                                }
                            });
                        };

                        /*Download as File related*/
                        const triggerDownload = (fileName, fileExtension, fileContent) => {
                            fileName = isEmptyString(fileName) ? DEFAULT_FILENAME : fileName.trim();
                            fileExtension = isEmptyString(fileExtension) ? 'html' : fileExtension.trim();
                            // Define MIME type for blob
                            const MIME_Type = fileExtension === "txt" ? MIME_TEXT_PLAIN_TYPE : MIME_TEXT_HTML_TYPE;
                            // Create a Blob containing the text data
                            const blob = new Blob([fileContent], { type: MIME_Type });
                            // Create a link element
                            const downloadLink = createHTMLElement(ANCHOR_TAGNAME);
                            // Set the link's href attribute to a URL representing the Blob
                            downloadLink.href = URL.createObjectURL(blob);
                            // Set the download attribute with the desired file name
                            downloadLink.download = `${fileName}.${fileExtension}`;
                            // Append the link to the document
                            document.body.appendChild(downloadLink);
                            // Trigger a click on the link to initiate the download
                            downloadLink.click();
                        };
                        const startDownloadAsHTMLFile = (filename) => {
                            isLocalStorageValueForKeyEmpty(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY) ? browserAlertMessage(MESSAGE_NO_CONTENTS_DOWNLOAD)
                                : triggerDownload(filename, 'html', retrieveFromLocalStorage(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY));
                        };
                        const startDownloadAsTxt = (filename) => {
                            isLocalStorageValueForKeyEmpty(NOTEPAD_INNERTEXT_LOCALSTORAGE_KEY) ? browserAlertMessage(MESSAGE_NO_CONTENTS_DOWNLOAD)
                                : triggerDownload(filename, "txt", retrieveFromLocalStorage(NOTEPAD_INNERTEXT_LOCALSTORAGE_KEY));
                        };
                        const handleDownloadFromLocalstorageRequest = (modalElement, modalDropdownId, modalFileNameInputId) => {
                            updateLocalStorageWithNotePadContents();
                            let dropdownMenuInModal = document.getElementById(modalDropdownId);
                            if (isEmptyString(dropdownMenuInModal.value)) {
                                browserAlertMessage(MESSAGE_MODAL_DROPDOWN_VALUE_EMPTY);
                                return;
                            }
                            let filenameInput = document.getElementById(modalFileNameInputId);
                            let filename = isEmptyString(filenameInput.value) ? DEFAULT_FILENAME : filenameInput.value.trim();
                            dropdownMenuInModal.value === "txt" ? startDownloadAsTxt(filename) : startDownloadAsHTMLFile(filename);
                            modalElement.close();
                            window.location.reload();
                        }

                        /* Area to define DOM manipulation arrow functions supporting a Modal for Notepad's "Download file" feature  */
                        const createModalTitle = () => {
                            let modalTitle = createHTMLElement(HEADING_2_TAGNAME);
                            modalTitle.innerText = MODAL_TITLE;
                            return modalTitle;
                        };
                        const createDropdownMenuOption = (id, useIdForValueAndInnerText) => {
                            let modalDropdownOption = createHTMLElement(OPTION_TAGNAME);
                            modalDropdownOption.id = id;
                            if (useIdForValueAndInnerText) {
                                modalDropdownOption.value = id;
                                modalDropdownOption.innerText = id;
                            }
                            return modalDropdownOption;
                        };
                        const createModalDropdownMenu = () => {
                            let modalDropdown = createHTMLElement(SELECT_TAGNAME);
                            let modalDropdownOptionHTML = createDropdownMenuOption("html", true);
                            let modalDropdownOptionUnformattedText = createDropdownMenuOption("txt", true);
                            modalDropdown.appendChild(modalDropdownOptionHTML);
                            modalDropdown.appendChild(modalDropdownOptionUnformattedText);
                            modalDropdown.name = MODAL_DROPDOWN_ID;
                            modalDropdown.id = MODAL_DROPDOWN_ID;
                            return modalDropdown;
                        };
                        const createDropdownMenuLabel = () => {
                            let modalDropdownLabel = createHTMLElement(LABEL_TAGNAME);
                            modalDropdownLabel.for = MODAL_DROPDOWN_ID;
                            modalDropdownLabel.innerText = MODAL_DROPDOWN_LABEL_INNERTEXT;
                            return modalDropdownLabel;
                        };
                        const createModalButton = (innerTextValue, onClickFunction) => {
                            let modalButton = createHTMLElement(BUTTON_TAGNAME);
                            modalButton.onclick = onClickFunction;
                            modalButton.innerText = innerTextValue;
                            modalButton.classList.add(BOOTSTRAP_CLASS_BTN);
                            return modalButton;
                        };
                        const createModalCloseButton = (modal) => {
                            let modalCloseButton = createModalButton(MODAL_CLOSE_BUTTON_TEXT, () => { modal.close(); });
                            return modalCloseButton;
                        };
                        const createModalDownloadButton = () => {
                            let modalDownloadButton = createModalButton(MODAL_DOWNLOAD_BUTTON_TEXT, () => { isLocalStorageValueForKeyEmpty(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY) ? browserAlertMessage(MESSAGE_NO_CONTENTS_DOWNLOAD) : handleDownloadFromLocalstorageRequest(modal, MODAL_DROPDOWN_ID, MODAL_FILENAME_INPUT_ID) });
                            return modalDownloadButton;
                        };
                        const createModalFileNameInput = () => {
                            let modalFileNameInput = createHTMLElement(INPUT_TAGNAME);
                            modalFileNameInput.classList.add(BOOTSTRAP_CLASS_FORM_CONTROL);
                            modalFileNameInput.type = MODAL_FILENAME_INPUT_TYPE;
                            modalFileNameInput.id = MODAL_FILENAME_INPUT_ID;
                            modalFileNameInput.placeholder = MODAL_DROPDOWN_INPUT_PLACEHOLDER;
                            return modalFileNameInput;
                        };
                        const createModal = () => {
                            let modal = createHTMLElement(DIALOG_TAGNAME);
                            modal.id = MODAL_ID;
                            modal.style = MODAL_STYLES_STRING;
                            modal.appendChild(createModalTitle());
                            modal.appendChild(createModalFileNameInput());
                            modal.appendChild(createDropdownMenuLabel());
                            modal.appendChild(createModalDropdownMenu());
                            modal.appendChild(createModalDownloadButton());
                            modal.appendChild(createModalCloseButton(modal))
                            document.body.appendChild(modal)
                            return modal;
                        };
                        const createModalForDownloadLocalStorageContentsAsFile = () => {
                            let dialog = createModal();
                            return dialog.showModal();
                        };

                        /*NotePad Toolbar Related*/
                        const createOtherOptionsMenuUnorderedList = () => {
                            // <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            const unorderedList = createHTMLElement(UNORDEREDLIST_TAGNAME);
                            unorderedList.classList.add(BOOTSTRAP_CLASS_DROPDOWN_MENU);
                            unorderedList.setAttribute('aria-labelledby', NOTEPAD_TOOLBAR_OTHER_OPTIONS_MENU_BUTON_OPEN_ID);
                            return unorderedList;
                        }
                        const createOtherOptionsMenuLink = (linkText, linkOnCLickFunction) => {
                            const link = createHTMLElement(ANCHOR_TAGNAME);
                            link.classList.add(BOOTSTRAP_CLASS_DROPDOWN_ITEM);
                            link.onclick = linkOnCLickFunction;
                            link.href = CHARACTER_HASH;
                            link.innerText = linkText;
                            return link;
                        }
                        const createOtherOptionsMenuLinkItem = (linkText, onCLickFunction) => {
                            const listItem = createHTMLElement(LISTITEM_TAGNAME);
                            const link = createOtherOptionsMenuLink(linkText, onCLickFunction);
                            // Append to container
                            listItem.appendChild(link);
                            return listItem;
                        }
                        const createToolbarOtherOptionsMenuListContainerElement = () => {
                            const menuList = createOtherOptionsMenuUnorderedList();

                            /*
                            <li>
                               <a class="dropdown-item" onclick="createModalForDownloadLocalStorageContentsAsFile()" href="#">Download file</a>
                            </li>
                            */
                            const downLoadFile = createOtherOptionsMenuLinkItem(STRING_DOWNLOAD_FILE, createModalForDownloadLocalStorageContentsAsFile);
                            // Append to container
                            menuList.appendChild(downLoadFile);

                            /*<li>
                                <a class="dropdown-item" onclick="updateLocalStorageWithNotePadContents();" href="#">Save to LocalStorage</a>
                            </li>*/

                            const saveContents = createOtherOptionsMenuLinkItem(STRING_SAVE_TO_LOCALSTORAGE, updateLocalStorageWithNotePadContents);
                            // Append to container
                            menuList.appendChild(saveContents);

                            /*<li>
                                <a class="dropdown-item" onclick="cleanLocalStorage();"
                                href="#">Clear Local Storage</a>
                            </li>*/
                            const clearMemory = createOtherOptionsMenuLinkItem(STRING_CLEAR_LOCALSTORAGE, cleanLocalStorage);
                            // Append to container
                            menuList.appendChild(clearMemory);
                            return menuList;

                        }
                        const createOtherOptionsMenuOpenButton = () => {
                            //<button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            const displayMenuButton = createHTMLElement(BUTTON_TAGNAME);
                            displayMenuButton.type = STRING_BUTTON;
                            displayMenuButton.classList.add(BOOTSTRAP_CLASS_BTN);
                            displayMenuButton.classList.add(BOOTSTRAP_CLASS_BTN_LIGHT);
                            displayMenuButton.classList.add(BOOTSTRAP_CLASS_DROPDOWN_TOGGLE);
                            displayMenuButton.dataset.bsToggle = BOOTSTRAP_CLASS_DROPDOWN;
                            displayMenuButton.ariaExpanded = false;
                            displayMenuButton.innerText = STRING_OTHER_OPTIONS;
                            return displayMenuButton;

                        }
                        const createNotepadToolbarOtherOptionsMenuContainer = () => {
                            const menuContainer = createHTMLElement(SECTION_TAGNAME);
                            menuContainer.classList.add(BOOTSTRAP_CLASS_DROPDOWN);
                            menuContainer.classList.add(BOOTSTRAP_CLASS_BTN_GROUP);
                            menuContainer.role = STRING_GROUP;

                            //<button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            const NOTEPAD_TOOLBAR_OTHER_OPTIONS_MENU_BUTON_OPEN_ELEMENT = createOtherOptionsMenuOpenButton();
                            const NOTEPAD_TOOLBAR_OTHER_OPTIONS_MENU_LIST_ELEMENT = createToolbarOtherOptionsMenuListContainerElement();


                            menuContainer.appendChild(NOTEPAD_TOOLBAR_OTHER_OPTIONS_MENU_BUTON_OPEN_ELEMENT);
                            menuContainer.appendChild(NOTEPAD_TOOLBAR_OTHER_OPTIONS_MENU_LIST_ELEMENT);
                            return menuContainer;

                        }
                        const createTextStyleButton = (contentTagName, contentInnerText, buttonId, buttonTitle, buttonOnClickFunction) => {
                            const styleTextButtonContent = createHTMLElement(contentTagName);
                            styleTextButtonContent.innerText = contentInnerText;
                            const styleTextButtonContainer = createHTMLElement(BUTTON_TAGNAME);//<button>
                            styleTextButtonContainer.id = buttonId;
                            styleTextButtonContainer.type = STRING_BUTTON;
                            styleTextButtonContainer.classList.add(BOOTSTRAP_CLASS_BTN);
                            styleTextButtonContainer.classList.add(BOOTSTRAP_CLASS_BTN_LIGHT);
                            styleTextButtonContainer.onclick = buttonOnClickFunction;
                            styleTextButtonContainer.title = buttonTitle;
                            styleTextButtonContainer.appendChild(styleTextButtonContent);
                            return styleTextButtonContainer;

                        }
                        const createToolbarContainer = () => {
                            const fieldSetElement = createHTMLElement(FIELDSET_TAGNAME);//<fieldset id="notepad-toolbar">
                            fieldSetElement.id = "notepad-toolbar";
                            //Italic text style button content
                            const NOTEPAD_TOOLBAR_ITALIC_BUTTON_ELEMENT = createTextStyleButton(ITALIC_TAGNAME, CHARACTER_UPPERCASE_I, "notepad-toolbar-italicize", "Italicize Highlighted Text", handleItalicButtonClick);
                            //bold text style button
                            const NOTEPAD_TOOLBAR_BOLD_BUTTON_ELEMENT = createTextStyleButton(BOLD_TAGNAME, CHARACTER_UPPERCASE_B, "notepad-toolbar-bold", "Bold Highlighted Text", handleBoldButtonClick);
                            //Underline text style buttoN
                            const NOTEPAD_TOOLBAR_UNDERLINE_BUTTON_ELEMENT = createTextStyleButton(UNDERLINE_TAGNAME, CHARACTER_UPPERCASE_U, "notepad-toolbar-underline", "Underline Highlighted Text", handleUnderlineButtonClick);
                            fieldSetElement.appendChild(NOTEPAD_TOOLBAR_ITALIC_BUTTON_ELEMENT);
                            fieldSetElement.appendChild(NOTEPAD_TOOLBAR_BOLD_BUTTON_ELEMENT);
                            fieldSetElement.appendChild(NOTEPAD_TOOLBAR_UNDERLINE_BUTTON_ELEMENT);
                            return fieldSetElement;
                        }

                        /*NotePad edit Text Area Related*/
                        const createNotepadTextArea = () => {
                            const fieldSetElement = createHTMLElement(FIELDSET_TAGNAME);
                            fieldSetElement.id = NOTEPAD_TEXT_AREA_ID;
                            fieldSetElement.contentEditable = true;
                            fieldSetElement.style = "border: 2px solid black; border-radius:15px; min-height: 200px; padding:10px; margin-top:5px;";
                            return fieldSetElement;
                        }

                        // Notepad Container 
                        const createNotepadAppContainer = () => {
                            // HTML element to be used as a container: <form style="padding: 5px;">
                            const formElement = createHTMLElement(FORM_TAGNAME);
                            const formElement_STYLE_STRING = "padding: 5px;";
                            formElement.style = formElement_STYLE_STRING;
                            // <fieldset> element to display tools related to Notepad
                            const NOTEPAD_TOOLBAR_CONTAINER_ELEMENT = createToolbarContainer()
                            // <section class="dropdown btn-group" role="group">
                            const NOTEPAD_TOOLBAR_OTHER_OPTIONS_MENU_CONTAINER_ELEMENT = createNotepadToolbarOtherOptionsMenuContainer();
                            // Append to container 
                            NOTEPAD_TOOLBAR_CONTAINER_ELEMENT.appendChild(NOTEPAD_TOOLBAR_OTHER_OPTIONS_MENU_CONTAINER_ELEMENT);
                            formElement.appendChild(NOTEPAD_TOOLBAR_CONTAINER_ELEMENT);
                            /*Notepad edit text area*/
                            const NOTEPAD_TEXT_AREA_ELEMENT = createNotepadTextArea();
                            formElement.appendChild(NOTEPAD_TEXT_AREA_ELEMENT);
                            // set up Notepad's innerHTML value
                            setElementInnerHTMLWithLocalStorageText(NOTEPAD_TEXT_AREA_ELEMENT, NOTEPAD_INNERHTML_LOCALSTORAGE_KEY, NOTEPAD_TEXT_AREA_USAGE_HINT);
                            return formElement;
                        }

                        //Higher level function for Notepad HTML + Bootstrap + JS component
                        const createNotepadApp = () => {
                            //HTML DOM parent element for Notepad container <section class="accordion-body" id="collapseThreeAccordionBody">
                            const NOTEPAD_PARENT_ELEMENT = querySelectorId(NOTEPAD_PARENT_ELEMENT_ID);
                            // HTML element to be used as a container: <form style="padding: 5px;">
                            const NOTEPAD_CONTAINER = createNotepadAppContainer();
                            NOTEPAD_PARENT_ELEMENT.appendChild(NOTEPAD_CONTAINER);
                            // listen for "Enter" Key press
                            listenForKeyboardEnterOrSpaceKey();
                        }
                        // Create Notepad app call.
                        createNotepadApp();

                    </script>
                </section>
            </section>
        </section>
    </section>
</body>

</html>

``` 

---

This tutorial is part of a series, please continue in the [next lesson]