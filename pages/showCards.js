import clearDom from '../utils/clearDom';
import renderToDOM from './renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#card-container', domString);
};

const showCards = (array) => {
  clearDom();
  let domString = '';
  if (array.length > 0) {
    array.forEach((item) => {
      let selectPrivate = '';
      if (item.private === true) {
        selectPrivate = '(private)';
      }
      domString += `
      <div class="card" style="width: 210px; height: 420px;>
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h5 class="card-title">${item.tech}</h5>
            <p class="card-text bold" style="overflow:auto;">${item.definition}</p>
            <hr>
            <p>${selectPrivate}</p>
            <a id="edit-card-btn--${item.firebaseKey}" class="">Edit Card</a>
            <a id="delete-card-btn--${item.firebaseKey}" class="">Delete Card</a>
            <p class="card-text bold">${item.timeStampSubmission}</p>
        </div>
      </div>`;
    });
  } else {
    domString = '<h2>No Cards to be displayed</h2>';
  }
  renderToDOM('#card-container', domString);
};

export { showCards, emptyCards };
