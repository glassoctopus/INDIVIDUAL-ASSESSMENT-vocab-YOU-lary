import domBuilder from '../pages/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
// import loginButton from '../components/loginButton';

const startApp = (user) => {
  domBuilder();
  navBar();
  domEvents(user);
  formEvents(user);
  // loginButton();
};

export default startApp;
