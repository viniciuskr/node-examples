const fat = require('./fatorial').calculaFatorial

console.log('n-fatorial')

//console.log(`Executando script a partir do dir ${process.cwd()}`)

process.on('exit', () =>{
	console.log('script está prestes a terminar')

} )



const num = parseInt(process.argv[2])
console.log(`o fatorial de ${num} é igual a ${fat(num)}`)

//console.log(process.argv)

