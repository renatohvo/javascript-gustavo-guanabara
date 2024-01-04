function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if(fano.value.length == 0 || Number(fano.value) <= 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente.')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    if(fsex[0].checked) {
      genero = 'Homem'
      if(idade >= 0 && idade < 10) {
        res.innerHTML = `Detectamos ${genero} Criança com ${idade} anos.`
      } else if (idade < 21) {
        res.innerHTML = `Detectamos ${genero} Jovem com ${idade} anos.`
      } else if (idade < 60) {
        res.innerHTML = `Detectamos ${genero} Adulto com ${idade} anos.`
      } else {
        res.innerHTML = `Detectamos ${genero} Idoso com ${idade} anos.`
      }
    } else if(fsex[1].checked) {
      genero = 'Mulher'
      if(idade >= 0 && idade < 10) {
        res.innerHTML = `Detectamos ${genero} Criança com ${idade} anos.`
      } else if (idade < 21) {
        res.innerHTML = `Detectamos ${genero} Jovem com ${idade} anos.`
      } else if (idade < 60) {
        res.innerHTML = `Detectamos ${genero} Adulta com ${idade} anos.`
      } else {
        res.innerHTML = `Detectamos ${genero} Idosa com ${idade} anos.`
      }
    }
    res.style.textAlign = 'center'
    // res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
  }
}