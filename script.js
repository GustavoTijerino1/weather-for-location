// − 273.15) × 9/5 + 32 temp
//  get items from the objects



var hstrList = document.createElement('li');

var searchedCitys= []
let sbmtBttn = document.getElementById('sbmt')
var apiKey= 'aba392ccda7fe400f92ed7fab594a456';

//  'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={apiKey}'


function getApi() {
  
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=${pickCity.value}&appid=${apiKey}`;
console.log(pickCity.value);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      
    });
}



sbmtBttn.addEventListener('click', function handleFormSubmit(event) { 

  event.preventDefault();
  
  var pickCity = document.getElementsByName('pick')[0].value
  getApi();
    
    const srchHistory = document.getElementById('srchHistory')

    hstrList.textContent= pickCity;
   
    srchHistory.appendChild(hstrList);

    searchedCitys.push(pickCity);

    localStorage.setItem("potato", JSON.stringify(searchedCitys) || []);
    
    
    grabMyList()
    
  });
  
  
  function grabMyList(event) {
    // event.preventDefault()

    var getHistory = JSON.parse(localStorage.getItem("potato"));
    console.log(getHistory);
    hstrList.textContent = getHistory;
   
  }
  