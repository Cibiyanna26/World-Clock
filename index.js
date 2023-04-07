
let days = ['Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday','Sunday'];
let months = ['January','Febraury','March','April','May','June','July','August','September','October','November','December']; 

let h , m , s , present_time , day , month , year;
function myclock(){
        let time = new Date();
        h = time.getHours();
        m = time.getMinutes();
        s = time.getSeconds();
        year = time.getFullYear();
        day = time.getDay();
        month = time.getMonth();
        console.log(h+':'+m+':'+s);
        present_time = h + ':' + m + ':' + s;
        document.querySelector(".time").textContent = present_time;
        document.querySelector(".month").textContent = months[month];
        document.querySelector(".day").textContent = days[day-1];
        document.querySelector(".year").textContent = year;
}




setInterval(myclock,1000);
