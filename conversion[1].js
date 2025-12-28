var inputselct;
var outputselct;

function prina(x) {
    let y = document.getElementById("input-display");
    y.value += x;
}

function allclear() {
    document.getElementById("input-display").value = "";
    document.getElementById("output-display").value = "";
}

function del() {
    let cfg = document.getElementById("input-display").value;
    let rj4i = cfg.split("");
    let yu = rj4i.pop();
    document.getElementById("input-display").value = rj4i.join("");
}

function choicetyp() {
    let inputselct1 = document.getElementById("input");
    inputselct = inputselct1.value;

    let outputselct1 = document.getElementById("output");
    outputselct = outputselct1.value;

    let btnch = document.querySelectorAll(".btn");
    btnch.forEach(btn => btn.disabled = false);


    if (inputselct === "BIN") {
        document.querySelectorAll(".g1").forEach(b => b.disabled = true);
    } else if (inputselct === "OCT") {
        document.querySelectorAll(".g3").forEach(b => b.disabled = true);
    } else if (inputselct === "HEX") {
        btnch.forEach(btn => btn.disabled = false);
    } else if (inputselct === "DEC") {
        document.querySelectorAll(".g4").forEach(b => b.disabled = true);
    }
}


function ev() { //✅
    if (inputselct === "BIN" && outputselct === "DEC") {
        let inval = document.getElementById("input-display").value;
        bintodec(inval);
    } else if (inputselct === "BIN" && outputselct === "OCT") {
        let inval = document.getElementById("input-display").value;
        bintoct(inval);
    } else if (inputselct === "BIN" && outputselct === "HEX") {
        let inval = document.getElementById("input-display").value;
        bintohex(inval);
    } else if (inputselct === "DEC" && outputselct === "BIN") {
        let inval = document.getElementById("input-display").value;
        dectobin(inval);
    } else if (inputselct === "DEC" && outputselct === "OCT") {
        let inval = document.getElementById("input-display").value;
        dectoct(inval);
    } else if (inputselct === "DEC" && outputselct === "HEX") {
        let inval = document.getElementById("input-display").value;
        dectohex(inval);
    } else if (inputselct === "OCT" && outputselct === "BIN") {
        let inval = document.getElementById("input-display").value;
        octobin(inval);
    } else if (inputselct === "OCT" && outputselct === "HEX") {
        let inval = document.getElementById("input-display").value;
        octohex(inval);
    } else if (inputselct === "OCT" && outputselct === "DEC") {
        let inval = document.getElementById("input-display").value;
        octodec(inval);
    } else if (inputselct === "HEX" && outputselct === "BIN") {
        let inval = document.getElementById("input-display").value;
        hextobin(inval);
    } else if (inputselct === "HEX" && outputselct === "OCT") {
        let inval = document.getElementById("input-display").value;
        hextoct(inval);
    } else if (inputselct === "HEX" && outputselct === "DEC") {
        let inval = document.getElementById("input-display").value;
        hextodec(inval);
    } else {
        document.getElementById("input-display").value = "Invalid Choice";
    }
}


function bintodec(valbin) { //✅
    let valbin1 = valbin;
    if (!valbin1.includes(".")) {
        let len = valbin.length;
        let numsplit = valbin.split("").reverse().map(Number);


        let sum = 0n;
        for (let hjk = 0; hjk < len; hjk += 1) {
            let readynum = 2n ** BigInt(hjk);
            let compnum = readynum * BigInt(numsplit[hjk]);
            sum += compnum;
        }
        document.getElementById("output-display").value = sum.toString();
        return sum.toString();

    } else if (valbin1.includes(".")) {
        valbin1 = String(valbin1);
        let numsplit1 = valbin1.split(".");


        let left = numsplit1[0];
        let len1 = left.length;

        let leftsplit = left.split("").reverse().map(Number);

        let right = numsplit1[1];
        let len2 = right.length;

        let rightsplit = right.split("").map(Number);

        let sum1 = 0n;
        let sum2 = 0;


        for (let ryu = 0; ryu < len1; ryu++) {
            let readynum1 = 2n ** BigInt(ryu);
            let compnum1 = readynum1 * BigInt(leftsplit[ryu]);
            sum1 += compnum1;
        }

        for (let eyu = 1; eyu <= len2; eyu++) {
            readynum2 = 2 ** -eyu;
            compnum2 = readynum2 * rightsplit[eyu - 1];
            sum2 += compnum2;
        }
        let Sumx = sum1.toString();
        if (sum2 > 0) {
            Sumx += "." + sum2.toString(10).split(".")[1];
        }

        document.getElementById("output-display").value = Sumx;
        return Sumx;


    }
}

