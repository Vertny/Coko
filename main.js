var Guppy=[];
function submit()
{
    var name1 = document.getElementById("Hero1").value;
    var name2 = document.getElementById("Hero2").value;
    var name3 = document.getElementById("Hero3").value;
    var name4 = document.getElementById("Hero4").value;

Guppy.push(Hero1);
Guppy.push(Hero2);
Guppy.push(Hero3);
Guppy.push(Hero4);

console.log(Guppy);
document.getElementById("Techno").innerHTML=Guppy;
document.getElementById("submit").style.display ="none";
document.getElementById("sort").style.display="imline-block";

}
function sorting()
{Guppy.sort();
console.log(Guppy);
document.getElementById("Techno").innerHTML=Guppy;
}


