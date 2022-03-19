// − 273.15) × 9/5 + 32 temp
//  get items from the objects



var hstrList = document.createElement('li');

var searchedCitys= []
let sbmtBttn = document.getElementById('sbmt')
var apiKey= 'aba392ccda7fe400f92ed7fab594a456';

//  'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={apiKey}'


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
      const {name} = data;
      const {icon, description} = data.weather[0];
      const {temp} = data.main;
      const {humidity} = data.main;
      const {speed} = data.wind;
      // console.log(name,icon, description,temp, humidity,speed);
      
      // console.log(newTemp);
      
      document.querySelector('#currentCity').textContent = name;
      document.querySelector('.icon').src="https://openweathermap.org/img/wn/"+ icon + ".png"
      document.querySelector('.description').textContent.toUpperCase = description;
      document.querySelector('.temp').textContent= temp;
      document.querySelector('.humidity').textContent = humidity;
      document.querySelector('.wind').textContent = speed;

      
      // data.day.forEach(element => {
        
      // });
      
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
  