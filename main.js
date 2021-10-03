/* hayo ngapain liat-liat sc nya */


function btnDown() {
	// body...
	document.getElementById('timerDown').innerText = "please waite...";
	//timer down
	var myinterval = setTimeout(function() {
		document.getElementById('timerDown').style.display = 'none';
		document.getElementById('text').style.display = 'none';
		document.getElementById('icon').style.display = 'block';
		//btn 
		var btn =  document.getElementById('btnClt');
		btn.style.background = "white";
		btn.style.color = "rgb(40, 131, 250)";
		btn.style.borderRadius = "100px";
		btn.style.width = "auto";
		btn.style.height = "auto";
		setTimeout(function() {
			window.location.href = "https://drive.google.com/u/0/uc?id=13_Mw873EGfSr48T07qABlsYgMVV9Xzf8&export=download&/u/0/uc?export=download&confirm=L2bJ&id=13_Mw873EGfSr48T07qABlsYgMVV9Xzf8";
		}, 2000)
	}, 10000);
}
function btnDown2() {
	// body...
	document.getElementById('timerDown2').innerText = "please waite...";
	//timer down
	var myinterval = setTimeout(function() {
		document.getElementById('timerDown2').style.display = 'none';
		document.getElementById('text2').style.display = 'none';
		document.getElementById('icon2').style.display = 'block';
		//btn 
		var btn =  document.getElementById('btnClt2');
		btn.style.background = "white";
		btn.style.color = "rgb(40, 131, 250)";
		btn.style.borderRadius = "100px";
		btn.style.width = "auto";
		btn.style.height = "auto";
		setTimeout(function() {
			window.location.href = "../app/Classroom_SMK_MUHPAcom.wClassroomSMKMUHPA_14335908v0.01.apk";
		}, 2000)
	}, 10000);
}