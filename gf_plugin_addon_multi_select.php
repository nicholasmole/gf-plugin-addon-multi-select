<?php
 /**
 * Plugin Name: Gravity Forms Plugin Addon Multi Select
 * Description: Add Multi Select Functionality to Gravity Forms
 * Version: 1.0x
 * Author: Nick Mole
 * Text Domain: gfpa-Gravity-Forms-Plugin-Addon
 */

require_once plugin_dir_path(__FILE__) . 'src/gfpa_selectall_js.php';
require_once plugin_dir_path(__FILE__) . 'src/gfpa_selectall_init.php';

add_action('wp_footer', 'gfpa_addon_footer_init_call');

?>
