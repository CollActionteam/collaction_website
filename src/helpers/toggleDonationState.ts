export function toggleActiveState(element: HTMLInputElement): void {
  // get the parent element of the clicked element
  const parentElement = element.parentElement as HTMLDivElement;

  // convert the html collection of children to array of Nodes
  const children = Array.from(parentElement.children);

  // loop through children, add active class to active element
  //remove active class from other element that has active class
  for (const child of children) {
    if (child.id === element.id) {
      child.classList.add('active-donation');
      continue;
    } else {
      if (child.classList.contains('active-donation')) {
        child.classList.remove('active-donation');
      }
      continue;
    }
  }
}
