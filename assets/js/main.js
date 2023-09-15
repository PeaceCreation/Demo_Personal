$(document).ready(function(){
    $("button").click(function(){
        $("h1").hide();
    })
})


const date = document.getElementById("date");

const year = new Date().getFullYear();

date.innerHTML = year;