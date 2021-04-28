//Create variables for buttons

const submitButton = document.querySelector('#buttonSubmit')
const deleteButton = document.querySelector('#deleteSubmit')

//Add event listeners & post 
submitButton.addEventListener('click', )

//Post to a database




//Add event listener and deleteButton

//Delete from database



//Below is just an example of potential syntax that we could use. 
// document.getElementById("subButton").addEventListener("click", async (e) => {
//   const userReviews = parseInt(document.querySelector(".userRev").value);
//   // Judging by the filter in the findRest, this should be a boolean?
//   const userClose = document.querySelector(".userClose").value;

//   e.preventDefault();
//   console.log("click");
//   console.log(e.target.id);

//   try {
//     const restaurants = await findRest(userReviews, userClose);
//     // I think your issue is that restaurants is an empty array
//     console.log(restaurants)
//     restaurants.forEach(restaurant => {
//       console.log(`${restaurant.name} matches your search criterea and is located at ${restaurant.address}
//         To make a booking, please call ${restaurant.phone}`)
//     })
//   } catch (err) {
//     console.log(err)
//   }
// });