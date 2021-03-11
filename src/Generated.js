import { View } from './View.js';

const Generated = { 
  valueRange: 5,
  range: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  hashPassword: "",

  init() {
    Generated.showRange()

    const button = document.querySelector('#button');
    button.addEventListener('click', () => {
      Generated.generated();
    })
  },

  showRange() {
    const value = document.querySelector('#inputNumber');
    value.addEventListener('change', (e) => {
      Generated.valueRange = e.target.value
        View.render({
          text: Generated.valueRange,
          id: "numberRange"
      })
    })
  },

  generated() {
    const value = document.querySelector('#inputNumber');
      value.addEventListener('change', (e) => {
        Generated.valueRange = e.target.value
      })

      for (let i = 0; i < Generated.valueRange; i++) {
        let hash = Math.floor(Math.random() * Generated.range.length);
        Generated.hashPassword += Generated.range.charAt(hash);
      } 

      View.render({ 
        text: Generated.hashPassword,
        id: "password"
      })
      
      Generated.hashPassword = '';
  }
}

export { Generated };