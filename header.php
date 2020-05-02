<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <header id="main-header" class="fixed top-0 left-0 w-full z-50" ref={this.mainHeader}>
        <div id="header-banner" class="banner bg-ovalGreen hover:bg-ovalGreenLight cursor-pointer text-sm text-gray-800 py-3 text md:py-2 px-6">
            <div class="container mx-auto">
                <div class="flex -mx-2">
                    <span class="w-full truncate">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sequi error reiciendis magnam eligendi, repudiandae dolor perspiciatis. Deserunt cum sequi veritatis labore cumque, modi qui.
                    </span>
                    <div id="close-header-banner" class="close px-2 text-gray-700 hover:text-gray-800">
                        <div class="fas fa-times-circle"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="header-navbar" class="bg-gray-800 text-sm text-sm text-white py-3 md:py-2 px-6">
            <div class="container mx-auto">
                <div class="flex items-center">
                    <div class="w-1/3 left-menu hidden lg:block">
                        <?php
                        wp_nav_menu(
                            array(
                                'theme_location' => 'menu-1',
                                "container" => "ul",
                                "menu_class" => "flex items-center -mx-2",
                                "items_wrap" => "",
                                'walker' => new Header_Nav
                            )
                        );
                        ?>
                    </div>
                    <div class="w-1/3 left-menu-mobile block lg:hidden">
                        <ul class="flex items-center -mx-1">
                            <li id="open-mobile-menu" class="px-1 leading-none">
                                <a class="font-medium text-ovalGreen" href="#"><i class="fas fa-bars text-lg"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-1/3 text-center"><?php echo get_logo() ?></div>
                    <div class="w-1/3 right-menu text-right hidden lg:block">
                        <ul class="flex items-center justify-end -mx-1">
                            <li class="px-1 leading-none">
                                <div class="badge bg-ovalGreen h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                                    <span id="initials" class="absolute"><i class="fas fa-user"></i></span>
                                </div>
                            </li>
                            <li class="px-1 leading-none">
                                <div class="badge bg-white h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                                    <span id="cartCount" class="absolute">2</span>
                                </div>
                            </li>
                            <li class="px-1 leading-none">
                                <div class="badge bg-ovalGreen h-8 px-5 w-auto rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                                    <span class="leading-inherit">Shop</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="w-1/3 right-menu text-right block lg:hidden">
                        <ul class="flex items-center justify-end -mx-1">
                            <li class="px-1 leading-none">
                                <div class="badge bg-white h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                                    <span id="cartCount" class="absolute">2</span>
                                </div>
                            </li>
                            <li class="px-1 leading-none">
                                <a class="font-medium text-ovalGreen" href="#"><i class="fas fa-shopping-cart text-lg"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div id="faux-header" class="relative"></div>
    <div id="mobile-menu" class="flex cursor-pointer items-center justify-center hidden lg:hidden bg-white h-screen w-full fixed top-0 z-50">
        <div id="close-mobile-menu" class="absolute top-0 left-0 py-3 px-6 text-base">
            <i class="fas fa-times text-ovalGreen mr-2"></i> Close
        </div>
        <div class="px-5 py-5 max-w-md">
            <?php
            wp_nav_menu(
                array(
                    'theme_location' => 'menu-1',
                    "container" => "ul",
                    "menu_class" => "text-4xl",
                    "items_wrap" => "",
                    'walker' => new Mobile_Nav
                )
            );
            ?>
        </div>
    </div>
    <div id="page" class="site overflow-hidden">