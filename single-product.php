<?php get_header(); ?>

<?php if (have_posts()) : ?>
	<?php while (have_posts()) : ?>
		<?php the_post(); ?>
		<div class="block md:hidden p-5">
			<div class="title font-bold text-3xl mb-2">Heliopatch</div>
			<div class="desc text-sm font-light leading-tight">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Corporis magnam laborum, quas voluptates sapiente est
				aspernatur itaque quod, voluptatibus iusto nulla illum. Qui,
				explicabo quasi consectetur tenetur reprehenderit aliquam
				temporibus.
			</div>
		</div>
		<div id="product-customizer" class="py-5 md:py-10"></div>
		<?php get_template_part('template-parts/module', "all", [
			"fields" => get_fields()
		]) ?>
	<?php endwhile; ?>
<?php endif; ?>

<?php get_footer(); ?>