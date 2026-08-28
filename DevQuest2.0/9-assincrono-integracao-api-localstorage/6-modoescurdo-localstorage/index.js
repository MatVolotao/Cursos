const toggle = document.getElementById("theme-toggle");
const alternativeToggle = document.getElementById("theme-toggle-alternative");
const themeRoot = document.documentElement;

console.log(localStorage.getItem("theme"));

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
	themeRoot.classList.add("dark");
	toggle.checked = true;
	alternativeToggle.checked = true;
}

toggle.addEventListener("change", () => {
	if (toggle.checked) {
		themeRoot.classList.add("dark");
		localStorage.setItem("theme", "dark");
	} else {
		themeRoot.classList.remove("dark");
		localStorage.setItem("theme", "light");
	}
	alternativeToggle.checked = toggle.checked;
});

alternativeToggle.addEventListener("change", () => {
	themeRoot.classList.toggle("dark", alternativeToggle.checked);
	toggle.checked = alternativeToggle.checked;
	localStorage.setItem("theme", alternativeToggle.checked ? "dark" : "light");
});
