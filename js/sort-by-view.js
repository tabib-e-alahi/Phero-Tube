const handleSortByView =() => {
  const cardsContainer = document.getElementById('card-container');
  const cardElements = [...cardsContainer.getElementsByClassName('my-card-sort')];
  if(cardElements.length <= 0){
    return;
  }

  cardElements.sort((a, b) => {
      const views_A = parseInt(a.querySelector('.views').textContent);
      const views_B = parseInt(b.querySelector('.views').textContent);
      
      return views_B-views_A;
  });

  
  cardsContainer.innerHTML = '';
  cardElements.forEach(cardElement => {
      cardsContainer.appendChild(cardElement);
  });
}


