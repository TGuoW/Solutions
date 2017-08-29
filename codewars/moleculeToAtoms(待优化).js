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
  	if(formula[i]!=="("&&formula[i]!=="["&&formula[i]!==")"&&formula[i]!=="]"&&!(/[0-9]/.test(formula[i+1]))&&!(/[0-9]/.test(formula[i]))){
  		formula[i] = [formula[i],1];
  	}
  	if(formula[i]!==")"&&formula[i]!=="]"&&(/[0-9]/.test(formula[i+1]))){
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
  	}
    
  }
  for(var i=0;i<formula.length;i++){
	if(res.hasOwnProperty(formula[i][0])){
		res[formula[i][0]]+=formula[i][1];
	}else res[formula[i][0]]=formula[i][1];
}
  return res;
}
  // for(var j=1;j<formula.length;j++){
  //   if(formula[0]!=="("||formula[0]!=="["){
  //     if(/[0-9]/.test(formula[j])){
  //       res.[formula[0]] = formula[1];
  //       formula.splice(0,2)
  //     }
  //     else {
  //       res.[formula[0]] = 1;
  //       formula.splice(0,1)
  //     }
  //   }
  //   else{
      
  //   }
    
  // }