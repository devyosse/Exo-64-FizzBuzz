for (var i = 1; i <= 100; i++){

     let multiple = 3;
     let miltiple = 5;

if (i % multiple && i % miltiple === 0){
    console.log("FizzBuzz");
}

else if (i % multiple === 0){
    console.log("Fizz");
}


else if (i % miltiple === 0){
    console.log("Buzz");
}

else{
    console.log(i);
}

}