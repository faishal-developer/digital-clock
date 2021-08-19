let getById = (id) =>document.getElementById(id);

let date = () =>{
    let date = new Date();
    let hours =  date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return [hours, minutes, seconds,date]
}

setInterval(function(){
    let dateArr = date()
    getById('hours').innerText = dateArr[0];
    getById('minute').innerText = dateArr[1];
    getById('seconds').innerText = dateArr[2];
    let dateString = dateArr[3].toLocaleString('en-US', { hour: 'numeric', hour12: true });
    let amOrPm = dateString.replace(/[0-9]+/,'') ;
    getById('am-pm').innerText = amOrPm;
},1000)

