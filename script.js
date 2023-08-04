function addNewWEField() {
    // console.log("Adding new field");


    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("wefield")
    newNode.setAttribute("rows", 3)

    let weOb = document.getElementById("we");
    let weAddbuttonOb = document.getElementById("weaddbutton");

    weOb.insertBefore(newNode, weAddbuttonOb);
}

function addNewAQfield() {
    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("eqfield")
    newNode.setAttribute("rows", 3)

    let aqOb = document.getElementById("aq");
    let aqAddbuttonOb = document.getElementById("aqaddbutton");

    aqOb.insertBefore(newNode, aqAddbuttonOb);
}

//generatingcv//
function generateCV() {

    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = namefield;

    //direct
    document.getElementById("nameT2").innerHTML = namefield;

    //contact

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //address

    document.getElementById("addressT").innerHTML = document.getElementById("AddressField").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instafield").value;
    document.getElementById("linkdinT").innerHTML = document.getElementById("linkdinfield").value;


    //objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    //    work exp
    let wes = document.getElementsByClassName("wefield");

    let str = "";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    //  academic

    let aqs = document.getElementsByClassName("eqfield");

    let str1 = "";

    for (let e of aqs) {
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block"

}

//printcv

function printCV() {
    window.print();
}


