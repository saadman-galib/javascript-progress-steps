var progress = document.querySelector('#progress')
var prev = document.querySelector('#prev')
var next = document.querySelector('#next')
var circles = document.querySelectorAll('.circle')

var currentActive = 1;

next.addEventListener('click', () => {
	currentActive ++;
	// console.log(currentActive);
	if (currentActive > circles.length){
		currentActive = circles.length;
	}
	// console.log(currentActive)
	update()
})

prev.addEventListener('click', () => {
	currentActive --;
	// console.log(currentActive);
	if (currentActive < 1){
		currentActive = 1;
	}
	update()
})

function update(){
	circles.forEach(circle, index) ; {
		// console.log(circle);

		if(index < currentActive){
			circle.classlist.add('active')
		}
		else{
			circle.classlist.remove('active')
		}
	}
}