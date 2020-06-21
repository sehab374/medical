

var lightBoxContainerId = document.getElementById('lightBoxContainerId');
var lightBoxItemId = document.getElementById('lightBoxItemId');
var lightBoxContainerId2 = document.getElementById('lightBoxContainerId2');
var lightBoxItemId2 = document.getElementById('lightBoxItemId2');
var lightBoxContainerId3 = document.getElementById('lightBoxContainerId3');
var lightBoxItemId3 = document.getElementById('lightBoxItemId3');
var lightBoxContainerId4 = document.getElementById('lightBoxContainerId4');
var lightBoxItemId4 = document.getElementById('lightBoxItemId4');
var q4 = document.getElementById('q4');
var q3 = document.getElementById('q3');
var q2 = document.getElementById('q2');
var q1 = document.getElementById('q1');
var close = document.getElementById('close');

q1.addEventListener('click' , function(){
    lightBoxContainerId.style.display = 'flex';
})

q2.addEventListener('click' , function(){
    lightBoxContainerId2.style.display  = 'flex';
})

q3.addEventListener('click' , function(){
    lightBoxContainerId3.style.display  = 'flex';
})

q4.addEventListener('click' , function(){
    lightBoxContainerId4.style.display  = 'flex';
})

function closepage()
{
    lightBoxContainerId.style.display = "none";
    lightBoxContainerId2.style.display = "none";
    lightBoxContainerId3.style.display = "none";
}
close.addEventListener('click' ,function(){
    closepage()
} )


