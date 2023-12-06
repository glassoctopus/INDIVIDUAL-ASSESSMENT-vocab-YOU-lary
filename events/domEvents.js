import addCardForm from '../components/addCardForm';

const domEvents = () => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('click-me')) {
      console.warn('button clicked');
    }
  });

  document.querySelector('#new-card').addEventListener('click', () => {
    // console.warn('form needs to be loading');
    addCardForm();
  });
};

export default domEvents;
