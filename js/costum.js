//JavaScript HTML5 Canvas example by Dan Gries, rectangleworld.com.
//The basic setup here, including the debugging code and window load listener, is copied from 'HTML5 Canvas' by Fulton & Fulton.
//Checking for browser compatibility is accomplished with the Modernizr JavaScript library.
//The latest version of the library is available at www.modernizr.com.

//The code below establishes a way to send debug messages to the browser JavaScript Console, 
//but in such a way as to ignore errors when the browser doesn't support the JavaScript Console.
//To log a messages to the console within this code, insert into the code:
//Debugger.log("my message");
window.addEventListener("load", windowLoadHandler, false);
var Debugger = function() { };
Debugger.log = function(message) {
	try {
		console.log(message);
	}
	catch (exception) {
		return;
	}
}
function windowLoadHandler() {
	
}
