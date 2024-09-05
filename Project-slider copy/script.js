let count = 1;
document.getElementById('radio1').checked = true;

setInterval( function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count>4){
        count =1;
    }

    document.getElementById('radio' + count).checked = true;

}


function SpaceToUnderscore(phrase){
    var phrase
    let myArray = phrase.split(" ")
    let phraseWithUnderscore = myArray.join("_")
    return phraseWithUnderscore
}
/* console.log(SpaceToUnderscore("sei la testando")) */

/* let phrase = "Eu quero amor!"
console.log(phrase.includes("amor")) */

/* let myArray = new Array('a', 'b', 'c')
console.log(myArray) */

/* console.log(['a', 'b', 'c'].length) */

/* let word = 'manupulação'
console.log(Array.from(word)) */

let techs = ["html", "css", "js"]

//add item ao fim
techs.push('nodejs')

//add item no começo
techs.unshift('sql')

//remover do fim
//techs.pop()

//remover do começo
//techs.shift()

//pegar alguns elementos
//console.log(techs.slice(1, 3))

//remover alguns itens
//techs.splice(1, 1)

//encontrar a posiçao do element no array
/* let index = techs.indexOf('js')
techs.splice(index, 1)


console.log(techs)

let number = 23.321
console.log(number.toFixed(1)) */

/* function sayMyName(name = ''){
    if(name === ''){
        throw 'Nome é obrigatorio'
    }

    console.log(name)
}

try{
    sayMyName('ze')
} catch(e){
    console.log(e)
}

console.log('apos o try/catch')
 */