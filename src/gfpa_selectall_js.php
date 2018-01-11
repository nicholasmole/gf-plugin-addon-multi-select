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
      });
      $.fn.myfunction = function() {
        return this;
      };
    })(jQuery);
  </script>

<?php
  }
?>