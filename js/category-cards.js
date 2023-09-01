
const loadCategoryCards = async(id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const categories = data.data;
    category = data.data;
    // console.log(data.data);
    displayCategoryCards((category))
}

const displayCategoryCards = (category) =>{

    const cardsContainer = document.getElementById('card-container');

    cardsContainer.textContent ='';

    if(category.length <= 0){
        cardsContainer.innerText = 'No data here'
    }
console.log(category.length);
    category.forEach(cat => {
        // console.log(typeof cat.others.views);

        const cardDiv = document.createElement('div');
        cardDiv.classList = `card  rounded-lg`;
        cardDiv.innerHTML = `
                <figure class="p-0"><img class="w-full
                h-[200px]" src=${cat.thumbnail} alt="Shoes" /></figure>
                <div class="card-body p-0 py-5">
                
                    <div class="flex items-start gap-3">
                        <img class="w-[40px] h-[40px] rounded-[50%]" src=${cat.authors[0].profile_picture} alt="">
                        <div>
                            <h2 class="card-title">${cat.authors[0].profile_name}</h2>
                            <div class="flex items-center my-3 gap-2">
                                <p class="custom-text-color">${cat.title}</p>
                                
                                <img class=${cat.authors[0].verified ? 'flex' : 'hidden'}  src="verify_tick.jpg" alt="">
                            </div>
                            <div class="card-actions justify-start">
                                <p class="custom-text-color">${cat.others.views} views</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
        
        `;

        cardsContainer.appendChild(cardDiv);
        
    });

}