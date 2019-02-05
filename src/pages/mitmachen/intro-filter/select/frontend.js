let isOpen = false;

const toggleSelect = select => {
  select.classList.toggle('super-select--is-open', !isOpen);
  isOpen = !isOpen;
};

const init = select => {
  const canvas = select.querySelector('.js-super-select-canvas');

  canvas.addEventListener('click', event => {
    event.preventDefault();

    toggleSelect(select);
  });
};

export default init;
