const clock = $(".todo-time");

function getTime() {
    const date = new Date();
    const years = String(date.getFullYear());
    const months = String(date.getMonth()+1);
    const dates = String(date.getDate());
    const weekday = new Array();
    weekday[0] = "일";
    weekday[1] = "월";
    weekday[2] = "화";
    weekday[3] = "수";
    weekday[4] = "목";
    weekday[5] = "금";
    weekday[6] = "토";
    const day = String(weekday[date.getDay()]);
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    return `${years}.${months}.${dates}.(${day}) ${hours}:${minutes}:${seconds}`;
};

setInterval(()=>{clock.html(getTime());},1000); // 익명함수, 1초 = 1000
