
const button = document.querySelector(".button");
const recipeText = document.querySelector(".recipe");
button.addEventListener("click",()=>{
    const recipe =recipeText.value;
    fetch(`https://api.edamam.com/search?q=${recipe}&app_id=76e268d1&app_key=5bc5c2506d79110b59a7d56c511f24c3&from=0&to=10&calories=591-722&health=alcohol-free`)
    .then(response=>{
        console.log(response);
        if(!response.ok){
          throw Error("Error");
        }
          return response.json();
        })
        .then(data =>{
            console.log(data.hits);
            const html = data.hits.map(food =>{
              return`
              
                <div class="food-recipe">
                  <div class="food-img">
                    <img src=${food.recipe.image} alt="" />
                  </div>
                  <div class="food-details">
                    <h3> ${food.recipe.label}</h3>
                    <p>Ingredients include ${food.recipe.ingredientLines}</p>
                    <a href="${food.recipe.url}" target="_blank">Full Recipe Here... </a>   
                  </div>    
              </div>`;
            }).join("");
            console.log(html);
            document.querySelector(".food-class").insertAdjacentHTML("afterbegin", html);
      })
    .catch(err => console.log(err))
})
// function redirect(){
//   document.getElementById("#search").addEventListener("click",()=>{
//     if(recipeText.value === ""){
//       console.log("empty value")
//     }else{
//       console.log(recipeText.value)
//       // window.location.href="filter.html"
//     }
//   })
// }
