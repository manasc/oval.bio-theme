<?php
if (!defined('ABSPATH')) {
	exit();
}  // Exit if accessed directly
if (!class_exists('WCPD_Disclaimer_Product_List')) {
	class WCPD_Disclaimer_Product_List {
		public function __construct() {
			add_action('woocommerce_after_shop_loop_item', array($this, 'wcpd_add_disclaimer'));
		}
		public function wcpd_add_disclaimer() {
			global $post, $product;
			$cat = null;
			$message = '';
			$rejectURL = '';
			$enableCookie = false;
			$flag = false;
			$terms = get_the_terms($post->id, 'product_cat');
			if ($terms) {
				foreach ($terms as $term) {
					$cat = $term;
					break;
				}
			}
			$accept_btn=get_option('disclaimer_accept_btn_text');
			$accept_btn=!empty($accept_btn) ? $accept_btn : esc_html__('Accept', 'wcpd');
			$reject_btn=get_option('disclaimer_reject_btn_text');
			$reject_btn=!empty($reject_btn) ? $reject_btn : esc_html__('Reject', 'wcpd');
			$heading=get_option('disclaimer_popup_heading_text');
			$heading=!empty($heading) ? $heading : esc_html__('Disclaimer', 'wcpd');
			$disable = get_post_meta($post->ID, 'product_discalimer_disabled', true);
			$unique = get_post_meta($post->ID, 'product_discalimer_unique', true);
			$productOption = 'inherit';
			if ( 'yes'===$disable ) {
				$productOption = 'disabled';
			} elseif ( ( 'no'===$disable || empty($disable) ) && 'yes'===$unique ) {
				$productOption = 'active';
			} else {
				$productOption = 'inherit';
			}

			switch ( $productOption ) {
				case 'active':
					if (function_exists('icl_register_string')) {
						$message = icl_translate('woocommerce-disclaimer', 'product-disclaimer-' . $post->ID, get_post_meta($post->ID, 'product_message', true));
					} else {
						$message = get_post_meta($post->ID, 'product_message', true);
					}
					$rejectURL = get_post_meta($post->ID, 'product_url', true);
					if (get_post_meta($post->ID, 'product_cookie', true) == 'yes') {
						$enableCookie = true;
					}
					$accept_btn_new=get_post_meta($post->ID, 'disclaimer_accept_btn_text', true);
					$accept_btn=!empty($accept_btn_new) ? $accept_btn_new : $accept_btn;
					$reject_btn_new=get_post_meta($post->ID, 'disclaimer_reject_btn_text', true);
					$reject_btn=!empty($reject_btn_new) ? $reject_btn_new : $reject_btn;
					$heading_new=get_post_meta($post->ID, 'disclaimer_popup_heading_text', true);
					$heading=!empty($heading_new) ? $heading_new : $heading;
					if ( isset($_COOKIE['product-' . $post->ID]) && sanitize_text_field( $_COOKIE['product-' . $post->ID] ) ) {
						$flag = false;
					} else {
						$flag = true;
					}

					break;
				case 'inherit':
					if ( !is_wp_error($cat) ) {
						$disable = get_term_meta($cat->term_id, 'disclaimer_disable', true);
						$unique = get_term_meta($cat->term_id, 'disclaimer_unique', true);
						$catOption = 'inherit';
						if ( 'yes'===$disable ) {
							$catOption = 'disabled';
						} elseif ( ( 'no'===$disable || empty($disable) ) && 'yes'===$unique ) {
							$catOption = 'active';
						} else {
							$catOption = 'inherit';
						}

						switch ($catOption) {
							case 'active':
								if ( function_exists('icl_register_string') ) {
									$message = icl_translate('woocommerce-disclaimer', 'category-disclaimer-' . $cat->term_id, stripslashes( get_term_meta($cat->term_id, 'category_message', true)));
								} else {
									$message = get_term_meta($cat->term_id, 'category_message', true);
								}
								$rejectURL = get_term_meta($cat->term_id, 'category_reject_url', true);
								if (get_term_meta($cat->term_id, 'cat_cookie', true)) {
									$enableCookie = true;
								}
								$accept_btn_new=get_term_meta($cat->term_id, 'disclaimer_accept_btn_text', true);
								$accept_btn=!empty($accept_btn_new) ? $accept_btn_new : $accept_btn;
								$reject_btn_new=get_term_meta($cat->term_id, 'disclaimer_reject_btn_text', true);
								$reject_btn=!empty($reject_btn_new) ? $reject_btn_new : $reject_btn;
								$heading_new=get_term_meta($cat->term_id, 'disclaimer_popup_heading_text', true);
								$heading=!empty($heading_new) ? $heading_new : $heading;
								if (isset($_COOKIE['product-' . $post->ID]) && sanitize_text_field( $_COOKIE['product-' . $post->ID] )) {
									$flag = false;
								} else {
									$flag = true;
								}
								break;
							case 'inherit':
								if (  'yes' == get_option('disclaimer_general_activate')) {
									if (function_exists('icl_register_string')) {
										$data = get_option('disclaimer_general_message');
										$message = icl_translate('woocommerce-disclaimer', 'general-disclaimer', $data);
									} else {
										$message = get_option('disclaimer_general_message');
									}
									$rejectURL = get_option('disclaimer_general_reject_url');
									if ( 'yes' ==get_option('disclaimer_cookie_activation') ) {
										$enableCookie = true;
									}
									if (isset($_COOKIE['product-' . $post->ID]) && sanitize_text_field( $_COOKIE['product-' . $post->ID] )) {
										$flag = false;
									} else {
										$flag = true;
									}
								}
								break;
							default:
								break;
						}
					} else {
						if ( 'yes' == get_option('disclaimer_general_activate') ) {
							if (function_exists('icl_register_string')) {
								$data = get_option('disclaimer_general_message');
								$message = icl_translate('woocommerce-disclaimer', 'general-disclaimer', $data);
							} else {
								$message = get_option('disclaimer_general_message');
							}
							$rejectURL = get_option('disclaimer_general_reject_url');
							if ( 'yes' ==get_option('disclaimer_cookie_activation') ) {
								$enableCookie = true;
							}
							if (isset($_COOKIE['product-' . $post->ID]) && sanitize_text_field( $_COOKIE['product-' . $post->ID] )) {
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
			if ( $product->is_type('booking') || $product->is_type('variable') || $product->is_type('variable-subscription') ) {
				$flag = false;
			}
			if ( $flag ) {
				
				$message = apply_filters('the_content', $message);
				$message.='<div class="tb_footer">';
				$message.='<div class="tbl_buttons">';
				$message.='<div class="tbl_btn_left"><a href="" class="disclaimer_agree button">' . esc_html($accept_btn) . '</a></div>';
				 $message.='<div class="tbl_btn_right"><a href="" class="disclaimer_reject button">' . esc_html($reject_btn) . '</a></div>';
				$message.='</div>';
				$message.='</div>';
				echo '<input type="hidden" id="check' . esc_attr($post->ID) . '" value="yes">';
				echo '<div id="message' . esc_attr($post->ID) . '" style="display:none;"><div>' . wp_kses_post($message) . '</div></div>';
				echo '<input type="hidden" id="headingtext' . esc_attr($post->ID) . '" value="' . esc_html($heading) . '">';
				echo '<input type="hidden" id="url' . esc_attr($post->ID) . '" value="' . esc_url($rejectURL) . '">';
				echo '<input type="hidden" id="enableCookie' . esc_attr( $post->ID ) . '" value="' . esc_attr( $enableCookie ) . '">';
			} else {
				echo '<input type="hidden" id="check' . esc_attr( $post->ID ) . '" value="no">';
			}
		}
	}
	new WCPD_Disclaimer_Product_List();
}
