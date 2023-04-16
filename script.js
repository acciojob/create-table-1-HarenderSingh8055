function insert_Row() {
    //Write your code here
  let table = document.getElementById("sampleTable");
	let newRow = table.insertRow(0);
	let newCell1 = newRow.insertCell();
	let newCell2 = newRow.insertCell();
	newCell1.innerText = "New Cell1";
	newCell2.innerText = "New Cell2";
	
  
}
