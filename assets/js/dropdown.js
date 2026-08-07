document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('[data-dropdown]');

  const closeDropdown = (dropdown) => {
    dropdown.classList.remove('is-open');
    dropdown.querySelector('[data-dropdown-trigger]')?.setAttribute('aria-expanded', 'false');
  };

  const closeOtherDropdowns = (currentDropdown) => {
    dropdowns.forEach((dropdown) => {
      if (dropdown !== currentDropdown) closeDropdown(dropdown);
    });
  };

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector('[data-dropdown-trigger]');
    const menu = dropdown.querySelector('[data-dropdown-menu]');

    if (!trigger || !menu) return;

    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');

    const close = () => closeDropdown(dropdown);
    const toggle = (force) => {
      const shouldOpen = typeof force === 'boolean' ? force : !dropdown.classList.contains('is-open');
      if (shouldOpen) closeOtherDropdowns(dropdown);
      dropdown.classList.toggle('is-open', shouldOpen);
      trigger.setAttribute('aria-expanded', String(shouldOpen));
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
