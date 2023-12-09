import domBuilder from '../pages/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import renderTechSortButtons from '../components/sortButtons';
// import loginButton from '../components/loginButton';

const startApp = (user) => {
  domBuilder();
  navBar();
  domEvents(user);
  formEvents(user);
  renderTechSortButtons();
  // loginButton();
};

export default startApp;
