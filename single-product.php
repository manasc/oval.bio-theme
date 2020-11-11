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

<form id="productBox" name="productBox" class="py-5 md:py-10 max-w-5xl mx-auto">
	<div class="flex flex-wrap -mx-5">
		<div class="w-2/3 px-5">
			<?php if (!empty($product->gallery_image_ids)) : ?>
				<div class="nmr-image-gallery-box">
					<div class="nmr-image-gallery">
						<div data-key="<?php echo $product->image_id ?>" class="nmr-image">
							<div class="square-image nmr-lazyload" data-bg="<?php echo wp_get_attachment_image_url($product->image_id, 'large', false) ?>"></div>
						</div>

						<?php foreach ($product->gallery_image_ids as $key => $id) : ?>
							<div data-key="<?php echo $id ?>" class="nmr-image">
								<div class="square-image nmr-lazyload" data-bg="<?php echo wp_get_attachment_image_url($id, 'large', false) ?>"></div>
							</div>
						<?php endforeach; ?>
					</div>
					<div class="nmr-image-gallery-nav">
						<div class="flex flex-wrap -mx-px my-px py-px">
							<div data-key="<?php echo $product->image_id ?>" class="w-1/5 px-px py-px nmr-image">
								<div class="square-image nmr-lazyload" data-bg="<?php echo wp_get_attachment_image_url($product->image_id, 'large', false) ?>"></div>
							</div>

							<?php foreach ($product->gallery_image_ids as $key => $id) : ?>
								<div data-key="<?php echo $id ?>" class="w-1/5 px-px py-px nmr-image">
									<div class="square-image nmr-lazyload" data-bg="<?php echo wp_get_attachment_image_url($id, 'large', false) ?>"></div>
								</div>
							<?php endforeach; ?>
						</div>
					</div>
				</div>
			<?php endif; ?>
		</div>
		<div class="w-1/3 px-5">
			<div>
				<div class="hidden md:block title font-bold text-3xl mb-1">
					<?php echo $product->name ?>
				</div>
				<?php if (!empty($product->category_ids)) : ?>
					<?php $productCats = get_the_terms($post->id, 'product_cat'); ?>
					<div class="labels mb-2">
						<?php foreach ($productCats as $key => $cat) : ?>
							<div class="label"><span class="label-text"><?php echo $cat->name ?></span></div>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
				<div class="hidden md:block desc text-sm font-light leading-tight mb-5">
					<?php echo $product->description ?>
				</div>
				<div class="options mb-10">
					<div class="font-bold text-xs tracking-wider uppercase text-gray-800 mb-2">
						Choose pack size:
					</div>
					<div class="pack-options">
						<?php foreach ($productArr["options"]["packSizes"] as $key => $size) : ?>
							<label class="pack-option mr-4">
								<input type="radio" <?php echo $key === 0 ? "checked" : "" ?> name="packSize" value="<?php echo $size["quantity"] ?>" />
								<div class="pack-option-box">
									<div class="pack-option-number"><?php echo $size["quantity"] ?></div>
									<div class="pack-option-text">Pack</div>
								</div>
								<div class="pack-option-box-meta">$<?php echo $size["cost"] ?> / Item</div>
							</label>
						<?php endforeach; ?>
					</div>
				</div>
				<div class="options mb-10">

					<div class="font-bold text-xs tracking-wider uppercase text-gray-800 mb-2">
						<span class="subscription-meta">You're saving <span class="text-ovalGreenDark">20%</span></span>
						<span class="non-subscription-meta">Subscribe and save <span class="text-ovalGreenDark">20% more.</span></span>
					</div>
					<div class="block sub-options">
						<label class="sub-option">
							<input type="radio" name="subscription" value="one-time" />
							<div class="sub-option-box">
								<div class="sub-option-number">One-Time</div>
							</div>
						</label>
						<label class="sub-option">
							<input type="radio" checked name="subscription" value="subscription" />
							<div class="sub-option-box">
								<div class="sub-option-number">Subscription</div>
							</div>
						</label>
						<div class="non-subscription-meta">
							<div class="text-2xs text-gray-500 italic leading-snug max-w-3xs">
								Renews every 30 days.
								Subscribe and save
								<span id="points" class="text-ovalGreen font-bold mr-1">
									20%
								</span>
							</div>
						</div>
						<div class="subscription-meta">
							<div class="text-2xs text-gray-500 italic leading-snug max-w-3xs">
								Renews every 30 days.
								Subscribe and save
								<span id="points" class="text-ovalGreen font-bold mr-1">
									20%
								</span>
							</div>
						</div>

						<!-- <label id="subCheck" class="nmr-checkbox flex flex-wrap items-start">
							<div class="nmr-checkbox-icon mr-2 flex-none">
								<input type="checkbox" name="subscription" checked />
								<i class="checked-icon fas fa-check-square"></i>
								<i class="unchecked-icon far fa-square"></i>
							</div>
							<div class="flex-1">
								<span class="leading-6">
									I would like to subscribe
								</span>
								<div class="text-2xs text-gray-500 italic leading-snug max-w-3xs">
									Renews every 30 days.
									Subscribe and save
									<span id="points" class="text-ovalGreen font-bold mr-1">
										20%
									</span>
									.
								</div>
							</div>
						</label> -->

					</div>
				</div>
				<div class="options mb-10">
					<div class="label-text text-sm mb-2">
						<span class="subscription-meta">Subscription Total</span>
						<span class="non-subscription-meta">Total</span>
					</div>
					<div class="title text-4xl leading-none">
						<input type="text" name="total" class="hidden">
						<div class="relative flex items-start font-normal tracking-tight">
							<span id="price" class="line-through text-gray-400 inline-block">
								<span id="priceValue">
									$30.00
								</span>
							</span>
							<span id="subPrice" class="ml-1 text-ovalGreen relative inline-block">
								<span id="subPriceValue">
									$24.00
								</span>
								<div class="relative block text-2xs text-gray-600 uppercase text-right tracking-normal">per month</div>
							</span>
						</div>
					</div>
				</div>
				<div>
					<a class="button w-full">
						<span class="label-text">Purchase</span>
					</a>
					<div class="mt-3 text-xs leading-snug max-w-2xs italic">
						Purchase this product now and earn
						<span id="points" class="text-ovalGreen font-bold mr-1">
							40 points toward the Pod
						</span>
						<i class="fas fa-question-circle cursor-pointer"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</form>
<!-- <script type="text/javascript">
	console.log("Hello!")
	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		console.log(this.responseXML.title);
	}
	xhr.open("GET", "/wp-json/wp/v2/posts");
	xhr.responseType = "document";
	xhr.send();
</script> -->
<?php
get_template_part('template-parts/module', "all", [
	"fields" => get_fields()
]);
?>

<?php get_footer(); ?>