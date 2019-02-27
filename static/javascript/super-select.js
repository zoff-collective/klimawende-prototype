const OPEN_CLASSNAME = 'super-select--is-open';

const isOpen = select => select.classList.contains(OPEN_CLASSNAME);

const toggleSelect = select => {
  const selectIsOpen = isOpen(select);

  const closeSelectOnClickOutside = event => {
    const clickInside = select.contains(event.target);

    if (!clickInside) {
      select.classList.remove(OPEN_CLASSNAME);

      // remove original event listener
      document.removeEventListener('click', closeSelectOnClickOutside);
    }
  };

  // close select when click is outside of the element
  if (!selectIsOpen) {
    document.addEventListener('click', closeSelectOnClickOutside);
  }

  select.classList.toggle(OPEN_CLASSNAME, !selectIsOpen);
};

const init = select => {
  const canvas = select.querySelector('.js-super-select-canvas');

  canvas.addEventListener('click', event => {
    event.preventDefault();

    toggleSelect(select);
  });
};

export default init;
