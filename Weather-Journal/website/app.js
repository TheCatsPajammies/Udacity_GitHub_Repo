/* Global Variables */
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// API url and key for openweathermap.org
// Complete call format is going to be (weatherURL + zipCode + apiKey).
// zipCode variable is set in the GET request for weather.

const weatherURL = `http://api.openweathermap.org/data/2.5/weather?zip=`;
const apiKey = ',us&appid=7df24cf86819600a46e06c0ae48b5484';

document.getElementById('generate').addEventListener('click', apiCall);

function apiCall(e) {
    const zipCode = document.getElementById('zip').value;
    getAPI(weatherURL, zipCode, apiKey);
};

const getAPI = async (weatherURL, zipCode, apiKey) => {
    const res = await fetch(weatherURL + zipCode + apiKey)
    try {
        const data = await res.json();
        console.log(data);
        console.log(newDate, d);
        return data;
    }   
    catch(error) {
        console.log(`error ${weatherURL}${zipCode}${apiKey}`, error);
    }
};


const postData = async ( url = '', data = {})=>{
    console.log(data);
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
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
    }
};




