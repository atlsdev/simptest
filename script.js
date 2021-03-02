const qs = s => document.querySelector(s);

document.body.style.display = "block";

var points = 0;
var thumbsUpArr = ["https://i.giphy.com/media/3M7pmsN2jp9lAV9QTG/200w.webp", "https://i.giphy.com/media/uiMIJMFYgRaAz5Pcb7/giphy.webp"];
var comfortArr = ["https://i.giphy.com/media/2UIcmK4pn7rYNLRboG/200w.webp", "https://i.giphy.com/media/3LxT7zGwvzg1LRlYwY/200.webp"];

document.forms.main.onsubmit = e => {
	e.preventDefault();

	window.lastEvent = e;

	if(e.target[0].checked) points += 5;
	if(e.target[3].checked) points += 10;
	if(e.target[5].checked) points += 15;
	if(e.target[7].checked) points += 20;
	if(e.target[9].checked) points += 25;

	if(points > 50) {
		qs("main").innerHTML = `<h3>You are most likely a SIMP!</h3><p>But don't worry, this is nothing to be ashamed of. Just live your life one step at a time, and keep breathing.</p>`;
	} else {
		qs("main").innerHTML = `<h3>You are most likely NOT a SIMP!</h3><p>Good man.</p><img src="${thumbsUpArr[Math.floor(Math.random() * thumbsUpArr.length)]}" />`;
	}
}