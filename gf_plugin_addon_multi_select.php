<?php
 /**
 * Plugin Name: Gravity Forms Plugin Addon Multi Select
 * Description: Add Multi Select Functionality to Gravity Forms
 * Version: 1.0x
 * Author: Nick Mole
 * Text Domain: gfpa-Gravity-Forms-Plugin-Addon
 */

function gfpa_addon_footer_init_call(){
      global $post;
      $all_content = get_the_content();
      $does_it = false;
      if (strpos($all_content,'[gravityform') !== false) {
        $does_it = true;
      } else {
        $does_it = false;
      }
      gfpa_this_run_javascript();
}
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
    $('.checkall li:first-child input:checkbox[value="selectall"]').click(function() {
      // This finds :checkbox and checks all 
      // Edit $(this) to class of box if not in the same section
      $(this).parent('li').parent('ul').find(':checkbox').attr('checked', this.checked);
      });
    });
    /* --- END COPY THIS CODE --- */
    /*---------
    EDIT CODE HERE FOR SITUATIONAL USAGE
    ---------*/


    /* --- END EXTRA CODE --- */

    $.fn.myfunction = function() {
      return this;
    };
  })(jQuery);
  </script>

  <?php 
}
add_action('wp_footer', 'gfpa_addon_footer_init_call');

 ?>
