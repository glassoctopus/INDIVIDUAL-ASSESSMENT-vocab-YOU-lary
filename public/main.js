// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Vocab-YOU-lary</h1>
    <small>Open your dev tools</small><br />
    <button class="btn btn-danger" id="click-me">Click ME!</button><br />
    <hr />
  `;
  document
    .querySelector('#click-me')
    .addEventListener('click', () => ViewDirectorBasedOnUserAuthStatus());
  // max debug
  document.addEventListener('click', (e) => {
    console.warn(e.target.id);
  });
};

init();
