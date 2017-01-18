(function(){
	function a(q) { //+-
		return q.replace(/([\+\-]?[0-9]+)([\+\-])([0-9]+)/, function(){
			var l = parseInt(RegExp.$1), pm = RegExp.$2, r = parseInt(RegExp.$3);
			return signed(pm == '+' ? l + r : l - r);
		})
	}

	function m(q) { //*
		return q.replace(/([\+\-]?[0-9]+)\*([\+\-]?[0-9]+)/, function(){
			return signed(parseInt(RegExp.$1) * parseInt(RegExp.$2));
		})
	}

	function p(q) { //()
		return q.replace(/\(([^\(\)]+)\)/, function(){
			var q = RegExp.$1, q2;
			while((q2 = m(q)) != q) q = q2;
			while((q2 = a(q)) != q) q = q2;
			return q;
		}).replace(/\+\+|\-\-/g, '+').replace(/\+\-|\-\+/g, '-');
	}

	function signed(i) { return i >= 0 ? '+' + i : i; }

	document.getElementById("cB").onclick = function(){
		var q = '(' + document.getElementById("cQ").value + ')', q2;
		while((q2 = p(q)) != q) q = q2;
		document.getElementById("cA").value = parseInt(q);
	}
})()
