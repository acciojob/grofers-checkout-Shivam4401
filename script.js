const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let price = document.querySelectorAll(".price");
	let sumTotal = 0;
	price.forEach((num) => {
		sumTotal += parseFloat(num.innerText) || 0;
	});

	let table = document.querySelector("table");
	let row = document.createElement("tr");
	let cell = document.createElement("td");
	cell.innerText=`Total Price: ${sumTotal}`;
	row.appendChild(cell);
	table.appendChild(row);
	
};

getSumBtn.addEventListener("click", getSum);

