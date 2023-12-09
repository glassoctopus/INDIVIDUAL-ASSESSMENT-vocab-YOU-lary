import {
  createCard, updateCard, getCards
} from '../api/cardData';
import { showCards } from '../pages/showCards';
import timeOfStamp from '../utils/timeOfStamp';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    const timeOfCreation = timeOfStamp();
    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        tech: document.querySelector('#tech').value,
        timeStampSubmission: timeOfCreation,
        private: document.querySelector('#private').checked,
        user_id: user.uid,
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
    }

    if (e.target.id.includes('update-card-')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        tech: document.querySelector('#tech').value,
        timeStampSubmission: timeOfCreation,
        user_id: user.uid,
        private: document.querySelector('#private').checked,
        firebaseKey,
      };

      updateCard(payload).then(() => {
        getCards(user.uid).then(showCards);
      });
    }
  });
};

export default formEvents;
