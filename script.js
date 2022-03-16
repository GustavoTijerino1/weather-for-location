const cityName = document.getElementById('cityName')
const srchHistory = document.getElementById('srchHistory')


function handleFormSubmit(e) {
    e.preventDefault();
  
    // select form element by its `name` attribute and get its value
    var pickCity = document.querySelector('input[name=pick]').value
  
    // if there's nothing in the form entered, don't print to the page
    if (!pickCity) {
      console.log('No shopping item filled out in form!');
      return;
    }

    const hstrList = document.createElement('li')
    
  
    // print to the page
    // se.append('<li>' + pickCity + '</li>');
  
    // clear the form input element
    $('input[name="shopping-input"]').val('');
  }
  
  // Create a submit event listener on the form element
  shoppingFormEl.on('submit', handleFormSubmit);
  