function isPrime(n){
    if (n < 2){
        return false
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if( n % i === 0){
            return false
        }
    }
    return true
}

function DNAStrand(dna){
    //your code here
    let dnaStrand = '';
    for (let i = 0; i < dna.length; i++) {
        
    } 
     
}

console.log(DNAStrand("ATTGC"))

