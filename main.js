let Fajr =document.getElementById("Fajr");
let Dhuhr =document.getElementById("dohr");
let Asr =document.getElementById("asr");
let Maghrib =document.getElementById("maghrib");
let Isha =document.getElementById("icha");
let shorouk = document.getElementById("shorouk");
let time = document.getElementById("time");
let hijri = document.getElementById("hijri");




const getdat = (apilink) => {
    return new Promise((resolv, rjact) => {
        let reqouset = new XMLHttpRequest();
        reqouset.onload = function (params) {
            if (this.readyState == 4 && this.status == 200) {
                resolv(JSON.parse(this.responseText));
                
                
            }
            else {
                rjact(console.error("خطا في api زين"))
            }
        };
        reqouset.open("GET",apilink);
        reqouset.send()
    })
}
getdat("https://api.aladhan.com/v1/timingsByCity?city=Hammam%20Righa&country=Algeria&method=1").then ( 
 (resul)=> {
  
  
   
    
    fajr.innerHTML = resul.data.timings.Fajr;  
    shorouk.innerHTML = resul.data.timings.Sunrise;
    Dhuhr.innerHTML = resul.data.timings.Dhuhr;
    Asr.innerHTML = resul.data.timings.Asr;
    Maghrib.innerHTML = resul.data.timings.Maghrib;
    Isha.innerHTML = resul.data.timings.Isha;
    hijri.innerHTML = resul.data.date.hijri.date
  time.innerHTML = resul.data.date.gregorian["date"]
    
   

 })
