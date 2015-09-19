/*
	Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Boolean Objects

*/

function boo(bool) {

  var x = new Boolean(bool);
  //So this creates a new Contructor for Boolean. When the x is used inside of a conditional statement, x default to TRUE when you pass a value that is not UNDEFINED or NULL.

  if ( x && ( bool===true || bool===false ) ) {
  //So this conditional passes if the value is not NULL or UNDEFINED. And if the values are true or false, which are 2 only values of the boolean primitive.
    return true;
  } else {
    return false;
  }

}

console.log("hello");
