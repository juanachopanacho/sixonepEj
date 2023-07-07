let body = document.querySelector("body");

const visual = document.querySelector('#visual')
visual.addEventListener('change', () =>{
    let ValorOption = visual.value
    console.log("el verdadero valor de vici es " + ValorOption)


    switch (ValorOption) {
        case 'Light':
            body.style.backgroundColor="white"
            body.style.color="#181717"
            console.log("se seteo light " + ValorOption)
          break;
        case 'Dark':
            body.style.backgroundColor="#181717"
            body.style.color="white"
            console.log("se seteo dark " + ValorOption)
          break;
      }

} )