import { createCard, updateCard, getCards } from '../api/cardData';
import { showCards } from '../pages/showCards';
import timeOfStamp from '../utils/timeOfStamp';

const formEvents = (user) => {
  document.querySelector('#app').addEventListener('submit', (e) => {
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
      createCard(payload).then();

      createCard(payload).then(({ name }) => {
        console.warn(name);
        const patchPayload = { firebaseKey: name };
        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      // getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj));
      console.warn(firebaseKey);
    }
  });
};

export default formEvents;