function bintoct(valbin) { //✅
    let valbin1 = valbin;
    if (valbin.includes(".")) {
        let rhy = valbin1.split(".");

        let left12 = String(rhy[0]);
        let yu1 = left12.split("").reverse().join("").match(/.{1,3}/g).map(sd1 => sd1.split("").reverse().join("")).reverse();

        let x12 = [];

        let rk1;
        let rk2;
        for (let tyu = 0; tyu < yu1.length; tyu++) {
            rk1 = Number(yu1[tyu]);
            switch (rk1) {
                case 1:
                    x12.push(1)
                    break;
                case 10:
                    x12.push(2)
                    break;
                case 11:
                    x12.push(3)
                    break;
                case 100:
                    x12.push(4)
                    break;
                case 101:
                    x12.push(5)
                    break;
                case 110:
                    x12.push(6)
                    break;

                case 111:
                    x12.push(7)
                    break;
                default:
                    x12.push(0)
                    break;
            }
        }


        let right12 = String(rhy[1]);
        let yu2 = right12.match(/.{1,3}/g);
        let x1 = [];
        for (let tyu1 = 0; tyu1 < yu2.length; tyu1++) {
            rk2 = Number(yu2[tyu1]);
            switch (rk2) {
                case 1:
                    x1.push(1)
                    break;
                case 10:
                    x1.push(2)
                    break;
                case 11:
                    x1.push(3)
                    break;
                case 100:
                    x1.push(4)
                    break;
                case 101:
                    x1.push(5)
                    break;
                case 110:
                    x1.push(6)
                    break;

                case 111:
                    x1.push(7)
                    break;
                default:
                    x1.push(0)
                    break;
            }
        }

        document.getElementById("output-display").value = x12.join("") + "." + x1.join("");
        return x12.join("") + "." + x1.join("");

    } else {
        let yu = valbin1.split("").reverse().join("").match(/.{1,3}/g).map(sd => sd.split("").reverse().join("")).reverse();
        let x = [];
        let rk;
        for (i1 = 0; i1 < yu.length; i1++) {
            rk = Number(yu[i1]);
            switch (rk) {
                case 1:
                    x.push(1)
                    break;
                case 10:
                    x.push(2)
                    break;
                case 11:
                    x.push(3)
                    break;
                case 100:
                    x.push(4)
                    break;
                case 101:
                    x.push(5)
                    break;
                case 110:
                    x.push(6)
                    break;

                case 111:
                    x.push(7)
                    break;
                default:
                    x.push(0)
                    break;
            }
        }
        document.getElementById("output-display").value = x.join("");
        return x.join("");
    }
}


