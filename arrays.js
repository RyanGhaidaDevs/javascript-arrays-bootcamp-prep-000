var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

// should not modify original array
function addElementToBeginningOfArray (array, element ) {
 var newarray = [element, ...array]
  return newarray
}


// should modify original array
function destructivelyAddElementToBeginningOfArray (array,element) {
 // var array = array
 // var element = element
  var array2 = array.unshift(element)
  return array
}



//should not alter original array
function addElementToEndOfArray (array,element) {
 //var array = array
  var newarray = [...array, element]
  return newarray
}


//should alter original array
function destructivelyAddElementToEndOfArray (array, element) {

  var newarray = array.push(element)

  return newarray

}


function accessElementInArray (array) {

var index = array[1]

return index
}


//this function should be destructiive
function destructivelyRemoveElementFromBeginningOfArray(array) {



var newarray = array.shift()

return newarray

}

//this function should not mutate original array
function removeElementFromBeginningOfArray (array) {

  var newarray = array.slice(1)

  return newarray
}

//should mutate original
function destructivelyRemoveElementFromEndOfArray(array) {

  var newarray = array.pop()

  return newarray
}

//should not mutate original array
function removeElementFromEndOfArray(array) {

  var newarray = array.slice(0, array.length-1)

  return array
}
