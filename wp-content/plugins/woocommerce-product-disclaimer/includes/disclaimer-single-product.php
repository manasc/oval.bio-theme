<?php
if (!defined('ABSPATH')) {
	exit();
}  // Exit if accessed directly
include_once(ABSPATH . 'wp-admin/includes/plugin.php');

if (!class_exists('WCPD_Discalimer_Single_Product')) {
	class WCPD_Discalimer_Single_Product {
		public function __construct() {
			add_action('init', array($this, 'init_wcpd_thickbox_disclaimer'));
			add_action('woocommerce_before_add_to_cart_button', array($this,'wcpd_check_for_product_disclaimer'));
		}
		public function init_wcpd_thickbox_disclaimer() {
			add_thickbox();
		}
		
		public function wcpd_check_for_product_disclaimer() {
			
			if (is_product()) {
				global $product;
				$accept_btn=get_option('disclaimer_accept_btn_text');
				$accept_btn=!empty($accept_btn) ? $accept_btn : esc_html__('Accept', 'wcpd');
				$reject_btn=get_option('disclaimer_reject_btn_text');
				$reject_btn=!empty($reject_btn) ? $reject_btn : esc_html__('Reject', 'wcpd');
				$heading=get_option('disclaimer_popup_heading_text');
				$heading=!empty($heading) ? $heading : esc_html__('Disclaimer', 'wcpd');
				if (!( $product->is_type('variable') || $product->is_type('variable-subscription') )) {
					$cat = null;
					$message = '';
					$rejectURL = '';
					$enableCookie = false;
					$flag = false;
					$terms = get_the_terms($product->get_id(), 'product_cat');
					if ($terms) {
						foreach ($terms as $term) {
							$cat = $term;
							break;
						}
					}
					
					$disable = get_post_meta($product->get_id(), 'product_discalimer_disabled', true);
					$unique = get_post_meta($product->get_id(), 'product_discalimer_unique', true);
					$productOption = 'inherit';
					if ('yes'===$disable) {
						$productOption = 'disabled';
					} elseif (( 'no'===$disable || empty($disable) ) && 'yes'===$unique) {
						$productOption = 'active';
					} else {
						$productOption = 'inherit';
					}
					switch ($productOption) {
						case 'active':
							$product_id=$product->get_id();
							if (function_exists('icl_register_string')) {
								$message = icl_translate('woocommerce-disclaimer', 'product-disclaimer-' . $product->get_id(), get_post_meta($product->get_id(), 'product_message', true) );
							} else {
								$message = get_post_meta($product->get_id(), 'product_message', true);
							}
							$rejectURL = get_post_meta($product->get_id(), 'product_url', true);
							if (get_post_meta($product->get_id(), 'product_cookie', true) == 'yes') {
								$enableCookie = true;
							}
							if (isset($_COOKIE['product-' . $product->get_id()]) && sanitize_key($_COOKIE['product-' . $product->get_id()])) {
								$flag = false;
							} else {
								$flag = true;
							}
							$accept_btn_new=get_post_meta($product_id, 'disclaimer_accept_btn_text', true);
							$accept_btn=!empty($accept_btn_new) ? $accept_btn_new : $accept_btn;
							$reject_btn_new=get_post_meta($product_id, 'disclaimer_reject_btn_text', true);
							$reject_btn=!empty($reject_btn_new) ? $reject_btn_new : $reject_btn;
							$heading_new=get_post_meta($product_id, 'disclaimer_popup_heading_text', true);
							$heading=!empty($heading_new) ? $heading_new : $heading;
							break;
						case 'inherit':
							if (!is_wp_error($cat)) {
								$disable = get_term_meta($cat->term_id, 'disclaimer_disable', true);
								$unique = get_term_meta($cat->term_id, 'disclaimer_unique', true);
								$catOption = 'inherit';
								if ('yes'===$disable) {
									$catOption = 'disabled';
								} elseif (( 'no'===$disable || empty($disable) ) && 'yes'===$unique) {
									$catOption = 'active';
								} else {
									$catOption = 'inherit';
								}
								switch ($catOption) {
									case 'active':
										if (function_exists('icl_register_string')) {
											$message = icl_translate('woocommerce-disclaimer', 'category-disclaimer-' . $cat->term_id, get_term_meta($cat->term_id, 'category_message', true));
										} else {
											$message = get_term_meta($cat->term_id, 'category_message', true);
										}
										$rejectURL = get_term_meta($cat->term_id, 'category_reject_url', true);
										if (get_term_meta($cat->term_id, 'cat_cookie', true)) {
											$enableCookie = true;
										}
										if (isset($_COOKIE['product-' . $product->get_id()]) && sanitize_key($_COOKIE['product-' . $product->get_id()])) {
											$flag = false;
										} else {
											$flag = true;
										}
										$accept_btn_new=get_term_meta($cat->term_id, 'disclaimer_accept_btn_text', true);
										$accept_btn=!empty($accept_btn_new) ? $accept_btn_new : $accept_btn;
										$reject_btn_new=get_term_meta($cat->term_id, 'disclaimer_reject_btn_text', true);
										$reject_btn=!empty($reject_btn_new) ? $reject_btn_new : $reject_btn;
										$heading_new=get_term_meta($cat->term_id, 'disclaimer_popup_heading_text', true);
										$heading=!empty($heading_new) ? $heading_new : $heading;
										break;
									case 'inherit':
										if ('yes' == get_option('disclaimer_general_activate')) {
											if (function_exists('icl_register_string')) {
												$data = get_option('disclaimer_general_message');
												$message = icl_translate('woocommerce-disclaimer', 'general-disclaimer', $data);
											} else {
												$message = get_option('disclaimer_general_message');
											}
											$rejectURL = get_option('disclaimer_general_reject_url');
											if ('yes' ==get_option('disclaimer_cookie_activation')) {
												$enableCookie = true;
											}
											if (isset($_COOKIE['product-' . $product->get_id()]) && sanitize_key($_COOKIE['product-' . $product->get_id()])) {
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
								if ('yes' == get_option('disclaimer_general_activate')) {
									if (function_exists('icl_register_string')) {
										$data = get_option('disclaimer_general_message');
										$message = icl_translate('woocommerce-disclaimer', 'general-disclaimer', $data);
									} else {
										$message = get_option('disclaimer_general_message');
									}
									$rejectURL = get_option('disclaimer_general_reject_url');
									if ('yes' ==get_option('disclaimer_cookie_activation')) {
										$enableCookie = true;
									}
									if (isset($_COOKIE['product-' . $product->get_id()]) && sanitize_key($_COOKIE['product-' . $product->get_id()])) {
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
					if ($flag) {
						if ('yes'==get_option('disclaimer_log_activation')) {
							$user_ip = getUserIpAddr();
							$ipInfo = wcpd_user_ip_info($user_ip);
						}
						$disclaimer = $message;
						/*$kses_attr = array(
							'a' => array(
								'href' => array(),
								'title' => array(),
								'class' => array(),
							),
							'br' => array(),
							'em' => array(),
							'strong' => array(),
							'p' => array(),
							'div' => array(
								'class' => array(),
								'id' => array()
							),
							'p' => array(),
						);*/
						$disclaimer.='<div class="tb_footer">';
						$disclaimer.='<div class="tbl_buttons">';
						$disclaimer.='<div class="tbl_btn_left"><a href="" class="disclaimer_agree button">' . esc_html($accept_btn) . '</a></div>';
						$disclaimer.='<div class="tbl_btn_right"><a href="" class="disclaimer_reject button">' . esc_html($reject_btn) . '</a></div></div></div>';
						echo '<div id="product_message_' . esc_attr($product->get_id()) . '" style="display:none;"><div class="popup_blk_msg"><p>' . nl2br($disclaimer) . '</p></div></div>';

						?>
						<script>
							$ = jQuery;                         
							jQuery(document).ready(function(){
								var prodId = '<?php echo esc_html($product->get_id()); ?>';
								var url = "<?php echo esc_url($rejectURL); ?>";
								var enableCookie = 
								<?php if ($enableCookie) { ?>
									<?php echo true; ?>
								<?php } else { ?>
									false
								<?php } ?>;
								$("form.cart").submit(function(e){
									e.preventDefault();
									
									tb_show('<?php echo esc_html($heading); ?>', '#TB_inline?inlineId=product_message_'+prodId,'');
									jQuery(document).on('click','.disclaimer_agree',function(a){
										//user clicked "ok"
										a.preventDefault();
										if(enableCookie){
											var cookie = 'product-' + prodId;
											var duration = <?php if (get_option('disclaimer_cookie_duration', 'session') == 'session') { ?>
												'          <?php } ?>
												<?php echo esc_html(get_option('disclaimer_cookie_duration', 'session')); ?> <?php if ('session'==get_option('disclaimer_cookie_duration', 'session')) { ?>
													'
												<?php } ?>;
											if (duration == 'session'){
												duration = null;
											}
											if(wcpd_getCookie(cookie) === false){
												wcpd_setCookie(cookie, prodId, duration);
											}
										}
										<?php
										if ('yes'==get_option('disclaimer_log_activation')) {
											?>
											// add trace
											var traceData = {
												'action': 'add_disclaimer_trace_info',
												'state': 'Accepted',
												'prodId': prodId,
												'ip': '<?php echo esc_html($ipInfo['ip']); ?>',
												'country': '<?php echo esc_html($ipInfo['country']); ?>',
												'city': '<?php echo esc_html($ipInfo['city']); ?>',
												'continent': '<?php echo esc_html($ipInfo['continent']); ?>',
												'custom_nonce': '<?php echo esc_html(wp_create_nonce('custom_nonce')); ?>'
											};
									
											$.post(wcpd.ajaxurl, traceData, function(response) {
												//alert('Got this from the server: ' + response);
												//var obj = JSON.parse(response);
												if(response){
													console.log('Trace ok');
												}else{
													console.log('Trace error');
												}
											});
											<?php
										}

										?>
											var qty = jQuery('input[name=quantity]').val();                                 
											
											var data = jQuery('form.cart').serialize() + "&add-to-cart="+prodId+"&action=variable_product_disclaimer&prodId="+prodId+"&custom_nonce=<?php echo esc_html(wp_create_nonce('custom_nonce')); ?>";
											
											jQuery.post(wcpd.ajaxurl, data, function(response) {                                                    
												console.log('Got this from the server: ' + response);                                                
												/*var obj = JSON.parse(response);*/
												tb_remove(); 
												if (wc_add_to_cart_params.cart_redirect_after_add === 'yes') {
													window.location = wc_add_to_cart_params.cart_url;
													return;
												} else {
													location.reload();
												}
											});
											
																				   
								});     
								// user clicked "cancel"
								jQuery(document).on('click','.disclaimer_reject',function(r){
									 r.preventDefault();
								<?php if (get_option('disclaimer_log_activation') == 'yes') { ?>
								// add trace
								var traceData = {
									'action': 'add_disclaimer_trace_info',
									'state': 'Rejected',
									'prodId': prodId,
									'ip': '<?php echo esc_html($ipInfo['ip']); ?>',
									'country': '<?php echo esc_html($ipInfo['country']); ?>',
									'city': '<?php echo esc_html($ipInfo['city']); ?>',
									'continent': '<?php echo esc_html($ipInfo['continent']); ?>',
									'custom_nonce': '<?php echo esc_html(wp_create_nonce('custom_nonce')); ?>'
								};
								$.post(wcpd.ajaxurl, traceData, function(response) {
									//alert('Got this from the server: ' + response);
									//var obj = JSON.parse(response);
									if(response){
										console.log('Trace ok');
									}else{
										console.log('Trace error');
									}
								});
								<?php } ?>
								if (url) {
									window.location = url;
								}
							  tb_remove();
							});
								});
							});
						</script>
						<?php
					}
				} 
			}
		}
	}
	new WCPD_Discalimer_Single_Product();
}
