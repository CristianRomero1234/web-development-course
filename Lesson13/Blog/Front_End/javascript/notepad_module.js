/*
"What you see is what you get simple text editor component." 

- Relies on Bootstrap v 5.3 or greater being available.
- Written as a verbose-syntax script to be used as an example for the "DOM manipulation with Javascript" topic.

Author: Cristian Romero (Jan 2024)

The reusability of this script it's best exemplified in the codepen: https://codepen.io/cromerolo2/pen/JjzBzyw

*/


/* 
 *
 * Area to define constants for Verbose readability of code
 * 
 * */

/**
 * Some General Strings
*/
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
const STRING_DOWNLOAD_FILE = "Download Article";
const STRING_PUBLISH_ARTICLE = "Publish Article";
const STRING_GROUP = "group";
const STRING_OTHER_OPTIONS = " Other options";
const STRING_SAVE_TO_LOCALSTORAGE = "Save to Browser's LocalStorage";


/**
 * HTML "tagnames"
*/
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


/**
 * BootStrap Classes
*/
const BOOTSTRAP_CLASS_ACCORDION_BODY = "accordion-body";
const BOOTSTRAP_CLASS_FORM_CONTROL = "form-control";
const BOOTSTRAP_CLASS_BTN = "btn";
const BOOTSTRAP_CLASS_BTN_LIGHT = "btn-light";
const BOOTSTRAP_CLASS_BTN_GROUP = "btn-group";
const BOOTSTRAP_CLASS_DROPDOWN = "dropdown";
const BOOTSTRAP_CLASS_DROPDOWN_ITEM = "dropdown-item";
const BOOTSTRAP_CLASS_DROPDOWN_MENU = "dropdown-menu";
const BOOTSTRAP_CLASS_DROPDOWN_TOGGLE = "dropdown-toggle";


/**
 * Notepad-related constants and other verbose wrappers for values
*/
let NOTEPAD_PARENT_ELEMENT_ID = "collapseThreeAccordionBody";
const NOTEPAD_TEXT_AREA_ID = "notepad-text-area";
const NOTEPAD_TEXT_AREA_USAGE_HINT = "Write your notes, then Press enter to save to Browser's local storage";
const NOTEPAD_TOOLBAR_OTHER_OPTIONS_MENU_BUTON_OPEN_ID = "btnGroupDrop1";

/**
 *  LocalStorage Keys
*/
const NOTEPAD_INNERTEXT_LOCALSTORAGE_KEY = 'savedInnerText';
const NOTEPAD_INNERHTML_LOCALSTORAGE_KEY = 'savedInnerHTML';

/**
 * Download Modal related constants
*/
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

/**
 * Messages to be displayed
*/
const MESSAGE_NO_CONTENTS_DOWNLOAD = "No contents to download";
const MESSAGE_NOTHING_WAS_SAVED = "Nothing was saved.";
const MESSAGE_ENTER_WAS_PRESSED = "Saving to localStorage because Enter was Pressed";
const MESSAGE_MODAL_DROPDOWN_VALUE_EMPTY = "Dropdown in modal element in HTML value is empty";


/**
 * Verbose wrappers for browser provided functions
*/
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

/**
 * "Arrow functions" supporting Notepad features
*/

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
    localStorage.removeItem(key);
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

/**
 * Download as File feature
*/
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
    isLocalStorageValueForKeyEmpty(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY) ? 
    browserAlertMessage(MESSAGE_NO_CONTENTS_DOWNLOAD) : triggerDownload(filename, 'html', retrieveFromLocalStorage(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY));
};
const startDownloadAsTxt = (filename) => {
    isLocalStorageValueForKeyEmpty(NOTEPAD_INNERTEXT_LOCALSTORAGE_KEY) ? 
    browserAlertMessage(MESSAGE_NO_CONTENTS_DOWNLOAD) : triggerDownload(filename, "txt", retrieveFromLocalStorage(NOTEPAD_INNERTEXT_LOCALSTORAGE_KEY));
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

/**
 * DOM manipulation arrow functions supporting a Modal for Notepad's "Download file" feature 
*/
const createModalTitle = () => {
    let modalTitle = createHTMLElement(HEADING_2_TAGNAME);
    modalTitle.innerText = MODAL_TITLE;
    return modalTitle;
};
const createModalDropdownMenuOption = (id, useIdForValueAndInnerText) => {
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
    let modalDropdownOptionHTML = createModalDropdownMenuOption("html", true);
    let modalDropdownOptionUnformattedText = createModalDropdownMenuOption("txt", true);
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

    /* We want to achieve:
    <li>
        <a class="dropdown-item" onclick="createModalForDownloadLocalStorageContentsAsFile()" href="#">Download file</a>
    </li>
    */
    const downLoadFile = createOtherOptionsMenuLinkItem(STRING_DOWNLOAD_FILE, createModalForDownloadLocalStorageContentsAsFile);
    // Append to container
    menuList.appendChild(downLoadFile);

    /* We want to achieve:
    <li>
        <a class="dropdown-item" onclick="updateLocalStorageWithNotePadContents();" href="#">Save to LocalStorage</a>
    </li>*/

    const saveContents = createOtherOptionsMenuLinkItem(STRING_SAVE_TO_LOCALSTORAGE, updateLocalStorageWithNotePadContents);
    // Append to container
    menuList.appendChild(saveContents);

    /* We want to achieve:
    <li>
        <a class="dropdown-item" onclick="cleanLocalStorage();"
        href="#">Clear Local Storage</a>
    </li>*/
    const clearMemory = createOtherOptionsMenuLinkItem(STRING_CLEAR_LOCALSTORAGE, cleanLocalStorage);
    // Append to container
    menuList.appendChild(clearMemory);

    const placeholderPublish = createOtherOptionsMenuLinkItem(STRING_PUBLISH_ARTICLE, (e)=>{e.preventDefault()});
     // Append to container
     menuList.appendChild(placeholderPublish);
    return menuList;

}
const createOtherOptionsMenuOpenButton = () => {
    //We want to achieve: <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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

    //We want to achieve: <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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
export function createNotepadApp() {
    //HTML DOM parent element for Notepad container <section class="accordion-body" id="collapseThreeAccordionBody">
    const NOTEPAD_PARENT_ELEMENT = querySelectorId(NOTEPAD_PARENT_ELEMENT_ID);
    // HTML element to be used as a container: <form style="padding: 5px;">
    const NOTEPAD_CONTAINER = createNotepadAppContainer();
   
    // listen for "Enter" Key press
    listenForKeyboardEnterOrSpaceKey();
    return NOTEPAD_CONTAINER;
}