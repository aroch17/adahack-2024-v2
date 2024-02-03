cuisine = "chinese";
distance = 10;

API_KEY = "AIzaSyAbL8cx0NKLhR8RFnwmMLO8RhIbKL4EaOo";

text_query = cuisine + "restaurant Edinburgh";

export async function getPlace() {
    const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': API_KEY,
        },
        body: {
            "textQuery": text_query,
            "includedType": "restaurant",
            "maxResultCount": 1,
            "openNow": true,
            "rankPreference": RATING
        }
    })
    const data = await res.json()
    console.log(data)
}


// curl - X POST - d '{
// "textQuery" : text_query,
//     "includedType" : "restaurant",
//         "maxResultCount" : 1,
//             "openNow" : true,
//                 "priceLevels" : price,
//                     "rankPreference" : RATING
// }' \
// -H 'Content - Type: application / json' -H 'X - Goog - Api - Key: API_KEY' \
// -H 'X - Goog - FieldMask: places.displayName, places.formattedAddress, places.priceLevel, places.rating' \
// 'https://places.googleapis.com/v1/places:searchText'
