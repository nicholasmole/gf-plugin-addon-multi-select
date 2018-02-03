<?php
  function gfpa_this_run_javascript(){
?>
  <script>
    (function( $ ){
      $(document).ready(function(){
        /*---------
        Copy This Code
        ---------*/
        // Change the .checkall to class selector
        //Change value="selectall" to checkbox value
        //$('.checkall li:first-child input:checkbox[value="selectall"]').click(function() {
        $('.checkall li input:checkbox[value="selectall"]').click(function() {
          // This finds :checkbox and checks all 
          // Edit $(this) to class of box if not in the same section
          $('.checkallhere').find(':checkbox').attr('checked', this.checked);
        });

        /* --- END COPY THIS CODE --- */   
    
       /*---------
      EDIT CODE HERE FOR SITUATIONAL USAGE
      ---------*/

      //START --- NORTH EAST SELECTED
      $('.checkall li input:checkbox[value="northeast"]').click(function() {
        // This finds :checkbox and checks all 
        // Edit $(this) to class of box if not in the same section
         var northeast = [
           "Connecticut", 
           "Indiana", 
           "Kentucky",
           "Maine", 
           "Maryland", 
           "Massachusetts",
           "New\\ Hampshire", 
           "New\\ Jersey", 
           "New\\ York",
           "Ohio", 
           "Pennsylvania", 
           "Rhode\\ Island",
           "Vermont", 
           "Virginia", 
           "Michigan",
           "Delaware", 
           "District\\ of\\ Columbia", 
           "West\\ Virginia",
           ];

         $.each( northeast, function( i,val ) {
           console.log("i "+ i + " .val " + val);
           console.log(':checkbox[value="'+val+'"]');

          var checkycheck =  $(":checkbox[value="+val+"]").is(":checked");

          $(":checkbox[value="+val+"]").prop("checked",!checkycheck);

        });


      });
      //END --- NORTH EAST SELECTED

      //START --- SOUTHERN SELECTED
      $('.checkall li input:checkbox[value="southern"]').click(function() {
        // This finds :checkbox and checks all 
        // Edit $(this) to class of box if not in the same section
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
           console.log("i "+ i + " .val " + val);
           console.log(':checkbox[value="'+val+'"]');

          var checkycheck =  $(":checkbox[value="+val+"]").is(":checked");

          $(":checkbox[value="+val+"]").prop("checked",!checkycheck);

        });


      });
      //END --- SOUTHERN SELECTED

      //START --- WESTERN SELECTED
      $('.checkall li input:checkbox[value="western"]').click(function() {
        // This finds :checkbox and checks all 
        // Edit $(this) to class of box if not in the same section
         var western = [
           "Arizona", 
           "California", 
           "Colorado",
           "Idaho", 
           "Illinois", 
           "Iowa",
           "Kansas", 
           "Minnesota", 
           "Missouri",
           "Montana", 
           "Nebraska", 
           "Nevada",
           "New\\ Mexico", 
           "North\\ Dakota", 
           "Oregon",
           "South\\ Dakota", 
           "Utah", 
           "Washington",
           "Wisconsin",
           "Wyoming",
           "Alaska",
           "Hawaii",
           ];

         $.each( western, function( i,val ) {
           console.log("i "+ i + " .val " + val);
           console.log(':checkbox[value="'+val+'"]');

          var checkycheck =  $(":checkbox[value="+val+"]").is(":checked");

          $(":checkbox[value="+val+"]").prop("checked",!checkycheck);

        });


      });
      //END --- WESTERN SELECTED

      /* --- END EXTRA CODE --- */


    

        /****** */
      });
      $.fn.myfunction = function() {
        return this;
      };
    })(jQuery);
  </script>

<?php
  }
?>