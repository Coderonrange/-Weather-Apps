let city = document.getElementById("city");
 let type = document.getElementById("type");
 let temp = document.getElementById("temp");
 let image = document.getElementById("img");
 let input = document.getElementById("inp") ;
 let API_key = "6d83156e4e40ca97d0c6924b832fe00c";

 const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData =await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if(jsonData.cod == 400){
        alert("Please Enter Location")
        image.src="error1.png";
        city.innerHTML="";
        temp.innerHTML="";
        type.innerHTML="";
    }
    if(jsonData.cod == 404){
        alert("Please Enter Write Location")
        image.src="error2.png";
        city.innerHTML=search;
        temp.innerHTML="";
        type.innerHTML="";
    }
    city.innerHTML=search;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;

    if(type.innerHTML == "Clouds"){
        image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4E1rQ9kDGn9B3sAeW1sVyfte9RtncaVGpmA&usqp=CAU"
    }else if(type.innerHTML == "Clear"){
        image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTPNuS6rOTFVJFZe_Cm1s-Ky9kU6QXZyLug&usqp=CAU"
    }else if(type.innerHTML == "Rain"){
        image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4E1rQ9kDGn9B3sAeW1sVyfte9RtncaVGpmA&usqp=CAU"
    }else if(type.innerHTML == "Snow"){
        image.src="https://media.istockphoto.com/id/1430321498/vector/vector-snow-snow-png-snow-on-an-isolated-transparent-background-snowfall-blizzard-winter.jpg?s=612x612&w=0&k=20&c=aXEWDv7ZPTbJFQtGIM8fXS_clZ6uH10rhr6M99boiDQ="
    }else if(type.innerHTML == "Haze"){
        image.src="data:image/jpeg;base64,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"
    }else if(type.innerHTML == "Strom"){
        image.src="https://www.pngkey.com/png/full/95-956696_lightning-thunderstorm-png-transparent-images-png-images-storm.png"
    }
    input.value=""
 }

 function myFun(){
    search=input.value;
    data(search)
 }