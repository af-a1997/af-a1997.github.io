var menu_btn = document.getElementById("top_tb_menu_btn");
var menu_cont = document.getElementById("top_tb_menu_contents");
var menu_style = window.getComputedStyle(menu_cont);
var menu_display_status = 0;

document.addEventListener("touchstart", function(e){
	if(!menu_cont.contains(e.target) && menu_display_status == 1){
		menu_cont.style.display = "none";
		menu_display_status = 0;
	}
	else if(menu_btn.contains(e.target)){
		if(menu_style.display === "none"){
			menu_cont.style.display = "block";
			menu_display_status = 1;
		}
		else if(menu_style.display === "block"){
			menu_cont.style.display = "none";
			menu_display_status = 0;
		}
	}
	
	console.log("Menu display status = " + menu_display_status);
}, false);