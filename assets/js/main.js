 function getYear(){
       var d = new Date();
       return d.getFullYear();
   }
document.getElementById('current-year').innerHTML = getYear();
    