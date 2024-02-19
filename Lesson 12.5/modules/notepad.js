const NOTEPAD_INNERHTML_LOCALSTORAGE_KEY = 'savedInnerHTML';
const ID_OF_NOTEPAD_TEXT_AREA = "notepad-text-area";
const NOTEPAD_TEXT_AREA_ELEMENT = document.querySelector("#" + ID_OF_NOTEPAD_TEXT_AREA);
const isUndefinedOrNull = (objectToCheck) => {
    if (objectToCheck === undefined || objectToCheck === null) {
        return true;
    }
    return false;
    //returns boolean
};
const isEmptyString = (stringToCheck) => {
    if (typeof stringToCheck === 'string' || stringToCheck instanceof String) {
        return isUndefinedOrNull(stringToCheck) ? true : (stringToCheck.trim() === "");
    }
    return true;
    //returns boolean
};
let retrieveFromLocalStorage = (key) => {
    let valueFromLocalStorage = localStorage.getItem(key);
    return valueFromLocalStorage;
}
let saveToLocalStorage = (key, value) => {
    if (!isEmptyString(key) && !isEmptyString(value)) {
        localStorage.setItem(key, value);
    }
};
let saveToLocalStorageOnlyText = (value) => {
    if (value.trim() !== '') {
        saveToLocalStorage('savedInnerText', value);
    }
};
const listenForEnterOrSpace = () => {
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            saveToLocalStorageOnlyText(NOTEPAD_TEXT_AREA_ELEMENT.innerText)
            saveToLocalStorage(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY, NOTEPAD_TEXT_AREA_ELEMENT.innerHTML);
        }
    })
};
export function handleClickSaveTolocalStorageButton() {
    saveToLocalStorageOnlyText(NOTEPAD_TEXT_AREA_ELEMENT.innerText)
    saveToLocalStorage(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY, NOTEPAD_TEXT_AREA_ELEMENT.innerHTML);
};


/*Download as File related*/
const triggerDownload = (fileName, fileExtension, fileContent) => {
    fileName = isEmptyString(fileName) ? DEFAULT_FILENAME : fileName.trim();
    fileExtension = isEmptyString(fileExtension) ? 'html' : fileExtension.trim();
    // Define MIME type for blob
    const MIME_Type = fileExtension === "txt" ? "text/plain" : "text/html";
    // Create a Blob containing the text data
    const blob = new Blob([fileContent], { type: MIME_Type });
    // Create a link element
    const downloadLink = document.createElement('a');
    // Set the link's href attribute to a URL representing the Blob
    downloadLink.href = URL.createObjectURL(blob);
    // Set the download attribute with the desired file name
    downloadLink.download = `${fileName}.${fileExtension}`;
    // Append the link to the document
    document.body.appendChild(downloadLink);
    // Trigger a click on the link to initiate the download
    downloadLink.click();
};
export function startDownloadAsHTMLFile(filename) {
    isEmptyString(localStorage.getItem(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY)) ? alert("No contents to download")
        : triggerDownload(filename, "html", localStorage.getItem(NOTEPAD_INNERHTML_LOCALSTORAGE_KEY));
};




export function runNotepad() {
    NOTEPAD_TEXT_AREA_ELEMENT.innerHTML = isEmptyString(retrieveFromLocalStorage('savedInnerHTML')) === true ? "Press enter to save to Browser's local storage" : localStorage.getItem('savedInnerHTML');


    document.querySelector("#downloadFileButton").addEventListener("click", (e) => { e.preventDefault(); startDownloadAsHTMLFile('notes'); })

    

    document.querySelector("#saveToLocalStorageButton").addEventListener("click", (e) => { e.preventDefault(); handleClickSaveTolocalStorageButton(); })
    listenForEnterOrSpace();
}