const clearDom = () => {
  console.warn(document.querySelector('#main-container')); // .innerHTML = '';
  console.warn(document.querySelector('#button-container')); // .innerHTML = '';
  console.warn(document.querySelector('#form-container')); // .innerHTML = '';
  console.warn(document.querySelector('#card-container')); // .innerHTML = '';
};

export default clearDom;
