// this internal function adds the active class to element
function toggleActive(element: HTMLButtonElement): void {
  element.classList.add('active-btn');
  element.classList.remove('inactive-btn');
}

// this internal function adds the inactive class to element
function toggleInactive(element: HTMLButtonElement): void {
  element.classList.remove('active-btn');
  element.classList.add('inactive-btn');
}

// this exported function toggles active and inactive btn state
export function toggleBtnState(element: HTMLButtonElement): void {
  if (
    element.textContent === 'Recurring donation' ||
    element.textContent === 'Herhalende donatie'
  ) {
    toggleActive(element);
    toggleInactive(element.nextElementSibling as HTMLButtonElement);
  } else {
    toggleActive(element);
    toggleInactive(element.previousElementSibling as HTMLButtonElement);
  }
}
