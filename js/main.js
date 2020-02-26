window.onload = function () {
    let links = document.getElementsByClassName("headLink");
    for (let i = 0; i < links.length; i++) {
        links[i].style.transition = "all 0.5s ease-in-out";
    }
    let header = document.getElementsByTagName("header")[0];
    header.style.transition = "background-color 0.15s ease-in-out, color 0.15s ease-in-out";
};

