const picture = document.querySelector(".profilePicture");
const THRESHOLD = 15;

function handleHover(e) {
	const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;

    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);


    const string = 'perspective(500px) scale(1.1) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';

    picture.style.transform = string


}

function resetStyles(e) {
	picture.style.transform =
		`perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

picture.addEventListener("mousemove", handleHover);
picture.addEventListener("mouseleave", resetStyles);
