var numone = document.getElementById("ff");
var numtwo = document.getElementById("sf");
var addsum = document.getElementById("addsum");

numone.addEventListener("input", add);
numtwo.addEventListener("input", add);

function add(){
	var one = parseFloat(numone.value) || 0;
	var two = parseFloat(numtwo.value) || 0;
	var sum = one + two;
	addsum.innerHTML = "Your sum is:" + sum;
}