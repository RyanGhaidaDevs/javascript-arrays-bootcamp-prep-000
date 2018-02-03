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
 //
  array.upshift(element);
  
  return array //[4,1,2,3]

}

destructivelyAddElementToBeginningOfArray()


//should not alter original array
function addElementToEndOfArray (array,elelement) {

 var array = [1,2,3]
 var newarray = [...array, 4] //[1,2,3,4]
  return array
}

addElementToEndOfArray() //[1,2,3]

//should alter original array
function destructivelyAddElementToEndOfArray (array, element) {
var array = [1,2,3]
 var element = 4

  array.push(element)

  return array

}

destructivelyAddElementToEndOfArray()



function accessElementInArray (array) {
var array = [1,2,3]
var index = array[1]

return index
}

accessElementInArray()


//this function should eb destructiive
function destructivelyRemoveElementFromBeginningOfArray(array) {

var array = [1,2,3]

array.shift()

return array

}

destructivelyRemoveElementFromBeginningOfArray()


//this function should not mutate original array
function removeElementFromBeginningOfArray (array) {
  var array = [1,2,3]

  var newarray = array.slice(1)

  return array
}

removeElementFromBeginningOfArray()

//should mutate original
function destructivelyRemoveElementFromEndOfArray(array) {
  var array = [1,2,3]
  array.pop()

  return array
}

//should not mutate original array
function removeElementFromEndOfArray(array) {
  var array = [1,2,3]
  var newarray = array.slice(0, array.length-1)

  return array
}
