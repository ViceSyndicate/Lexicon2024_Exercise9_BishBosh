document.getElementById("BishBosh").addEventListener("click", BishBosh);

function BishBosh() {
    
    
    var bish = document.getElementById('SetBish').value;
    var bosh = document.getElementById('SetBosh').value;
    var loopNr = document.getElementById('SetLoopVal').value;
    console.log(loopNr);
    var ul = document.getElementById('BishBoshList');
    console.log(ul);

    for (let i = 1; i <= loopNr; i++) {
        let li = document.createElement("li");
        if (i % bish == 0 && i % bosh == 0){
            console.log('Bish-Bosh');
            li.appendChild(document.createTextNode('Bish-Bosh'));
            ul.appendChild(li);
        }
        else if (i % bish == 0) {
            console.log('Bish');
            li.appendChild(document.createTextNode('Bish'));
            ul.appendChild(li);
        }
        else if (i % bosh == 0) {
            console.log('Bosh');
            li.appendChild(document.createTextNode('Bosh'));
            ul.appendChild(li);
        } 
        else {
            console.log(i);
            li.appendChild(document.createTextNode(i));
            ul.appendChild(li);
        }
    }
}

