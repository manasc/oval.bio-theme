<?php get_header();
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
<?php get_template_part('source/blocks/icons') ?>
<div class="flex flex-wrap md:flex-no-wrap justify-end bg-gray-200">
    <div class="w-full md:w-1/2 bg-cover bg-no-repeat bg-center" style="background-image:url(https://source.unsplash.com/random/800x602/?running)">
        <div class="block md:hidden w-full" style="padding-top: 100%"></div>
    </div>
    <div class="w-full md:w-1/2 flex items-center justify-center py-10">
        <div class="content p-5 max-w-lg">
            <h1 class="text-3xl md:text-4xl font-light mb-5 leading-tight">There's something to say about the this product, introduce it here.</h1>
            <p class="text-base leading-snug">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in mollitia, eaque magnam. Adipisci ipsam ducimus, enim! Eius pariatur voluptatibus dolor, inventore voluptatem? Quia, ducimus!</p>
        </div>
    </div>
</div>
<div id="tabs" data-content="<?php echo htmlspecialchars(json_encode($tabs), ENT_QUOTES, 'UTF-8') ?>"></div>
<!-- <section id="vision"></section> -->
<?php get_footer() ?>
