const domEvents = () => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('click-me')) {
      console.warn('button clicked');
    }
  });
};

export default domEvents;
