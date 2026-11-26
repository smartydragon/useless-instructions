function goToPage(page = document.getElementById("menuSelect")?.value) {
    if (!page) return;
    window.location.href = page;
}