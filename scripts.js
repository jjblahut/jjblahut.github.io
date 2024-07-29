
const emailButton = document.getElementById('email');
const linkedInButton = document.getElementById('linked-in');
emailButton.addEventListener("mouseover", emailHover);
emailButton.addEventListener("mouseout", emailLeave);
linkedInButton.addEventListener("mouseover", linkedInHover);
linkedInButton.addEventListener("mouseout", linkedInLeave);

function emailHover() {
    emailButton.style.textDecoration = "none";
    emailButton.style.color = "black";
    emailButton.style.backgroundColor = "white";
    emailButton.style.padding = "0px 5px 0 5px";
}

function linkedInHover() {
    linkedInButton.style.textDecoration = "none";
    linkedInButton.style.color = "black";
    linkedInButton.style.backgroundColor = "white";
    linkedInButton.style.padding = "0px 5px 0 5px";
}

function emailLeave() {
    emailButton.style.textDecoration = "none";
    emailButton.style.color = "white";
    emailButton.style.backgroundColor = "#23C9FF";
}

function linkedInLeave() {
    linkedInButton.style.textDecoration = "none";
    linkedInButton.style.color = "white";
    linkedInButton.style.backgroundColor = "#23C9FF";
}