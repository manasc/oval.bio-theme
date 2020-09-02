<?php
if (!defined('ABSPATH')) {
	exit;
} // Exit if accessed directly
if (!class_exists('WCPD_Disclaimer_Ajax')) {
	class WCPD_Disclaimer_Ajax {
		
		public function __construct() {
			add_action('wp_ajax_variable_product_disclaimer', array(
				$this,
				'wcpd_variable_product_disclaimer_callback'
			));
			add_action('wp_ajax_nopriv_variable_product_disclaimer', array(
				$this,
				'wcpd_variable_product_disclaimer_callback'
			));
			add_action('wp_ajax_add_disclaimer_trace_info', array(
				$this,
				'wcpd_add_disclaimer_trace_info_callback'
			));
			add_action('wp_ajax_nopriv_add_disclaimer_trace_info', array(
				$this,
				'wcpd_add_disclaimer_trace_info_callback'
			));
		}
		
		public function wcpd_variable_product_disclaimer_callback() {
			
			if (!isset($_POST['custom_nonce']) && !wp_verify_nonce(sanitize_key($_POST['custom_nonce']), 'custom_nonce') || !isset($_POST['prodId'])) {
				die('nonce not verify');
			}
			
			$varId		  = isset($_POST['varId']) ? intval($_POST['varId']) : intval($_POST['prodId']);
			$quantity	  = isset($_POST['quantity']) ? intval($_POST['quantity']) : '';
			$prodId	      = intval($_POST['prodId']);
			$mainId	      = intval($_POST['prodId']);
			$accept_btn   = get_option('disclaimer_accept_btn_text');
			$accept_btn   = !empty($accept_btn) ? $accept_btn : esc_html__('Accept', 'wcpd');
			$reject_btn   = get_option('disclaimer_reject_btn_text');
			$reject_btn   = !empty($reject_btn) ? $reject_btn : esc_html__('Reject', 'wcpd');
			$heading	  = get_option('disclaimer_popup_heading_text');
			$heading	  = !empty($heading) ? $heading : esc_html__('Disclaimer', 'wcpd');
			$cat		  = null;
			$message	  = '';
			$rejectURL	= '';
			$enableCookie = false;
			$flag		 = false;
			
			$_product = wc_get_product($prodId);
			
			if ( ( $_product->is_type('variable') || $_product->is_type('variable-subscription') ) ) {
				$prodId = $varId;
			}
			
			if ($varId && $prodId) {
				
				$terms = get_the_terms($mainId, 'product_cat');
				
				if ($terms) {
					foreach ($terms as $term) {
						$cat = $term;
						break;
					}
				}
				
				$disable	   = get_post_meta($prodId, 'product_discalimer_disabled', true);
				$unique		= get_post_meta($prodId, 'product_discalimer_unique', true);
				$productOption = 'inherit';
				
				if ('yes' === $disable) {
					$productOption = 'disabled';
				} elseif ( ( 'no' === $disable || empty($disable) ) && 'yes' === $unique ) {
					$productOption = 'active';
				} else {
					$productOption = 'inherit';
				}
				
				switch ($productOption) {
					case 'active':
						if (function_exists('icl_register_string')) {
							$message = icl_translate('woocommerce-disclaimer', 'product-disclaimer-' . $prodId, get_post_meta($prodId, 'product_message', true));
						} else {
							$message = get_post_meta($prodId, 'product_message', true);
						}
						$rejectURL = get_post_meta($prodId, 'product_url', true);
						if (get_post_meta($varId, 'product_cookie', true) == 'yes') {
							$enableCookie = true;
						}
						if (isset($_COOKIE['product-' . $varId]) && sanitize_text_field($_COOKIE['product-' . $varId])) {
							$flag = false;
						} else {
							$flag = true;
						}
						$accept_btn_new = get_post_meta($prodId, 'disclaimer_accept_btn_text', true);
						$accept_btn	 = !empty($accept_btn_new) ? $accept_btn_new : $accept_btn;
						$reject_btn_new = get_post_meta($prodId, 'disclaimer_reject_btn_text', true);
						$reject_btn	 = !empty($reject_btn_new) ? $reject_btn_new : $reject_btn;
						$heading_new	= get_post_meta($prodId, 'disclaimer_popup_heading_text', true);
						$heading		= !empty($heading_new) ? $heading_new : $heading;
						break;
					case 'inherit':
						if (!is_wp_error($cat)) {
							$disable   = get_term_meta($cat->term_id, 'disclaimer_disable', true);
							$unique	= get_term_meta($cat->term_id, 'disclaimer_unique', true);
							$catOption = 'inherit';
							if ('yes' === $disable) {
								$catOption = 'disabled';
							} elseif ( ( 'no' === $disable || empty($disable) ) && 'yes' === $unique ) {
								$catOption = 'active';
							} else {
								$catOption = 'inherit';
							}
							switch ($catOption) {
								case 'active':
									if (function_exists('icl_register_string')) {
										$message = icl_translate('woocommerce-disclaimer', 'category-disclaimer-' . $cat->term_id, wp_kses_post($cat->message));
									} else {
										$message = wp_kses_post(get_term_meta($cat->term_id, 'category_message', true));
									}
									$rejectURL = get_term_meta($cat->term_id, 'category_reject_url', true);
									if (get_term_meta($cat->term_id, 'cat_cookie', true)) {
										$enableCookie = true;
									}
									if (isset($_COOKIE['product-' . $varId]) && sanitize_text_field($_COOKIE['product-' . $varId])) {
										$flag = false;
									} else {
										$flag = true;
									}
									$accept_btn_new = get_term_meta($cat->term_id, 'disclaimer_accept_btn_text', true);
									$accept_btn	 = !empty($accept_btn_new) ? $accept_btn_new : $accept_btn;
									$reject_btn_new = get_term_meta($cat->term_id, 'disclaimer_reject_btn_text', true);
									$reject_btn	 = !empty($reject_btn_new) ? $reject_btn_new : $reject_btn;
									$heading_new	= get_term_meta($cat->term_id, 'disclaimer_popup_heading_text', true);
									$heading		= !empty($heading_new) ? $heading_new : $heading;
									break;
								case 'inherit':
									if ('yes' == get_option('disclaimer_general_activate')) {
										if (function_exists('icl_register_string')) {
											$data	= wp_kses_post(get_option('disclaimer_general_message'));
											$message = icl_translate('woocommerce-disclaimer', 'general-disclaimer', $data);
										} else {
											$message = wp_kses_post(get_option('disclaimer_general_message'));
										}
										$rejectURL = get_option('disclaimer_general_reject_url');
										if ('yes' == get_option('disclaimer_cookie_activation')) {
											$enableCookie = true;
										}
										if (isset($_COOKIE['product-' . $varId]) && sanitize_text_field($_COOKIE['product-' . $varId])) {
											$flag = false;
										} else {
											$flag = true;
										}
									}
									break;
								default:
									if ('yes' == get_option('disclaimer_general_activate')) {
										if (function_exists('icl_register_string')) {
											$data	= wp_kses_post(get_option('disclaimer_general_message'));
											$message = icl_translate('woocommerce-disclaimer', 'general-disclaimer', $data);
										} else {
											$message = wp_kses_post(get_option('disclaimer_general_message'));
										}
										$rejectURL = get_option('disclaimer_general_reject_url');
										if ('yes' == get_option('disclaimer_cookie_activation')) {
											$enableCookie = true;
										}
										if (isset($_COOKIE['product-' . $varId]) && sanitize_text_field($_COOKIE['product-' . $varId])) {
											$flag = false;
										} else {
											$flag = true;
										}
									}
									break;
							}
						} else {
							if ('yes' == get_option('disclaimer_general_activate')) {
								if (function_exists('icl_register_string')) {
									$data	= wp_kses_post(get_option('disclaimer_general_message'));
									$message = icl_translate('woocommerce-disclaimer', 'general-disclaimer', $data);
								} else {
									$message = wp_kses_post(get_option('disclaimer_general_message'));
								}
								$rejectURL = get_option('disclaimer_general_reject_url');
								if ('yes' == get_option('disclaimer_cookie_activation')) {
									$enableCookie = true;
								}
								if (isset($_COOKIE['product-' . $varId]) && sanitize_text_field($_COOKIE['product-' . $varId])) {
									$flag = false;
								} else {
									$flag = true;
								}
							}
						}
						break;
					default:
						break;
				}
			}
			
			do_action('woocommerce_ajax_added_to_cart', $prodId);
			
			if ($flag) {
				$disclaimer = $message;
				$disclaimer .= '<div class="tb_footer">';
				$disclaimer .= '<div class="tbl_buttons">';
				$disclaimer .= '<div class="tbl_btn_left"><a href="" class="disclaimer_agree button">' . esc_html($accept_btn) . '</a></div>';
				$disclaimer .= '<div class="tbl_btn_right"><a href="" class="disclaimer_reject button">' . esc_html($reject_btn) . '</a></div></div></div>';
				
				print_r(json_encode(array(
					'flag' => $flag,
					'message' => $disclaimer,
					'heading' => $heading,
					'url' => $rejectURL,
					'prodId' => $varId,
					'enableCookie' => $enableCookie
				)));
			} else {
				print_r(json_encode(array(
					'flag' => $flag
				)));
			}
			wp_die(); // this is required to terminate immediately and return a proper response
		}
		
		public function wcpd_add_disclaimer_trace_info_callback() {
			global $wpdb;
			$tbl_name = $wpdb->prefix . 'disclaimer_log';
			
			if (!isset($_POST['custom_nonce'])) {
				if (!wp_verify_nonce(sanitize_key($_POST['custom_nonce']), 'custom_nonce')) {
					die('I am here');
				}
			}
			
			if (isset($_POST['state'])) {
				$action = sanitize_text_field($_POST['state']);
			}
			
			if (isset($_POST['ip'])) {
				$ip = sanitize_text_field($_POST['ip']);
			}
			
			if (isset($_POST['city'])) {
				$city = sanitize_text_field($_POST['city']);
			}
			
			if (isset($_POST['continent'])) {
				$continent = sanitize_text_field($_POST['continent']);
			}
			
			if (isset($_POST['prodId'])) {
				$prodId = intval(sanitize_key($_POST['prodId']));
			}
			
			
			
			
			
			$time = current_time('mysql');
			//$user = wp_get_current_user();
			$user = get_userdata(get_current_user_id());
			
			if ($user) {
				$userId = $user->ID;
				$contId = get_user_meta($user->ID, 'billing_country', true);
				if ($contId) {
					$countries = new WC_Countries();
					$country   = ( $contId && isset($countries->countries[$contId]) ) ? $countries->countries[$contId] : $contId;
					// clear the $countries object to free up memory
					unset($countries);
				} else {
					if (isset($_POST['country'])) {
						$country = sanitize_text_field($_POST['country']);
					}
				}
			} else {
				$userId = null;
				if (isset($_POST['country'])) {
					$country = sanitize_text_field($_POST['country']);
				}
			}
			
			$result = $wpdb->get_results($wpdb->prepare("INSERT INTO {$wpdb->prefix}disclaimer_log (product_id, user_id, ip, city, country, continent, action, created_at) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)", array(
				$prodId,
				$userId,
				$ip,
				$city,
				$country,
				$continent,
				$action,
				$time
			)), $output = ARRAY_A);
			//print_r($result);
			echo 1;
			wp_die(); // this is required to terminate immediately and return a proper response
		}
	}
	new WCPD_Disclaimer_Ajax();
}
