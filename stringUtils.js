

function slugify (str) { 
    return str
        .toLowerCase()
        .normalize('NFD') 
        .replace(/[\u0300-\u036f]/g, '') 
        .replace(/[.]/g,'')
        .split('') 
        .map(character => /[a-z0-9]/.test(character) ? character : '-')
        .join('')
        .replace(/-+/g, '-') 
        .replace(/^-|-$/g, '')
}

console.log(slugify('Hello World'))
console.log(slugify("Node.js en 2026"))
console.log(slugify("Les secrets des ESM !")) 
console.log(slugify("L'efficacité algorithmique")) 

function truncate (text,maxlength) {
    if (typeof text !='string') {
        return console.log("ceci n est pas un string")
    }
    let textTruncate =""
    if (text.length <= maxlength ){ 
          textTruncate = text 
        
    }
    if (text.length > maxlength ){
    for (let index = 0; index < text.length; index++) {
        textTruncate = textTruncate + text[index]
        if (index >= maxlength){
            if(!/[a-z0-9']/.test(text[index+1])){
                 return textTruncate + ("..."); 
                
            }  
            else {continue}         
        }      
    }
    
    }
    return textTruncate
}
console.log(truncate('j ai marre ',20))

function counterWords (phrase ){
    let decomposition = phrase.split(' ')
    let counter = decomposition.length
    return ("voici le nombre de mot :" + counter)
 }
 console.log(counterWords("j en ai rien a faire"))

 function EscapeHTML  (html){ 
//     & à remplacer par  &amp;
// < à remplacer par &lt;
// > à remplacer par &gt;
// " à remplacer par &quot;
// ' à remplacer par &#39;
    let segmentation = html.split('')
    let transcription =""
    for (let index = 0; index < html.length; index++) {
        
        switch (html[index]) {
            case "&": transcription = transcription + "&amp;"
                break; 
            case "<" : transcription = transcription + "&lt;"  
                break; 
            case ">" : transcription = transcription + "&gt;" 
                break; 
            case '"' : transcription = transcription + "&quot;" 
                break; 
            case "'" : transcription = transcription + "&#39;" 
                break; 
            default: transcription += html[index] ;
                
        }       
    }
    return transcription
 }
 console.log(EscapeHTML('Il a dit "bonjour"'))