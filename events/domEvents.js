import addCardForm from '../components/addCardForm';
import { showCards } from '../pages/showCards';
import { getAllCards } from '../api/cardData';

const domEvents = (user) => {
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

  document.querySelector('#all-cards').addEventListener('click', () => {
    // const testArray = getAllCards(user);
    // const newArray = Object.entries(testArray);
    // console.warn(newArray);
    // showCards(testArray);
    getAllCards(user).then(showCards);
  });
};

export default domEvents;
