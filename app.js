var too = [2, 5, 11, 255, 233, 10, 55];
console.log(too);
console.log(too[0]); 
console.log(too.length); 
console.log(too[too.length - 1]); 
too[0] = "text";
console.log(too);
for (var i = 0; i <= too.length - 1; i++) {
    console.log(too[i]);
}
var number = [1, 2, 3, 4, 5];
for (var i = 0; i <= number.length - 1; i++) {
    console.log(number[0] + number[number.length - 1]);
}
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var niilber = 0, vrjver = 1;
for (var i = 0; i < num.length - 1; i++) {
    niilber = niilber + num[i];
    vrjver = vrjver * num[i];
}
console.log(vrjver);
var colors = ['grey', 'green', 'blue', 'red', 'purple'];
var body = document.getElementsByTagName('body')[0];
var up;
var autoBtn = document.querySelector('.autoBtn')
var stopBtn = document.querySelector('.stopBtn')
var color = document.querySelector('.color')
console.log(body);
var i=-1;
function changeColor(){
	i++;
	body.style.backgroundColor=colors[i];
	if(i==4){
		i=-1
	}
	color.innerText = colors[i];
}
function Change(){
	if(i<0){
		i=colors.length;
	}
	i--
	body.style.backgroundColor=colors[i];
	
}
// setTimeout --> yamar neg kod heden secondiin daraa ajilahiig tohiruulna
function hello(){
	console.log('hello');
}
setTimeout(hello,3000)

function auto(){
	i++;
	body.style.backgroundColor=colors[i];
	if(colors.length-1 <= i){
		i=-1
	};
	up = setTimeout(auto,1000)
	autoBtn.disabled = true;
}
function stop(){
	clearTimeout(up)
	if(autoBtn.disabled = true){
		autoBtn.disabled = false;
	}
}