<?php get_header(); ?>

Hello
<?php $blocks = glob(__DIR__ . "/source/gutenberg-blocks/*.php"); ?>

<div class="py-20">
    <?php foreach ($blocks as $key => $block) : ?>
        <?php include $block; ?>
    <?php endforeach; ?>
</div>

<?php get_footer() ?>