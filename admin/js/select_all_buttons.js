(function( $ ){
  $(document).ready(function(){
    /*
    * select_all_buttons uses jquery to select a group of states based of
    * select button.
    */

    /*
     * SETTING UP A NEW CHECK BUTTON
     * use the following querySelector:
     * .checkall li input:checkbox[value=${given-select-all-value}]) 
     *  On the website - set the value to ${given-select-all-value} to give it
     *  the select all functionality
     */

    /*
     * VALUE: countrywide
     * SELECTION RANGE: selects all check boxes
     */
    $('.checkall li input:checkbox[value="countrywide"]').click(function() {
      $('.checkallhere').find(':checkbox').attr('checked', this.checked);
    });

    /* --- END COPY THIS CODE --- */   

    /*---------
      EDIT CODE HERE FOR SITUATIONAL USAGE
      ---------*/
    /*
     * VALUE: northeast 
     * SELECTION RANGE: selects all northeast based check boxes
     */

    $('.checkall li input:checkbox[value="northeast"]').click(function() {
      
      var northeast = [
        "Connecticut", 
        "Maine", 
        "Massachusetts",
        "New\\ Hampshire", 
        "New\\ Jersey", 
        "New\\ York",
        "Rhode\\ Island",
        "Vermont", 
      ];

      $.each( northeast, function( i,val ) {

        var checkycheck =  $(":checkbox[value="+val+"]").is(":checked");

        $(":checkbox[value="+val+"]").prop("checked",!checkycheck);

      });


    });
    //END --- NORTH EAST SELECTED
     /*
     * VALUE: midwest 
     * SELECTION RANGE: selects all midwest based check boxes
     */


      $('.checkall li input:checkbox[value="midwest"]').click(function() {

        var midwest = [
          "Minnesota",
          "Iowa",
          "Missouri",
          "Wisconsin",
          "Illinois",
          "Michigan",
          "Indiana",
          "Kentucky",
          "Ohio",
          "West\\ Virginia",
          "Pennsylvania", 
          "Virginia", 
          "Delaware", 
          "Maryland",
          "District\\ of\\ Columbia", 
        ];

        $.each( midwest, function( i,val ) {

          var checkycheck =  $(":checkbox[value="+val+"]").is(":checked");

          $(":checkbox[value="+val+"]").prop("checked",!checkycheck);

        });


      });

     /*
     * VALUE: southern 
     * SELECTION RANGE: selects all southern based check boxes
     */

    $('.checkall li input:checkbox[value="southern"]').click(function() {

      var southern = [
        "Alabama", 
        "Arkansas", 
        "Florida",
        "Georgia", 
        "Louisiana", 
        "Mississippi",
        "North\\ Carolina", 
        "Oklahoma", 
        "South\\ Carolina",
        "Tennessee", 
        "Texas", 
      ];

      $.each( southern, function( i,val ) {

        var checkycheck =  $(":checkbox[value="+val+"]").is(":checked");

        $(":checkbox[value="+val+"]").prop("checked",!checkycheck);

      });


    });
    //END --- SOUTHERN SELECTED

    /*
     * VALUE: western 
     * SELECTION RANGE: selects all western based check boxes
     */

    $('.checkall li input:checkbox[value="western"]').click(function() {

      var western = [
        "Arizona", 
        "California", 
        "Colorado",
        "Idaho", 
        "Kansas", 
        "Missouri",
        "Nebraska", 
        "Nevada",
        "New\\ Mexico", 
        "North\\ Dakota", 
        "Oregon",
        "South\\ Dakota", 
        "Utah", 
        "Washington",
        "Wyoming",
        "Alaska",
        "Hawaii",
      ];

      $.each( western, function( i,val ) {

        var checkycheck =  $(":checkbox[value="+val+"]").is(":checked");

        $(":checkbox[value="+val+"]").prop("checked",!checkycheck);

      });


    });
    //END --- WESTERN SELECTED
    /*
     * VALUE: business-auto 
     * SELECTION RANGE: selects all business-auto based check boxes
     */

    //BOP States - Business Auto States - BOP & Business Auto States

    $('.checkall li input:checkbox[value="business-auto"]').click(function() {

      var business = [
        "Washington",
      ];

      $.each( business, function( i,val ) {

        var checkycheck =  $(":checkbox[value="+val+"]").is(":checked");

        $(":checkbox[value="+val+"]").prop("checked",!checkycheck);

      });


    });
    //END --- BOP SELECTED
    /*
     * VALUE: bop-auto 
     * SELECTION RANGE: selects all bop-auto based check boxes
     */
    //START --- BOPAuto SELECTED
    $('.checkall li input:checkbox[value="bop-auto"]').click(function() {
      // This finds :checkbox and checks all 
      // Edit $(this) to class of box if not in the same section
      var bopauto = [
        "California",
        "Texas",
        "Minnesota",
        "Illinois",
        "Indiana",

        "Ohio",
        "Pennsylvania",
        "New\\ York",
        "New\\ Jersey",
        "North\\ Carolina",

        "Georgia",
        "Florida",

      ];

      $.each( bopauto, function( i,val ) {

        var checkycheck =  $(":checkbox[value="+val+"]").is(":checked");

        $(":checkbox[value="+val+"]").prop("checked",!checkycheck);

      });


    });
    //END --- BOPAUTO SELECTED
    /*
     * VALUE: bop 
     * SELECTION RANGE: selects all bop based check boxes
     */

    $('.checkall li input:checkbox[value="bop"]').click(function() {

      var bop = [
        "Vermont",
        "North\\ Hampshire",
        "Rhode\\ Island", 
        "Maryland",
        "Virginia",

        "West\\ Virginia", 
        "South\\ Carolina", 
        "Kentucky",
        "Tennessee", 
        "New\\ Mexico", 

        "Missouri",
        "Alabama",
        "Wisconsin",
        "Michigan",
        "Nebraska", 

        "Oklahoma", 
        "Colorado",
        "Arizona", 
        "Idaho", 
        "Mississippi ", 

        "Nevada",
        "Oregon",
        "Utah", 

      ];

      $.each( bop, function( i,val ) {

        var checkycheck =  $(":checkbox[value="+val+"]").is(":checked");

        $(":checkbox[value="+val+"]").prop("checked",!checkycheck);

      });


    });
    //END --- AUTO SELECTED

    /* --- END EXTRA CODE --- */




    /****** */
  });
  $.fn.myfunction = function() {
    return this;
  };
})(jQuery);

