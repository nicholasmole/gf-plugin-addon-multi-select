<?php

namespace NMole\GFPA;
/**
 * Figures out if this is a gravity forms page.
 * Add statically created state groups as input fields.
 * -------
 * When selected these input fields act as select all check boxes
 *
 * @package gfpa
 * @subpackage gfpa/admin
 * @author Nicholas Mole <nickmole@xzito.com>
 */ 

class select_all_gfpa_admin {
  /**
   * @since    1.0.0
   * @access   private
   * @var      string    $plugin_name    The name  of this plugin.
   */
  private $plugin_name = 'gfpa'; 


  /**
   * The version of this plugin.
   *
   * @since    1.0.0
   * @access   private
   * @var      string    $version    The current version of this plugin.
   */
  private $version = '1.1.0'; 

  /**
   * Initialize the class and set its properties.
   *
   * @since    1.0.0
   */
  public function __construct() {

    /*
     * Run the add_select_all_scripts function
     * when wp_footer action is called by wordpress
     */ 
    add_action('wp_footer', array($this, 'add_select_all_scripts'));

  }

  public function add_select_all_scripts() {

    global $post;

    $post_content = get_the_content();

    $check_content_has_gravity_forms = false;

    if (strpos($post_content, '[gravityform') !== false) {
      
      wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/select_all_buttons.js', array( 'jquery' ), $this->version, false );

    }

  }
}
