// Tính năng tìm kiếm nội dung nhanh trực tiếp trên trang
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const sections = document.querySelectorAll(".module-section");

    searchInput.addEventListener("input", function (e) {
        const keyword = e.target.value.toLowerCase().trim();

        sections.forEach(section => {
            const textContent = section.innerText.toLowerCase();
            if (keyword === "" || textContent.includes(keyword)) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });
});