let activeInput = null;
var inputselct;
var input3selct;

document.getElementById("Weig").addEventListener("focus", function () {
    activeInput = this;
});

document.getElementById("hight").addEventListener("focus", function () {
    activeInput = this;
});

function prina(num) {
    if (activeInput) {
        activeInput.value += num;
    }
}

function del() {
    if (activeInput && activeInput.value.length > 0) {
        activeInput.value = activeInput.value.slice(0, -1);
    }
}

function allclear() {
    if (activeInput) {
        activeInput.value = "";
    }
}

function choicetyp() {
    let inputselct1 = document.getElementById("wght");
    inputselct = inputselct1.value;

    let input2selct = document.getElementById("hght");
    input3selct = input2selct.value;

}

function ev() { //✅
    if (inputselct === "kg" && input3selct === "mt") {
        let inwt = document.getElementById("Weig").value;
        let inht = document.getElementById("hight").value;
        kgmt(inwt, inht);
    } else if (inputselct === "kg" && input3selct === "cmt") {
        let inwt = document.getElementById("Weig").value;
        let inht = document.getElementById("hight").value;
        kgcmt(inwt, inht);
    } else if (inputselct === "kg" && input3selct === "ft") {
        let inwt = document.getElementById("Weig").value;
        let inht = document.getElementById("hight").value;
        kgft(inwt, inht);
    } else if (inputselct === "kg" && input3selct === "inch") {
        let inwt = document.getElementById("Weig").value;
        let inht = document.getElementById("hight").value;
        kginch(inwt, inht);
    } else if (inputselct === "pnd" && input3selct === "mt") {
        let inwt = document.getElementById("Weig").value;
        let inht = document.getElementById("hight").value;
        pndmt(inwt, inht);
    } else if (inputselct === "pnd" && input3selct === "cmt") {
        let inwt = document.getElementById("Weig").value;
        let inht = document.getElementById("hight").value;
        pndcmt(inwt, inht);
    } else if (inputselct === "pnd" && input3selct === "ft") {
        let inwt = document.getElementById("Weig").value;
        let inht = document.getElementById("hight").value;
        pndft(inwt, inht);
    } else if (inputselct === "pnd" && input3selct === "inch") {
        let inwt = document.getElementById("Weig").value;
        let inht = document.getElementById("hight").value;
        pndinch(inwt, inht);
    }
}

function kgmt(kgweight, meterheight) {
    let kgwe = kgweight;
    let mtht = meterheight;
    let ans = 0;

    ans = kgwe / (mtht ** 2);

    if (ans <= 18.5) {
        document.getElementById("output-display").value = `Underweight And BMI ${ans.toFixed(2)}`;
    }
    else if (ans > 18.5 && ans <= 25.0) {
        document.getElementById("output-display").value = `Normal And BMI ${ans.toFixed(2)}`;
    } else if (ans > 25.0 && ans <= 40.0) {
        document.getElementById("output-display").value = `Overweight And BMI ${ans.toFixed(2)}`;
    } else {
        document.getElementById("output-display").value = "Enter valid value";
    }
}

function kgcmt(kgweight, cmtheight) {
    let kgwe = kgweight;
    let mtht = cmtheight / 100;
    let ans = 0;

    ans = kgwe / (mtht ** 2);

    if (ans <= 18.5) {
        document.getElementById("output-display").value = `Underweight And BMI ${ans.toFixed(2)}`;
    }
    else if (ans > 18.5 && ans <= 25.0) {
        document.getElementById("output-display").value = `Normal And BMI ${ans.toFixed(2)}`;
    } else if (ans > 25.0 && ans <= 40.0) {
        document.getElementById("output-display").value = `Overweight And BMI ${ans.toFixed(2)}`;
    } else {
        document.getElementById("output-display").value = "Enter valid value";
    }

}

