	$(document).ready(function() {
	  $('#topics li a').click(function() {
	    // fetch the class of the clicked item
	    var ourClass = $(this).attr('class');
	
	    // reset the active class on all the buttons
	    $("#topics li").removeClass('active');
	    
	    // update the active state on our clicked button
	    $(this).parent().addClass('active');
	
	    if(ourClass == 'all') {
	      // show all our items
	     $('#topicList').children('li').show();
	    }
	    else {
	      // hide all elements that don't share ourClass
	       $('#topicList').children('li:not(.'+ourClass+')').hide();
	      // show all elements that do share ourClass
	      $('#topicList').children('li.'+ourClass).show();
	    }
	    return false;
	  });
	});
