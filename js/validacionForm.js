function validacion()
{
valor=document.getElementById("nombre").value;
if(valor==null||valor.length==0)
{
alert('Debe ingresar su\nNombre Completo');
return false;
}

valor=document.getElementById("mail").value;
if(!(/^[a-z]([\w\.]*)@[a-z]([\w\.]*)\.[a-z]{2,3}$/.test(valor)))
{
alert('Debe ingresar una\nCASILLA DE CORREO VÁLIDA');
return false;
}

valor=document.getElementById("telefono").value;
if(valor==null||valor.length==0)
{
alert('Debe ingresar un\nTELÉFONO DE CONTACTO');
return false;
}

valor=document.getElementById("eventos").selectedIndex;
if(valor==0)
{
	alert('Debe seleccionar un\nMOTIVO DE CONTACTO');
	return false;
}

valor=document.getElementById("mensaje").value;
if(valor==null||valor.length==0)
{
alert('Debe ingresar un\nMENSAJE');
return false;
}
return true;
}

nodoValidacion=document.getElementById("formulario");
nodoValidacion.setAttribute("onSubmit", "return validacion();");