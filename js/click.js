window.onload = function(){

//lotery running part........
	var turning_pan = document.getElementById('turn');
	var click_btn = document.getElementById('click');
	var words = document.getElementById('words');
	var count = 0;
	var timer = null;


	click_btn.addEventListener('click',function(){
		count++;
		var friends = ['I Want to Stay Alone','MIKI','Doraemon','Dora','Minions','SnowWhite','Donald'];
		var degree = [0, 57, 110, 160, 207, 257, 308];
		var num = Math.floor(Math.random()*7);
		var word;
		turning_pan.style.transform = "rotate("+(2*count*360+degree[num])+"deg)";
		if(num==0){
			word = "Oh no, you want to stay alone, you don't want to play my windmill :(";
		}else{
			word = "oh yeah,  <span style=\"color:#2370ed;font-weight:bold;\">"+friends[num]+"</span>,   come to join me, let's play the windmill together!";
		}

		clearTimeout(timer);
		timer = setTimeout(function(){
			words.innerHTML = word;
		},3000)

	})
}