import domBuilder from '../pages/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/events';
// import loginButton from '../components/loginButton';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
  // loginButton();
};

export default startApp;
