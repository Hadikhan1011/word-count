function countWords(sentence) {
    
    sentence = sentence.trim();

    let wordCount = 0;
    let inWord = false; 

   
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        
        if (char !== ' ') {
            if (!inWord) {
                
                inWord = true;
                wordCount++;
            }
        } else {
           
            inWord = false;
        }
    }

    return wordCount;
}


const input = prompt("Enter a sentence:");
const output = countWords(input);
alert(`The number of words is: ${output}`);

