 //A function that multiplication table of any number from 1 to 10
 function multiplicationTable(num){
    console.log(`Multiplication table of ${num} is:`);
    for(var i = 1 ; i<=10 ; i++){
        console.log(`${num} x ${i} = ${num*i}`); // here, num as (num)  x iteration as i & procuct as (num*i)
    }
}
multiplicationTable(7);
multiplicationTable(10);

// use more of this function in console.
