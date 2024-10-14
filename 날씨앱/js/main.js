


const weather = (pos) => {
    const API_KEY = "08cd8447c98e8b835288cec4fad8fffb";
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    const tempE1 = document.querySelector('.temp span');
    const cityE1 = document.querySelector('.city span');

    fetch(url).then((res) => res.json()).then((data) => {
        console.log(data);
        tempE1.innerText = data.main.temp;
        cityE1.innerText = data.name;

    });
}

navigator.geolocation.getCurrentPosition(weather);

// * 변수의 범위 
// 1. 전역변수 
// => 전체 영역에서 사용할 수 있는 변수로 함수 안에 작성하지 않음 
// 2. 지역변수 
// => 함수 내부에서만 사용할 수 있는 변수, 함수 밖에서는 사용 불가 

// 08cd8447c98e8b835288cec4fad8fffb