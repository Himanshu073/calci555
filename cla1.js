var stor1 = [];
var i = -1;

function pri(x){
    let c = document.getElementById("ans");
    c.value += x;
}

function anser(){
    try {
        let dx = document.getElementById("ans").value;
        let answer1 = eval(dx); 
        document.getElementById("ans").value = answer1;
        
        stor1[i] = dx;
        i += 1;

        stor1[i] = answer1;
        i += 1;

    } catch (error){
        document.getElementById("ans").value = error;
    }
    

}

function cleard(){
    document.getElementById("ans").value = ""; 
}

function allclea(){
    let mesg = window.prompt("Are you sure clear all history of calculator? (y/n)")

    if(mesg == 'y'){
        document.getElementById("ans").value = "";
        stor1 = [];
        i = -1;
    }else{
        alert("you can continue")
    }
}


function necxt(){
    if (i < stor1.length - 1){
        i++;
        document.getElementById("ans").value = stor1[i];
    }
}

function prevs(){
    if(i >= 0){
        i--;
        document.getElementById("ans").value = stor1[i];
    }
}


function persen(){
    let dy = document.getElementById("ans").value;

    let x = dy.split(/([+\-*/%])/);
    
    let a = Number(x[0]);
    let opra = x[1];
    let b = Number(x[2]);

    let per1 = (a * b) / 100;
    let per2 = b / 100;
    let answ;

    if(opra === '-'){
        answ = a - per1;
    }else if (opra === '+'){
        answ = a + per1;
    }else if (opra === '*'){
        answ = per1;
    }else if (opra === '/'){
        answ = a / per2;
    }else{
        return;
    }

    document.getElementById("ans").value = answ;

    stor1[i] = dy;
    i += 1;

    stor1[i] = answ;
    i += 1;

}


document.getElementById("ans").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        anser();
    }
});

