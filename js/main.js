const toggleBtn = document.getElementById("themeToggle");

// load saved theme
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});

// toggle theme
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        if (document.body.classList.contains("light-mode")) {
            document.body.classList.remove("light-mode");
            localStorage.setItem("theme", "");
        } else {
            document.body.classList.add("light-mode");
            localStorage.setItem("theme", "light-mode");
        }
    });
}