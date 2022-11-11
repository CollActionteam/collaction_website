// this internal function adds the active class to element
function toggleActive(
  element: HTMLButtonElement,
  activeStyles: string[],
  inactiveStyles: string[]
): void {
  element.classList.add(...activeStyles);
  element.classList.remove(...inactiveStyles);
}

// this internal function adds the inactive class to element
function toggleInactive(
  element: HTMLButtonElement,
  activeStyles: string[],
  inactiveStyles: string[]
): void {
  element.classList.remove(...activeStyles);
  element.classList.add(...inactiveStyles);
}

// this exported function toggles active and inactive btn state
export function toggleBtnState(
  element: HTMLButtonElement,
  activeStyles: string[],
  inactiveStyles: string[]
): void {
  if (element.textContent === 'Recurring donation') {
    toggleActive(element, activeStyles, inactiveStyles);
    toggleInactive(
      element.nextElementSibling as HTMLButtonElement,
      activeStyles,
      inactiveStyles
    );
  } else {
    toggleActive(element, activeStyles, inactiveStyles);
    toggleInactive(
      element.previousElementSibling as HTMLButtonElement,
      activeStyles,
      inactiveStyles
    );
  }
}
