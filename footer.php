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

<?php if (!is_page('all-blogs')) : ?>
    <div class="bg-gray-800">
        <div class="container px-5 mx-auto">
            <div class="py-24 w-full relative">
                <div class="mb-10 max-w-lg">
                    <h1 class="text-4xl text-ovalGreen leading-tight font-light ">Lorem ipsum dolor sit amet.</h1>
                    <!-- <h5 class="text-base text-gray-200">Quibusdam minus voluptates dignissimos, labore eum recusandae. Molestias iusto, magni minus non reprehenderit sint eius in inventore, cumque quos similique atque sunt!</h5> -->
                </div>
                <div class="blog-items flex flex-wrap -mx-2">
                    <div class="blog-item cursor-pointer mb-5 md:mb-0 w-full md:w-1/4 px-2 flex flex-wrap items-center">
                        <div class="image-box product-box overflow-hidden relative w-1/3 md:w-full">
                            <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat" style="background-image:url(<?php echo $footer_images[10]->urls->small ?>)"></div>
                            <div class="label hidden md:block absolute top-0 right-0"><span class="label-text">Excercise</span></div>
                        </div>
                        <div class="content w-2/3 md:w-full pl-2 md:pl-0">
                            <div class="label inline-block md:hidden"><span class="label-text">Excercise</span></div>
                            <div class="title text-lg text-white leading-snug mt-2 mb-3 pr-1">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                            <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen">April 5</div>
                        </div>
                    </div>
                    <div class="blog-item cursor-pointer mb-5 md:mb-0 w-full md:w-1/4 px-2 flex flex-wrap items-center">
                        <div class="image-box product-box overflow-hidden relative w-1/3 md:w-full">
                            <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat" style="background-image:url(<?php echo $footer_images[11]->urls->small ?>)"></div>
                            <div class="label hidden md:block absolute top-0 right-0"><span class="label-text">Neuroscience</span></div>
                        </div>
                        <div class="content w-2/3 md:w-full pl-2 md:pl-0">
                            <div class="label inline-block md:hidden"><span class="label-text">Neuroscience</span></div>
                            <div class="title text-lg text-white leading-snug mt-2 mb-3 pr-1">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                            <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen">June 10</div>
                        </div>
                    </div>
                    <div class="blog-item cursor-pointer mb-5 md:mb-0 w-full md:w-1/4 px-2 flex flex-wrap items-center">
                        <div class="image-box product-box overflow-hidden relative w-1/3 md:w-full">
                            <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat" style="background-image:url(<?php echo $footer_images[12]->urls->small ?>)"></div>
                            <div class="label hidden md:block absolute top-0 right-0"><span class="label-text">Hello</span></div>
                        </div>
                        <div class="content w-2/3 md:w-full pl-2 md:pl-0">
                            <div class="label inline-block md:hidden"><span class="label-text">Hello</span></div>
                            <div class="title text-lg text-white leading-snug mt-2 mb-3 pr-1">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                            <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen">March 10</div>
                        </div>
                    </div>
                    <div class="blog-item cursor-pointer mb-5 md:mb-0 w-full md:w-1/4 px-2 flex flex-wrap items-center">
                        <div class="image-box product-box overflow-hidden relative w-1/3 md:w-full">
                            <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat" style="background-image:url(<?php echo $footer_images[13]->urls->small ?>)"></div>
                            <div class="label hidden md:block absolute top-0 right-0"><span class="label-text">Hello</span></div>
                        </div>
                        <div class="content w-2/3 md:w-full pl-2 md:pl-0">
                            <div class="label inline-block md:hidden"><span class="label-text">Hello</span></div>
                            <div class="title text-lg text-white leading-snug mt-2 mb-3 pr-1">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                            <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen">March 12</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>

<div class="bg-ovalGreen">
    <div class="container mx-auto py-12 px-5 lg:py-16 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-2xl md:text-3xl leading-snug font-light tracking-tight text-gray-800 sm:text-4xl sm:leading-10 mr-0 md:mr-4 mb-5 lg:mb-0">
            Sign up for the <span class="font-bold font-sans">oval.bio</span> newsletter for news, information and updates on the medical industry
            <br>
        </h2>
        <div class="mt-8 md:mt-0 flex-none">
            <div class="input-field flex">
                <input placeholder="yourname@example.com" type="text" class="outline-none w-full max-w-xs text-gray-800 px-5 py-2 mr-2 rounded">
                <!-- FIXME: does not produce wave effect ANYWHERE -->
                <a href="#" class="button dark w-48">
                    Submit
                    <i class="button-icon fas fa-paper-plane"></i>
                </a>
            </div>
        </div>
    </div>
</div>

<footer class="bg-gray-900 text-white">
    <div class="container px-5 mx-auto">
        <div class="flex flex-wrap -mx-5 py-10">
            <div class="w-full lg:w-2/6 px-5">
                <?php echo get_logo() ?>
                <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta dicta dolorem neque quas, sequi deserunt dolores qui debitis velit obcaecati, quae consectetur. Earum, atque.</p>
            </div>
            <div class="w-1/2 md:w-1/3 lg:w-1/6 px-5 mt-5">
                <div class="font-bold text-lg mb-1 text-ovalGreen">Solutions</div>
                <ul>
                    <?php foreach (range(1, 5) as $i) : ?>
                        <li class="mb-1"><a href="#" class="opacity-50 hover:opacity-100">Link <?php echo $i ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div class="w-1/2 md:w-1/3 lg:w-1/6 px-5 mt-5">
                <div class="font-bold text-lg mb-1 text-ovalGreen">Support</div>
                <ul>
                    <?php foreach (range(1, 5) as $i) : ?>
                        <li class="mb-1"><a href="#" class="opacity-50 hover:opacity-100">Link <?php echo $i ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div class="w-1/2 md:w-1/3 lg:w-1/6 px-5 mt-5">
                <div class="font-bold text-lg mb-1 text-ovalGreen">Company</div>
                <ul>
                    <?php foreach (range(1, 5) as $i) : ?>
                        <li class="mb-1"><a href="#" class="opacity-50 hover:opacity-100">Link <?php echo $i ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div class="w-1/2 md:w-1/3 lg:w-1/6 px-5 mt-5">
                <div class="font-bold text-lg mb-1 text-ovalGreen">Legal</div>
                <ul>
                    <?php foreach (range(1, 5) as $i) : ?>
                        <li class="mb-1"><a href="#" class="opacity-50 hover:opacity-100">Link <?php echo $i ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
    <div class="container px-5 py-5 border-t border-gray-700 mx-auto flex flex-wrap">
        <div class="w-full md:w-1/2 text-center md:text-left">
            <i class="fas fa-copyright mr-1"></i> <?php echo date('Y') ?>. All rights reserved.
        </div>
        <div class="w-full md:w-1/2 text-center md:text-right mt-10 md:mt-0">
            <a class="mr-2 text-gray-500 hover:text-gray-100" href=""><i class="fab fa-facebook"></i></a>
            <a class="mr-2 text-gray-500 hover:text-gray-100" href=""><i class="fab fa-twitter"></i></a>
            <a class="mr-2 text-gray-500 hover:text-gray-100" href=""><i class="fab fa-medium"></i></a>
            <a class="mr-2 text-gray-500 hover:text-gray-100" href=""><i class="fab fa-instagram"></i></a>
        </div>
    </div>
</footer>
</div> <!-- #page -->
<?php wp_footer(); ?>
</body>

</html>