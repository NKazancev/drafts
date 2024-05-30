function getTimeDifference(date) {
    let currentDate = new Date();
    let hours;
    let minutes;

    if (date > currentDate) {
        hours = (date - currentDate) / 3600000;
        let ceilHours = Math.ceil(hours);
        minutes = Math.ceil(60 - (ceilHours - hours) * 60);
    }
    if (date < currentDate) {
        hours = (currentDate - date) / 3600000;
        let ceilHours = Math.ceil(hours);
        minutes = Math.floor(60 - (ceilHours - hours) * 60);
    }

    let floorHours = Math.floor(hours);
    if (minutes == 60) {
        minutes = '0';
        floorHours++;
    }
    
    let resultHours;
    let resultMinutes;
    floorHours == 1 ? resultHours = floorHours + ' hour' : resultHours = floorHours + ' hours'; 
    minutes == 1 ? resultMinutes = minutes + ' minute' : resultMinutes = minutes + ' minutes'; 
    
    return `${resultHours} and ${resultMinutes} time difference from now.`;
}