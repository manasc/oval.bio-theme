<?php
if (!defined('ABSPATH')) {
	exit();
}  // Exit if accessed directly
if (!class_exists('WCPD_Discalimer_Site_Global')) {
	class WCPD_Discalimer_Site_Global {
		public function __construct() {
			add_action('init', array($this, 'init_wcpd_thickbox_disclaimer'));
			add_action('wp_footer', array($this, 'wcpd_check_for_site_disclaimer'));
		}
		public function init_wcpd_thickbox_disclaimer() {
			add_thickbox();
		}
		public function wcpd_check_for_site_disclaimer() {
			//echo 'I am here';
			if ( 'yes' == get_option('disclaimer_site_activate') ) {
				$accept_btn=get_option('disclaimer_site_accept_btn_text');
				$accept_btn=!empty($accept_btn) ? $accept_btn : esc_html__('Yes', 'wcpd');
				$reject_btn=get_option('disclaimer_site_reject_btn_text');
				$reject_btn=!empty($reject_btn) ? $reject_btn : esc_html__('No', 'wcpd');
				$heading=get_option('disclaimer_site_popup_heading_text');
				$heading=!empty($heading) ? $heading : esc_html__('Site Disclaimer', 'wcpd');
				$message = '';
				$rejectURL = 'https://google.com';
				$enableCookie = false;
				$flag = false;
				if (function_exists('icl_register_string')) {
					$data = get_option('disclaimer_site_general_message');
					$message = icl_translate('woocommerce-site-disclaimer', 'disclaimer_site_general_message', $data);
				} else {
					$message = get_option('disclaimer_site_general_message');
				}

				if ('yes' ==get_option('disclaimer_site_cookie_activation')) {
					$enableCookie = true;
				}
					
				if (isset($_COOKIE['site-disclaimer']) && sanitize_key( $_COOKIE['site-disclaimer'] )) {
					$flag = false;
				} else {
					$flag = true;
				}
			}
				//echo 'my flag '. $flag;
			if ( isset($flag) && $flag ) {
				echo '<a href="#" id="site-disclaimer-trigger" style="position:fixed;left:-9999px;bottom:0">site disclaimer</a>';
				if (get_option('disclaimer_log_activation') == 'yes') {
					$user_ip = getUserIpAddr();
					$ipInfo = wcpd_user_ip_info($user_ip);
				}
				$disclaimer = wp_kses_post($message);
				$kses_attr = array(
					'a' => array(
						'href' => array(),
						'title' => array(),
						'class' => array()
					),
					'div' => array(
						'class' => array()
					),
					'p' => array(
						'class' => array()
					)
				);
				$disclaimer.='<div class="tb_footer">';
				$disclaimer.='<div class="tbl_buttons">';
				$disclaimer.='<div class="tbl_btn_left"><a href="" class="disclaimer_agree button">' . esc_html($accept_btn) . '</a></div>';
				$disclaimer.='<div class="tbl_btn_right"><a href="" class="disclaimer_reject button">' . esc_html($reject_btn) . '</a></div></div></div>';
				echo '<div id="site-diclaimer-popup" style="display:none;"><div>' . wp_kses($disclaimer, $kses_attr) . '</div></div>';
				?>
					<script>
						$ = jQuery;
						$(document).ready(function(){
							var url = "<?php echo esc_url($rejectURL); ?>";
							var enableCookie = 
								<?php if ($enableCookie) { ?>
									<?php echo 'true'; ?>
								<?php } else { ?>
									<?php echo 'false'; ?>
								<?php } ?>;
							var logEnable = "<?php get_option('disclaimer_log_activation')=='yes' ? true : false; ?>";
							
							

							$(document).on('click', '#site-disclaimer-trigger', function(y){
								y.preventDefault();
								tb_show('<?php echo esc_html($heading); ?>', '#TB_inline?inlineId=site-diclaimer-popup', '');
							});

							setTimeout(
								function(){
									$('#site-disclaimer-trigger').trigger("click");
								},200
							);

							jQuery(document).on('click','.disclaimer_agree',function(a){
								// user clicked "ok"
								a.preventDefault();

								if(enableCookie){
									var cookie = 'site-disclaimer';
									var cookieValue = 'site';
									var duration = <?php if (get_option('disclaimer_site_cookie_duration', 'session') == 'session') { ?>
												'<?php } ?>
												<?php echo esc_html( get_option('disclaimer_site_cookie_duration', 'session') ); ?> <?php if ( 'session'==get_option('disclaimer_site_cookie_duration', 'session') ) { ?>
													'
												<?php } ?>;
									if (duration == 'session'){
										duration = null;
									}
									if(wcpd_getCookie(cookie) === false){
										wcpd_setCookie(cookie, cookieValue, duration);
									}
								}
								console.log('my log is '. logEnable);
							<?php if (get_option('disclaimer_log_activation') == 'yes') { ?>
									// add trace
									var traceData = {
										'action': 'add_disclaimer_trace_info',
										'state': 'Accepted',
										'prodId': '',
										'ip': '<?php echo esc_html( $ipInfo['ip'] ); ?>',
										'country': '<?php echo esc_html( $ipInfo['country'] ); ?>',
										'city': '<?php echo esc_html( $ipInfo['city'] ); ?>',
										'continent': '<?php echo esc_html( $ipInfo['continent'] ); ?>',
									};
									//alert(data.toSource());
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

								tb_remove();                                    
							});     
						
							
							jQuery(document).on('click','.disclaimer_reject',function(r){
								// user clicked "cancel"
								r.preventDefault();
							<?php if (get_option('disclaimer_log_activation') == 'yes') { ?>
									// add trace
									var traceData = {
										'action': 'add_site_disclaimer_trace_info',
										'state': 'Rejected',
										'prodId': '',
										'ip': '<?php echo esc_html( $ipInfo['ip'] ); ?>',
										'country': '<?php echo esc_html( $ipInfo['country'] ); ?>',
										'city': '<?php echo esc_html( $ipInfo['city'] ); ?>',
										'continent': '<?php echo esc_html( $ipInfo['continent'] ); ?>',
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
					</script>
				<?php
			}
		}
	}
	new WCPD_Discalimer_Site_Global();
}
