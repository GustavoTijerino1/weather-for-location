var date = document.getElementById('time')
var hstrList = document.createElement('li');
var cityInArr= []
let sbmtBttn = document.getElementById('sbmt')
var apiKey= 'aba392ccda7fe400f92ed7fab594a456';
let cast = document.getElementById('forecast')

date.innerText = moment().format('l');


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
    
    
    document.querySelector('#currentCity').textContent = name;
      document.querySelector('.icon').src="https://openweathermap.org/img/wn/"+ icon + ".png"
      document.querySelector('.description').textContent.toUpperCase = description;
      document.querySelector('.temp').textContent= temp;
      document.querySelector('.humidity').textContent = humidity;
      document.querySelector('.wind').textContent = speed;
      
      console.log(data.coord.lon)
      console.log(data.coord.lat)

      // let lon = data.coord.lon
      // let lat = data.coord.lat
      // let secondApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
      
      // fetch(queryURL2)
      // .then(function (response) {
      //     return response.json();
      //   })
      //   .then(function (data) {
      //       console.log(data)
      
      for(i=1; i<6; i++){
        
          let timeDisplay =  moment().add(i, 'days').format('l');;

            var dayCard = moment().add(i, 'days').format('l');  //gives us next 5 days
            console.log(dayCard)
           
            let card = document.createElement('div')
            card.classList.add( 'card','cardDiv')


            var dateCard = document.createElement('h3') 
            dateCard.textContent = timeDisplay;
           

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


            unorderL.appendChild(li1)
            unorderL.appendChild(li2)
            unorderL.appendChild(li3)
            card.appendChild(unorderL)
            card.appendChild(dateCard)
            card.appendChild(cardDetail)
            cast.appendChild(card)
         }

    
          
        });
      
      
    };
  
  






sbmtBttn.addEventListener('click', function handleFormSubmit(event) { 

  event.preventDefault();
  
  var pickCity = document.getElementsByName('pick')[0].value
  getApi();
    
    const srchHistory = document.getElementById('srchHistory')

    hstrList.textContent= pickCity;
   
    srchHistory.appendChild(hstrList);

    cityInArr.push(pickCity);

    localStorage.setItem("potato", JSON.stringify(cityInArr) || []);
    
    var getHistory = JSON.parse(localStorage.getItem("potato"));
    hstrList.textContent = getHistory;
    
  });
  
  
  