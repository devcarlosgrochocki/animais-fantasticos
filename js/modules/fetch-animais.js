import AnimaNumeros from './anima-numeros.js';

export default class FetchAnimais {
  constructor(url, gridSelector) {
    this.url = url;
    this.numerosGrid = document.querySelector(gridSelector);
  }

  static createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h2>${animal.specie}</h2><span data-numero>${animal.total}</span>`;
    return div;
  }

  async fetchAnimais() {
    try {
      const animaisResponse = await fetch(this.url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach((animal) => {
        const divAnimal = this.constructor.createAnimal(animal);
        this.numerosGrid.appendChild(divAnimal);
      });

      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    } catch (error) {
      console.error('Erro ao buscar os animais:', error);
    }
  }

  init() {
    if (this.numerosGrid) {
      this.fetchAnimais();
    } else {
      console.error('Grid não encontrada para exibir os números dos animais');
    }
  }
}
