const OPEN_CLASSNAME = 'super-select--is-open';

const isOpen = select => select.classList.contains(OPEN_CLASSNAME);

const toggleSelect = select => {
  select.classList.toggle(OPEN_CLASSNAME, !isOpen(select));
};

const init = select => {
  const canvas = select.querySelector('.js-super-select-canvas');

  canvas.addEventListener('click', event => {
    event.preventDefault();

    toggleSelect(select);
  });
};

export default init;