function bintohex(valbin) { //✅
    let valbin1 = valbin;
    if (valbin.includes(".")) {
        let rhy = valbin1.split(".");

        let left12 = String(rhy[0]);
        let yu1 = left12.split("").reverse().join("").match(/.{1,4}/g).map(sd1 => sd1.split("").reverse().join("")).reverse();

        let x12 = [];

        let rk1;
        let rk2;
        for (let tyu = 0; tyu < yu1.length; tyu++) {
            rk1 = Number(yu1[tyu]);
            switch (rk1) {
                case 1:
                    x12.push(1)
                    break;
                case 10:
                    x12.push(2)
                    break;
                case 11:
                    x12.push(3)
                    break;
                case 100:
                    x12.push(4)
                    break;
                case 101:
                    x12.push(5)
                    break;
                case 110:
                    x12.push(6)
                    break;
                case 111:
                    x12.push(7)
                    break;
                case 1000:
                    x12.push(8)
                    break;
                case 1001:
                    x12.push(9)
                    break;
                case 1010:
                    x12.push("A")
                    break;
                case 1011:
                    x12.push("B")
                    break;
                case 1100:
                    x12.push("C")
                    break;
                case 1101:
                    x12.push("D")
                    break;
                case 1110:
                    x12.push("E")
                    break;
                case 1111:
                    x12.push("F")
                    break;
                default:
                    x12.push(0)
                    break;
            }
        }


        let right12 = String(rhy[1]);
        right12 = right12.padEnd(Math.ceil(right12.length / 4) * 4, "0");
        let yu2 = right12.match(/.{1,4}/g);
        let x1 = [];
        for (let tyu1 = 0; tyu1 < yu2.length; tyu1++) {
            rk2 = Number(yu2[tyu1]);
            switch (rk2) {
                case 1:
                    x1.push(1)
                    break;
                case 10:
                    x1.push(2)
                    break;
                case 11:
                    x1.push(3)
                    break;
                case 100:
                    x1.push(4)
                    break;
                case 101:
                    x1.push(5)
                    break;
                case 110:
                    x1.push(6)
                    break;
                case 111:
                    x1.push(7)
                    break;
                case 1000:
                    x1.push(8)
                    break;
                case 1001:
                    x1.push(9)
                    break;
                case 1010:
                    x1.push("A")
                    break;
                case 1011:
                    x1.push("B")
                    break;
                case 1100:
                    x1.push("C")
                    break;
                case 1101:
                    x1.push("D")
                    break;
                case 1110:
                    x1.push("E")
                    break;
                case 1111:
                    x1.push("F")
                    break;
                default:
                    x1.push(0)
                    break;
            }
        }


        document.getElementById("output-display").value = x12.join("") + "." + x1.join("");
        return x12.join("") + "." + x1.join("");
    }


    else {
        let yu = valbin1.split("").reverse().join("").match(/.{1,4}/g).map(sd => sd.split("").reverse().join("")).reverse();

        let x = [];
        let rk;
        for (i1 = 0; i1 < yu.length; i1++) {
            rk = Number(yu[i1]);
            switch (rk) {
                case 1:
                    x.push(1)
                    break;
                case 10:
                    x.push(2)
                    break;
                case 11:
                    x.push(3)
                    break;
                case 100:
                    x.push(4)
                    break;
                case 101:
                    x.push(5)
                    break;
                case 110:
                    x.push(6)
                    break;
                case 111:
                    x.push(7)
                    break;
                case 1000:
                    x.push(8)
                    break;
                case 1001:
                    x.push(9)
                    break;
                case 1010:
                    x.push("A")
                    break;
                case 1011:
                    x.push("B")
                    break;
                case 1100:
                    x.push("C")
                    break;
                case 1101:
                    x.push("D")
                    break;
                case 1110:
                    x.push("E")
                    break;
                case 1111:
                    x.push("F")
                    break;
                default:
                    x.push(0)
                    break;
            }
        }
        document.getElementById("output-display").value = x.join("");
        return x.join("");

    }
}


