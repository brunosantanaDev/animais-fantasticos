export default function outSideClick(element, events, callbackRemove) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
       setTimeout(() => html.addEventListener(userEvent, handleOutSideClick));
    });
    element.setAttribute(outside, "");
  }
 
  function handleOutSideClick(event) {
    if (!element.contains(event.target)) {
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutSideClick);
      });
      element.removeAttribute(outside);
      callbackRemove();
    }
  }
}
