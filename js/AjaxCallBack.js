let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Mins:" + date.getSeconds() + "Secs";
    
}
function makePromiseCall(methodType, url, async = true, data = null) {
    return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        //console.log("State Change called. Ready State : " + xhr.readyState + " Status :" + xhr.status);
        if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status === 201){
                resolve(xhr.responseText);
            }
            else if(xhr.status >= 400){
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
                console.log("XHR Failed");
            }
        }
    }
    xhr.open(methodType, url, async);
    if(data){
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    }
    else xhr.send();
    console.log(methodType + " request sent to the server");
    }); 
}

const getURL = "http://127.0.0.1:3000/employees/2";
makePromiseCall("GET", getURL, true)
    .then(responseText => {
        console.log("Get User data: " + responseText)
    })
    .catch(error => console.log("Get Error Status : " + JSON.stringify(error)));


const deleteURL = "http://localhost:3000/employees/4";
makePromiseCall("DELETE", deleteURL, false)
    .then(responseText => {
        console.log("User Deleted :  " + responseText)
    })
    .catch(error => console.log("Delete Error Status: " + JSON.stringify(error)));


const postURL = "http://localhost:3000/employees";
const emplData = {"name":"Harry","salary":"5000"};
function userAdded(data){
    console.log("User Added :" + data);
}
makePromiseCall("POST", postURL, true, emplData)
    .then(responseText => {
        console.log("User Added :  " + responseText)
    })
    .catch(error => console.log("Post Error Status: " + JSON.stringify(error)));