const toggleMenu = navigation => {
  navigation.classList.toggle('navigation--is-open');
};

const buildButton = (toggle, callback) => {
  const button = document.createElement('button');

  button.type = 'button';
  button.classList.add('navigation__toggle');
  button.innerHTML = toggle.innerHTML;

  button.addEventListener('click', event => {
    event.preventDefault();
    callback();
  });

  return button;
};

const init = el => {
  if (!el) {
    return;
  }

  const toggle = el.querySelector('.js-navigation-toggle');
  const button = buildButton(toggle, () => {
    toggleMenu(el);
  });

  toggle.parentNode.replaceChild(button, toggle);
};

export default init;