function kgft(kgweight, feetheight) {
    let kgwe = kgweight;
    let mtht = feetheight * 0.3048;
    let ans = 0;

    ans = kgwe / (mtht ** 2);

    if (ans <= 18.5) {
        document.getElementById("output-display").value = `Underweight And BMI ${ans.toFixed(2)}`;
    }
    else if (ans > 18.5 && ans <= 25.0) {
        document.getElementById("output-display").value = `Normal And BMI ${ans.toFixed(2)}`;
    } else if (ans > 25.0 && ans <= 40.0) {
        document.getElementById("output-display").value = `Overweight And BMI ${ans.toFixed(2)}`;
    } else {
        document.getElementById("output-display").value = "Enter valid value";
    }
}

function kginch(kgweight, inchheight) {
    let kgwe = kgweight;
    let mtht = inchheight * 0.0254;
    let ans = 0;

    ans = kgwe / (mtht ** 2);

    if (ans <= 18.5) {
        document.getElementById("output-display").value = `Underweight And BMI ${ans.toFixed(2)}`;
    }
    else if (ans > 18.5 && ans <= 25.0) {
        document.getElementById("output-display").value = `Normal And BMI ${ans.toFixed(2)}`;
    } else if (ans > 25.0 && ans <= 40.0) {
        document.getElementById("output-display").value = `Overweight And BMI ${ans.toFixed(2)}`;
    } else {
        document.getElementById("output-display").value = "Enter valid value";
    }
}

function pndmt(pndweight, meterheight) {
    let kgwe = pndweight / 2.20462;
    let mtht = meterheight;
    let ans = 0;

    ans = kgwe / (mtht ** 2);

    if (ans <= 18.5) {
        document.getElementById("output-display").value = `Underweight And BMI ${ans.toFixed(2)}`;
    }
    else if (ans > 18.5 && ans <= 25.0) {
        document.getElementById("output-display").value = `Normal And BMI ${ans.toFixed(2)}`;
    } else if (ans > 25.0 && ans <= 40.0) {
        document.getElementById("output-display").value = `Overweight And BMI ${ans.toFixed(2)}`;
    } else {
        document.getElementById("output-display").value = "Enter valid value";
    }
}

function pndcmt(pndweight, cmtheight) {
    let kgwe = pndweight / 2.20462;
    let mtht = cmtheight / 100;
    let ans = 0;

    ans = kgwe / (mtht ** 2);

    if (ans <= 18.5) {
        document.getElementById("output-display").value = `Underweight And BMI ${ans.toFixed(2)}`;
    }
    else if (ans > 18.5 && ans <= 25.0) {
        document.getElementById("output-display").value = `Normal And BMI ${ans.toFixed(2)}`;
    } else if (ans > 25.0 && ans <= 40.0) {
        document.getElementById("output-display").value = `Overweight And BMI ${ans.toFixed(2)}`;
    } else {
        document.getElementById("output-display").value = "Enter valid value";
    }
}

function pndft(pndweight, feetheight) {
    let kgwe = pndweight / 2.20462;
    let mtht = feetheight * 0.3048;
    let ans = 0;

    ans = kgwe / (mtht ** 2);

    if (ans <= 18.5) {
        document.getElementById("output-display").value = `Underweight And BMI ${ans.toFixed(2)}`;
    }
    else if (ans > 18.5 && ans <= 25.0) {
        document.getElementById("output-display").value = `Normal And BMI ${ans.toFixed(2)}`;
    } else if (ans > 25.0 && ans <= 40.0) {
        document.getElementById("output-display").value = `Overweight And BMI ${ans.toFixed(2)}`;
    } else {
        document.getElementById("output-display").value = "Enter valid value";
    }
}

function pndinch(pndweight, inchheight) {
    let kgwe = pndweight / 2.20462;
    let mtht = inchheight * 0.0254;
    let ans = 0;

    ans = kgwe / (mtht ** 2);

    if (ans <= 18.5) {
        document.getElementById("output-display").value = `Underweight And BMI ${ans.toFixed(2)}`;
    }
    else if (ans > 18.5 && ans <= 25.0) {
        document.getElementById("output-display").value = `Normal And BMI ${ans.toFixed(2)}`;
    } else if (ans > 25.0 && ans <= 40.0) {
        document.getElementById("output-display").value = `Overweight And BMI ${ans.toFixed(2)}`;
    } else {
        document.getElementById("output-display").value = "Enter valid value";
    }
}