//калькулятор//
$(document).ready(function() { $('#clickerbut').click(function() { $('#itemclick').html(+$('#itemclick').html()+1.5)
;});});
        $(document).ready(function() { $('#clickerbut').click(function() { $('#itemclick1').html(+$('#itemclick1').html()+73)
;});});
        $(document).ready(function() { $('#clickerbut').click(function() { $('#itemclick2').html(+$('#itemclick2').html()+54.5)
;});});
        $(document).ready(function() { $('#clickerbut').click(function() { $('#itemclick3').html(+$('#itemclick3').html()+0.5)
;});});
//калькулятор//




$(document).ready(function(){
	
    $('.massGo').click( function(){ 
	document.querySelector("#massprogram").style.display = "flex";
	var scroll_el = $(this).attr('href'); 
         
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
       
    });
});


$(document).ready(function(){
	
    $('.massDiet').click( function(){ 
	document.querySelector("#massDiet").style.display = "flex";
	var scroll_el = $(this).attr('href');
        
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 

    });
});



var btn = document.querySelector('.secondblock');
document.addEventListener('click', function(e){
	var _this = e.target;
	if(!_this.matches('.secondblock'))return;
	_this.classList.toggle('animatio');
})
