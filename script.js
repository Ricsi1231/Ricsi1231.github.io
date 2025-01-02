function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const Services_Link = document.getElementById("Services_Link");
const GitHubLink = document.getElementById("GitHubLink");

Services_Link.addEventListener('click', () => {
    scrollToElement('.header');
});

GitHubLink.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});