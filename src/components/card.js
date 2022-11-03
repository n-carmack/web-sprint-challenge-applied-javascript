const Card = (article) => {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card');

  const headlineSection = document.createElement('div');
  headlineSection.classList.add('headline');
  headlineSection.textContent = article['headline'];

  const authorSection = document.createElement('div');
  authorSection.classList.add('author');

  const imgContainerSection = document.createElement('div');
  imgContainerSection.classList.add('img-container');

  const imgItem = document.createElement('img');
  imgItem.src = article['authorPhoto'];

  const authorNameSection = document.createElement('span');
  authorNameSection.textContent = article['authorName'];

  imgContainerSection.appendChild(imgItem);
  authorSection.appendChild(imgContainerSection);
  authorSection.appendChild(authorNameSection);
  cardWrapper.appendChild(headlineSection);
  cardWrapper.appendChild(authorSection);

return cardWrapper;


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

import axios from "axios";

const cardAppender = (selector) => {
 let articleListing =['bootstrap', 'javascript', 'jquery', 'node', 'technology'];
  axios.get('http://localhost:5001/api/articles')
    .then(resp=> {
      for(let i = 0; i< articleListing.length; i++){
        let previousCount = i;
        for(let i = 0; i< resp.data['articles'][articleListing[previousCount]].length; i++){
          document.querySelector(selector).appendChild(Card(resp.data['articles'][articleListing[previousCount]][i]))
        }
      }
    })
    .catch(err => console.error(err));

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
