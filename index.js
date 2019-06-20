var keys = [];
var trigger = [56];
// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");
const ioHook = require('iohook');
ioHook.on("keypress", event => {
	console.log(event);
	if(event.ctrlKey){
		keys.push(event.keychar);
		//if(isEqual(keys, trigger)){  
		if(event.keychar == trigger[0]){  

			setTimeout(() => {//metemos un timeout para quitar las manos del control (esto es temporal)
				writePass();
				keys = [];
			}, 500);
		}
	}
	else{
		keys = [];
	}
	console.log(keys);
	console.log(event);
	// {keychar: 'f', keycode: 19, rawcode: 15, type: 'keypress'}
  });
  ioHook.start();
  
writePass = () => {
	let user = 'somebody once told me';
	writeString(user);
	password = 'the world is gonna roll me';
	robot.keyTap('tab');
	writeString(password);


}
writeString = (s) => {
	for (let caracter of s){
		robot.keyTap(caracter);
	}

}
doabarrelroll = () => {
// Speed up the mouse.
robot.setMouseDelay(1);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

for (var x = 0; x < width; x++)
{
	y = height * Math.sin((twoPI * x) / width) + height;
	robot.moveMouse(x, y);
}
}

isEqual = (array1, array2) =>{
	if(array1.length != array2.length){
		return false;
	}
	for (let i = 0; i < array1.length; i++){
		if(array1[i] != array2[i]){
			console.log('son diferentes?' , array1[i], array2[i]);
			return false;
		}
	}
	return true;
}