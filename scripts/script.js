document.getElementById('btnProd').onclick = function() {
    calcCost();
}

function calcCost() {
    var sP = document.getElementById('selectProd').value;
    var qP = document.getElementById('quantityProd').value;
    var total = sP * qP;
    document.getElementById('priceProd').innerHTML = total;
    document.getElementById('infoProd').style.display = 'block';

    if (sP == 0 || qP == 0) {
        document.getElementById('infoProd').style.display = 'none';
        alert('Укажите значения')
        return;
    }
}