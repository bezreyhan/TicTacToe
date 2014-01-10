
var values = [ ["","",""], ["","",""], ["","",""] ];
//Win Logic
	function checkCol() {
		for (var element=0; element<values.length; element+=1) {
			var checker = [];
			for (var subArray=0; subArray<values.length; subArray+=1) {
				checker.push(values[subArray][element]);
			}
			if (checker.join("") == ["XXX"]) {
				console.log("X Wins");
			}
			else if (checker.join("") == ["OOO"]) {
				console.log(" 0 Wins");
			}

		}
	}

	var checkRows = function() {
		for (i=0; i<values.length; i+=1) {
			if (values[i].join("") == "XXX") {
				console.log("x Wins");
			}
			else if (values[i].join("") == ["OOO"]) {
				console.log("O Wins");
			}
		}
	};

	var checkCross = function () {
		checker = [];
		for (var i = 0; i<values.length; i+=1) {
			checker.push(values[i][i]);
		}
		if (checker.join("") == ["XXX"]) {
			console.log("X Wins");
		}
		else if (checker.join("") == ["OOO"]) {
			console.log(" 0 Wins");
		}
	};

	var checkCross2 = function () {
		checker = [];
		subArray = 0;
		for (var i=2; i>=0; i-=1) {
			checker.push(values[subArray][i]);
			subArray +=1;
		}
		if (checker.join("") == ["XXX"]) {
			console.log("X Wins");
		}
		else if (checker.join("") == ["OOO"]) {
			console.log(" 0 Wins");
		}
	};

var symbol = "O";
function clicked(cell) {
	console.log(cell.innerHTML);
	if (cell.innerHTML != "X" || cell.innerHTML != "O") {
		//altenrante between x and o's
		if (symbol === "O") {
			symbol = "X";
		}
		else {
			symbol = "O";
		}
		//populate values array with repective x's and o's
		cellRow = cell.id.substring(1,2);
		cellCol = cell.id.substring(3,4);
		values[cellRow][cellCol] = symbol;
		// Check for win
		checkRows();
		checkCol();
		checkCross();
		checkCross2();
		//add the x or o to the respective cell
		cell.innerHTML = symbol;
		//change backgound color
		cell.style.backgroundColor= "#1abc9c";
	// cell.innerHTML = '<img src="BaggageFee.jpg"/>';
	// cell.appendChild(img);
	}
}
// img.src="BaggageFee.jpg";

function openUp() {
	boxArray = document.getElementsByClassName('box');
	for (i=0; i<boxArray.length; i+=1) {
		boxArray[i].style.width="100px";
		boxArray[i].style.height="100px";
	}
}

function reset() {
	var cells = document.getElementsByClassName('box');
	for (i=0; i<cells.length; i++) {
		cells[i].style.width = "0";
		cells[i].style.height = "0";
		cells[i].style.backgroundColor = "white";
		cells[i].innerHTML = "&nbsp;";
	}
}








