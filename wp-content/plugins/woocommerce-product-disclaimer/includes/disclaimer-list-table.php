<?php
if (!defined('ABSPATH')) {
	exit();
}  // Exit if accessed directly
if (!class_exists('WP_List_Table')) {
	include_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
}
if ( !class_exists( 'WCPD_Discalimer_List_Table' ) ) {
	class WCPD_Discalimer_List_Table extends WP_List_Table {
		public function __construct() {
			parent::__construct(
				array(
				'singular' => __('Featured Listing', 'wcpd'),
				'plural'   => __('Featured Listings', 'wcpd'),
				'ajax'     => false
				)
			);
		}
		public function no_items() {
			esc_html_e('No records avaliable.', 'wcpd');
		}

		public function column_user_id( $item ) {
			if (!empty($item['user_id'])) {
				$user_info = get_userdata($item['user_id']);
				if (!is_wp_error($user_info)) {
					return '<a href="' . esc_attr(get_edit_user_link($item['user_id'])) . '" target="_blanck">' . $user_info->display_name . '</a>';
				}
			}
			return $item['user_id'];
		}

		public function column_product( $item ) {
			if (!empty($item['product_id'])) {
				return '<a href="' . esc_attr(get_edit_post_link($item['product_id'])) . '" target="_blanck">' . get_the_title($item['product_id']) . '</a>';
			}
			return $item['product_id'];
		}

		public function column_status( $item ) {
			return $item['action'];
		}

		public function column_ip_address( $item ) {
			return $item['ip'];
		}

		public function column_city( $item ) {
			return $item['city'];
		}

		public function column_country( $item ) {
			return $item['country'];
		}

		public function column_continent( $item ) {
			return $item['continent'];
		}

		public function column_date( $item ) {
			return gmdate('Y-m-d H:i:s', strtotime($item['created_at']));
		}

		public function get_columns() {
			$columns = array(
			'user_id'    =>    __('User', 'wcpd'),
			'product'    =>    __('Product', 'wcpd'),
			'status'    =>    __('Status', 'wcpd'),
			'ip_address'=>    __('IP Address', 'wcpd'),
			'city'        =>    __('City', 'wcpd'),
			'country'    =>    __('Country', 'wcpd'),
			'continent'    =>    __('Continent', 'wcpd'),
			'date'        =>    __('Date', 'wcpd')
			);
			return $columns;
		}

		public function get_sortable_columns() {
			$sortable_columns = array(
			);
			return $sortable_columns;
		}

		public function prepare_items() {
			$columns = $this->get_columns();
			$sortable = $this->get_sortable_columns();
			   $this->_column_headers = array($columns, array(), $sortable);
			$per_page     = $this->get_items_per_page('wcpd_per_page', 30);
			$current_page = $this->get_pagenum();
			$total_items  = WCPD_Discalimer_Helper_Model::record_count();
			$this->set_pagination_args(
				array(
				'total_items' => $total_items, //WE have to calculate the total number of items
				'per_page'    => $per_page //WE have to determine how many items to show on a page
				)
			);
			
			$this->items = WCPD_Discalimer_Helper_Model::get_records($per_page, $current_page);
		}
	}
}
