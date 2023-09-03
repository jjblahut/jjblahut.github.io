
const emailButton = document.getElementById('email');
const linkedInButton = document.getElementById('linked-in');
emailButton.addEventListener("mouseover", emailHover);
emailButton.addEventListener("mouseout", emailLeave);
linkedInButton.addEventListener("mouseover", linkedInHover);
linkedInButton.addEventListener("mouseout", linkedInLeave);

function emailHover() {
    emailButton.style.textDecoration = "none";
    emailButton.style.color = "#FEFEFA";
    emailButton.style.backgroundColor = "#455b55";
    emailButton.style.borderRadius = "50px";
    emailButton.style.padding = "0px 5px 0 5px";
}

function linkedInHover() {
    linkedInButton.style.textDecoration = "none";
    linkedInButton.style.color = "#FEFEFA";
    linkedInButton.style.backgroundColor = "#455b55";
    linkedInButton.style.borderRadius = "50px";
    linkedInButton.style.padding = "0px 5px 0 5px";
}

function emailLeave() {
    emailButton.style.textDecoration = "none";
    emailButton.style.color = "#455b55";
    emailButton.style.backgroundColor = "#FEFEFA";
}

function linkedInLeave() {
    linkedInButton.style.textDecoration = "none";
    linkedInButton.style.color = "#455b55";
    linkedInButton.style.backgroundColor = "#FEFEFA";
}