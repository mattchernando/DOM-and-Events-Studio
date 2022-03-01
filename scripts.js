// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load',function() {
let myBtn = document.getElementById('takeoff');
myBtn.addEventListener('click',function() {
    if (window.confirm("Confirm that the shuttle is ready for takeoff")) {
    let myFlightStatus = document.getElementById('flightStatus');
    myFlightStatus.innerText ="Shuttle In Flight";
    
    let shuttleBg = document.getElementById('shuttleBackground');
    shuttleBg.setAttribute('style','background-color: blue');

    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    shuttleHeight.innerText = "10,000";
    }
});

});