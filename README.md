# kristc.github.io
Elowen's story game.

The Reading garden.

Reading in stream helps a small plant grow. You have to consistently to keep it growing. If you stop it wilts and is sad. 
Once the flowers grow up you can name them and place them in a garden.
If you don't read regularly they flowers in the garden die.
Later you can read for other 'things you can add to your garden'.

Want to give extra points for tricky words.

Dictation is a nightmare so I am going add some options for if we click on the words:
1) pronounce
2) skip
3) learn -- where learn will allow me to update the homophones manually for the words that the dictation struggles with.


---

Might use this: https://codepen.io/soju22/details/XGLZLp  for the flowers.


---

Ok got into the situation where the speech API can't really handle english homophones, especially when reading a single word.
So it looks like I will need to handle this manually :(
This website was helpful: https://onlineteachersuk.com/english-homophones/
Althought terribly formatted but I managed to use the console to extract words.

Using the following code:
```
// Inject jquery
var jq = document.createElement('script');
jq.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

// Extract homophones:
homophones = new Array();
$('ol').find('li').find('b').each(function(){homophones.push($(this).text().split(',').map(s => s.trim().toLowerCase()));});
console.log(JSON.stringify(homophones));
```
