// Global Variables
var date = document.getElementById('time')
let sbmtBttn = document.getElementById('sbmt')
var apiKey= 'aba392ccda7fe400f92ed7fab594a456';
let cast = document.getElementById('forecast')

date.innerText = moment().format('l');

var cityInArr= []

// Gives weather data
function getApi() {
  
  var requestUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=${pickCity.value}&units=imperial&appid=${apiKey}`;
  console.log(pickCity.value);
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // const uvI = data.uvi;
    // console.log(uvI);
    let {name} = data;
    let {icon, description} = data.weather[0];
    let {temp} = data.main;
    let {humidity} = data.main;
    let {speed} = data.wind;
    
    // Assigns Weather Data to elements
    document.querySelector('#currentCity').textContent = name;
    document.querySelector('.icon').src="https://openweathermap.org/img/wn/"+ icon + ".png"
    document.querySelector('.description').textContent.toUpperCase = description;
    document.querySelector('.temp').textContent= temp;
    document.querySelector('.humidity').textContent = humidity;
    document.querySelector('.wind').textContent = speed;
    
    console.log(data.coord.lon)
    console.log(data.coord.lat)
    
    // Creates the 5 day Forecast
    for(i=1; i<6; i++){
      
      let timeDisplay =  moment().add(i, 'days').format('l');;
      
      var dayCard = moment().add(i, 'days').format('l');  
      
      
      let card = document.createElement('div')
      card.classList.add( 'card','cardDiv')
      
      
      var dateCard = document.createElement('h3') 
      dateCard.textContent = timeDisplay;
      
      let symbol = document.createElement('img');
      symbol.src ="https://openweathermap.org/img/wn/"+ icon + ".png";
      
      
      let cardDetail =document.createElement('div')
      cardDetail.classList.add('cardStyle')  
      
      let unorderL = document.createElement('ul')
      
      let li1 = document.createElement('li')
      li1.textContent= `Temp: ${temp}   ℉`
      li1.classList.add('li-update')
      
      let li2 = document.createElement('li')
      li2.textContent= `Humidity: ${humidity}%`
      li2.classList.add('li-update')
      
      let li3 = document.createElement('li')
      li3.textContent= `Wind Speed: ${speed} MPH`
      li3.classList.add('li-update')
      
      // Appends all created elemets to the ForeCast Div
      unorderL.appendChild(li1)
      unorderL.appendChild(li2)
      unorderL.appendChild(li3)
      card.appendChild(unorderL)
      card.appendChild(symbol)
      card.appendChild(dateCard)
      card.appendChild(cardDetail)
      cast.appendChild(card)
    }
    
    
    
  });
  
  
};

// Resets for New Forecast
function reset(){
  cast.innerText = ''
}

// Creates a list for previous searches
var hstrList = document.createElement('li');

sbmtBttn.addEventListener('click', function(event) { 
  event.preventDefault();
  
  // Grabs user input and places it on the <li> element
  var pickCity = document.querySelector('#pickCity').value
  const srchHistory = document.getElementById('srchHistory')
  
  hstrList.textContent= pickCity;
  srchHistory.appendChild(hstrList);
  
  cityInArr.push(pickCity);
  // Saves history to localStorage
  localStorage.setItem("potato", JSON.stringify(cityInArr) || []);
  
  var getHistory = JSON.parse(localStorage.getItem("potato"));
  hstrList.textContent = getHistory;
  
  getApi();
        
  reset();
});

      