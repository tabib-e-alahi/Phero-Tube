const loadCategoryButtons = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categories = data.data;
    console.log(data.data);
    displayCategoryButtons(categories);
}

const displayCategoryButtons = categories =>{
    const categoryButtonsContainer = document.getElementById('category-buttons-container');
    
    categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.classList.add('btn')
        categoryButton.innerText = category.category;
        categoryButton.addEventListener("click", function () {
            loadCategoryCards(category.category_id);
            //  categoryButton.classList.add('custom-color')
        });
        
        categoryButtonsContainer.appendChild(categoryButton);
    } )
}

loadCategoryButtons()