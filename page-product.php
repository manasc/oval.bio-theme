<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- compiles minified -->
    <link rel="stylesheet" href="../../dist/app.css?v=<?php echo date('s') ?>">
    <!-- end: compiled minified -->

    <!-- icons -->
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <title>Oval.Bio</title>
</head>

<body>
    <?php
    	$tabs = [
    		[
    			'name' => 'Key Benefits',
    			'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui possimus distinctio repudiandae beatae, adipisci vel. Quidem soluta tenetur in, praesentium molestias molestiae. Possimus, vitae distinctio a architecto suscipit minima, tempore dolores! A nihil laboriosam aliquam dolores, nam doloremque neque fugit! Placeat, hic fugiat tempore nesciunt debitis facilis dolore alias illo est accusamus explicabo ullam dicta, eos unde, eveniet! Eligendi ratione veniam debitis, necessitatibus accusamus, cum nemo modi repellendus ex earum incidunt repellat, impedit magni fugiat. Officiis ipsam assumenda fugiat omnis similique dolores! Totam ea dicta, iusto consequatur voluptatibus. Blanditiis aliquid aperiam itaque quam rem nobis quis eius exercitationem quod vitae!',
    			'image' => null,
    			'cta' => null,
    		], [
    			'name' => 'Nutrition & Ingredients',
    			'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, optio. Accusantium minima dolor architecto minus molestiae, explicabo obcaecati itaque repellat est dolore eius labore dolorum. Molestias accusamus similique enim tempore dolorem repellat sed praesentium quibusdam rerum, et fugit, cumque aspernatur, fuga architecto voluptate dignissimos quae. Nam ratione temporibus officiis adipisci dignissimos minus, ut eum repellat maxime saepe at ducimus molestias debitis eius sed velit tenetur eveniet placeat labore nemo laudantium. Soluta, est, nihil. Sint temporibus, eius, minima at sed pariatur, non, quo illum aspernatur facere aperiam! Ea voluptas tempore laudantium harum. Laboriosam laborum deleniti facilis, dolores fuga quam sapiente adipisci molestiae minus ut consequuntur incidunt animi debitis, sint aut error maxime asperiores et placeat cupiditate nobis consequatur omnis! Laborum totam, ab, tempore adipisci quos quo voluptatibus iusto minima id praesentium recusandae, facilis, in quae exercitationem labore voluptates voluptatem consequatur sit omnis magni rerum. Saepe incidunt at porro expedita repellat pariatur!',
    			'image' => null,
    			'cta' => null,
    		], [
    			'name' => 'Quality Verified',
    			'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cupiditate voluptatem eius veniam ipsum optio quam ullam neque excepturi, veritatis facilis vel dolorum odio quasi voluptates consectetur sequi aliquid officia ratione vero dolore, placeat exercitationem saepe inventore. Provident, itaque! Quo.',
    			'image' => null,
    			'cta' => null,
    		], [
    			'name' => 'How To Use',
    			'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quo nihil, ipsum molestias distinctio sed quas, in assumenda voluptate non et veniam vel nisi iste harum magni. Cumque, placeat officiis.',
    			'image' => null,
    			'cta' => null,
    		], [
    			'name' => 'Frequent Questions',
    			'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quo nihil, ipsum molestias distinctio sed quas, in assumenda voluptate non et veniam vel nisi iste harum magni. Cumque, placeat officiis.',
    			'image' => null,
    			'cta' => null,
    		], [
    			'name' => 'Customer Reviews',
    			'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quo nihil, ipsum molestias distinctio sed quas, in assumenda voluptate non et veniam vel nisi iste harum magni. Cumque, placeat officiis.',
    			'image' => null,
    			'cta' => null,
    		],
    	]
    ?>
<?php include "../../blocks/_navbar.php";?>
    <div id="product-customizer" class="py-24"></div>
    <?php include '../../blocks/_icons.php'?>
    <div class="flex flex-wrap md:flex-no-wrap justify-end bg-gray-200">
        <div class="w-full md:w-1/2 bg-cover bg-no-repeat bg-center" style="background-image:url(https://source.unsplash.com/random/800x602/?running)">
            <div class="block md:hidden w-full" style="padding-top: 100%"></div>
        </div>
        <div class="w-full md:w-1/2 flex items-center justify-center py-32">
            <div class="content max-w-lg">
                <h1 class="text-4xl font-light mb-3 leading-tight">There's something to say about the this product, introduce it here.</h1>
                <p class="mb-8 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in mollitia, eaque magnam. Adipisci ipsam ducimus, enim! Eius pariatur voluptatibus dolor, inventore voluptatem? Quia, ducimus!</p>
            </div>
        </div>
    </div>
    <div id="tabs" data-content="<?php echo htmlspecialchars(json_encode($tabs), ENT_QUOTES, 'UTF-8') ?>"></div>
    <section id="vision" class="p-5"></section>
    <?php
    	include "../../blocks/_footer.php";
    ?>

    <script src="../../dist/app.js?v=<?php echo date('s') ?>"></script>
</body>

</html>