document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('[data-dropdown]');

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector('[data-dropdown-trigger]');
    const menu = dropdown.querySelector('[data-dropdown-menu]');

    if (!trigger || !menu) return;

    const close = () => dropdown.classList.remove('is-open');
    const open = () => dropdown.classList.add('is-open');
    const toggle = (force) => {
      const shouldOpen = typeof force === 'boolean' ? force : !dropdown.classList.contains('is-open');
      dropdown.classList.toggle('is-open', shouldOpen);
    };

    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggle();
    });

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        close();
      }
    });

    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) {
        close();
      }
    });

    dropdown.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        close();
        trigger.focus();
      }
    });
  });
});
