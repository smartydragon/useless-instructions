
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
        localStorage.setItem("article", document.getElementById("typeHere").value);
        document.getElementById("typeHere").innerHtml = "" 
});


