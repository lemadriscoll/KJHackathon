$(document).ready(function() {
	
	//Do the things when you click on every subway station
	$('.map-holder a').each(function() {
		var id = $(this).attr('id');


		$(this).bind({
   			click: function() {
    			$(this).toggleClass("active");
    			$(".active").not($(this)).removeClass('active');
				if ($(this).hasClass('active')) {
					selectStation();
				} else {
					deselectStation();
				}
   			},
   			mouseover: function() {
   				$(this).css('cursor','pointer').attr('title', hoverText());
    		}, function() {
        		$(this).css('cursor','auto');
   			}
 		});

		adjustTopPadding();	
	});
}); //End documentready

selectStation = function() {
	var line1data=["predicted delay at porter: 30min","published delay at porter: 10min","predicted delay at harvard: 15min","published delay at harvard: 15min"];
	var line2data=["predicted delay at coolidge corner: 30min","published delay at coolidge corner: 10min","predicted delay at boylston: 15min","published delay at boylston: 15min"];
	var line3data=[];

	if (line1data!='') {
		var line1Section=$('#line1Section');
		var linetype='red'; // get from data
		line1Section.html(sectionText(linetype));
		var line1obj=$('#line1Delays');
		line1obj.html(delaysForLine(line1data));
	}
	if (line2data!='') {
		var line2Section=$('#line2Section');
		var linetype='green'; // get from data
		line2Section.html(sectionText(linetype));
		var line2obj=$('#line2Delays');
		line2obj.html(delaysForLine(line2data));
	}
	if (line3data!='') {
		var line3Section=$('#line3Section');
		var linetype='orange'; // get from data
		line3Section.html(sectionText(linetype));
		var line3obj=$('#line1Delays');
		line3obj.html(delaysForLine(line3data));
	}

	// scroll down to the list of alerts
	if (line1data!='') {
    	$('html,body').animate({
        	scrollTop: $("#line1Section").offset().top},'slow');
	}
}

function deselectStation() {
	$('#line1Section').html('');
	$('#line1Delays').html('');
	$('#line2Section').html('');
	$('#line2Delays').html('');
	$('#line3Section').html('');
	$('#line3Delays').html('');
}

function sectionText(linetype) {
    // Create the list element:
    var section=document.createElement('section');
	var content = document.createTextNode('Delays for the '+linetype+' line:');
	section.appendChild(content);

    return section;
}

function delaysForLine(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

function hoverText() {
	var predictedDelayTime='20min';
	var publishedDelayTime='10min';
	var tooltip='Predicted Delay: '+predictedDelayTime+'\n'+'Published Delay: '+publishedDelayTime;
	return tooltip;
};

function adjustTopPadding() {
		var headerheight = $('.header').height();
	  	//console.log(headerheight);
	  	headerheight = headerheight;
		$('.main').css("padding-top", ""+headerheight+"px");	  
	}
