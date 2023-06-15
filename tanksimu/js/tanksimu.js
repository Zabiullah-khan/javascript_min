var x=0;
var y=0;
var rot=47;
$(document).ready(function() {



	var get_size = () => {
		var simu_hig=$('.simu-container').height()
		var simu_wid=$('.simu-container').width()

		var tank_hig=$('#tank').height()
		var tank_wid=$('#tank').width()
		
		var size_values = {
			'simu_hig':simu_hig,
			'simu_wid':simu_wid,
			
			"tank_hig":tank_hig,
			"tank_wid":tank_wid,
		}
		
		return size_values
	}
	
	var get_values = get_size()
	
	var key_funcs = {
		"arrow_down" : function (){
						$("#tank").css({'margin-top':x+'px'});
						x+=1;
						if (x==parseInt(get_values.simu_hig)-parseInt(get_values.tank_hig)) {
							x=0;
							$(this).css({'margin-top':x+'px'})
						}
						},
		
		"arrow_up" : function (){
					$("#tank").css({'margin-top':x+'px'});
					x-=1;
					if (x== -10) {
						x=0;
						$(this).css({'margin-top':x+'px'});
						}
						},
		
		"arrow_right":function (){
						$("#tank").css({'margin-left':y+'px'});
						y+=1;
					
						if (y==parseInt(get_values.simu_wid)-parseInt(get_values.tank_wid)) {
						y=0;
						
						$(this).css({'margin-left':y+'px'});
						
						}
						},
						
		"arrow_left":function (){
					$("#tank").css({'margin-left':y+'px'});
					y-=1;
					if (y==-10) {
						y=0;
						$(this).css({'margin-left':y+'px'});
					}
					},
					
		"rotate_right":function (){
					 rot-=90
					$('#tank-img').animate(
						    { deg: rot},
						    {
						      duration: 1200,
						      step: function(now) {
							$(this).css({ transform: 'rotate(' + now + 'deg)' });
						      }
						}
						);
						 },
		
		"rotate_left":function (){
					 rot+=90
					$('#tank-img').animate(
						    { deg: rot},
						    {
						      duration: 1200,
						      step: function(now) {
							$(this).css({ transform: 'rotate(' + now + 'deg)' });
						      }
						}
						);
						 }
		
		
	};
	
	var hold;
	function start(do_this){
			hold=setInterval(()=>{
				do_this()
			},100)
			
			$("#move-down, #move-up, #move-left, #move-right, #rotate-right, #rotate-left").on('mouseup touchend',function(){clearInterval(hold)})
				}
				
	$("#move-down, #move-up, #move-left, #move-right, #rotate-right, #rotate-left").on("mousedown touchstart",function(c){
		var get_btn=c.target.id
		switch (get_btn) {
			case 'move-down':
				 start(do_this=key_funcs.arrow_down)
				 break
			case 'move-up':
				start(do_this=key_funcs.arrow_up)
				break
			case "move-left":
				start(do_this=key_funcs.arrow_left)
				break
			case "move-right":
				start(do_this=key_funcs.arrow_right)
				break
			case "rotate-right":
				start(do_this=key_funcs.rotate_right)
				break
			case "rotate-left":
				start(do_this=key_funcs.rotate_left)
				break
			
			
				
		}
	});
	
	$(document).keydown(function(e){
		
		let v=e.keyCode
		switch(v) {
		
			case 40: 
				key_funcs.arrow_down()
				break;
			
			case 38:
				key_funcs.arrow_up()
				break;
			
			case 39:
				key_funcs.arrow_right()
				break;
				
			case 37:
				key_funcs.arrow_left()
				break;
							
			case 68:
				key_funcs.rotate_right()
				break;
			
			case 65:
				key_funcs.rotate_left()
				break;				
		}
			
	});
	
});

	

	

