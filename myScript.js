document.getElementById("BishBosh").addEventListener("click", BishBosh);
document.getElementById("btn").addEventListener("click", Rename);
document.getElementById("createDivButton").addEventListener("click", CreateDivs);

function Rename() {
    document.getElementById("text").innerHTML = "Bnarnar"
}

function CreateHtml(){
    var div = document.createElement("div");
}

function CreateDivs() {
    //alert("Banana!");
    for (let i = 0; i < 10; i++) {
        
        var div = document.createElement("div");
        div.innerHTML = "Div " + i;

        document.body.insertBefore(div);
    }
}

function BishBosh() {
    //alert("Banana!");
    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 && i % 4 === 0){
            console.log('Bish-Bosh');
        }
        else if (i % 3 === 0) {
            console.log('Bish');
        }
        else if (i % 4 === 0) {
            console.log('Bosh');
        } 
        else {
            console.log(i);
        }
    }
}