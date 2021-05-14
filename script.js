
function timer ()  {
  const msg = document.getElementById('msg'); // Chamada da id para a mensagem
  let img = document.getElementById('image'); // CHamda da id para a imagem
  let welcome = document.getElementById('welcome') // chamada da id para a mensagem
  let date = new Date() // Necessário para configurar o horario
  const time = new Date().toLocaleTimeString()
  let hours = date.getHours();
  msg.innerHTML = `Agora são ${time}.`
  if (hours >= 0 && hours < 12) {
    // Bom Dia !
    img.src = 'fotomanha.PNG'
    document.body.style.background = '#e2cd9f'
    welcome.innerHTML = 'Bom Dia !'
  } else if (hours >= 12 && hours <= 18) {
    // Boa Tarde !
    img.src = 'fototarde.PNG'
    document.body.style.background = '#b9846f'
    welcome.innerHTML = 'Boa tarde !'
  } else {
    // Boa Noite !
    img.src = 'fotonoite.PNG'
    document.body.style.background = '#515154'
    welcome.innerHTML = 'Boa Noite !'
  }}
setInterval(timer, 1000);




