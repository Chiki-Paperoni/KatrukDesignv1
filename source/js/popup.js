const btn = document.getElementById("header__btn");
const header = document.getElementById("header");
const wrapper = document.getElementById("wrapper");
const popup = document.getElementById("popup");
const popupСontainer = document.getElementById("popup__container");
const success = document.getElementById("success");
const successContainer = document.getElementById("success__container");
const successBtn = document.getElementById("popup__success");
const mobilePopup = document.getElementById("mobile__popup");
const mobileBtn = document.getElementById("mobile__button");
const mobileMenuOpen = document.getElementById("mobile_menu_open");

mobileMenuOpen.addEventListener("click", () => {
	mobilePopup.style.height = "100vh";
	document.body.style.overflow = "hidden";
});
mobilePopup.addEventListener("click", () => {
	mobilePopup.style.height = "0px";
	document.body.style.overflow = "";
});
mobileBtn.addEventListener("click", () => {
	popup.style.display = "flex";
	popupСontainer.style.transform = "scale(1)";
	popup.style.opacity = "1";
	document.body.style.overflow = "hidden";
});

popupСontainer.addEventListener("click", (e) => {
	e.stopPropagation();
});
successContainer.addEventListener("click", (e) => {
	e.stopPropagation();
});
success.addEventListener("click", () => {
	success.style.display = "none";
	document.body.style.overflow = "";
});
successBtn.addEventListener("click", () => {
	success.style.display = "none";
	document.body.style.overflow = "";
});
popup.addEventListener("click", () => {
	setTimeout(() => {
		popup.style.display = "none";
		document.body.style.overflow = "";
	}, 300);
	popupСontainer.style.transform = "scale(0)";
	popup.style.opacity = "0";
	document.body.style.paddingRight = "";
	wrapper.style.width = "";
});
btn.addEventListener("click", () => {
	popup.style.display = "flex";
	document.body.style.overflow = "hidden";
	document.body.style.paddingRight = "17px";
	popupСontainer.style.transform = "scale(1)";
	popup.style.opacity = "1";
	wrapper.style.width = "100vw";
});
