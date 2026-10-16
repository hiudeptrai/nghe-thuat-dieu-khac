document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".nav-card");
    const loadingOverlay = document.getElementById("loading-overlay");

    cards.forEach(card => {
        card.addEventListener("click", function (e) {
            e.preventDefault();
            const targetUrl = this.getAttribute("href");

            // Bật hiệu ứng loading
            loadingOverlay.classList.add("active");

            // Chuyển trang sau 0.5s để thấy hiệu ứng
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});