let rr = 0;
let res = 0;
const btn = document.getElementsByTagName('button')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', find);
}

function find(e) {
    var res = (e.target.innerText);
    if (res == 'AC') {
        document.getElementById('dis').value = '';
        rr = 0;
    } else if (res == '=') {
        document.getElementById('dis').value = rr;
    } else if (res == 'C') {
        var str = document.getElementById('dis').value;
        str = str.substring(0, str.length - 1);
        document.getElementById('dis').value = str;
    } else {
        document.getElementById('dis').value += res;
    }
}
function solution() {
    res = document.getElementById('dis').value;
    if (res == '') {
        document.getElementById('dis').value = 0;
    } else {
        var result = eval(res);
        rr = document.getElementById('dis').value = result;
    }
}