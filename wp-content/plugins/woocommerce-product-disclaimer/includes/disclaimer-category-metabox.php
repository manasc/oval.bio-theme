<?php
if (!defined('ABSPATH')) {
	exit();
}  // Exit if accessed directly
if (!class_exists('WCPD_Disclaimer_Category')) {
	class WCPD_Disclaimer_Category {
		public function __construct() {
			add_action('edited_product_cat', array($this,'wcpd_save_cookie_fields'), 10, 2);
			add_action('created_product_cat', array($this,'wcpd_save_cookie_fields'), 10, 2);
			add_action('product_cat_add_form_fields', array($this,'wcpd_add_product_cat_disclaimer'), 1, 1);
			add_action('product_cat_edit_form_fields', array($this,'wcpd_edit_product_cat_disclaimer'), 1, 2);
		}
		public function wcpd_save_cookie_fields( $term_id, $tt_id ) {
			global $wpdb;

			if ( isset($_POST['custom_nonce']) ) {
				if ( ! wp_verify_nonce( sanitize_key( $_POST['custom_nonce'] ), 'custom_nonce' ) ) {
					die();
				}
			}

			if ( isset($_POST['cat_cookie'] ) ) {
				update_term_meta( $term_id, 'cat_cookie', wc_clean( $_POST['cat_cookie'] ) );
			} else {
				update_term_meta( $term_id, 'cat_cookie', 0 );
			}
			if ( isset( $_POST['disclaimer_disable'] ) ) {
				update_term_meta( $term_id, 'disclaimer_disable', 'yes' );
			} else {
				update_term_meta( $term_id, 'disclaimer_disable', 'no' );
			}

			if ( isset( $_POST['disclaimer_unique'] ) ) {
				update_term_meta( $term_id, 'disclaimer_unique', 'yes' );
			} else {
				update_term_meta( $term_id, 'disclaimer_unique', 'no' );
			}
			if ( isset( $_POST['category_message'] ) ) {
				$message= wp_kses_post(  $_POST['category_message']);
				update_term_meta( $term_id, 'category_message', $message );
			}
			if ( isset( $_POST['category_url'] ) ) {
				update_term_meta( $term_id, 'category_reject_url', wc_clean( $_POST['category_url'] ) );
			}
			if ( isset( $_POST['disclaimer_popup_heading_text'] ) ) {
				update_term_meta( $term_id, 'disclaimer_popup_heading_text', wc_clean( $_POST['disclaimer_popup_heading_text'] ) );
			}
			if (isset($_POST['disclaimer_accept_btn_text'])) {
				update_term_meta( $term_id, 'disclaimer_accept_btn_text', wc_clean( $_POST['disclaimer_accept_btn_text'] ) );
			}
			if (isset($_POST['disclaimer_reject_btn_text'])) {
				update_term_meta( $term_id, 'disclaimer_reject_btn_text', wc_clean( $_POST['disclaimer_reject_btn_text'] ) );
			}
		}
		public function wcpd_add_product_cat_disclaimer( $taxonomy ) {
			?>
			<div id="wcpd_product-disclaimer">
				<div class="form-field">
					<label><?php esc_html_e('Disclaimer option', 'wcpd'); ?></label>
					<label>
						<input type="checkbox" name="disclaimer_disable" value="yes">
						<?php esc_html_e('Disable product disclaimer for this category', 'wcpd'); ?>
					</label>
					<label>
						<input type="checkbox" name="disclaimer_unique" value="yes">
						<?php esc_html_e('Add a unique disclaimer for this category', 'wcpd'); ?>
					</label>
				</div>
				<div class="options_group">
				<div class="form-field">
					<input type="hidden" name="custom_nonce" value="<?php echo esc_html( wp_create_nonce('custom_nonce') ); ?>">
					<label>
						<input type="checkbox" name="cat_cookie" value="1">
						<?php esc_html_e('Display one time only', 'wcpd'); ?>
					</label>
				</div>
				<div class="form-field">
					<label><?php esc_html_e('Disclaimer message', 'wcpd'); ?></label>
					 <?php
						$settings = array(
						'quicktags'     => true,
						'editor_class'  => 'form-field product_message_field',
						'textarea_rows' => 10,
						'media_buttons' => true,);
						wp_editor('', 'category_message', $settings);
						?>
				</div>
				<div class="form-field">
					<label><?php esc_html_e('Reject URL', 'wcpd'); ?></label>
					<input type="text" name="category_url" class="widefat">
					<p><?php esc_html_e('Customer will be redirected to this URL if customer does not accept product disclaimer', 'wcpd'); ?></p>
				</div>
				<div class="form-field">
					<label for="disclaimer_popup_heading_text"><?php esc_html_e('Heading text', 'wcpd'); ?></label>
					<input type="text" name="disclaimer_popup_heading_text" class="widefat" id="disclaimer_popup_heading_text">
					<p><?php esc_html_e('Heading text for product disclaimer popup.', 'wcpd'); ?></p>
				</div>
				<div class="form-field">
					<label for="disclaimer_accept_btn_text"><?php esc_html_e('Accept Button Text', 'wcpd'); ?></label>
					<input type="text" name="disclaimer_accept_btn_text" class="widefat" id="disclaimer_accept_btn_text">
					<p><?php esc_html_e('Accept button text for product disclaimer popup', 'wcpd'); ?></p>
				</div>
				<div class="form-field">
					<label for="disclaimer_reject_btn_text"><?php esc_html_e('Reject Button Text', 'wcpd'); ?></label>
					<input type="text" name="disclaimer_reject_btn_text" class="widefat" id="disclaimer_reject_btn_text">
					<p><?php esc_html_e('Reject button text for product disclaimer popup', 'wcpd'); ?></p>
				</div>
				</div>
			</div>
			<?php
		}
		public function wcpd_edit_product_cat_disclaimer( $term, $taxonomy ) {
			?>
			<tr id="wcpd_product-disclaimer" class="form-field">
				<th scope="row" valign="top">
					<label for="vendor_cuisine"><?php esc_html_e('Disclaimer option', 'wcpd'); ?></label>
				</th>
				<td>
				<p><label>
		<input type="checkbox" name="disclaimer_disable" value="yes"  <?php if ( get_term_meta( $term->term_id, 'disclaimer_disable', true ) == 'yes' ) { ?> 
		checked <?php } ?> >
					<?php esc_html_e('Disable product disclaimer for this category', 'wcpd'); ?>
				</label></p>
				<p><label>
					<input type="checkbox" name="disclaimer_unique" value="yes" <?php if (get_term_meta($term->term_id, 'disclaimer_unique', true) == 'yes') { ?>
					checked<?php } ?>>
					<?php esc_html_e('Add a unique disclaimer for this category', 'wcpd'); ?>
				</label></p>
				</td>
			</tr>
			 <tr class="wcpd_options_group">
				<th scope="row" valign="top">
					<label><?php esc_html_e('Display one time only', 'wcpd'); ?></label>
				</th>
				<td>
					<label>
					<input type="checkbox" name="cat_cookie" value="1" <?php if (get_term_meta($term->term_id, 'cat_cookie', true) == 1) { ?>
					checked<?php } ?>>
					<?php esc_html_e('Disclaimer message will appear only one time on add to cart click', 'wcpd'); ?></label>
				</td>
			</tr>
			<tr class="form-field wcpd_options_group">
				<th scope="row" valign="top">
					<label for="vendor_cuisine"><?php esc_html_e('Disclaimer message', 'wcpd'); ?></label>
				</th>
				<td>
					<?php
					$content=get_term_meta($term->term_id, 'category_message', true);
					
					$settings = array(
					'quicktags'     => true,
					'editor_class'  => 'form-field product_message_field',
					'textarea_rows' => 10,
					'media_buttons' => true,);
					wp_editor($content, 'category_message', $settings);
				   
					?>
				</td>
			</tr>
			<tr class="form-field wcpd_options_group">
				<th scope="row" valign="top">
					<label for="vendor_cuisine"><?php esc_html_e('Reject URL', 'wcpd'); ?></label>
				</th>
				<td>
					<input type="text" width="95%;" name="category_url" value="<?php echo esc_url(get_term_meta($term->term_id, 'category_reject_url', true)); ?>">
					<p><?php esc_html_e('Customer will be redirected to this URL if customer does not accept product disclaimer', 'wcpd'); ?></p>
				</td>
			</tr>
			<tr class="form-field wcpd_options_group">
				<th scope="row" valign="top">
					<label for="disclaimer_popup_heading_text"><?php esc_html_e('Disclaimer Popup Heading Text', 'wcpd'); ?></label>
				</th>
				<td>
					<input type="text" width="95%;" name="disclaimer_popup_heading_text" value="<?php echo esc_attr(get_term_meta($term->term_id, 'disclaimer_popup_heading_text', true)); ?>">
					<p><?php esc_html_e('Heading text for product disclaimer popup.', 'wcpd'); ?></p>
				</td>
			</tr>
			<tr class="form-field wcpd_options_group">
				<th scope="row" valign="top">
					<label for="disclaimer_accept_btn_text"><?php esc_html_e('Accept Button Text', 'wcpd'); ?></label>
				</th>
				<td>
					<input type="text" width="95%;" name="disclaimer_accept_btn_text" value="<?php echo esc_attr(get_term_meta($term->term_id, 'disclaimer_accept_btn_text', true)); ?>">
					<p><?php esc_html_e('Accept button text for product disclaimer popup.', 'wcpd'); ?></p>
				</td>
			</tr>
			<tr class="form-field wcpd_options_group">
				<th scope="row" valign="top">
					<label for="disclaimer_reject_btn_text"><?php esc_html_e('Reject Button Text', 'wcpd'); ?></label>
				</th>
				<td>
					<input type="text" width="95%;" name="disclaimer_reject_btn_text" value="<?php echo esc_attr(get_term_meta($term->term_id, 'disclaimer_reject_btn_text', true)); ?>">
					<p><?php esc_html_e('Reject button text for product disclaimer popup.', 'wcpd'); ?></p>
				</td>
			</tr>
			<?php
		}
	}
	new WCPD_Disclaimer_Category();
}
