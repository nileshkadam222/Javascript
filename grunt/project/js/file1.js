function palindrome(text) {
    // Split, reverse and join string to get reversed text
    var reversedText  = text.toLowerCase()
                        .split('').reverse().join('');
    
    
    return text === reversedText;
    
    
    }