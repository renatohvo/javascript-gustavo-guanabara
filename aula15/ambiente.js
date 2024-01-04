let valores = [5, 8, 4]

for(let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

valores[3] = 6
valores.push(7)
valores.sort()

for(let pos in valores) {
  console.log(valores[pos])
}

let pos = valores.indexOf(5)
console.log(`O valor 5 está na posição ${pos}`)