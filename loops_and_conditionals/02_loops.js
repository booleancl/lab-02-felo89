// Ejemplo con For loop
function replaceVowels(text, replace) {
  var result = ''
  var vowels = 'aeiou'
  var letter

  for(var i = 0; i < text.length; i++) {
    letter = text[i]
    isVowel = vowels.indexOf(letter.toLowerCase()) !== -1
    
    result += isVowel ? replace : letter
  }

  return result
}

// Ejempĺo con While y do While
function isPalindrome(text) {
  var auxText = ''
  
  var index = text.length - 1
  while(index >= 0) {
    auxText += text.charAt(index)
    index--
  }

  // var index = text.length
  // do {
  //   index--
  //   auxText += text.charAt(index)
  // } while(index >= 0)

  // ¿Todo bien aquí?
  return auxText.toLocaleLowerCase() === text.toLocaleLowerCase()
}

module.exports = {
  replaceVowels: replaceVowels,
  isPalindrome: isPalindrome
}