function dectobin(valdec) { //✅
    let valdec1 = String(valdec);
    if (!valdec1.includes(".")) {

        let x = [];

        for (let i = BigInt(valdec1); i > 0; i /= 2n) {
            x.push((i % 2n).toString());
        }

        document.getElementById("output-display").value = x.reverse().join("");


    } else if (valdec1.includes(".")) {

        valdec1 = String(valdec);

        let fist = valdec1.split(".");

        let left = BigInt(fist[0]);

        let ry = fist[1].length;
        let right = 0 + "." + fist[1];

        let getans = [];

        let z = 0;

        let leftbin = [];
        let rightbin = [];

        for (let j = left; j > 0; j /= 2n) {
            leftbin.push((j % 2n).toString());
        }

        let er = 0;

        while (er < ry + 1) {
            if (right === '1.00') {
                getans.push(1);
                break;
            } else if (right !== '1.00') {
                right *= 2;
                z = String(right).split(".");
                rightbin.push(z[0]);
                right = 0 + "." + z[1];
            } else {
                document.getElementById("output-display").value = "Enter Valid Number";
            }
            er++;
        }

        let left1 = leftbin.reverse().join("");
        let right1 = rightbin.join("");
        let final = left1 + "." + right1;

        document.getElementById("output-display").value = final;
    } else {
        document.getElementById("output-display").value = "Enter valid Number";
    }
}


function dectoct(valdec) {  // ✅
    let valdec1 = String(valdec);
    if (!valdec1.includes(".")) {

        let x = [];

        for (let i = BigInt(valdec); i > 0; i /= 8n) {
            x.push((i % 8n).toString());
        }

        document.getElementById("output-display").value = x.reverse().join("");


    } else if (valdec1.includes(".")) {

        valdec1 = String(valdec);

        let fist = valdec1.split(".");

        let left = BigInt(fist[0]);

        let ey = fist[1].length;

        let right = 0 + "." + fist[1];

        let z = 0;

        let leftbin = [];
        let rightbin = [];

        for (let j = left; j > 0; j /= 8n) {
            leftbin.push((j % 8n).toString());
        }

        let er = 0;

        while (er < ey) {
            right *= 8;
            z = String(right).split(".");
            rightbin.push(z[0]);
            right = 0 + "." + z[1];
            er++;
        }


        let left1 = leftbin.reverse().join("");
        let right1 = rightbin.join("");
        let final = left1 + "." + right1;

        document.getElementById("output-display").value = final;
    } else {
        document.getElementById("output-display").value = "Enter valid Number";
    }

}


function dectohex(valdec) { //✅

    let valdec1 = String(valdec);
    if (!valdec1.includes(".")) {

        let valdec12 = BigInt(valdec1);
        let x = [];

        for (let i = valdec12; i > 0n; i /= 16n) {
            k = i % 16n;
            switch (k) {
                case 10n:
                    x.push("A")
                    break;
                case 11n:
                    x.push("B")
                    break;
                case 12n:
                    x.push("C")
                    break;
                case 13n:
                    x.push("D")
                    break;
                case 14n:
                    x.push("E")
                    break;
                case 15n:
                    x.push("F")
                    break;

                default:
                    x.push((k).toString())
                    break;
            }
        }

        document.getElementById("output-display").value = x.reverse().join("");


    } else if (valdec1.includes(".")) {

        valdec1 = String(valdec);

        let fist = valdec1.split(".");

        let left = fist[0];
        let ry = fist[1].length;
        let right = Number("0." + fist[1]);




        let leftbin = [];
        let rightbin = [];

        for (let j = BigInt(left); j > 0n; j /= 16n) {
            k1 = j % 16n;
            switch (k1) {
                case 10n:
                    leftbin.push("A")
                    break;
                case 11n:
                    leftbin.push("B")
                    break;
                case 12n:
                    leftbin.push("C")
                    break;
                case 13n:
                    leftbin.push("D")
                    break;
                case 14n:
                    leftbin.push("E")
                    break;
                case 15n:
                    leftbin.push("F")
                    break;

                default:
                    leftbin.push((k1).toString())
                    break;
            }
        }

        let er = 0;

        while (er < ry) {
            right *= 16;
            z = String(right).split(".");
            k2 = Number(z[0]);
            switch (k2) {
                case 10:
                    rightbin.push("A")
                    break;
                case 11:
                    rightbin.push("B")
                    break;
                case 12:
                    rightbin.push("C")
                    break;
                case 13:
                    rightbin.push("D")
                    break;
                case 14:
                    rightbin.push("E")
                    break;
                case 15:
                    rightbin.push("F")
                    break;

                default:
                    rightbin.push(k2)
                    break;
            }
            right = 0 + "." + z[1];
            er++;
        }


        let left1 = leftbin.reverse().join("");
        let right1 = rightbin.join("");
        let final = left1 + "." + right1;

        document.getElementById("output-display").value = final;
    } else {
        document.getElementById("output-display").value = "Enter valid Number";
    }

}


