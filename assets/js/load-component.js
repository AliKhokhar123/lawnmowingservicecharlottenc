function adjustMainContentPadding() {
    const navbar = document.querySelector('.main-nav-box');
    const mainContent = document.querySelector('.main-content');

    if (navbar && mainContent) {
        const navbarHeight = navbar.offsetHeight;
        console.log(navbarHeight)
        mainContent.style.paddingTop = `${navbarHeight}px`;
    }
}

$(document).ready(function () {
    $("#nav-placeholder").load("./assets/components/header.html");
    setTimeout(() => {
        adjustMainContentPadding();
        document.querySelectorAll('.setImagePath').forEach(img => {
            const filename = img.getAttribute('data-filename');
            img.src = `${window.location.origin}/lawnmowingservicecharlottenc/assets/images/${filename}`;
        });
    }, 500);
});

$(document).ready(function () {
    $("#footer-placeholder").load("./assets/components/footer.html");
});