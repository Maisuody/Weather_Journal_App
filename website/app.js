/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let celcus = '&units=metric';
let apiKey = '&appid=8d0d8e292d5c908de43c1cdae15f86ab';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const new_place =  document.getElementById('zip').value;
const new_feel =  document.getElementById('feelings').value;
console.log(newDate);
get_zip(baseURL,new_place, apiKey)
.then(function(data){
    // Add data
    //console.log(data);
    postData('http://localhost:8080/addWeatherData', {date:newDate, temp: data.main.temp, user_response: new_feel} )
  
  .then(
    updateUI()
)
})
}


//GET DATA

const get_zip = async (baseURL, place, key)=>{

  const res = await fetch(baseURL+place+celcus+key)
  console.log(res);
  try {

    const data = await res.json();
    console.log(data);
    // console.log('PPPPPPP');

    return data;
  }  
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

//asyncPOsT

const postData = async ( url = '', data = {})=>{
  
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
      //	console.log('MMMMMMMMMMM');
        const newData = await response.json();

    //    console.log(newData, 'mmmmmmmmmm');
        return newData;
      }
      catch(error) {
      console.log("error", error);
      }
  }

 
//update UI
const updateUI = async () => {
  const request = await fetch('http://localhost:8080/all');
  try{
    const allData = await request.json();
 //   console.log('TTTTTTTTTT');
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.user_response;

  }
  catch(error){
    console.log("error", error);
  }
}




