export function toggleBtnState(
  element: HTMLButtonElement,
  activeStyles: string[],
  inactiveStyles: string[]
): void {
  if (element.textContent === 'Recurring donation') {
    element.classList.add(...activeStyles);
    element.nextElementSibling?.classList.remove(...activeStyles);
  } else {
    element.classList.remove(...inactiveStyles);
    element.classList.add(...activeStyles);
    element.previousElementSibling?.classList.remove(...activeStyles);
  }
}
