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

    function checkTheCheckBox(itemsToCheck, shouldBeChecked) {
      $.each( itemsToCheck, function( i,val ) {
        $(":checkbox[value="+val+"]").prop("checked", shouldBeChecked);
      });
    }
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

      checkTheCheckBox(northeast, $(':checkbox[value="northeast"]').is(":checked"));
     
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
        
        checkTheCheckBox( midwest, $(':checkbox[value="midwest"]').is(":checked"));

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
      
      checkTheCheckBox( southern, $(':checkbox[value="southern"]').is(":checked"));

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
        "Montana",
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

      checkTheCheckBox( western, $(':checkbox[value="western"]').is(":checked"));

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
        "Arizona",
        "California",
        "Colorado",
        "Connecticut",
        "Florida",
        "Georgia",
        "Illinois",
        "Indiana",
        "Kentucky",
        "Minnesota",
        "Missouri",
        "Nevada",
        "New\\ Hampshire",
        "New\\ Jersey",
        "New\\ York",
        "North\\ Carolina",
        "Ohio",
        "Oregon",
        "Pennsylvania",
        "South\\ Carolina",
        "Texas",
        "Washington",
        "Wisconsin"
      ];
      
      checkTheCheckBox( business, $(':checkbox[value="business-auto"]').is(":checked"));

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
      
      checkTheCheckBox( bopauto, $(':checkbox[value="bop-auto"]').is(":checked")); 

    });
    //END --- BOPAUTO SELECTED
    /*
     * VALUE: bop 
     * SELECTION RANGE: selects all bop based check boxes
     */

    $('.checkall li input:checkbox[value="bop"]').click(function() {

      var bop = [
        "Alabama",
        "Arizona",
        "California",
        "Colorado",
        "Florida",
        "Georgia",
        "Idaho",
        "Illinois",
        "Indiana",
        "Kentucky",
        "Maryland",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Nebraska",
        "Nevada",
        "New\\ Hampshire",
        "New\\ Jersey",
        "New\\ Mexico",
        "New\\ York",
        "North\\ Carolina",
        "Ohio",
        "Oklahoma",
        "Oregon", 
        "Pennsylvania",
        "Rhode\\ Island",
        "South\\ Carolina",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West\\ Virginia",
        "Wisconsin"
      ];
      
      checkTheCheckBox( bop, $(':checkbox[value="bop"]').is(":checked")); 
     
    });
    //END --- AUTO SELECTED

    /* --- END EXTRA CODE --- */




    /****** */
  });
  $.fn.myfunction = function() {
    return this;
  };
})(jQuery);

