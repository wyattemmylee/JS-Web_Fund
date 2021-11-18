for(i=0;i<=100;i++){
    var a = 0;
    if (i%5==0&&i%3==0){
        a = "FizzBuzz"
        console.log(a);
    }
    else if (i%5==0){
        a = "Buzz"
        console.log(a);
    }
    else if (i%3==0){
        a = "Fizz"
        console.log(a);
    }
    else {console.log(i);
    }
}