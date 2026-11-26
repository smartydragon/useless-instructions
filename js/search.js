const search = document.getElementById("searchBar");

if (search) {
    const result = document.createElement("p");
    search.insertAdjacentElement("afterend", result);

    search.addEventListener("input", () => {
        result.replaceChildren();

        const searchTerm = search.value.trim().toLowerCase();
        if (!searchTerm) {
            result.textContent = "";
            return;
        }

        const link = `<a href="./${searchTerm}.html">here</a>`;
        result.innerHTML = `Click ${link}`;
    });
}

