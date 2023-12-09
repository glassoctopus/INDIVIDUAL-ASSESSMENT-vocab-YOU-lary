const Tech1 = document.createElement('BUTTON');
const Tech2 = document.createElement('BUTTON');
const Tech3 = document.createElement('BUTTON');
const Tech4 = document.createElement('BUTTON');

Tech1.innerHTML = 'Tech1';
Tech1.id = 'Tech1';
Tech1.className = 'btn btn-outline-light';
Tech1.type = 'button';

Tech2.innerHTML = 'Tech2';
Tech2.id = 'Tech2';
Tech2.className = 'btn btn-outline-light';
Tech2.type = 'button';

Tech3.innerHTML = 'Tech3';
Tech3.id = 'Tech2';
Tech3.className = 'btn btn-outline-light';
Tech3.type = 'button';

Tech4.innerHTML = 'Tech4';
Tech4.id = 'Tech4';
Tech4.className = 'btn btn-outline-light';
Tech4.type = 'button';

const navbuttons = [Tech1, Tech2, Tech3, Tech4];
const renderTechSortButtons = () => {
  navbuttons.forEach((element) => {
    document.querySelector('#button-container').appendChild(element);
  });
};

export default renderTechSortButtons;
