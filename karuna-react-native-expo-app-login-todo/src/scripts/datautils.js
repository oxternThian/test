



function savaLocal(userData, storage) {
    console.log('here->savaLocal')
    //localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem(storage, JSON.stringify(userData));
}



function getLocal(storage) {
    //const data = localStorage.getItem("userData");
    const d = localStorage.getItem(storage);
    console.log("data: ", JSON.parse(d));
    return JSON.parse(d)
}

export { savaLocal, getLocal }