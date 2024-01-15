function checkUser(){
    let nik = document.getElementById("nikname").value.trim();
    let date = document.getElementById("DOB").value;
    
    console.log("Input values:", nik, date);
    
    let arry = [
        ["Mama", "1983-09-30"],
        ["Papa", "1972-04-11"],
        ["Pastry", "2006-11-09"],
        ["rexy", "2007-03-12"],
        ["sexy", "2006-07-11"],
        ["chutu", "2007-10-19"]
    ];
    
    let x = -1;
    
    for (let i = 0; i < arry.length; i++) {
        let arryDate = arry[i][1].replace(/-/g, '');
        let inputDate = date.replace(/-/g, ''); 
    
        if (nik === arry[i][0].trim() && inputDate === arryDate) {
            x = i;
            break;
        }
    }
    
    if (x !== -1) {
        if(x===0){
            window.location.href="HappyBirthdayMama.html"
        }
        else if(x===1){
            window.location.href="HappyBirthdayPapa.html"
        }
        else if(x===2){
            window.location.href="HappyBirthdayPastry.html"
        }
        else if(x===3){
            window.location.href="HappyBirthdayRahim.html"
        }
        else if(x===4){
            window.location.href="HappyBirthdaySharim.html"
        }
        else if(x===5){
            window.location.href="HappyBirthdayMaaz.html"
        }
        else{
            alert("sorry for the inconvenience but an error has occurred please try again or if this continues contact me @ammarasif629")
        }
    } else {
        alert("User not found. Please try again or contact me personally @ammarasif629");
    }
}