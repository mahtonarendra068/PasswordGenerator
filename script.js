let slider = document.getElementById('slider')
let sliderVal = document.getElementById('sliderVal')
const passBox = document.getElementById('passBox')
const lowercase = document.getElementById('lowercase')
const uppercase = document.getElementById('uppercase')
const digits = document.getElementById('digits')
const Special = document.getElementById('Special')
const GenerateBtn = document.getElementById('GenerateBtn')
const copy = document.getElementById('copy')
const done = document.getElementById('done')


// code for slider value ;
sliderVal.textContent = slider.value ;
slider.addEventListener('input' ,() =>{

    sliderVal.textContent = slider.value;
})

GenerateBtn.addEventListener('click' , () =>{

    passBox.value=generatePassward();
})

let uppercaseChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseChar ="abcdefghijklmnopqurstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^^&*()";


function generatePassward(){

    let genPassword ="";
    let allChar = "";
    
    allChar += lowercase.checked ? lowercaseChar :"";
    allChar += uppercase.checked ? uppercaseChar :"";
    allChar += digits.checked ? allNumbers :"";
    allChar += Special.checked ? allSymbols :"";

    // console.log(allChar)

    if(allChar == "" || allChar.length == 0 ){
        return genPassword;
    }

    let i = 1;
    while( i <= slider.value){
        genPassword += allChar.charAt(Math.floor(Math.random() * allChar.length ));
        i++;
    }


    // let digit = allNumbers.charAt(Math.floor(Math.random()*allNumbers.length));
    // let symbols = allSymbols.charAt(Math.floor(Math.random() *allSymbols.length));
    // let A = uppercaseChar.charAt(Math.floor(Math.random()*uppercaseChar.length));
    // let b = lowercaseChar.charAt(Math.floor(Math.random()*lowercaseChar.length));

    // genPassword = digit+symbols+A+b + symbols +b +A;
    return genPassword;
}

copy.addEventListener('click' ,() =>{

    if(passBox.value != "" || passBox.value.length >= 1 ){
        // navigator.clipboard.writeText(passBox.value);
        copy.innerText ="check";
        copy.title ="Password copied !"

        setTimeout(() =>{

            copy.innerHTML = "content_copy";
            copy.title ="";
        } ,2000 )

    }

})