<?php
/**
 * Plugin Name: Deiby Barber Custom Styles For Booknetic
 * Plugin URI: http://codigosimple.dev
 * Description: Plugin para agregar estilos personalizados al panel de administración de Booknetic.
 * Version: 1.0
 * Author: Andoni Barba Noe
 * Author URI: http://andonibarba.codigosimple.dev
 */

// Add custom styles to Booknetic admin panel
// Aquí agregas el código para tus personalizaciones

add_action('bkntc_enqueue_assets', 'deiby_barber_enqueue_custom_styles');
add_action('bkntc_module_calendar_loaded', 'deiby_barber_enqueue_custom_styles_calendar');

function deiby_barber_enqueue_custom_styles() {
    echo '<link rel="stylesheet" href="' . plugin_dir_url(__FILE__) . 'assets/css/custom-main.css" type="text/css">';
}

// comentarios para cargar css mas adelante en otro modulo
//<?php do_action( 'bkntc_module_calendar_loaded' );
function deiby_barber_enqueue_custom_styles_calendar() {
    echo '<link rel="stylesheet" href="' . plugin_dir_url(__FILE__) . 'assets/css/custom-calendar.css" type="text/css">';
}

?>