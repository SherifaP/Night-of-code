/*  Lap Numbers  */

const primeTest = (number) =>{
    let factors = []
    for(let x=1;x<=number ; x++)
        if(number%x ==0)
            factors.push(x)

        // console.log(factors)

    if(factors.length == 2 && factors.includes(1) && factors.includes(number))
        return true
    else
        return false
}

const LapNumber = (number) =>{
    let odd_factors = []
    let all_factors = []
    let lab_number_exist = false

    

    for(let i=2;i<number/2+1;i++){
        if(number%i == 0 && i%2 != 0 || i==2)
            odd_factors.push(i)
        if(number%i ==0){
            all_factors.push(i)
        }
    }

    all_factors.push(number)

    odd_factors.forEach(factor =>{
      
        if(primeTest(factor))
            if(all_factors.includes(Math.pow(factor,2)))
                lab_number_exist = true
    })

    console.log(lab_number_exist)
        

}

LapNumber(121)
