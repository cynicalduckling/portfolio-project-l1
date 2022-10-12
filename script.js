const pageHeadings = {
    MY_WORK: "MY WORK",
    CONTACT_ME: "CONTACT ME",
    ABOUT_ME: "ABOUT ME",
};

let navButtonsDiv = document.querySelector(".nav-buttons-div");
let aboutMeDiv = document.querySelector("#about-me");
let myWorkDiv = document.querySelector("#my-work");
let contactDiv = document.querySelector("#contact-me");

let aboutMeButton = document.querySelector("#about-me-button");
let myWorkButton = document.querySelector("#my-work-button");
let contactMeButton = document.querySelector("#contact-button");
let sidebarElement = document.querySelector("#sidebar-bottom-left");

let topRightSocialsDiv = document.querySelector("#top-right-socials");

aboutMeButton.innerHTML = "∎";

handleSectionClick = (e) => {
    if (e.target != navButtonsDiv) {
        let currentSelectionId = e.target.id;
        let sectionObjects = {
            "about-me-button": aboutMeDiv,
            "my-work-button": myWorkDiv,
            "contact-button": contactDiv
        }

        for (let obj in sectionObjects) {
            sectionObjects[obj].style.display = (obj === currentSelectionId) ? "inline-block" : "none";
        }

        aboutMeButton.innerHTML = (currentSelectionId === "about-me-button") ? "∎" : pageHeadings.ABOUT_ME;
        myWorkButton.innerHTML = (currentSelectionId === "my-work-button") ? "∎" : pageHeadings.MY_WORK;
        contactMeButton.innerHTML = (currentSelectionId === "contact-button") ? "∎" : pageHeadings.CONTACT_ME;

        topRightSocialsDiv.style.display = (currentSelectionId === "my-work-button" || currentSelectionId === "contact-button") ? "inline-block" : "none";
        sidebarElement.style.display = (currentSelectionId === "contact-button") ? "inline-block" : "none";
    }
};

navButtonsDiv.addEventListener("click", handleSectionClick);