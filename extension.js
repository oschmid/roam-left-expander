function removeHoverElement() {
  var leftExpander = document.querySelector('#left-expander');
  if (leftExpander != null) {
    leftExpander.parentNode.removeChild(leftExpander);
  }
}

function forwardMouseEnter() {
  const leftMenu = document.querySelector('.bp3-icon-menu');
  if (leftMenu) {
    leftMenu.dispatchEvent(new MouseEvent('mouseover', {'bubbles': true}));
  }
}

function addHoverElement() {
  // cleanup old versions of the element
  removeHoverElement();
  
  // create element
  var template = document.createElement('template');
  template.innerHTML = '<span id="left-expander" style="position:absolute;height:100%;width:1em;position:absolute"></span>';
  var leftExpander = template.content.firstChild;
  leftExpander.addEventListener('mouseenter', forwardMouseEnter);

  // insert element
  document.querySelector('.roam-main').parentElement.prepend(leftExpander);
}

export default {
  onload: addHoverElement,
  onunload: removeHoverElement
};
