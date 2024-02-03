const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001;

app.use(cors())

app.get('/', (req, res) => {
    res.send({ a: 'Hello from Express!' });
});

app.get('/buy', async (req, res) => {
    const response = await fetch('https://api.smartsheet.com/2.0/sheets/4207564321410948', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer 8j4MNyQBnOuB0WWMhUM5dnm9sixNDWCVMhSuP',
            'Content-Type': 'application/json',
        },
    })
    const response2 = await response.json()
    res.send(response2)
})

app.get('/place', async (req, res) => {
    cuisine = "chinese";
    lat = 37.4352
    long = -122.9087
    price = ['PRICE_LEVEL_INEXPENSIVE'];
    distance = 10;

    API_KEY = "AIzaSyAbL8cx0NKLhR8RFnwmMLO8RhIbKL4EaOo";

    text_query = cuisine + "restaurant";

    const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': API_KEY,
            'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.priceLevel'
        },
        body: JSON.stringify({
            "textQuery": text_query,
            "includedType": "restaurant",
            "maxResultCount": 1,
            "openNow": true,
            'languageCode': 'en',
            'priceLevels': price,
            'locationBias': {
                "circle": {
                  "center": {
                    "latitude": lat,
                    "longitude": long
                  },
                  "radius": distance
                }
              }
        })
    })
    const data = await response.json()
    console.log(data)
    res.send(data)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});