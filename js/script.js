// This script is to do the filter on the search bar.

//Declare Variable
const input = document.querySelector('input[type="search"]');
const imageLinks = document.querySelectorAll('a');
// Add event listener on 'keyup' so when a keyboard is released, it triggers the event
input.addEventListener('keyup', () => {
  // Changing the input value to lower case
  let userInput = input.value.toLowerCase();

  // Loop through the photo captions
  for (let i = 0; i < imageLinks.length; i++) {
    //Changing the photo captions to lowercase //
    let caption = imageLinks[i].getAttribute('data-title').toLowerCase();

     // checking the insert value is included in the caption
     if (caption.includes(userInput)) {
       // Show the value which are included, the data-lightbox without will remove jQuery feature
       imageLinks[i].setAttribute('data-lightbox', 'gallery');
       imageLinks[i].style.display = 'block';
     }

     // Hiding all the others which are not included in the input
     else {
       imageLinks[i].setAttribute('data-lightbox', '');
       imageLinks[i].style.display = 'none';
     }
  }
});

//Reset the list again when you press the X button in the search button
input.addEventListener('search', () => {
  //Check to make sure the user had click the X button in the search bar
  if ( '' === input.value) {
    //Resetting the HTML with loops
    for (let i = 0; i < imageLinks.length; i++){
      imageLinks[i].setAttribute('data-lightbox', 'gallery');
      imageLinks[i].style.display = 'block';
    }
  }
});
