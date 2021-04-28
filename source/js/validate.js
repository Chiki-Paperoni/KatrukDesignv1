const popupBtn = document.getElementById("popup__button");
const phone = document.getElementById("phone");
const warning = document.getElementById("popup__bottomWarn");
const nameRow = document.getElementById("popup__name");
const phoneRow = document.getElementById("popup__phone");

popupBtn.addEventListener("click", (e) => {
	const form = document.forms.popup;
	const name = form.name.value;
	const phone = form.phone.value;
	const re = /[0-9]{9}/;

	if (name && re.test(phone)) {
		warning.style.display = "none";
		console.log("SUCCES");
		//SEND DATA TO TELEGRAM BOT HERE
		form.phone.value = "";
		form.phone.dataset.current = "";
		form.name.value = "";
	}

	if (!name) {
		nameRow.classList.add("warning");
		warning.style.display = "inline";
	} else {
		nameRow.classList.remove("warning");
	}
	if (!re.test(phone)) {
		phoneRow.classList.add("warning");
		warning.style.display = "inline";
	} else {
		phoneRow.classList.remove("warning");
	}
});

phone.addEventListener("input", (e) => {
	const key = e.data;
	const regex = new RegExp(/[0-9]/);
	if (e.inputType === "insertText") {
		regex.test(key)
			? (phone.dataset.current = phone.value)
			: (phone.value = phone.dataset.current || "");
	} else {
		phone.value.match(/[0-9]{0,9}/)
			? (phone.dataset.current = phone.value)
			: (phone.value = phone.dataset.current || "");
	}
});
