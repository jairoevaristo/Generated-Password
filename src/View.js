const View = {
  render({ text, id }) {
    const viewPassword = document.querySelector(`#${id}`);

    viewPassword.innerHTML = 
    `
      <span class='result'>${text}</span>
    `
  }
}

export { View };