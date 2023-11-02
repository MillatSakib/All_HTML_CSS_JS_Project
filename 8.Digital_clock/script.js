function showTime() {
    console.log('hello')
    const date = new Date;
    var hour = date.getHours();
    
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var hourAmPM = parseInt(hour/12);
    var hourDay = (hour%13)+1;

    
    
    
    if(hourAmPM){
        document.getElementById('ampm').innerHTML = "PM";
    }else{
        document.getElementById('ampm').innerHTML = "AM";
        hourDay--;
    }
    if (second>9){
        document.getElementById('second').innerHTML = second;
    }else{
        document.getElementById('second').innerHTML = "0"+second;
    }
    if (minute > 9){
        document.getElementById('minute').innerHTML = minute;
    }else{
        document.getElementById('minute').innerHTML = "0" + minute;
    }
    if (hourDay > 9){
        document.getElementById('hour').innerHTML = hourDay;
    }else{
        document.getElementById('hour').innerHTML = "0" + hourDay;
    }
}


setInterval(showTime, 1000);