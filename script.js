function rotateCube() {
	let rotateY = 0,
		rotateX = 0;
	document.addEventListener('keydown', function(e) {
		if (e.keyCode === 37) rotateY -= 4
		else if (e.keyCode === 38) rotateX += 4
		else if (e.keyCode === 39) rotateY += 4
		else if (e.keyCode === 40) rotateX -= 4

		document.querySelector('.cube').style.transform = `
		rotateY(${rotateY}deg) rotateX(${rotateX}deg)
		`
	})
}
rotateCube();
document.querySelector('.modal_controls button').addEventListener('click', ()=> {
	document.querySelector('.wrapper').style.display = 'block';
	document.querySelector('.modal').style.display = 'none';
})
