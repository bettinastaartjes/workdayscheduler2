// the method to execute code when the DOM is loaded
$(document).ready(function() {
    //these are what saves the save button clicks
    $('.saveBtn').on('click', function () {
        //these are the values for that to save
        var value = $(this)
            .siblings('.description')
            .val();
        var time = $(this)
            .parent()
            .attr('id');
        
        //then save it in the local storage
        localStorage.setItem(time,value);
        //and show that the item was saved like this
        $('.notification').addClass('show');

        // Timeout to remove 'show' class after 5 seconds
    setTimeout(function() {
        $('.notification').removeClass('show');
      }, 5000);
    });
}