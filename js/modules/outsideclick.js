export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      console.log('evento ocorreu');
      element.removeAttribute(outside);
      events.forEach((ev) => html.removeEventListener(ev, handleOutsideClick));
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((ev) => setTimeout(() => html.addEventListener(ev, handleOutsideClick)));
    element.setAttribute(outside, '');
  }
}
