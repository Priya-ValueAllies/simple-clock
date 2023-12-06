function showTime(){
    var date = new Date()
    var h = date.getHours()
    var min = date.getMinutes()
    var sec=  date.getSeconds()

    var mm = 'AM'
    if(h == 0){
        h =12
    }

    if(h>12){
        h = h - 12
        mm = 'PM'
    }

    h = (h<10)?'0'+h : h
    min = (min<10)? '0'+min : min
    sec = (sec<10) ? '0'+ sec : sec



    var time = h + ":" + min + ":" + sec + " " + mm
    document.getElementById('MyClockDisplay').innerHTML = time
    setTimeout(showTime,1000)
 
}


showTime()