function octobin(valoct) { //✅
    let valoct1 = valoct;
    if (valoct.includes(".")) {
        let rhy = valoct1.split(".");

        let left12 = String(rhy[0]);
        let yu1 = left12.split("");

        let x12 = [];

        let rk1;
        let rk2;
        for (let tyu = 0; tyu < yu1.length; tyu++) {
            rk1 = Number(yu1[tyu]);
            switch (rk1) {
                case 1:
                    x12.push("001")
                    break;
                case 2:
                    x12.push("010")
                    break;
                case 3:
                    x12.push("011")
                    break;
                case 4:
                    x12.push("100")
                    break;
                case 5:
                    x12.push("101")
                    break;
                case 6:
                    x12.push("110")
                    break;
                case 7:
                    x12.push("111")
                    break;
                default:
                    x12.push("000")
                    break;
            }
        }
        let lleft1 = x12.join("");
        let left1 = lleft1.includes("1") ? lleft1.replace(/^0+/, "") : "0";

        let right12 = String(rhy[1]);
        let yu2 = right12.split("");

        let x1 = [];

        for (let tyu1 = 0; tyu1 < yu2.length; tyu1++) {
            rk2 = Number(yu2[tyu1]);
            switch (rk2) {
                case 1:
                    x1.push("001")
                    break;
                case 2:
                    x1.push("010")
                    break;
                case 3:
                    x1.push("011")
                    break;
                case 4:
                    x1.push("100")
                    break;
                case 5:
                    x1.push("101")
                    break;
                case 6:
                    x1.push("110")
                    break;
                case 7:
                    x1.push("111")
                    break;
                default:
                    x1.push("000")
                    break;
            }
        }

        let rright1 = x1.join("");
        let right1 = rright1.includes("1") ? rright1.replace(/0+$/, "") : "0";

        document.getElementById("output-display").value = left1 + "." + right1;
        return left1 + "." + right1;
    }


    else {
        let yu = valoct1.split("");
        let x = [];
        let rk;
        for (i1 = 0; i1 < yu.length; i1++) {
            rk = Number(yu[i1]);
            switch (rk) {
                case 1:
                    x.push("001")
                    break;
                case 2:
                    x.push("010")
                    break;
                case 3:
                    x.push("011")
                    break;
                case 4:
                    x.push("100")
                    break;
                case 5:
                    x.push("101")
                    break;
                case 6:
                    x.push("110")
                    break;
                case 7:
                    x.push("111")
                    break;
                default:
                    x.push("000")
                    break;
            }
        }
        document.getElementById("output-display").value = x.join("").replace(/^0+/, "").split("").map(Number).join("");
        return x.join("").replace(/^0+/, "").split("").map(Number).join("");


    }

}


function octohex(valoct) { //✅
    let valoct1 = valoct;
    let bin = octobin(valoct1);
    let hex = bintohex(bin);

    document.getElementById("output-display").value = hex;

}


function octodec(valoct) {//✅
    let valoct1 = valoct;
    let bin = octobin(valoct1);
    let dec = bintodec(bin);
    document.getElementById("output-display").value = dec;

}


