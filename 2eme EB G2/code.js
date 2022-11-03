function name()
{
	a=f.a.value;
	if((a.length>=20)||(a.length<=0))
	{
		alert('nom invalid');
		return false;
	}
	return true;
}
function email()
{
	b=f.b.value;
	if((b.indexOf("@")==-1)||(b.indexOf(".")==-1))
	{
		alert('email invalid');
		return false;
	}
	return true;
}
function message()
{
    c=f.c.value;
    if(c.length=='')
    {
		alert('message invalid');
		return false;	
	}
	return true;

}
function verif()
{
	return name()&&email()&&message();
}