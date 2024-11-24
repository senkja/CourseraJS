
function groceryTracker() {
    let gr_1 = parseFloat(document.getElementById('gr_1').value);
    let gr_2 = parseFloat(document.getElementById('gr_2').value);
    let gr_3 = parseFloat(document.getElementById('gr_3').value);

    let sum = gr_1 + gr_2 + gr_3;
    document.getElementById('result').innerText = `The total sum of the groceries is: ${sum}`;

}