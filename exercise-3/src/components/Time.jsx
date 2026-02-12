function Time() {
    let date = new Date()
    let hour = date.getHours().toLocaleString()
    let amorpm = (hour % 12 == 1) ? "PM" : "AM"
   
    let minute = date.getMinutes().toLocaleString() 
    let second = date.getSeconds().toLocaleString()
    
    return(
        <h2>
            {`${hour} : ${minute} : ${second} ${amorpm}`}
        </h2>
    );
}   

export default Time;