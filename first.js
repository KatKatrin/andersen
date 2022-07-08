//1

function firstTask(){
  let a = prompt('Enter first number');
  const b = +prompt('Enter second number');

  if(b >= 2 && b <= 36 && !isNaN(a) && a !== '' ){
    a = +a;
    console.log(a.toString(b))
  } else {
    console.log('incorrect input')
  }
}

//2

function secondTask(){
  let a = prompt('Enter first number');

  if( a === '' || isNaN(a) ){
    console.log('incorrect input')
  } else {
    const b = +prompt('Enter second number');

    if(b >= 2 && b <= 36){
      console.log(`${+a + b}, ${a / b}`)
    } else {
      console.log('incorrect input')
    }
  }
}










