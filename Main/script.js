// the method to execute code when the DOM is loaded
$(document).ready(function() {
    //these are what saves the save button clicks
    $('.saveBtn').on('click', function () {
        // these are the values for that to save
        var value = $(this).siblings('.description')
        .val();
        var time = $(this).parent().attr('id');
        // then save it in the local storage
        localStorage.setItem(value, time);
        // and show that the item was saved like this
        $('.notification').addClass('show');

    });

    function hourUpdater() {
        // get current number of hours
        var currentHour = moment().hours();

        // loop over time blocks; the split (put HOUR!)
        $('.time-block').each(function() {
            var blockHour = parseInt($(this).attr('id').split('hour')[1]);
  
        // to check the time and add classes for the colored backgrounds (red past, green future)
        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    hourUpdater();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
    // load saved data from localStorage
    $('#hour9 .description').val(localStorage.getItem('hour9'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
    $('#hour12 .description').val(localStorage.getItem('hour12'));
    $('#hour13 .description').val(localStorage.getItem('hour13'));
    $('#hour14 .description').val(localStorage.getItem('hour14'));
    $('#hour15 .description').val(localStorage.getItem('hour15'));
    $('#hour16 .description').val(localStorage.getItem('hour16'));
    $('#hour17 .description').val(localStorage.getItem('hour17'));
  
    // display current day on page
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  });