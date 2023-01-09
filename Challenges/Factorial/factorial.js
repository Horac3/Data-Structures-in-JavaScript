// function factorial(n){
//     let num = 1;
//     for (let i = n; i >= 1 ; i--) {
//         num *= i
//     }
//     return num;
// }

factorial = (n) =>{
    let num = 1;
    for (let i = 2; i <= n; i++) {
        num *= i;
    }
    return num;
}

console.log(factorial(5))