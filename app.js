const container = document.querySelector(".container");
const card = document.querySelector(".card");

// items to be animated
const united = document.querySelector('.united img');
const information = document.querySelector('.information h3');
const title = document.querySelector('.title');
const links = document.querySelector('.links');
const share = document.querySelector('.share button');

//Movement event
container.addEventListener('mousemove', function (e) {
//	console.log(e.pageX, e.pageY)
	let x_axis = (window.innerWidth / 2 - e.pageX) / 10;
	let y_axis = (window.innerHeight / 2  - e.pageX) / 10;
	card.style.transform = `rotateY(${x_axis}deg) rotateX${y_axis}deg)`;
});