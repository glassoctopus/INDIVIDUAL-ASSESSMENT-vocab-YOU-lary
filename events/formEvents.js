const formEvents = (/* user */) => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.preventDefault();
    console.warn('OMG  this is drving me crazy!!!');
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A CARD
    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#title').value,
        Definition: document.querySelector('#definition').value,
        Tech: document.querySelector('#tech').value,
        TimeStampSubmission: document.querySelector('#timeStamp').value,
        user_ID: document.querySelector('#author_id').value,
      };
      console.warn(payload);

      // createCard(payload).then(({ name }) => {
      //   const patchPayload = { firebaseKey: name };
      //   updateCard(patchPayload).then(() => {
      //     getCards(user.uid).then(showCards);
      //   });
      // });
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      // getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
      console.warn(firebaseKey);
    }
  });
};

export default formEvents;
