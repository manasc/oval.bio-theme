<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package oval.bio
 */

?>

<?php $footer_images = get_fake_images() ?>
<div class="bg-ovalGreen px-24 py-24 w-full relative flex flex-col justify-center">
	<div class="mb-6 max-w-2xl">
		<h1 class="text-4xl text-gray-800 leading-tight font-light mb-10">
			Sign up for the <span class="font-bold font-sans">oval.bio</span> newsletter for news, information and updates on the medical industry
		</h1>
		<div class="input-field flex">
			<input placeholder="yourname@example.com" type="text" class="outline-none w-full max-w-xs text-gray-800 px-5 py-2 mr-2 rounded">
			<a class="button dark">Submit</a>
		</div>
	</div>
</div>
<div class="bg-gray-800 ">
	<div class="container mx-auto">
		<div class="px-12 py-20 w-full relative">
			<div class="border-white border-b mb-8">
				<h1 class="text-4xl text-ovalGreen font-light ">Related Articles.</h1>
			</div>
			<div class="blog-items flex flex-wrap -mx-2">
				<div class="blog-item cursor-pointer w-1/4 px-2">
					<div class="image-box product-box overflow-hidden relative">
						<div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat" style="background-image:url(<?php echo $footer_images[10]->urls->small ?>)"></div>
						<div class="label absolute top-0 right-0"><span class="label-text">Excercise</span></div>
					</div>
					<div class="content">
						<div class="title text-lg font-bold text-white mt-2 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
						<div class="meta text-sm uppercase tracking-wider text-ovalGreen">April 5</div>
					</div>
				</div>
				<div class="blog-item cursor-pointer w-1/4 px-2">
					<div class="image-box product-box overflow-hidden relative">
						<div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat" style="background-image:url(<?php echo $footer_images[11]->urls->small ?>)"></div>
						<div class="label absolute top-0 right-0"><span class="label-text">Neuroscience</span></div>
					</div>
					<div class="content">
						<div class="title text-lg font-bold text-white mt-2 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
						<div class="meta text-sm uppercase tracking-wider text-ovalGreen">June 10</div>
					</div>
				</div>
				<div class="blog-item cursor-pointer w-1/4 px-2">
					<div class="image-box product-box overflow-hidden relative">
						<div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat" style="background-image:url(<?php echo $footer_images[12]->urls->small ?>)"></div>
						<div class="label absolute top-0 right-0"><span class="label-text">Hello</span></div>
					</div>
					<div class="content">
						<div class="title text-lg font-bold text-white mt-2 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
						<div class="meta text-sm uppercase tracking-wider text-ovalGreen">March 10</div>
					</div>
				</div>
				<div class="blog-item cursor-pointer w-1/4 px-2">
					<div class="image-box product-box overflow-hidden relative">
						<div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat" style="background-image:url(<?php echo $footer_images[13]->urls->small ?>)"></div>
						<div class="label absolute top-0 right-0"><span class="label-text">Hello</span></div>
					</div>
					<div class="content">
						<div class="title text-lg font-bold text-white mt-2 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
						<div class="meta text-sm uppercase tracking-wider text-ovalGreen">March 12</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>