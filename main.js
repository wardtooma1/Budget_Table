let dataSet = [];

if(localStorage.getItem('dataSet')) {
    dataSet = JSON.parse(localStorage.getItem('dataSet'));
}

let updateTable = () => {
    let data = document.getElementById('data');
    

    let row = '';
    data.innerHTML = '';

    dataSet.map(val=>{
        row = `
        <tr>
            <td>${val.date}</td>
            <td>${val.amount}</td>
            <td>${val.exp}</td>
            <td>${val.type}</td>
            <td>${val.for}</td>
        </tr>`
        data.innerHTML+=row;
    });
} 

let addToTable = (event) => {
    event.preventDefault();

    let amount = document.getElementById('amount').value;
    let cur = document.getElementById('cur').value;
    let date = document.getElementById('date').value;
    let outcome = document.getElementById('outcome').checked;
    let income = document.getElementById('income').checked;
    let exp = document.getElementById('exp').value;
    let myself = document.getElementById('myself').checked;
    let family = document.getElementById('family').checked;
    let friend = document.getElementById('friend').checked;

    dataSet.push({
        amount: amount + ' ' + cur,
        date,
        type: outcome?'Out':(income?'In':''),
        exp,
        for: (myself?'🙂':'') + (family?'👨‍👩‍👧':'')  +  (friend?'👥':'')
    });

    localStorage.setItem('dataSet',JSON.stringify(dataSet));

    updateTable();
}

updateTable();