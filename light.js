let btn = document.getElementById('btn');
let bulb = document.getElementById('bulb');
let mq = document.getElementById('mq');

btn.addEventListener('click', toggleBulb);
    function toggleBulb(){

        if(btn.textContent.includes('On') && mq.textContent.includes('On')){
            bulb.src = "./onbulb.png";
            btn.textContent = "Turn Off";
            mq.textContent = "Turn Off";
            btn.className = "btn btn-outline-success";
            btn.style.boxShadow = "3px 3px 4px 4px green";
            mq.style.color = "green";
            mq.style.boxShadow = "3px 3px 4px 4px green";
            bulb.style.boxShadow = "3px 3px 4px 4px green";
            mq.style.padding = "10px";
        }
        else{
            bulb.src = "./bulb.png";
            btn.textContent = "Turn On";
            mq.textContent = "Turn On";
            btn.className = "btn btn-outline-danger";
            btn.style.boxShadow = "3px 3px 4px 4px red";
            mq.style.color = "red";
            mq.style.boxShadow = "3px 3px 4px 4px red";
            bulb.style.boxShadow = "3px 3px 4px 4px red";
            mq.style.padding = "10px";
        }
    }