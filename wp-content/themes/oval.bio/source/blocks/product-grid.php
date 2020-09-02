<?php
$boxes = [
	[
		"name" => "Our Products",
		"description" => "Milestones",
		"coming_soon" => false,
	],
	[
		"name" => "Technology",
		"description" => "Our Vision behind the pod",
		"coming_soon" => false,
	],
	[
		"name" => "Blog",
		"description" => "News and education",
		"coming_soon" => true,
	],
	[
		"name" => "About Us",
		"description" => "Our team and mission",
		"coming_soon" => false,
	],
	[
		"name" => "Events",
		"description" => "Everything we do",
		"coming_soon" => false,
	],
];

$images = get_fake_images();

$products = new WP_Query([
	"post_type" => "product"
]);

$isAllProducts =  is_page("all-products");
?>

<?php $cats = get_terms('product_cat'); ?>

<section class="py-10">
	<div class="filter-box container mx-auto relative">
		<h1 class="text-4xl mb-2">All Products</h1>
		<!-- <p class="mb-2">Categories:</p> -->

		<?php if ($products->have_posts()) : ?>
			<div class="filters">
				<div class="filter filter-cat" data-filter="*">All</div>
				<?php foreach ($cats as $key => $cat) : ?>
					<?php if ($cat->slug != "uncategorized") : ?>
						<div class="filter filter-cat" data-filter=".<?= $cat->slug ?>"><?= $cat->name ?></div>
					<?php endif; ?>
				<?php endforeach; ?>
			</div>


			<div class="filter-grid flex flex-wrap p-0 md:-p-px">
				<?php while ($products->have_posts()) : $products->the_post(); ?>
					<?php
					$cat = get_the_terms(get_the_ID(), 'product_cat')[0];
					set_query_var("category", $cat->name)
					?>
					<div class="filter-grid-item filter-grid-<?= $products->current_post === 0 ? "feature" : "regular" ?> relative  <?= $cat->slug ?>">
						<?php get_template_part("template-parts/element", "product-box"); ?>
					</div>
				<?php endwhile; ?>
			</div>
		<?php else : ?>
			<div class="py-24">
				<h1 class="text-4xl mb-2">Hello</h1>
			</div>
		<?php endif; ?>
	</div>
</section>