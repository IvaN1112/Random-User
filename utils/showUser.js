import get from './getElement.js';
import getUser from './getUser.js';
const img = get('.user-img');
const userIntro = get('.user-title');
const userName = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];
const URL = 'https://randomuser.me/api/';

const showUser = async () => {
  const person = await getUser(URL);
  img.src = person.image;
  userIntro.innerHTML = `My Name Is`;
  userName.innerHTML = person.name;
  btns.forEach((btn) => btn.classList.remove('active'));
  btns[0].classList.add('active');
  btns.forEach((btn) =>
    btn.addEventListener('click', () => {
      const label = btn.dataset.label;
      const labelData = person[label];
      userIntro.innerHTML = `My ${label} is`;
      userName.innerHTML = `${labelData}`;
      btns.forEach((btn) => btn.classList.remove('active'));
      btn.classList.add('active');
    })
  );
};

export default showUser;
