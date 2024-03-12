/**
 *  <div class="image-carousel">
        <ul class="carousel-slides">
            <li><img src="# alt="Image 1"></li>
            <li><img src="# alt="Image 2"></li>
            <li><img src="# alt="Image 3"></li>
            <li><img src="# alt="Image 4"></li>
            <li><img src="# alt="Image 5"></li>
        </ul>

    </div>
 */

export function createImageCarouselSection() {
    let carouselSection = document.createElement("section");
    carouselSection.classList.add("image-carousel");
   
    return carouselSection;
}

export function createCarouselSlidesSection(...imgElements) {
    let ulElement = document.createElement("ul");
    ulElement.classList.add("carousel-slides");
    if (imgElements.length > 0) {
        for (const img of imgElements) {
            let liElement = document.createElement("li");
            liElement.appendChild(img);
            ulElement.appendChild(liElement);
        }
    }
    
    const firstSlide = ulElement.firstElementChild;
    const lastSlide = ulElement.lastElementChild;

    ulElement.addEventListener('transitionend', (event) => {
        console.log(event);
        // Check if the last image is visible
        if (ulElement.children[ulElement.children.length - 1] === lastSlide) {
            ulElement.classList.remove('active');
            ulElement.appendChild(firstSlide);
            ulElement.insertBefore(lastSlide, ulElement.firstChild);
        } else if (ulElement.children[0] === firstSlide) {
            ulElement.classList.add('active');
        }
    });
    return ulElement
}
export function createImgElementForCarousel(imgId, imgAlt, imgSrc) {
    let imgElement = document.createElement("img");
    imgElement.id = imgId;
    imgElement.alt = imgAlt;
    imgElement.src = imgSrc;
    return imgElement

}

