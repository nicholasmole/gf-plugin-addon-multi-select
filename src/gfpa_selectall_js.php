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
      // $('.checkall li input:checkbox[value="northeast"]').click(function() {
      //   // This finds :checkbox and checks all 
      //   // Edit $(this) to class of box if not in the same section
      //    var northeast = ["Connecticut", "Indiana", "Kentucky"];
      //    $.each( northeast, function( i,val ) {
      //      console.log("i "+ i + " .val " + val);
      //      console.log(':checkbox[value="'+val+'"]');

      //     var checkycheck =  $(":checkbox[value="+val+"]").is(":checked");
      //     console.log(checkycheck + "ssss");
      //     $(":checkbox[value="+val+"]").prop("checked",!checkycheck);

      //     console.log('enddd');
      //   });

      // });

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