$(document).ready(function() {

	var docheight;
    var docwidth;

	$('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'});

	function setSize(){
		
		//form style custom
		docheight = window.innerHeight;
		docwidth = window.innerWidth;

		$('form.convFormDynamic > textarea.userInputDynamic').css({
			'width' : docwidth - 66,
		});
		$('.wrapper-messages').css({
			'min-height':docheight - 48,
			'height':docheight,
			
		});

		$('div.conv-form-wrapper div#messages').css({
			'min-height':'180px',
			'height':docheight,
			'max-height': docheight - 45
		})
	}

	$('.convFormDynamic').addClass('type2');

	$('form.convFormDynamic > textarea.userInputDynamic').css({
		'margin':'10px',
        'max-width':'unset',
		'height': '40px',
		'font-size' : '1.1rem',
		'padding-top': '10px'
	});

	$('div.conv-form-wrapper div.options div.option').css('font-size','1.1rem');


	$('#userInput').attr('placeholder','여기에 입력해 주세요');

	$(window).resize(function(){
		setSize();
		console.log('resize');
	});

	//init set size
	setSize();
	
});
