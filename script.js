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



