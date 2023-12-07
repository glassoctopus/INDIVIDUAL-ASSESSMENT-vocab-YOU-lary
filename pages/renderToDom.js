const renderToDOM = (divId, content) => {
  console.warn(document.querySelector(divId));
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};

export default renderToDOM;
