var perks = all_perks[0];

function to_binary(){
	var nDig = 0
	for (var i = 0; i < perks.length; i++) {
		if(perks[i].mV < 2){
			nDig++;
		}
		else{
			nDig = nDig + 2;
		}
	}
	//console.log(nDig);
	var binHash = ""
	for (var i = 0; i < perks.length; i++) {
		if(perks[i].mV > 1 && perks[i].aV < 2){
			binHash += "0";
		}
		binHash += (perks[i].aV >>> 0).toString(2);
		//binHash += ",";
	}
	return binHash;
	//console.log(binHash);
}

function fromBinary(hsh){
	var index = 0;
	var size = 1;
	for (var i = 0; i < perks.length; i++) {
		size = 1;
		if(perks[i].mV > 1){
			size = 2;
		}
		if(index + size > hsh.length){
			perks[i].aV = 0;
		}
		else{
			perks[i].aV = parseInt(hsh.slice(index, index+size),2);
		}
		//console.log(perks[i].aV);
		index = index + size;
	}
}

function binary_tobase64(hsh){
	var base64_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
	var base64 = "";
	var index = 0;
	var aux;
	for (var i = 0; i < ~~((hsh.length+5)/6); i++) {
		aux = parseInt(hsh.slice(index, index+6),2);
		base64 += base64_chars[aux];
		index = index + 6;
	}
	return base64;
}

function base64_tobinary(hsh){
	var final = "";
	var binary = "";
	var aux;
	for (var i = 0; i < hsh.length; i++) {
		binary = "";
		if(hsh[i] == '-'){
			aux = 62;
			binary += aux.toString(2);
		}
		else if(hsh[i] == '_'){
			aux = 63;
			binary += aux.toString(2);
		}
		else {
			aux = hsh[i].charCodeAt(0);
			//console.log(hsh[i],aux);
			if(aux >= 65 && aux <= 90){
				binary += (aux-65).toString(2);
			}
			else if(aux >= 97 && aux <= 122){
				binary += (aux-97+26).toString(2);
			}
			else if(aux >= 48 && aux <= 57){
				binary += (aux-48+52).toString(2);
			}
			else{
				console.log("Erro");
			}
		}
		for (var j = 0; j < 6-binary.length; j++) {
			final += "0";
		}
		final += binary;
		//console.log(final.length);
	}
	return final;

}

var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	return query;
};

var getHash = function (url) {
	return url.split("#")[1];
};

function getURLHash(){
	return window.location.hash.slice(1,window.location.hash.length);
}


function setClickAction(){
	//console.log("cheguei");
	var bt;
	bt = document.querySelectorAll(".myDiv1");
	for (var i = 0; i < perks.length; i++) {
		//console.log(bt[i].title);
		if(perks[i].aV == 0){
			bt[i].style.background = "#ffffff";
		}
		else if (perks[i].aV == perks[i].mV){
			bt[i].style.background = "#d4af37";
		}
		else{
			bt[i].style.background = "lightblue";
		}
		bt[i].addEventListener('click',clicounacoisa);
		bt[i].addEventListener('mouseover',showDescription);
	}
}

function showDescription(){
	var value = parseInt(this.id);
	var div_desc;

	div_desc = document.getElementById("description_name");
	div_desc.innerHTML = "Name: " + perks[value].name;
	
	div_desc = document.getElementById("description_type");
	div_desc.innerHTML = "Type: Passive";

	div_desc = document.getElementById("description_effect");
	div_desc.innerHTML = "Effect: " + perks[value].effect;
	
	div_desc = document.getElementById("description_required");
	div_desc.innerHTML = "Attribute Level Required: "+"20";
	
	div_desc = document.getElementById("description_cl_ml");
	div_desc.innerHTML = "Current level: " + String(perks[value].aV) + "/" + String(perks[value].mV);
}



function clicounacoisa(){
	//console.log(this.id);
	var value = parseInt(this.id);
	//console.log(value);
	if(perks[value].aV<perks[value].mV){
		perks[value].aV++;
	}
	else{
		perks[value].aV = 0;
	}

	if(perks[value].aV == 0){
		this.style.background = "#ffffff";
	}
	else if (perks[value].aV == perks[value].mV){
		this.style.background = "#d4af37";
	}
	else{
		this.style.background = "lightblue";
	}

	var status = document.getElementById("level"+String(value));
	status.innerHTML = String(perks[value].aV) + '/'+ String(perks[value].mV);
	var status = document.getElementById("description_cl_ml");
	status.innerHTML = "Current level: " + String(perks[value].aV) + "/" + String(perks[value].mV);
	window.location.hash = binary_tobase64(to_binary());
	//console.log(base64_tobinary(getURLHash()))
}

function loadAttributeMenu(){

}

function loadWindow(){
	var x = document.getElementById("mainWindow");
	//console.log(x);

	hash = getURLHash();
	//if(hash.length <)
	fromBinary(base64_tobinary(hash));
	x.innerHTML = "";
	console.log("teste");
    for (var i = 0; i < perks.length; i++ ){
		//console.log("teste")
		var position = 14+6*(i%7);
		var margem = '';
		if((~~(i/7) == 1)){
			margem = 'style = "margin-right: 1.5vw; margin-left: 1.5vw;" ';
			//position = 8+8*(i%7);
		}
		else if((~~(i/7) == 3)){
			//position = 58;
		}



		//'style = "margin-right: 2vw; margin-left: 2vw;"'		

		//'style = "left:' + String(position) + '%;

    	x.innerHTML += '<div title="' + String(perks[i].effect) +
    	'" class = "myDiv1" id = "' + String(i) +'" '+
    	margem +
    	 '> ' + String(perks[i].name) +
    	 
    	 '<p class="skill_level" id = "'+ 'level' + String(i) +'">' + String(perks[i].aV) + '/'+ String(perks[i].mV) + '</p>' + ' </div>\n';
    	if(((i+1)%7) == 0){
    		x.innerHTML += '<div class="break"></div>\n';
    	}
    }

    setClickAction();

}


//window.addEventListener("load",divclick,false);


console.log(window.location.href)


if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadWindow);
} else {
    loadWindow();
}

console.log(document.getElementById("mainWindow"));

console.log((getURLHash()));

to_binary();
