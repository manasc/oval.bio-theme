<?php
if (!defined('ABSPATH')) {
	exit;
} // Exit if accessed directly
if (!class_exists('WCPD_Disclaimer_Metabox')) {
	class WCPD_Disclaimer_Metabox {
		public function __construct() {
			add_filter('woocommerce_product_data_tabs', array(
				$this,
				'wcpd_disclaimer_custom_product_data_tab'
			));
			add_action('woocommerce_product_data_panels', array(
				$this,
				'woocom_custom_product_data_fields'
			));
			add_action('save_post', array(
				$this,
				'save_position_details_wcpd'
			));
			add_action('woocommerce_product_after_variable_attributes', array(
				$this,
				'wcpd_disclaimer_variable_fields'
			), 10, 3);
			add_action('woocommerce_save_product_variation', array(
				$this,
				'wcpd_disclaimer_variable_fields_process'
			), 10, 2);
		}
		public function wcpd_disclaimer_custom_product_data_tab( $product_data_tabs ) {
			$product_data_tabs['product-disclaimer'] = array(
				'label' => esc_html__('Disclaimer', 'wcpd'),
				'target' => 'wcpd_product-disclaimer',
				'class' => array(
					'hide_if_variable'
				),
				'priority' => 80
			);
			return $product_data_tabs;
		}
		public function woocom_custom_product_data_fields() {
			global $post;
			// Note the 'id' attribute needs to match the 'target' parameter set above
			?> 
			<div id = 'wcpd_product-disclaimer' class = 'panel woocommerce_options_panel' > 
				<style type="text/css">
					div#wp-product_message-wrap {
						margin: 0px 10px;
					}
				</style>
				<div class = 'options_group inside' > 
				   <?php
					woocommerce_wp_checkbox(array(
						'id' => 'product_discalimer_disabled',
						'value' => ( get_post_meta($post->ID, 'product_discalimer_disabled', true) == 'yes' ) ? 'yes' : '',
						'wrapper_class' => '',
						'label' => esc_html__('Disable product disclaimer?', 'wcpd'),
						'description' => esc_html__('Enabling this option will disable disclaimer for this product', 'wcpd')
					));
					woocommerce_wp_checkbox(array(
						'id' => 'product_discalimer_unique',
						'value' => ( get_post_meta($post->ID, 'product_discalimer_unique', true) == 'yes' ) ? 'yes' : '',
						'wrapper_class' => '',
						'label' => esc_html__('Add a unique disclaimer', 'wcpd'),
						'description' => esc_html__('Add a unique disclaimer for this product', 'wcpd')
					));
					woocommerce_wp_checkbox(array(
						'id' => 'product_cookie',
						'value' => ( get_post_meta($post->ID, 'product_cookie', true) == 'yes' ) ? 'yes' : '',
						'wrapper_class' => '',
						'label' => esc_html__('Display one time only?', 'wcpd'),
						'description' => esc_html__('Enabling this option will show disclaimer only one time', 'wcpd')
					));
					woocommerce_wp_text_input(array(
						'id' => 'product_url',
						'value' => get_post_meta($post->ID, 'product_url', true),
						'label' => esc_html__('Reject URL', 'wcpd'),
						'desc_tip' => true,
						'description' => esc_html__('Customer will be redirected to this URL if customer does not accept product disclaimer', 'wcpd')
					));
					woocommerce_wp_text_input(array(
						'id' => 'disclaimer_popup_heading_text',
						'value' => get_post_meta($post->ID, 'disclaimer_popup_heading_text', true),
						'label' => esc_html__('Popup Heading Text', 'wcpd'),
						'desc_tip' => true,
						'description' => esc_html__('Heading text for product disclaimer popup.', 'wcpd')
					));
					woocommerce_wp_text_input(array(
						'id' => 'disclaimer_accept_btn_text',
						'value' => get_post_meta($post->ID, 'disclaimer_accept_btn_text', true),
						'label' => esc_html__('Accept Button Text', 'wcpd'),
						'desc_tip' => true,
						'description' => esc_html__('Accept button text for product disclaimer popup.', 'wcpd')
					));
					woocommerce_wp_text_input(array(
						'id' => 'disclaimer_reject_btn_text',
						'value' => get_post_meta($post->ID, 'disclaimer_reject_btn_text', true),
						'label' => esc_html__('Reject Button Text', 'wcpd'),
						'desc_tip' => true,
						'description' => esc_html__('Reject button text for product disclaimer popup.', 'wcpd')
					));
					echo '<p class="form-field"><label for="product_message">' . esc_html__('Disclaimer Message', 'wcpd');
					echo '</label></p>';
					echo '<p>';
					$content  = get_post_meta($post->ID, 'product_message', true);
					$settings = array(
						'tinymce' => array(
							'toolbar1' => '',
							'toolbar2' => '',
							'toolbar3' => ''
						),
						'quicktags' => true,
						'editor_class' => 'form-field product_message_field',
						'textarea_rows' => 10,
						'media_buttons' => true
					);
					wp_editor($content, 'product_message', $settings);
					echo '</p>';
					?>
				</div>
			</div>
			<?php
		}
		public function save_position_details_wcpd( $post_id ) {
			global $post;
			
			if (isset($_POST['woocommerce_meta_nonce'])) {
				if (!wp_verify_nonce(sanitize_key($_POST['woocommerce_meta_nonce']), 'woocommerce_save_data')) {
					die();
				}
			}
			
			if (isset($_POST['post_type']) && 'product' == $_POST['post_type']) {
				//print_r($_POST);
				//wp_die('atleast I am here');
				$product_data = get_product($post);
				if ( !( $product_data->is_type('variable') || $product_data->is_type('variable-subscription') ) ) {
					if (isset($_POST['product_cookie'])) {
						$data = sanitize_key($_POST['product_cookie']);
						update_post_meta($post_id, 'product_cookie', $data);
					} else {
						$data = 'no';
						update_post_meta($post_id, 'product_cookie', $data);
					}
					if (isset($_POST['product_discalimer_disabled'])) {
						update_post_meta($post_id, 'product_discalimer_disabled', 'yes');
					} else {
						update_post_meta($post_id, 'product_discalimer_disabled', 'no');
					}
					if (isset($_POST['product_discalimer_unique'])) {
						update_post_meta($post_id, 'product_discalimer_unique', 'yes');
					} else {
						update_post_meta($post_id, 'product_discalimer_unique', 'no');
					}
					if (isset($_POST['product_message'])) {
						$data = wp_kses_post($_POST['product_message']);
						update_post_meta($post_id, 'product_message', $data);
					}
					if (isset($_POST['product_url'])) {
						$data = filter_var($_POST['product_url'], FILTER_SANITIZE_URL);
						update_post_meta($post_id, 'product_url', $data);
					}
					if (isset($_POST['disclaimer_popup_heading_text'])) {
						update_post_meta($post_id, 'disclaimer_popup_heading_text', wc_clean($_POST['disclaimer_popup_heading_text']));
					}
					if (isset($_POST['disclaimer_accept_btn_text'])) {
						update_post_meta($post_id, 'disclaimer_accept_btn_text', wc_clean($_POST['disclaimer_accept_btn_text']));
					}
					if (isset($_POST['disclaimer_reject_btn_text'])) {
						update_post_meta($post_id, 'disclaimer_reject_btn_text', wc_clean($_POST['disclaimer_reject_btn_text']));
					}
				}
			}
		}
		public function wcpd_disclaimer_variable_fields( $loop, $variation_data, $variation ) {
			?>
		  <div class="wcpd_product_disclaimer_var">
			<?php
			woocommerce_wp_checkbox(array(
				'id' => 'product_discalimer_disabled[' . $loop . ']',
				'value' => ( get_post_meta($variation->ID, 'product_discalimer_disabled', true) == 'yes' ) ? 'yes' : '',
				'wrapper_class' => '',
				'label' => esc_html__('Disable product disclaimer for this variation?', 'wcpd')
				//'description'   => esc_html__(' ', 'wcpd'),
			));
			woocommerce_wp_checkbox(array(
				'id' => 'product_discalimer_unique[' . $loop . ']',
				'value' => ( get_post_meta($variation->ID, 'product_discalimer_unique', true) == 'yes' ) ? 'yes' : '',
				'wrapper_class' => '',
				'label' => esc_html__('Add a unique disclaimer for this variation', 'wcpd')
				//'description'   => esc_html__(' ', 'wcpd'),
			));
			woocommerce_wp_checkbox(array(
				'id' => 'product_cookie[' . $loop . ']',
				'value' => ( get_post_meta($variation->ID, 'product_cookie_variable[' . $loop . ']', true) == 'yes' ) ? 'yes' : '',
				'wrapper_class' => '',
				'label' => esc_html__('Display one time only?', 'wcpd')
				//'description'   => esc_html__('Disclaimer message will appear only one time on add to cart click', 'wcpd'),
			));
			woocommerce_wp_text_input(array(
				'id' => 'product_url_variable[' . $loop . ']',
				'value' => get_post_meta($variation->ID, 'product_url', true),
				'label' => esc_html__('Reject URL', 'wcpd'),
				'desc_tip' => true,
				'description' => esc_html__('Customer will be redirected to this URL if customer does not accept product disclaimer', 'wcpd')
			));
			woocommerce_wp_text_input(array(
				'id' => 'disclaimer_popup_heading_text[' . $loop . ']',
				'value' => get_post_meta($variation->ID, 'disclaimer_popup_heading_text', true),
				'label' => esc_html__('Disclaimer Popup Heading Text', 'wcpd'),
				'desc_tip' => true,
				'description' => esc_html__('Heading text for product disclaimer popup.', 'wcpd')
			));
			woocommerce_wp_text_input(array(
				'id' => 'disclaimer_accept_btn_text[' . $loop . ']',
				'value' => get_post_meta($variation->ID, 'disclaimer_accept_btn_text', true),
				'label' => esc_html__('Accept Button Text', 'wcpd'),
				'desc_tip' => true,
				'description' => esc_html__('Accept button text for product disclaimer popup.', 'wcpd')
			));
			woocommerce_wp_text_input(array(
				'id' => 'disclaimer_reject_btn_text[' . $loop . ']',
				'value' => get_post_meta($variation->ID, 'disclaimer_reject_btn_text', true),
				'label' => esc_html__('Reject Button Text', 'wcpd'),
				'desc_tip' => true,
				'description' => esc_html__('Reject button text for product disclaimer popup.', 'wcpd')
			));
			$content = get_post_meta($variation->ID, 'product_message', true);
			echo '<input type="hidden" name="custom_nonce" value="' . sanitize_key(wp_create_nonce('custom_nonce')) . '" >';
			echo '<p class="form-field"><label for="product_message">' . esc_html__('Disclaimer Message', 'wcpd');
			echo '</label></p>';
			echo '<p class="form-field">';
			echo '<textarea name="product_message_variable[' . esc_html($loop) . ']" rows="10">' . esc_html($content) . '</textarea>';
			echo '</p>';
			?>
		 </div>
			<?php
		}
		public function wcpd_disclaimer_variable_fields_process( $post_id ) {
			
			if (isset($_POST['custom_nonce'])) {
				if (!wp_verify_nonce(sanitize_key($_POST['custom_nonce']), 'custom_nonce')) {
					die();
				}
			}
			
			if (isset($_POST['variable_sku'])) {
				if (isset($_POST['variable_post_id'])) {
					$variable_post_id = wc_clean($_POST['variable_post_id']);
				}
				
				if (isset($_POST['product_cookie_variable'])) {
					$variable_custom_cookie_field = wc_clean($_POST['product_cookie_variable']);
				}
				
				if (isset($_POST['product_message_variable'])) {
					$variable_custom_message_field = wc_clean($_POST['product_message_variable']);
				}
				
				if (isset($_POST['product_url_variable'])) {
					$variable_custom_url_field = wc_clean($_POST['product_url_variable']);
				}
				
				
				foreach ($variable_post_id as $key => $value) {
					$i			= $key;
					$variation_id = $value;
					if (isset($variable_custom_cookie_field[$i])) {
						update_post_meta($variation_id, 'product_cookie', stripslashes($variable_custom_cookie_field[$i]));
					}
					if (isset($_POST['product_discalimer_disabled'][$i])) {
						update_post_meta($variation_id, 'product_discalimer_disabled', 'yes');
					} else {
						update_post_meta($variation_id, 'product_discalimer_disabled', 'no');
					}
					if (isset($_POST['product_discalimer_unique'][$i])) {
						update_post_meta($variation_id, 'product_discalimer_unique', 'yes');
					} else {
						update_post_meta($variation_id, 'product_discalimer_unique', 'no');
					}
					if (isset($variable_custom_message_field[$i])) {
						$stripped = wp_kses_post($variable_custom_message_field[$i]);
						update_post_meta($variation_id, 'product_message', $stripped);
					}
					if (isset($variable_custom_url_field[$i])) {
						update_post_meta($variation_id, 'product_url', $variable_custom_url_field[$i]);
					}
					if (isset($_POST['disclaimer_popup_heading_text'][$i])) {
						update_post_meta($variation_id, 'disclaimer_popup_heading_text', wc_clean($_POST['disclaimer_popup_heading_text'][$i]));
					}
					if (isset($_POST['disclaimer_accept_btn_text'][$i])) {
						update_post_meta($variation_id, 'disclaimer_accept_btn_text', wc_clean($_POST['disclaimer_accept_btn_text'][$i]));
					}
					if (isset($_POST['disclaimer_reject_btn_text'][$i])) {
						update_post_meta($variation_id, 'disclaimer_reject_btn_text', wc_clean($_POST['disclaimer_reject_btn_text'][$i]));
					}
				}
			}
		}
	}
	new WCPD_Disclaimer_Metabox();
}
