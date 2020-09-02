<?php
if (!defined('ABSPATH')) {
	exit();
}  // Exit if accessed directly
if (!class_exists('WCPD_Discalimer_Log')) {
	class WCPD_Discalimer_Log {
		public function __construct() {
			add_filter( 'woocommerce_admin_status_tabs', array( $this, 'register_disclaimer_log_tab' ) );
			add_action( 'woocommerce_admin_status_content_disclaimer-log', array( $this, 'render_disclaimer_log_ui' ) );
		}
		public function register_disclaimer_log_tab( array $tabs) {
			$tabs['disclaimer-log'] = __('Disclaimer Logs', 'wcpd');
			return $tabs;
		}
		public function render_disclaimer_log_ui() {
			$list_table= new WCPD_Discalimer_List_Table();
			?>
			<div class="wrap">
				<h2><?php esc_html_e('Woocommerce Disclaimer Log', 'wcpd'); ?></h2>
				<div id="post-body" class="metabox-holder columns-2">
					<div id="post-body-content">
						<div class="meta-box-sortables ui-sortable">
							<form method="post">
			<?php $list_table->prepare_items(); ?>
			<?php $list_table->display(); ?>
							</form>
						</div>
					</div>
				</div>
				<br class="clear">
			</div>
			<?php
		}
	}
	new WCPD_Discalimer_Log();
}

