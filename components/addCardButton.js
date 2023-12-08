import renderToDOM from '../pages/renderToDom';

const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn" button type="text">Add A Card</button>';
renderToDOM('#button-container', btnString);

export default btnString;
