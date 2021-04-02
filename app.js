import get from './utils/getElement.js';
import showUser from './utils/showUser.js';
const btn = get('.btn');

window.addEventListener('DOMContentLoaded', function () {
  showUser();
});
btn.addEventListener('click', async () => {
  showUser();
});
