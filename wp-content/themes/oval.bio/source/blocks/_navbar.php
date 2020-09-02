<!-- converted to react component -->
<?php
	$navigation = [
		[
			'name' => 'Our Products',
			'url' => '/pages/all-products',
		], [
			'name' => 'Technology',
			'url' => '/pages/all-products',
		], [
			'name' => 'Blog',
			'url' => '/pages/all-products',
		], [
			'name' => 'About Us',
			'url' => '/pages/all-products',
		], [
			'name' => 'Events',
			'url' => '/pages/all-products',
		],
	];

	$nav_in_json = htmlspecialchars(json_encode($navigation), ENT_QUOTES, 'UTF-8');
?>
<div id="main-header" data-navigation="<?= $nav_in_json ?>"></div>