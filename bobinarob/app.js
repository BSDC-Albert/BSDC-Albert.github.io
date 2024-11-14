const bob = document.getElementById("bobinarob");

let switchbob = false;

function byebyebob() {
    if (switchbob) {
        bob.innerHTML = `<h1>Yes we can!</h1>
            <img src="/images/Bobthebuilder.webp" alt="">`;
    }
     else {
        bob.innerHTML = `<h1>Can we fix it? maybe</h1>
        <img src="/images/bess.jpg">`;
    }
        switchbob = !switchbob;
}