function hextobin(valhex) { //✅
    let valhex1 = valhex;
    if (valhex.includes(".")) {
        let rhy = valhex1.split(".");

        let left12 = String(rhy[0]);
        let yu1 = left12.split("");

        let x12 = [];

        let rk1;
        let rk2;
        for (let tyu = 0; tyu < yu1.length; tyu++) {
            rk1 = yu1[tyu];
            switch (rk1) {
                case '1':
                    x12.push("0001")
                    break;
                case '2':
                    x12.push("0010")
                    break;
                case '3':
                    x12.push("0011")
                    break;
                case '4':
                    x12.push("0100")
                    break;
                case '5':
                    x12.push("0101")
                    break;
                case '6':
                    x12.push("0110")
                    break;
                case '7':
                    x12.push("0111")
                    break;
                case '8':
                    x12.push("1000")
                    break;
                case '9':
                    x12.push("1001")
                    break;
                case 'A':
                    x12.push("1010")
                    break;
                case 'B':
                    x12.push("1011")
                    break;
                case 'C':
                    x12.push("1100")
                    break;
                case 'D':
                    x12.push("1101")
                    break;
                case 'E':
                    x12.push("1110")
                    break;
                case 'F':
                    x12.push("1111")
                    break;
                default:
                    x12.push("0000")
                    break;
            }
        }
        let lleft1 = x12.join("");
        let left1 = lleft1.includes("1") ? lleft1.replace(/^0+/, "") : "0";

        let right12 = String(rhy[1]);
        let yu2 = right12.split("");

        let x1 = [];

        for (let tyu1 = 0; tyu1 < yu2.length; tyu1++) {
            rk2 = yu2[tyu1];
            switch (rk2) {
                case '1':
                    x1.push("0001")
                    break;
                case '2':
                    x1.push("0010")
                    break;
                case '3':
                    x1.push("0011")
                    break;
                case '4':
                    x1.push("0100")
                    break;
                case '5':
                    x1.push("0101")
                    break;
                case '6':
                    x1.push("0110")
                    break;
                case '7':
                    x1.push("0111")
                    break;
                case '8':
                    x1.push("1000")
                    break;
                case '9':
                    x1.push("1001")
                    break;
                case 'A':
                    x1.push("1010")
                    break;
                case 'B':
                    x1.push("1011")
                    break;
                case 'C':
                    x1.push("1100")
                    break;
                case 'D':
                    x1.push("1101")
                    break;
                case 'E':
                    x1.push("1110")
                    break;
                case 'F':
                    x1.push("1111")
                    break;
                default:
                    x1.push("0000")
                    break;
            }
        }
        let rright1 = x1.join("");
        let right1 = rright1.includes("1") ? rright1.replace(/0+$/, "") : "0";

        document.getElementById("output-display").value = left1 + "." + right1;
        return left1 + "." + right1;

    } else {
        let yu = valhex1.split("");

        let x = [];
        let rk;
        for (i1 = 0; i1 < yu.length; i1++) {
            rk = String(yu[i1]);
            switch (rk) {
                case '1':
                    x.push("0001")
                    break;
                case '2':
                    x.push("0010")
                    break;
                case '3':
                    x.push("0011")
                    break;
                case '4':
                    x.push("0100")
                    break;
                case '5':
                    x.push("0101")
                    break;
                case '6':
                    x.push("0110")
                    break;
                case '7':
                    x.push("0111")
                    break;
                case '8':
                    x.push("1000")
                    break;
                case '9':
                    x.push("1001")
                    break;
                case 'A':
                    x.push("1010")
                    break;
                case 'B':
                    x.push("1011")
                    break;
                case 'C':
                    x.push("1100")
                    break;
                case 'D':
                    x.push("1101")
                    break;
                case 'E':
                    x.push("1110")
                    break;
                case 'F':
                    x.push("1111")
                    break;
                default:
                    x.push("0000")
                    break;
            }
        }


        document.getElementById("output-display").value = x.join("").replace(/^0+/, "").split("").map(Number).join("");
        return x.join("").replace(/^0+/, "").split("").map(Number).join("");
    }

}


function hextoct(valhex) { //✅
    let valhex1 = valhex;
    let bin = hextobin(valhex1);
    let oct = bintoct(bin);
    document.getElementById("output-display").value = oct;
}


function hextodec(valhex) {//✅
    let valhex1 = valhex;
    let bin = hextobin(valhex1);
    let dec = bintodec(bin);
    document.getElementById("output-display").value = dec;


}