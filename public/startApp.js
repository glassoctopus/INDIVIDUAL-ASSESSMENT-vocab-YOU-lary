import domBuilder from '../pages/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
// import loginButton from '../components/loginButton';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
  formEvents();
  // loginButton();
};

export default startApp;
