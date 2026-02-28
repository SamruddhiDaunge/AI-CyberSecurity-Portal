// DARK MODE FUNCTION
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        document.getElementById("themeBtn").innerHTML = "☀";
    } else {
        localStorage.setItem("theme", "light");
        document.getElementById("themeBtn").innerHTML = "🌙";
    }
}

// SAVE THEME AFTER REFRESH
window.onload = function () {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("themeBtn").innerHTML = "☀";
    }
};