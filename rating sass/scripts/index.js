let selectedOption = 0;

function validate() {
  const button = document.querySelector('#submit-button')

}

function start() {
  const options = document.querySelectorAll('.options button')

  options.forEach(option => {
    option.addEventListener('click', () => {
      selectedOption = parseInt(option.textContent)
      console.log(selectedOption)
    })
  })

}

start()