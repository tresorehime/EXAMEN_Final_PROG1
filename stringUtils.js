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
 function countWords (phrase ){
    let decomposition = phrase.split(' ')
    let counter = decomposition.length
    return ("voici le nombre de mot :" + counter)
 }
 
function EscapeHTML  (html){ 

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

export {slugify,truncate,EscapeHTML,counterWords};