
input_json_file = {};
  
const cuisine = findMostCommonCuisine(input_json_file);
const price = 0;
const distance = 0;








  // Function to find the most common cuisine
function findMostCommonCuisine(data) {
    const cuisineCounts = data.people.reduce((acc, person) => {
      const { cuisine } = person;
      acc[cuisine] = (acc[cuisine] || 0) + 1;
      return acc;
    }, {});
  
    // Convert the counts object into an array of [cuisine, count] pairs and find the most common
    const mostCommonCuisine = Object.entries(cuisineCounts).reduce((acc, entry) => entry[1] > acc[1] ? entry : acc);
  
    return mostCommonCuisine[0]; // Return the cuisine name
  }




