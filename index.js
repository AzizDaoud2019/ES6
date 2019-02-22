//------------Cours 1----------------//
//----------------------------------//
//1_variable  var ou let  et array et afficher par for ou foreach  ça depant de utilsation de var ou let
//comment afficher  array par ou let 
//const


//variables
var a="hello";
var fs1=[];
console.log(a);



//utiliser for parce que on utilise le var
var fs=[];

for(var i=0;i<10;i++)
{
	fs.push(function(){
		console.log(i);
	});
}

for(var i in fs)
{
	fs[i]();
}


//utiliser forEach parce que on utilise le let
var fs=[];

for(let i=0;i<10;i++)
{
	fs.push(function(){
		console.log(i);
	});
}



fs.forEach(function(item){

	item();
});


//Constant = on utiliser le constant si on affect une valeur une seul fois


const name="Aziz";
// name ="Hi";  n'affect pas d'autre 
