import clearDom from '../utils/clearDom';
import renderToDOM from './renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#card-container', domString);
};

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>';
  renderToDOM('#button-container', btnString);

  const expand = Object.keys(array).map((key) => [key, array[key]]);
  console.warn(expand);

  let domString = '';
  expand.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
          <h5 class="card-title">${item.tech}</h5>
            <p class="card-text bold">${item.description}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-card-btn--${item.firebaseKey}"></i>
            <i id="edit-card-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-card-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
            <p class="card-text bold">${item.timeStampSubmission}</p>
        </div>
      </div>`;
  });
  console.warn(domString);
  renderToDOM('#card-container', domString);
};

export { showCards, emptyCards };
