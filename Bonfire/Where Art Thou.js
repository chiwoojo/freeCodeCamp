function where(array1, array2) {
  var arr = [];
  // What's in a name?

  //for loop Array 'Collection'
    //for-in loop every property in Array Collection's Objects
      //if the Obj collection has property of equal to index 0 at Object.keys(sourcearray)
        //then push the object into the arr

  var propOfSource = Object.keys(array2).toString();
  //console.log("Prop of Source is " + propOfSource);
  //console.log(typeof propOfSource);
  //creates an array of properties in 'source'

  for(i=0; i < array1.length; i++) {

    //console.log("i= " + i);
    //console.log("has property of array 2? " + array1[i].hasOwnProperty(propOfSource));
    //console.log( "array2[propOfSource] is " + array2 [ propOfSource ]  );
    //console.log( "array1[ i ][ propOfSource ] is " + array1 [ i ] [ propOfSource ] );
    //console.log(typeof collection[i][propOfSource].toString())


    //checking what the IF statement evaluates to
    //console.log("If statement true? " + ( array2[propOfSource] === array1[i][propOfSource]) );


    if ( ( array1[i].hasOwnProperty ( propOfSource ) )
    &&
    ( array2[propOfSource] === array1[i][propOfSource] ) )

    {
      arr.push(array1[i]);
    }

  }

  return arr;
}


where([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }],

{ 'a': 1 });
