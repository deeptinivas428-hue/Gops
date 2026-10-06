function nextPage(pageId) {

    const currentPage = document.querySelector(".page.active");
    const nextPage = document.getElementById(pageId);

    if (currentPage) {
        currentPage.classList.remove("active");
    }

    if (nextPage) {
        nextPage.classList.add("active");
    }

    window.scrollTo(0, 0);
}