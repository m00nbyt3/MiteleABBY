var i = 20;

function payload()
{
	setTimeout(function()
	{
    	document.querySelector("html").setAttribute("style", "overflow: 0;");
		document.body.setAttribute("style", "overflow: 0;");
    	if (--i)
    		payload(i);
  }, 500)
}

payload();