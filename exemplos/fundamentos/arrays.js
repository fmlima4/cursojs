const xcccc = [7.7, 8.9, 6.3, 9.2]
console.log(xcccc[0], xcccc[3])
console.log(xcccc[4])

xcccc[4] = 10
console.log(xcccc)
console.log(xcccc.length)

xcccc.push({id: 3}, false, null, 'teste')
console.log(xcccc)

console.log(xcccc.pop())
delete xcccc[0]
console.log(xcccc)

console.log(typeof xcccc)