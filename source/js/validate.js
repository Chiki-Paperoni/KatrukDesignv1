async function postData(url = "", msg = {}) {
	const response = await fetch(url, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		redirect: "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify(msg),
	});
	return await response.json();
}

const popupBtn = document.getElementById("popup__button");
const phone = document.getElementById("phone");
const warning = document.getElementById("popup__bottomWarn");
const nameRow = document.getElementById("popup__name");
const phoneRow = document.getElementById("popup__phone");

const mainForm = document.forms.main;
const mainFormBtn = document.getElementById("main__form_btn");

popupBtn.addEventListener("click", (e) => {
	const form = document.forms.popup;
	const name = form.name.value;
	const phone = form.phone.value;
	const re = /[0-9]{9}/;

	if (name && re.test(phone)) {
		warning.style.display = "none";
		form.style.display = "none";
		success.style.display = "flex";
		//SEND DATA TO TELEGRAM BOT HERE
		let data = {
			name,
			phone,
		};
		postData(
			`https://api.telegram.org/bot1730980288:AAGky2y9SAWak9-ygjfEKNnA5eroJQYIz_Q/sendMessage?chat_id=-1001244564444&parse_mode=html&text=${JSON.stringify(
				data
			)}`
		).then((data) => {});
		form.phone.value = "";
		form.phone.dataset.current = "";
		form.name.value = "";
	}

	if (!name) {
		nameRow.classList.add("warning");
		warning.style.display = "inline-block";
	} else {
		nameRow.classList.remove("warning");
	}
	if (!re.test(phone)) {
		phoneRow.classList.add("warning");
		warning.style.display = "inline-block";
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
if (mainForm) {
	const warn = document.getElementById("mainform__warn");
	const phone = mainForm.phone;
	const name = mainForm.name;
	const details = mainForm.details;
	const re = /[0-9]{9}/;

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

	mainFormBtn.addEventListener("click", () => {
		console.log(name.value, re.test(phone.value), details.value);
		if (name.value && re.test(phone.value) && details.value) {
			phone.classList.remove("warning");
			name.classList.remove("warning");
			details.classList.remove("warning");
			success.style.display = "flex";
			warn.style.display = "none";
			let data = {
				name: name.value,
				phone: phone.value,
				details: details.value,
			};
			postData(
				`https://api.telegram.org/bot1730980288:AAGky2y9SAWak9-ygjfEKNnA5eroJQYIz_Q/sendMessage?chat_id=-1001244564444&parse_mode=html&text=${JSON.stringify(
					data
				)}`
			).then((data) => {});
			mainForm.phone.value = "";
			mainForm.phone.dataset.current = "";
			mainForm.name.value = "";
			mainForm.details.value = "";
		} else {
			warn.style.display = "block";
			if (!name.value) {
				name.classList.add("warning");
			} else name.classList.remove("warning");
			if (!re.test(phone.value)) {
				phone.classList.add("warning");
			} else phone.classList.remove("warning");
			if (!details.value) {
				details.classList.add("warning");
			} else details.classList.remove("warning");
		}
	});
}
