
/*  Gapful Numbers  */



const Gaful = (number) =>{
    let digits = `${number}`.split('').length

    if(digits < 3 || number < 0)
        return `invalid number`

    let original_number = number
    number = `${number}`.split('')
    let first = +(number.shift()+number.pop())
  

  console.log(first)

    if(original_number%(first))
        return false
    else
        return true
}

console.log(Gaful(192))


// const Gaful = (number) =>{
//     let digits = `${number}`.split('').length

//     if(digits < 3)
//         return `invalid number`

//     let original_number = number
//     number = `${number}`.split('')
//     let first = +(number.shift()+number.pop())
  

//   console.log(first)

//     if(original_number%(first))
//         return false
//     else
//         return true
// }

// console.log(Gaful(192))