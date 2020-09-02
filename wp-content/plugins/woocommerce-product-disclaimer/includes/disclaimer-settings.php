<?php
class WCPD_Disclaimer_Settings_Tab {
	public static function init() {
		add_filter('woocommerce_get_sections_products', __CLASS__ . '::register_disclaimer_plugin_settings_tab', 22, 1);
		add_filter('woocommerce_get_settings_products', __CLASS__ . '::get_disclaimer_settings', 10, 2);
		add_action('admin_footer', __CLASS__ . '::sitedisclaimer_scripts');
	}
	public static function register_disclaimer_plugin_settings_tab( $settings_tabs ) {
		$settings_tabs['wcpddisclaimer'] = esc_html__('Disclaimer', 'wcpd');
		return $settings_tabs ;
	}
	public static function get_disclaimer_settings( $settings, $current_section ) {
		if ( 'wcpddisclaimer'==$current_section ) {
			$settings = array(
			'section_title' => array(
				'name'     => esc_html__('Disclaimer', 'wcpd'),
				'type'     => 'title',
				'desc'     => '',
				'id'       => 'wc_settings_wcpddisclaimer_title'
			),
			 'disclaimer_general_activate' => array(
				'name' => esc_html__('Activate General Disclaimer', 'wcpd'),
				'type' => 'checkbox',
				'value' =>  get_option('disclaimer_general_activate'),
				'id'   => 'disclaimer_general_activate',
				'desc'  => esc_html__('This disclaimer will be applied to all products if the general disclaimer is activated and both product and category were set to global', 'wcpd')
			),
			  'disclaimer_cookie_activation' => array(
				'name' => esc_html__('Cookie activation', 'wcpd'),
				'type' => 'checkbox',
				'value' =>  get_option('disclaimer_cookie_activation'),
				'desc' =>  esc_html__('Show one time disclaimer message when product add to cart button clicked untill next cookie expires', 'wcpd'),
				'id'   => 'disclaimer_cookie_activation'
			),
			'disclaimer_cookie_duration' => array(
				'name' => esc_html__('Cookie duration', 'wcpd'),
				'type' => 'select',
				'class' =>  'wc-enhanced-select',
				'options' => array(
					  'session' =>  esc_html__('Session', 'wcpd'),
					  '1' => esc_html__('1 Day', 'wcpd'),
					  '7' => esc_html__('7 Week', 'wcpd'),
					  '30' => esc_html__('1 month', 'wcpd'),
					  '9999' => esc_html__('Forever', 'wcpd')
				 ),
				'desc'   =>  esc_html__('How much time disclaimer message should not appear when product add to cart button clicked', 'wcpd'),
				'desc_tip'  =>  true,
				'id'   => 'disclaimer_cookie_duration'
			),
			'disclaimer_general_message' => array(
				'name' => esc_html__('General Disclaimer Message', 'wcpd'),
				'type' => 'textarea',
				'desc'   =>  esc_html__('Add your disclaimer message (HTML SUPPORTED)', 'wcpd'),
				'desc_tip'  =>  true,
				'id'   => 'disclaimer_general_message'
			),
			'disclaimer_general_reject_url' => array(
				'name' => esc_html__('General Reject URL', 'wcpd'),
				'type' => 'text',
				'id'   => 'disclaimer_general_reject_url',
				'desc'   =>  esc_html__('Customer will be redirected to this URL if customer does not accept product disclaimer', 'wcpd'),
				'desc_tip'  =>  true,
			),
			'disclaimer_popup_heading_text' => array(
				'name' => esc_html__('Disclaimer Popup Heading Text', 'wcpd'),
				'type' => 'text',
				'default'=> esc_html__('Disclaimer', 'wcpd'),
				'placeholder'=> esc_html__('Disclaimer (default)', 'wcpd'),
				'id'   => 'disclaimer_popup_heading_text',
				'desc'   =>  esc_html__('Heading text for product disclaimer popup (optional).', 'wcpd'),
				'desc_tip'  =>  true,
			),
			'disclaimer_accept_btn_text' => array(
				'name' => esc_html__('Accept Button Text', 'wcpd'),
				'type' => 'text',
				'default'=> esc_html__('Accept', 'wcpd'),
				'placeholder'=> esc_html__('Accept (default)', 'wcpd'),
				'id'   => 'disclaimer_accept_btn_text',
				'desc'   =>  esc_html__('Accept button text for product disclaimer popup (optional).', 'wcpd'),
				'desc_tip'  =>  true,
			),
			'disclaimer_reject_btn_text' => array(
				'name' => esc_html__('Reject Button Text', 'wcpd'),
				'type' => 'text',
				'default'=> esc_html__('Reject', 'wcpd'),
				'placeholder'=> esc_html__('Reject (default)', 'wcpd'),
				'id'   => 'disclaimer_reject_btn_text',
				'desc'   =>  esc_html__('Reject button text for product disclaimer popup (optional).', 'wcpd'),
				'desc_tip'  =>  true,
			),
			'disclaimer_log_activation' => array(
				'name' => esc_html__('Log Disclaimer Activity', 'wcpd'),
				'type' => 'checkbox',
				'value' => get_option('disclaimer_log_activation'),
				'desc'  => esc_html__('Check this if you want to log the disclaimer activity (accept or reject) on your products', 'wcpd'),
				'id'   => 'disclaimer_log_activation'
			),
			'section_end' => array(
				'type' => 'sectionend',
				'id' => 'wc_settings_wcpddisclaimer_end'
			),
			/** Site disclaimer text fields start from here */
			'section_start_2' => array(
				'type'     => 'sectionstart',
				'id' => 'wc_settings_wcpddisclaimer_start_2'
			),
			'section_title_2' => array(
				'name'     => esc_html__('Sitewide Disclaimer', 'wcpd'),
				'type'     => 'title',
				'desc'     => '',
				'id'       => 'wc_settings_wcpddisclaimer_subtitle'
			),
			'disclaimer_site_activate' => array(
				'name' => esc_html__('Activate Site Disclaimer', 'wcpd'),
				'type' => 'checkbox',
				'value' =>  get_option('disclaimer_site_activate'),
				'id'   => 'disclaimer_site_activate',
				'desc'  => esc_html__('This disclaimer will be applied to site', 'wcpd')
			),
			'disclaimer_site_accept_btn_text' => array(
				'name' => esc_html__('Accept Button Text', 'wcpd'),
				'type' => 'text',
				'default'=> esc_html__('Accept', 'wcpd'),
				'placeholder'=> esc_html__('Accept (default)', 'wcpd'),
				'id'   => 'disclaimer_site_accept_btn_text',
				'class' => 'site_disclaimer_block',
				'desc'   =>  esc_html__('Accept button text for site disclaimer popup (optional).', 'wcpd'),
				'desc_tip'  =>  true,
			),
			'disclaimer_site_reject_btn_text' => array(
				'name' => esc_html__('Reject Button Text', 'wcpd'),
				'type' => 'text',
				'default'=> esc_html__('Reject', 'wcpd'),
				'placeholder'=> esc_html__('Reject (default)', 'wcpd'),
				'id'   => 'disclaimer_site_reject_btn_text',
				'class' => 'site_disclaimer_block',
				'desc'   =>  esc_html__('Reject button text for site disclaimer popup (optional).', 'wcpd'),
				'desc_tip'  =>  true,
			),
			'disclaimer_site_cookie_activation' => array(
				'name' => esc_html__('site cookie activation', 'wcpd'),
				'type' => 'checkbox',
				'value' =>  get_option('disclaimer_site_cookie_activation'),
				'desc' =>  esc_html__('Show one time disclaimer message when site opened untill next cookie expires', 'wcpd'),
				'id'   => 'disclaimer_site_cookie_activation',
				'class' => 'site_disclaimer_block'
			),
			'disclaimer_site_cookie_duration' => array(
				'name' => esc_html__('Site cookie duration', 'wcpd'),
				'type' => 'select',
				'class' =>  'site_disclaimer_block wc-enhanced-select',
				'options' => array(
					  'session' =>  esc_html__('Session', 'wcpd'),
					  '1' => esc_html__('1 Day', 'wcpd'),
					  '7' => esc_html__('7 Week', 'wcpd'),
					  '30' => esc_html__('1 month', 'wcpd'),
					  '9999' => esc_html__('Forever', 'wcpd')
				 ),
				'desc'   =>  esc_html__('How much time disclaimer message should not appear when site is opening', 'wcpd'),
				'desc_tip'  =>  true,
				'id'   => 'disclaimer_site_cookie_duration'
			),
			'disclaimer_site_popup_heading_text' => array(
				'name' => esc_html__('Site disclaimer Popup Heading Text', 'wcpd'),
				'type' => 'text',
				'default'=> esc_html__('Site Disclaimer', 'wcpd'),
				'placeholder'=> esc_html__('Site Disclaimer (default)', 'wcpd'),
				'id'   => 'disclaimer_site_popup_heading_text',
				'desc'   =>  esc_html__('Heading text for site disclaimer popup (optional).', 'wcpd'),
				'class' => 'site_disclaimer_block',
				'desc_tip'  =>  true,
			),
			'disclaimer_site_general_message' => array(
				'name' => esc_html__('Site Disclaimer Message', 'wcpd'),
				'type' => 'textarea',
				'desc'   =>  esc_html__('Add your site disclaimer message (HTML SUPPORTED)', 'wcpd'),
				'desc_tip'  =>  true,
				'id'   => 'disclaimer_site_general_message',
				'class' => 'site_disclaimer_block'
			),
			'section_end_2' => array(
				 'type' => 'sectionend',
				 'id' => 'wc_settings_wcpddisclaimer_end_2'
			)
			);
			return apply_filters('wc_settings_wcpddisclaimer', $settings);
		} else {
			return $settings;
		}
	}

	public static function sitedisclaimer_scripts() {
		if ( isset($GLOBALS['_GET']['section']) && 'wcpddisclaimer'==$GLOBALS['_GET']['section'] ) {
			echo    '<script type="text/javascript">
							jQuery(function($){
								if($("#disclaimer_site_activate").prop("checked")==false){
									$(".site_disclaimer_block").parents("tr").hide();
								}

								$("#disclaimer_site_activate").click(function(){
									$(".site_disclaimer_block").parents("tr").toggle();
								});
							});
						</script>';
		}
	}
}
WCPD_Disclaimer_Settings_Tab::init();
