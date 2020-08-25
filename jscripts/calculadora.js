var var1=''
var var2=''
var qualNr=1
var op=''
var result=0
var visivel=''

function escolheNr(btnNr){
	if (qualNr==1){
		var1=var1.concat(btnNr.toString())
		visivel=visivel.concat(btnNr.toString())
		mostraNr()
	}
	else{
		var2=var2.concat(btnNr.toString())
		visivel=visivel.concat(btnNr.toString())
		mostraNr()
	}
}

function juntaDecimas(){
	if (qualNr==1 && var1.indexOf('.')==-1){
		var1=var1.concat('.')
	}
	else if (var2.indexOf('.')==-1){
		var2=var2.concat('.')
	}
	if (visivel.indexOf('.')==-1){
		visivel=visivel.concat('.')	
		mostraNr()
	}	
}

function qualOp(btnOp){
	if (visivel!='' && visivel.indexOf('+')==-1 && visivel.indexOf('-')==-1 && visivel.indexOf('x')==-1 && visivel.indexOf(':')==-1){
		trocaOp()
		op=btnOp.toString()
		visivel=visivel.concat(op)
		mostraNr()
	}
}

function trocaOp(){
	if (qualNr==0)
		qualNr=1
	else qualNr=0
}

function calcula(){
	switch(op){
		case '+':{
			result=parseFloat(var1)+parseFloat(var2)
			break	
		}
		case '-':{
			result=parseFloat(var1)-parseFloat(var2)
			break
		}
		case 'x':{
			result=parseFloat(var1)*parseFloat(var2)
			break
		}
		case ':':{
			result=parseFloat(var1)/parseFloat(var2)
			break
		}
		default:{
			break
		}
	}
	if (isNaN(result))
		result=0
	visivel=result
	mostraNr()
	resetNr()
}

function apagaResultado(){
	resetNr()
	mostraNr()
}

function mostraNr(){
	document.getElementById("ecra").value=visivel
}

function resetNr(){
	var1=''
	var2=''
	qualNr=1
	op=''
	result=0
	visivel=''
}
