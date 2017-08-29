/*
For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#).

For example:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.
*/
function parseMolecule(formula) {
  formula = formula.split("");
  var res = new Object();
  for(var i=1;i<formula.length;i++){
    if(/[0-9]/.test(formula[i-1])&&/[0-9]/.test(formula[i])){
  	  formula[i-1]=formula[i-1]+formula[i];
  	  formula.splice(i,1);
      i-=1;
  	}
    if(formula[i]!==formula[i].toUpperCase()){
      formula[i-1]=formula[i-1]+formula[i];
      formula.splice(i,1);
      i-=1;
    }
  }
  for(var i=0;i<formula.length;i++){
  	if(formula[i]!=="("&&formula[i]!=="["&&formula[i]!==")"&&formula[i]!=="]"&&formula[i]!=="{"&&formula[i]!=="}"&&!(/[0-9]/.test(formula[i+1]))&&!(/[0-9]/.test(formula[i]))){
  		formula[i] = [formula[i],1];
  	}
  	if(formula[i]!==")"&&formula[i]!=="]"&&formula[i]!=="}"&&(/[0-9]/.test(formula[i+1]))){
  		formula[i] = [formula[i],Number(formula[i+1])];
        formula.splice(i+1,1)
  	}
        
  }
  for(var i=0;i<formula.length;i++){
  	if(formula[i]==="("){
  		var end = formula.findIndex(function(ele){return ele===")"});
  		formula.splice(end,1);
  		for(var j=i+1;j<end;j++){
            if(/[0-9]/.test(formula[end][0])) {
  				formula[j][1]*=formula[end];
            }
  		}
        if(/[0-9]/.test(formula[end][0])) formula.splice(end,1);
        formula.splice(i,1);
		i--;
  	}
    if(formula[i]==="["){
  		var end = formula.findIndex(function(ele){return ele==="]"});
  		formula.splice(end,1);

  		for(var j=i+1;j<end;j++){
            if(/[0-9]/.test(formula[end][0])) 
  				formula[j][1]*=formula[end];
  		}
		if(/[0-9]/.test(formula[end][0])) formula.splice(end,1);
        formula.splice(i,1);
		i--;
  	}
        if(formula[i]==="{"){
  		var end = formula.findIndex(function(ele){return ele==="}"});
  		formula.splice(end,1);

  		for(var j=i+1;j<end;j++){
            if(/[0-9]/.test(formula[end][0])) 
  				formula[j][1]*=formula[end];
  		}
		if(/[0-9]/.test(formula[end][0])) formula.splice(end,1);
        formula.splice(i,1);
		i--;
  	}
  }
  for(var i=0;i<formula.length;i++){
	if(res.hasOwnProperty(formula[i][0])){
		res[formula[i][0]]+=formula[i][1];
	}else res[formula[i][0]]=formula[i][1];
}
  return res;
}