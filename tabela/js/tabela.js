'use strict';

var meals = [
    {
        name: "Broccoli",
        nbOfCalories: 100,
        isTasty: false,
        imgSrc: "https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
    },
    {
        name: "Spaghetti",
        nbOfCalories: 800,
        isTasty: true,
        imgSrc: "https://static.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg"
    },
    {
        name: "Chicken",
        nbOfCalories: 1000,
        isTasty: true,
        imgSrc: "https://static.pexels.com/photos/106343/pexels-photo-106343.jpeg"
    },
    {
        name: "Sausages",
        nbOfCalories: 700,
        isTasty: true,
        imgSrc: "https://static.pexels.com/photos/84267/meat-fridge-food-sausage-84267.jpeg"
    },
    {
        name: "Oatmeals",
        nbOfCalories: 500,
        isTasty: true,
        imgSrc: "https://static.pexels.com/photos/90894/pexels-photo-90894.jpeg"
    }
]

function createRow(meal, table) {
        var row = document.createElement("tr");
        var firstTd = document.createElement("td");
        var secTd = document.createElement("td");
        var thirdTd = document.createElement("td");
        var fourthTd = document.createElement("td");
        
        firstTd.innerText = meal.name;
        secTd.innerText = meal.nbOfCalories;
        
        if (meal.isTasty === true) {
            thirdTd.innerText = "tak";
        } else {
            thirdTd.innerText = "nie";
        };
        var image = document.createElement("img");
        image.src = meal.imgSrc;
        
        fourthTd.appendChild(image);
        row.appendChild(firstTd);
        row.appendChild(secTd);
        row.appendChild(thirdTd);
        row.appendChild(fourthTd);
        
        
        table.appendChild(row);
    
}

function createTable() {
    
    var newTable = document.querySelector("#meals-table");
    
    for(var i=0; i<meals.length; i++) {
        createRow(meals[i], newTable);
    }
    
}

createTable();