
const loadCategoryCards = async(id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    
    category = data.data;
    // console.log(data.data);
    displayCategoryCards((category))
}

const displayCategoryCards = (category) =>{
    

    const cardsContainer = document.getElementById('card-container');

    cardsContainer.textContent ='';

    if(category.length <= 0){
        
        cardsContainer.innerHTML = `
           <div class="w-full col-span-1 md:col-span-2 lg:col-span-4 mt-10 md:mt-16 lg:mt-24" >
                <div class="hero w-11/12 mx-auto ">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <img class="w-1/4 md:w-1/3 mx-auto mb-4" src="Icon.png" alt="" />
                            <h1 class=" text-2xl md:text-4xl font-bold">Oops!! Sorry, There is no content here</h1>
                        </div>
                    </div>
                </div>
           </div>
                                    `;
    }
// console.log(category.length);
    category.forEach(cat => {
    // console.log(cat);

    const postedArray = getPostedTime(cat.others.posted_date);
        
const postedDate = `${postedArray[0]}hrs ${postedArray[1]}mins ago`;  

        const cardDiv = document.createElement('div');
        cardDiv.classList = `card  rounded-lg`;
        cardDiv.innerHTML = `
                <figure class="p-0 relative">
                    <img class="w-full h-[200px]" src=${cat.thumbnail} alt="Shoes" />
                    <p class="absolute right-4 bottom-4 text-white bg-[#171717] rounded p-1 ">${postedArray ? postedDate : ''}</p>
                </figure>
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

const displayInitialCategory = () =>{
    loadCategoryCards(1000)
}


// get post time =================
const  getPostedTime = (time) =>{

const parsedTime = parseFloat(time);
if(isNaN(parsedTime)){
    return '';
}
const hour = Math.floor(parsedTime / 3600);
const rem = parsedTime % 3600;
const min = Math.floor(rem / 60);

return [hour,min];
}


displayInitialCategory();