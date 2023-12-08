import {
  createCard, updateCard, getCards
} from '../api/cardData';
import { showCards } from '../pages/showCards';
import timeOfStamp from '../utils/timeOfStamp';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    const timeOfCreation = timeOfStamp();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A CARD
    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        tech: document.querySelector('#tech').value,
        timeStampSubmission: timeOfCreation,
        user_id: user.uid,
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
      console.warn('should have cleared the form');
    }

    // TODO: CLICK EVENT FOR EDITING A CARD
    if (e.target.id.includes('update-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        tech: document.querySelector('#tech').value,
        timeStampSubmission: timeOfCreation,
        user_id: user.uid,
        firebaseKey,
      };

      updateCard(payload).then(() => {
        getCards().then(showCards);
      });
    }
  });
};

export default formEvents;
