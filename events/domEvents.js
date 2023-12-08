import addCardForm from '../components/addCardForm';
import updateCardForm from '../components/updateCardForm';
import { showCards } from '../pages/showCards';
import {
  getAllCards, getCards, deleteCard, getSingleCard
} from '../api/cardData';

const domEvents = (user) => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('click-me')) {
      console.warn('button clicked');
    }
  });

  document.querySelector('#card-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE CARD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey).then(() => {
          getCards(user).then(showCards);
        });
      }
    }
    // edit card entry
    if (e.target.id.includes('edit-card-btn')) {
      console.warn('should move to edit form element id ==> ', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => updateCardForm(cardObj));
    }
  });

  document.querySelector('#new-card').addEventListener('click', () => {
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
