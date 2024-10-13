export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  diasFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(',')
      .map(Number);
  }

  diaAtual() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  semanaAberta() {
    this.semanaAberta = this.diasSemana.indexOf(this.diaAgora) !== -1;
    this.horarioAberto = this.horarioAgora >= this.horarioSemana[0]
    && this.horarioAgora < this.horarioSemana[1];
    return this.semanaAberta && this.horarioAberto;
  }

  addClassAtivo() {
    if (this.semanaAberta()) this.funcionamento.classList.add(this.activeClass);
  }

  init() {
    if (this.funcionamento) {
      this.diasFuncionamento();
      this.diaAtual();
      this.addClassAtivo();
    }
    return this;
  }
}
