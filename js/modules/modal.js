export default class Modal {
  constructor(abreModal, fechaModal, containerModal) {
    this.abreModal = document.querySelector(abreModal);
    this.fechaModal = document.querySelector(fechaModal);
    this.containerModal = document.querySelector(containerModal);

    //fazer bind para fazer referencia ao objeto da clase
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(e) {
    if (this.containerModal === e.target) this.toggleModal(e);
  }

  addModalEvents() {
    this.abreModal.addEventListener('click', this.eventToggleModal);
    this.fechaModal.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.abreModal && this.fechaModal && this.containerModal) {
      this.addModalEvents();
    }
    return this
  }
}
