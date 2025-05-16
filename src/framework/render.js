const RenderPosition = {    
    WATCHED: 'watched',
    UNWACHED: 'unwatched',
    FAVOURITES: 'favourites',
  };
  
  function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
    return newElement.firstElementChild;
  }
  
  function render(component, container, place = RenderPosition.BEFOREEND) {
    container.insertAdjacentElement(place, component.getElement());
  }
  
  export {RenderPosition, createElement, render};