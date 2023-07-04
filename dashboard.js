let a = JSON.parse(localStorage.getItem("userData"));
let getElement = document.getElementById("userdisplay");
a.map((value)=>{
    getElement.textContent = 'Hello! ' + value.person;
});
document.getElementById('db-btn').addEventListener('click',() => {
    // window.location.href = 'index.html';
});

// function logbtn(){
//     window.location.href = 'index.html';
// }
// logbtn();