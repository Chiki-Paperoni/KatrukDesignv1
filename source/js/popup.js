const btn = document.getElementById("header__btn");
const header = document.getElementById("header");
const wrapper = document.getElementById("wrapper");
const popup = document.getElementById("popup");
const popupСontainer = document.getElementById("popup__container");
popupСontainer.addEventListener("click", (e) => {
	e.stopPropagation();
});

popup.addEventListener("click", () => {
	setTimeout(() => {
		popup.style.display = "none";
		document.body.style.overflow = "";
	}, 300);
	popupСontainer.style.transform = "scale(0)";
	popup.style.opacity = "0";
	document.body.style.paddingRight = "";
	header.style.width = "";
	wrapper.style.width = "";
});

btn.addEventListener("click", () => {
	popup.style.display = "flex";
	document.body.style.overflow = "hidden";
	document.body.style.paddingRight = "17px";
	popupСontainer.style.transform = "scale(1)";
	popup.style.opacity = "1";
	header.style.width = "100vw";
	wrapper.style.width = "100vw";
});
