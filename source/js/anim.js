const boxes = document.getElementsByClassName("why__item");
const text = document.getElementById("why__text");
function isInViewport(elm) {
	const rect = elm.getBoundingClientRect();
	const viewHeight = Math.max(
		document.documentElement.clientHeight,
		window.innerHeight
	);
	return rect.bottom - viewHeight;
}
document.addEventListener(
	"scroll",
	function () {
		const position = isInViewport(text);
		if (position <= -400) {
			for (let box of boxes) {
				box.classList.remove("why__item_animated");
			}
		} else {
			for (let box of boxes) {
				box.classList.add("why__item_animated");
			}
		}
	},
	{
		passive: true,
	}
);
