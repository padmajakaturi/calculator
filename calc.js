function clearScreen()
{
document.getElementById("p").value="";
}
function del(){
let n=document.getElementById("p").value;
document.getElementById("p").value=n.slice(0,-1);
}
function disp(value)
{
document.getElementById("p").value+=value;
}

function calculate()
{
let m=document.getElementById("p").value;
let n=eval(m);
document.getElementById("p").value=n;
}
function sqrt()
{
let r=document.getElementById("p").value;
let n=Math.sqrt(r)
document.getElementById("p").value=n;
}
