import renderToDOM from './renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="button-container"></div>
    <div id="form-container"></div>
    <div id="card-container" style="display: inline-flex;"></div>
    </div>
  `;

  renderToDOM('#app', domString);
};

export default domBuilder;
