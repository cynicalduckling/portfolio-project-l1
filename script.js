const pageHeadings = {
    MY_WORK: "MY WORK",
    CONTACT_ME: "CONTACT ME",
    ABOUT_ME: "ABOUT ME",
};

let sectionNavigation = document.querySelector(".section-navigation");
let aboutMeDiv = document.querySelector("#about-me");
let myWorkDiv = document.querySelector("#my-work");
let contactDiv = document.querySelector("#contact-me");

let aboutMeButton = document.querySelector("#about-me-button");
let myWorkButton = document.querySelector("#my-work-button");
let contactMeButton = document.querySelector("#contact-button");
let sidebarElement = document.querySelector("#sidebar-bottom-left");

let socialsDiv = document.querySelector("#socials");

aboutMeButton.innerHTML = "∎";

handleSectionClick = (e) => {
    if (e.target.id === "about-me-button") {
        aboutMeDiv.style.display = "inline-block";
        myWorkDiv.style.display = "none";
        contactDiv.style.display = "none";
        aboutMeButton.innerHTML = "∎";
        myWorkButton.innerHTML = pageHeadings.MY_WORK;
        contactMeButton.innerHTML = pageHeadings.CONTACT_ME;
        socialsDiv.style.display = "none";
        sidebarElement.style.display = "none";
    } else if (e.target.id === "my-work-button") {
        aboutMeDiv.style.display = "none";
        myWorkDiv.style.display = "inline-block";
        contactDiv.style.display = "none";
        aboutMeButton.innerHTML = pageHeadings.ABOUT_ME;
        myWorkButton.innerHTML = "∎";
        contactMeButton.innerHTML = pageHeadings.CONTACT_ME;
        sidebarElement.style.display = "none";
        socialsDiv.style.display = "inline-block";
    } else if (e.target.id === "contact-button") {
        aboutMeDiv.style.display = "none";
        myWorkDiv.style.display = "none";
        contactDiv.style.display = "inline-block";
        aboutMeButton.innerHTML = pageHeadings.ABOUT_ME;
        myWorkButton.innerHTML = pageHeadings.MY_WORK;
        contactMeButton.innerHTML = "∎";
        socialsDiv.style.display = "inline-block";
        sidebarElement.style.display = "inline-block";
    }
};

sectionNavigation.addEventListener("click", handleSectionClick);
