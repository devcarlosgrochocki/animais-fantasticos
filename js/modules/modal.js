export default function initModal() {
  const abreModal = document.querySelector("[data-modal='abrir']");
  const fechaModal = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle('ativo');
  }
  function cliqueForaModal(e) {
    if (this === e.target) toggleModal(e);
  }

  if (abreModal && fechaModal && containerModal) {
    abreModal.addEventListener('click', toggleModal);
    fechaModal.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
