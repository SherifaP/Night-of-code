// console.log("hello am here");

let number = 123;
// get a number 
// make the number digits a multiple 3
// split the new number into blocks 3
// name each block and attach its unit
// join every block name from first to last

  
    // make the number digits a multiple 3
    function makeNumberMultiple(number){
    // console.log(number)
    let digits = `${number}`.split('').length
    // console.log('<< Multiple is running >>')


    if(digits%3){
        // console.log('its not a multiple, fix it')
        return makeNumberMultiple(`0${number}`)
    }
    else{
        // console.log(' its a multiple, fixed!')
        return number;
    }

}
    // name each block and attach its unit
    function blockName(number){
    // console.log('<< Hello from the Namer >>')
    let name = ''
    number = `${number}`.split('')
    const N_Constants = {
  
        1:'one',
        01:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine',
        10:'ten',
        11:'eleven',
        12:'twelve',
        13:'thirteen',
        14:'fourteen',
        15:'fifteen',
        16:'sixteen',
        17:'seventeen',
        18:'eighteen',
        19:'nineteen',
        20:'twenty',
        30:'thirty',
        40:'fourty',
        50:'fifty',
        60:'sixty',
        70:'seventy',
        80:'eighty',
        90:'ninety'

    }
    
    if(number[0] !='0')
        name = N_Constants[number.shift()]+ " hundred and "
    else{
         number.shift()
        //  console.log('zero found and removed')
    }
       


    if(Object.keys(N_Constants).includes(number.join(''))){
        name = name + N_Constants[`${number.join('')}`]
    }else{

        if(number[0] !='0')
        name = name +  N_Constants[`${number.shift()}0`]+ " "
        else{
            number.shift()
            // console.log('zero found and removed')
        }


        if(number[0] !='0')
            name = name +  N_Constants[number.shift()]+ " "
        else{
            number.shift()
            // console.log('zero found and removed')
        }
       
    }

    return name;

}

function convertNumberToString(number){
    // console.log('<< Hola from the function >>')

    const units = {
        1: '',
        2:' Thousand ',
        3:' Million ',
        4:' Billion ',
        5:" Trillion ",
        6:' Quatrillion ',

    }
    /*Make numbers digits a multiple of 3 */
    number =  makeNumberMultiple(number)
   
    let digits = `${number}`.split('').length;
    let number_of_blocks = digits/3;
    let block_name = ""
    /* name each block and attach its unit */
    number = `${number}`.split('')

    for(let block = 0; block < number_of_blocks; block++){
        // console.log('<< hellloo >>')
        
         /* Split the new number into blocks of 3s */
        let block_number = number.splice(0,3)

        // name each block and attach its unit
        // join every block name from first to last
        if(block_number.join('') != 0)
        block_name = block_name +   blockName(block_number.join('')) + units[`${number_of_blocks - block}`] + " "
        
        // block_name =  block_name +  blockName(block_number)
        // console.log(block_number)
        // console.log(block_name)

       
    }

    console.log(block_name)



    


}

convertNumberToString(13000010)