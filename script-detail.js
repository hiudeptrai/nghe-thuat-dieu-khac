document.addEventListener("DOMContentLoaded", function () {
    const backBtn = document.querySelector(".back-btn");
    const loadingOverlay = document.getElementById("loading-overlay");

    if (backBtn) {
        backBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const targetUrl = this.getAttribute("href");

            loadingOverlay.classList.add("active");

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    }
});