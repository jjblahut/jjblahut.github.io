
const emailButton = document.getElementById('email');
const linkedInButton = document.getElementById('linked-in');
emailButton.addEventListener("mouseover", emailHover);
emailButton.addEventListener("mouseout", emailLeave);
linkedInButton.addEventListener("mouseover", linkedInHover);
linkedInButton.addEventListener("mouseout", linkedInLeave);

function emailHover() {
    emailButton.style.textDecoration = "none";
    emailButton.style.color = "white";
    emailButton.style.backgroundColor = "#C98686";
    emailButton.style.padding = "0px 5px 0 5px";
}

function linkedInHover() {
    linkedInButton.style.textDecoration = "none";
    linkedInButton.style.color = "white";
    linkedInButton.style.backgroundColor = "#C98686";
    linkedInButton.style.padding = "0px 5px 0 5px";
}

function emailLeave() {
    emailButton.style.textDecoration = "none";
    emailButton.style.color = "white";
    emailButton.style.backgroundColor = "#4B644A";
}

function linkedInLeave() {
    linkedInButton.style.textDecoration = "none";
    linkedInButton.style.color = "white";
    linkedInButton.style.backgroundColor = "#4B644A";
}