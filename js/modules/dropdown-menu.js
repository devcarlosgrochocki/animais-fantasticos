import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdown, events) {
    this.dropdownMenus = document.querySelectorAll(dropdown);
    // define touchstart e clica como argumento padrão de events
    // caso usuario nao defina
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }

    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdown e adiciona
  // A função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => element.classList.remove(this.activeClass));
  }

  init() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }
}
