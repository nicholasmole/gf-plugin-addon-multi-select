<?php


/*---------------
Runs the code only on Gravity Forms Page
---------------*/
function gfpa_addon_footer_init_call(){
      global $post;
      $all_content = get_the_content();
      $does_it = false;
      if (strpos($all_content,'[gravityform') !== false) {
        $does_it = true;
        gfpa_this_run_javascript();
      } else {
        $does_it = false;
      }
}

?>