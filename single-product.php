<?php

/**
 * The Template for displaying all single products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     1.6.4
 */

global $product, $woocommerce;

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}

get_header('shop');
?>

<?php
/**
 * woocommerce_before_main_content hook.
 *
 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
 * @hooked woocommerce_breadcrumb - 20
 */
do_action('woocommerce_before_main_content');
?>

<?php
// get product data in json
$client = new GuzzleHttp\Client([
	'base_uri' => get_permalink()
]);
$productData = $client->get("/wp-json/wc/store/products/" . $product->id, ['verify' => false]);
$productMeta = $client->get("/wp-json/acf/v3/product/" . $product->id, ['verify' => false]);
?>

<!-- <?php while (have_posts()) : ?> -->
<!-- <?php the_post();  ?> -->

<div id="product-page" data-product-id='<?php echo $product->id ?>' data-product-data='<?php echo esc_html($productData->getBody()->getContents()) ?>' data-product-meta='<?php echo esc_html($productMeta->getBody()->getContents()) ?>' data-nonce-id="<?php echo wp_create_nonce('wc_store_api') ?>"></div>
<!-- <?php endwhile; ?>  -->




<?php
/**
 * woocommerce_after_main_content hook.
 *
 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
 */
do_action('woocommerce_after_main_content');
?>

<?php
/**
 * woocommerce_sidebar hook.
 *
 * @hooked woocommerce_get_sidebar - 10
 */
do_action('woocommerce_sidebar');
?>

<?php
get_footer('shop');

/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */
