const loadCategoryButtons = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categories = data.data;
    // console.log(data.data);
    displayCategoryButtons(categories);
}

const displayCategoryButtons = categories =>{
    const categoryButtonsContainer = document.getElementById('category-buttons-container');
    
    categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.classList=`btn active-btn`
        categoryButton.innerText = category.category;
        categoryButton.addEventListener("click", function () {

            const categoryBtns = document.querySelectorAll('.active-btn');
            

            categoryBtns.forEach(button => {
                button.classList.remove('custom-color','text-white')
            })
            categoryButton.classList.add('custom-color','text-white')

            
            loadCategoryCards(category.category_id);
        });
        
        categoryButtonsContainer.appendChild(categoryButton);
        
    } )
}

loadCategoryButtons()