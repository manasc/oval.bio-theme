<?php

$defaultsArr = [
	"maxItems" => 100,
	"isAllProducts" => is_page("all_products")
];

$products = new WP_Query([
	"post_type" => "product"
]);

$args = wp_parse_args($args, $defaultsArr);
$cats = get_terms('product_cat'); ?>

<section class="py-10">
	<div class="filter-box container">
		<div class="container px-2">
			<h1 class="text-4xl mb-2">All Products</h1>
			<p class="mb-2">Categories: </p>

			<?php if ($products->have_posts()) : ?>
				<!-- filters -->
				<div class="filters">
					<div class="filter filter-cat" data-filter="*">All</div>
					<?php foreach ($cats as $key => $cat) : ?>
						<?php if ($cat->slug != "uncategorized") : ?>
							<div class="filter filter-cat" data-filter=".<?= $cat->slug ?>"><?= $cat->name ?></div>
						<?php endif; ?>
					<?php endforeach; ?>
				</div>

				<!-- grid -->
				<div class="filter-grid">
					<?php $counter = 0;
					while ($products->have_posts() && $counter < $args["maxItems"]) : $products->the_post(); ?>
						<?php
						$cat = get_the_terms(get_the_ID(), 'product_cat')[0];
						set_query_var("currentIndex", $counter);
						set_query_var("category", $cat->name);
						set_query_var("hasFeatured", 1);
						?>
						<div class="filter-grid-item filter-grid-<?= $products->current_post === 0 ? "feature" : "regular" ?> relative  <?= $cat->slug ?>">
							<?php get_template_part("template-parts/element", "product-box"); ?>
						</div>
						<?php $counter++ ?>
					<?php endwhile; ?>
				</div>
			<?php else : ?>
				<div class="py-24">
					<h1 class="text-4xl mb-2">No Posts Available</h1>
				</div>
			<?php endif; ?>

			<?php if ($args["maxItems"] && $args["maxItems"] < $products->post_count) : ?>
				<div class="pt-10 pb-24 flex items-center justify-center">
					<div class="text-base mr-3">
						Check out the full list of our products on our product page.
					</div>
					<a href="<?php echo get_permalink(get_page_by_path("all-products")) ?>" class="button mr-2">
						All Products
						<i class="fas fa-shopping-bag ml-2"></i>
					</a>
					<a href="<?php echo get_permalink(get_page_by_path("pod")) ?>"class="button">
						See the Pod
						<i class="fas fa-caret-right ml-2"></i>
					</a>
				</div>
			<?php endif ?>
		</div>
	</div>
</section>