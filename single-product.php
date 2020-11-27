<?php
get_header();

global $product, $woocommerce;

$productArr = [
	"options" => [
		"images" => [
			"https://images.unsplash.com/photo-1546667882-3ea72f6e2714?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
			"https://images.unsplash.com/photo-1547700920-d144230de2c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
			"https://images.unsplash.com/photo-1584863431255-3997371dcc01?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0",
			"https://images.unsplash.com/photo-1533012562945-b003ce1d3269?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDYyMn0"
		],
		"packSizes" => [
			[
				"quantity" => 1,
				"cost" => 5
			],
			[
				"quantity" => 5,
				"cost" => 4
			],
			[
				"quantity" => 10,
				"cost" => 3
			]
		]
	],
	"chosenImage" => null,
	"chosenPackSize" => 1,
	"subscription" => true,
	"renewal" => 30
];
?>

<!-- <pre class="w-full text-2xs leading-none bg-gray-300 p-5"><?php print_r($product) ?></pre> -->

<div id="product-page" data-product-id="<?php echo $product->id ?>">Hello</div>

<?php
get_template_part('template-parts/module', "all", [
	"fields" => get_fields()
]);
?>

<?php get_footer(); ?>