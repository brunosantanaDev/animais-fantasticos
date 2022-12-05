export default function initAnimaNumero() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animaNumeros(){
    numeros.forEach((numero) => {
      const total = +numero.innerText
      const incremento = Number.parseInt(total / 100)
      let start = 0
              
      const timer = setInterval(() => {
        start = start + incremento
        numero.innerText = start
        if(start > total){
          numero.innerText = total
          clearInterval(timer)
        }
      }, 30 * Math.random())
    })
  }

  function handleMutation(mutation){
    if(mutation[0].target.classList.contains('ativo')){
      observer.disconnect()
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector(".numeros")
  const observer = new MutationObserver(handleMutation)
  observer.observe(observerTarget, {attributes: true})
}



