/**
 * Created by User on 5/3/2017.
 */
import moment from 'moment'
export const toDateString = (date,newFormat)=>
{
    let _date = moment(date);
    return _date.format(newFormat).toString()
}
export const toTimeString = (timeInput) =>{
    let timeValue = timeInput;
    let stringR = "";
    let days = Math.floor(timeValue/3600);
    if (days > 0) {
        stringR += days + " days "
    }
    timeValue -= days * 3600;
    let hours = Math.floor(timeValue/60);
    if (hours > 0) {
        stringR += hours + " hours "
    }
    timeValue -= hours * 60;
    stringR += timeValue + " mins "
    return stringR;
}