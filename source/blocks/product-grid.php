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
?>

<section class="md:my-20">
	<div class="container mx-auto">
	<h1 class="text-4xl mb-8">Products</h1>

		<div class="flex flex-wrap p-0 md:p-px">
			<div class="relative w-full md:w-1/2 relative p-0 md:p-px">
				<div class="product-box relative">
					<div class="absolute px-5 w-full h-full bg-gray-800 flex flex-col items-center justify-center">
						<div class="content max-w-md">
							<h2 class="text-ovalGreen text-4xl md:text-3xl lg:text-4xl leading-snug mb-3">Every product is a step towards the future.</h2>
							<a class="button mt-2">All products</a>
						</div>
					</div>
				</div>
			</div>
			<?php foreach ($boxes as $key => $box) : ?>
				<div class="relative w-full md:w-1/2 p-0 md:p-px">
					<div class="product-box cursor-pointer relative">
						<div class="cover-image" style="background-image:url(<?php echo $images[$key]->urls->regular ?>)"></div>
						<div class="cover"></div>
						<div class="absolute content p-5 h-full w-full">
							<div class="title absolute">
								<div class="text-4xl md:text-3xl lg:text-5xl font-light text-white leading-snug"><?php echo $box["name"] ?></div>
								<div class="meta text-base text-xs lg:text-base"><?php echo $box["description"] ?></div>
							</div>
							<?php if ($box["coming_soon"] == true) : ?>
								<div class="coming-soon absolute top-0 right-0 label">
									<span class="coming-soon-text label-text">Coming Soon</span>
								</div>
							<?php endif ?>
						</div>
					</div>
				</div>
			<?php endforeach ?>
		</div>
	</div>
</section>