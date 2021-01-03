/* Global Variables */

// Base URL and API Key for OpenWeatherMap API
const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=7df24cf86819600a46e06c0ae48b5484';

//Get the date
// I commented out the default date because it doesn't refresh in session - any reason for that?
// let d = new Date();
// let newDate = String((d.getMonth() + 1)).padStart(2, "0") + '/' + String(d.getDate()).padStart(2, "0") + '/' + d.getFullYear() + ' @ ' + String(d.getHours()).padStart(2, "0") + ':' + String(d.getMinutes()).padStart(2, "0");

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */

// get user input values from the forms
// add data to the POST request
// call updateUI to update client side content

function performAction(e) {
  e.preventDefault();
  const zipCode = document.getElementById('zip').value;
  const content = document.getElementById('feelings').value;

  getWeather(weatherURL, zipCode, apiKey)
    .then(function (clientData) {
      console.log(clientData);
      console.log(Date());
      postData('/add', { date: Date(), temp: clientData.main.temp, content })
    }).then(() => {
        updateUI();
      })
}

/* Function to GET Web API Data*/
// res equals the result of fetch function
// set clientData equal to the res of the fetch function
const getWeather = async (weatherURL, zipCode, apiKey) => {
  const res = await fetch(weatherURL + zipCode + apiKey);
  try {
    const clientData = await res.json();
    return clientData;
  } catch (error) {
    console.log("error", error);
  }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
  const req = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    body: JSON.stringify({
      date: data.date,
      temp: `${data.temp} K, ${(data.temp - 273.15).toFixed(2)} C, ${((data.temp - 273.15) * (9/5) + 32).toFixed(2)} F`,
      content: data.content
    })
  })
  try {
    const tempData = await req.json();
    return tempData;
  }
  catch (error) {
    console.log("error", error);
  }
};

// updates the new entry values into the browser according to elementID
const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const entryData = await request.json()
    document.getElementById('date').innerHTML = entryData.date;
    document.getElementById('temp').innerHTML = entryData.temp;
    document.getElementById('content').innerHTML = entryData.content;
  }
  catch (error) {
    console.log("error", error);
  }
};


