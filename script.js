var newDice1 = [];
var newDice2 = [];
var total = 0;

function rollTheDice() {
if (total < 10) {
    let firstDieRoll = Math.floor(Math.random() * 6) + 1;
    let secondDieRoll = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "./images/dice" + firstDieRoll + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + secondDieRoll + ".png");

    newDice1.push(firstDieRoll);
    newDice2.push(secondDieRoll);

    var bodyRef = document.getElementById("table").getElementsByTagName("tbody")[0]; 
		bodyRef.innerHTML = '';

    total++
} else {
    alert("Sorry!!! You ran out of Rolls... check your Result")
}
   
}

function showDiceRoll() {
    total = 0;
    // get the reference for the body
	var body = document.getElementsByTagName("body")[0];

	// creates a <table> element and a <tbody> element
	var tbl = document.getElementById("table");
	var tblBody = document.getElementById("tableBody");

	    // creates a table row
    	//var row = document.createElement("tr"+1);

  
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      
	for(var i=0; i<newDice2.length; i++){
	    var row = document.createElement("tr");
	    
	      var cell = document.createElement("td");
	      var cellText = document.createTextNode(i+1);
	      cell.appendChild(cellText);
	      row.appendChild(cell);

	      var cell = document.createElement("td");
	      var cellText = document.createTextNode(newDice1[i]+","+newDice2[i]);
	      cell.appendChild(cellText);
	      row.appendChild(cell);
	  

    // add the row to the end of the table body
    tblBody.appendChild(row);
  	

    if(i === newDice1.length-1){
  	newDice1.length = 0;
	  newDice2 = [];	
	}
}

	  // put the <tbody> in the <table>
	  tbl.appendChild(tblBody);
		  
	  // appends <table> into <body>
	  body.appendChild(tbl);
}

