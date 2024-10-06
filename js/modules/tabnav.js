export default class TabNav {
  constructor(listMenu, listaContent) {
    this.tabMenu = document.querySelectorAll(listMenu);
    this.tabContent = document.querySelectorAll(listaContent);
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(section.dataset.anime);
    });
    this.tabContent[index].classList.add(this.tabContent[index].dataset.anime);
  }

  addEventTab() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addEventTab();
    }
  }
}
