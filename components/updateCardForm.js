import clearDom from '../utils/clearDom';
import renderToDOM from '../pages/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const updateCardForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form style="width: 500px;margin: auto; width: 50%;" id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="title">Card Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Card Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="tech">Card Title</label>
        <input type="text" class="form-control" id="tech" aria-describedby="cardTech" placeholder="Enter Card Language or Tech" value="${obj.tech || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Description</label>
        <textarea class="form-control" placeholder="Card Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary" id="update-card-btn">Submit Card
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  // selectUser(`${obj.user_id || ''}`);
};

export default updateCardForm;
