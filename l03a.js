
main()

for (i=0; i<10; i++) {
  console.log(i);
}


function main() {
  var x;
  x = 5;
  console.log("baz was called " + x)
}

function counter() {  
  var n = 0;  //calling context
  return function() {  
    n++;     
    return n;  
  }
}

function addByX(x) {  
  return function(y) {  
    return y + x;  
  }
}

