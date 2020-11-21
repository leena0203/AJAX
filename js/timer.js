function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Mins:" + date.getSeconds() + "Secs";
    
}
function showSessionExpire(){
    console.log("Activity-B: Your session expired at "+showTime());
}
console.log("Activit-A: Trigger Activity-B at "+showTime());
setTimeout(showSessionExpire, 6000);
console.log("Activity-A: Trigger Activity-B at"+showTime()+ "will execute after 6 secs");