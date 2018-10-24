<?php
 /**
 * Plugin Name: Gravity Forms Plugin Addon Multi Select
 * Description: Add Multi Select Functionality to Gravity Forms
 * Version: 1.3.0
 * Author: Nick Mole
 * Text Domain: gfpa-Gravity-Forms-Plugin-Addon
 */

require_once plugin_dir_path(__FILE__) . 'src/gfpa_selectall_js.php';
require_once plugin_dir_path(__FILE__) . 'src/gfpa_selectall_init.php';
require_once plugin_dir_path(__FILE__) . 'admin/select_all_gfpa_admin.php';
  
use NMole\GFPA;
use NMole\GFPA\select_all_gfpa_admin;

new select_all_gfpa_admin();

