
<?php
$footer_images = get_fake_images();

$icons = [
    [
        "name" => 'Diagnostics & Data',
        "selected" => false,
        "icon" => get_template_directory_uri() . "/source/images/icons/AntiInflammatory.svg",
    ],
    [
        "name" => 'LifeStyle',
        "selected" => true,
        "icon" => get_template_directory_uri() . "/source/images/icons/PainRelief.svg",
    ],
    [
        "name" => 'Nutrition',
        "selected" => false,
        "icon" => get_template_directory_uri() . "/source/images/icons/NanoBubbles.svg",
    ],
    [
        "name" => 'Recovery',
        "selected" => false,
        "icon" => get_template_directory_uri() . "/source/images/icons/Electrons.svg",
    ],
    [
        "name" => 'Therapies',
        "selected" => true,
        "icon" => get_template_directory_uri() . "/source/images/icons/Electrons.svg",
    ]
];

?>
<section>
    <div class="mb-10">
        <h1 class="text-3xl mb-8 font-light">Life Extension</h1>
    </div>
    <div class="mb-10">
        <div class="labels">
            <div class="label">
                <span class="label-text">Pillars</span>
            </div>
        </div>
        <div class="content-box">
            <div class="flex-1 flex flex-wrap -mx-10">
                <?php foreach ($icons as $icon) : ?>
                    <div class="w-1/2 md:w-1/5 px-10 py -5">
                        <div class="rounded-full w-full mx-auto <?php echo $icon['selected'] ? "bg-ovalGreen" : "bg-gray-300" ?> " style="padding-top: 100%;"></div>
                        <p class="text-center text-sm mt-4"><?php echo $icon['name'] ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
    <div class="">
        <div class="labels">
            <div class="label">
                <span class="label-text">Related Articles</span>
            </div>
        </div>
        <div class="content-box">
            <div class="blog-items flex flex-wrap -mx-2">
                <div class="blog-item cursor-pointer mb-5 md:mb-0 w-full md:w-1/4 px-2 flex flex-wrap items-center">
                    <div class="image-box product-box overflow-hidden relative w-1/3 md:w-full">
                        <div class="image absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat" style="background-image:url(<?php echo $footer_images[10]->urls->small ?>)"></div>
                        <div class="label hidden md:block absolute top-0 right-0"><span class="label-text">Excercise</span></div>
                    </div>
                    <div class="content w-2/3 md:w-full pl-2 md:pl-0">
                        <div class="label inline-block md:hidden"><span class="label-text">Excercise</span></div>
                        <div class="title text-lg leading-snug mt-2 mb-3 pr-1">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
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
                        <div class="title text-lg leading-snug mt-2 mb-3 pr-1">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
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
                        <div class="title text-lg leading-snug mt-2 mb-3 pr-1">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
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
                        <div class="title text-lg leading-snug mt-2 mb-3 pr-1">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                        <div class="meta text-xs font-bold uppercase tracking-wider text-ovalGreen">March 12</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="meta py-10 max-w-md">
            <div class="label-text mb-3">Why do I need to use this?</div>
            <p>Ipsum ad consequatur hic fugit sed consequuntur debitis et non. Ut assumenda vero rerum dolor. Distinctio sint et pariatur consequatur. Dolor itaque doloremque ipsam beatae eos cumque.</p>
            <div class="cta mt-5">
                <a href="" class="button">
                    Read More
                    <i class="button-icon fas fa-arrow-circle-right"></i>
                </a>
            </div>
        </div>
    </div>
</section>