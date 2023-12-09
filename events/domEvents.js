import addCardForm from '../components/addCardForm';
import updateCardForm from '../components/updateCardForm';
import { showCards } from '../pages/showCards';
import {
  getAllCards, getCards, deleteCard, getSingleCard, getPrivateCards
} from '../api/cardData';

const domEvents = (user) => {
  document.querySelector('#card-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey).then(() => {
          getCards(user).then(showCards);
        });
      }
    }
    // edit card entry
    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => updateCardForm(cardObj));
    }
  });

  document.querySelector('#new-card').addEventListener('click', () => {
    addCardForm();
  });

  document.querySelector('#button-container').addEventListener('click', (e) => {
    if (e.target.id.includes('Tech1')) {
      getPrivateCards().then(showCards);
    }
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
