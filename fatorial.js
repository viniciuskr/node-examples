const fatorial = (num)=> {
	if (num == 0 ) {
    	  return 1
	}
	
	return num * fatorial (num-1)
}

// maneiras de exportar os métodos:

//exports.fatorial = fatorial //mesmo nome
module.exports = {
    calculaFatorial : fatorial //com alias
}