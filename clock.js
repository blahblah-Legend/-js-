const Clocktext = document.querySelector("#clock")
const Datetext = document.querySelector("#date")

const weekday = ["일", "월", "화", "수", "목", "금", "토"]

change = () => {
    const time = new Date(); 
    const year = time.getFullYear()
    const month = time.getMonth() +1;
    const day = time.getDate()
    const week = weekday[time.getDay()]
    const hour = String(time.getHours()).padStart(2, "0")
    const minute = String(time.getMinutes()).padStart(2, "0")
    const second = String(time.getSeconds()).padStart(2, "0")

    Clocktext.innerText = `${hour}:${minute}:${second}`
    Datetext.innerText = `${year}년 ${month}월 ${day}일 ${week}요일`
}

change()

setInterval(change, 1000)