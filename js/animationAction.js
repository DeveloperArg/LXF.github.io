window.onscroll=function(){myFunction()};

function myFunction(){
		if(document.documentElement.scrollTop > 200 )
{
document.getElementById("cuadro1").className="Animation";
}
else {
	document.getElementById("cuadro1").className="";
}

if (document.documentElement.scrollTop > 800 )

	{document.getElementById("cuadro2").className="Animation";}
else 
	{
	 document.getElementById("cuadro2").className="";}

if (document.documentElement.scrollTop > 2200 )

	{document.getElementById("cuadro3").className="Animation";}
else 
	{
	 document.getElementById("cuadro3").className="";}

	 if (document.documentElement.scrollTop > 2700 )

	{document.getElementById("cuadro4").className="Animation";}
else 
	{
	 document.getElementById("cuadro4").className="";}
}