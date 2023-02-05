const axios = require('axios');

async function fetchData(){
    const response = await axios.get(' http://www.omdbapi.com/?t=harry&apikey=13ae622a');
    console.log(response.data);
}

fetchData();
