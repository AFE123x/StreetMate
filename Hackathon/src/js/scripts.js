
document.querySelectorAll(".button").forEach(pill => {
    pill.addEventListener("onclick", () => pill.classList.toggle(".button--selected")); 
})