function ageS(obj,val) {
	obj.options.length = 0;
	
	for (var i = 0 ; i<100 ;i++ )
	{
		if (i == 0) {
			obj.options[0] = new Option("不限",i);
		}
		else {
			var opt = new Option(i, i);
			obj.options[obj.options.length] = opt;
			opt = null;
		}
	}	
	obj.value = val;
}

function resetAgeTo(start,end) {
	
	end.options.length=0;
	
	var startAge = start.value?parseInt(start.value):0;
	
	for(var a=startAge;a<100;a++) {
		if (a == 0) {
			end.options[0] = new Option("不限", a);
		}
		else {
			var opt = new Option(a, a);
			end.options[end.options.length] = opt;
			opt = null;
		}
	}
	a = null;
	startAge = null;
}