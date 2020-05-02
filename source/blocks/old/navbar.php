<section>
    <div class="container mx-auto">
        <div class="text-sm font-mono mb-2">Desktop, Navbar</div>
    </div>
    <div class="bg-gray-800 text-white py-3 px-6 mb-10">
        <div class="flex items-center">
            <div class="w-1/3 left-menu hidden lg:block">
                <ul class="flex items-center -mx-1">
                    <li class="px-1"><a class="font-medium" href="#">Our Products</a></li>
                    <li class="px-1"><a class="font-medium" href="#">Technology</a></li>
                    <li class="px-1"><a class="font-medium" href="#">Blog</a></li>
                    <li class="px-1"><a class="font-medium" href="#">About Us</a></li>
                    <li class="px-1"><a class="font-medium" href="#">Events</a></li>
                </ul>
            </div>
            <div class="w-1/3 left-menu-mobile block lg:hidden">
                <ul class="flex items-center -mx-1">
                    <li class="px-1 leading-none"><a class="font-medium text-ovalGreen" href="#"><i class="fas fa-bars text-lg"></i></a></li>
                </ul>
            </div>
            <div class="w-1/3 text-center"><?php include "logo.php" ?></div>
            <div class="w-1/3 right-menu text-right hidden lg:block">
                <ul class="flex items-center justify-end -mx-1">
                    <li class="px-1 leading-none">
                        <div class="badge bg-ovalGreen h-10 w-10 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                            <span id="initials" class="absolute">MC</span>
                        </div>
                    </li>
                    <li class="px-1 leading-none">
                        <div class="badge bg-white h-10 w-10 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                            <span id="cartCount" class="absolute">2</span>
                        </div>
                    </li>
                    <li class="px-1 leading-none">
                        <div class="badge bg-ovalGreen h-10 px-5 w-auto rounded-full relative text-gray-700 font-bold flex items-center justify-center">
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
                    <li class="px-1 leading-none"><a class="font-medium text-ovalGreen" href="#"><i class="fas fa-shopping-cart text-lg"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container mx-auto">
        <div class="text-sm font-mono mb-2">Mobile Navbar</div>
        <div class="flex w-full">
            <div class="max-w-sm w-full border  mr-5">
                <div class="bg-gray-800 text-white py-3 px-6">
                    <div class="flex items-center">
                        <div class="w-1/3 left-menu-mobile">
                            <ul class="flex items-center -mx-1">
                                <li class="px-1 leading-none"><a class="font-medium text-ovalGreen" href="#"><i class="fas fa-bars text-lg"></i></a></li>
                            </ul>
                        </div>
                        <div class="w-1/3 text-center"><?php include "logo.php" ?></div>
                        <div class="w-1/3 right-menu text-right block">
                            <ul class="flex items-center justify-end -mx-1">
                                <li class="px-1 leading-none">
                                    <div class="badge bg-white h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                                        <span id="cartCount" class="absolute">2</span>
                                    </div>
                                </li>
                                <li class="px-1 leading-none"><a class="font-medium text-ovalGreen" href="#"><i class="fas fa-shopping-cart text-lg"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="max-w-sm w-full border  mr-5">
                <div class="bg-gray-800 text-white py-3 px-6">
                    <div class="flex items-center">
                        <div class="w-1/3 left-menu-mobile">
                            <ul class="flex items-center -mx-1">
                                <li class="px-1 leading-none"><a class="font-medium text-ovalGreen" href="#"><i class="fas fa-times text-lg"></i></a></li>
                            </ul>
                        </div>
                        <div class="w-1/3 text-center"><?php include "logo.php" ?></div>
                        <div class="w-1/3 right-menu text-right block">
                            <ul class="flex items-center justify-end -mx-1">
                                <li class="px-1 leading-none">
                                    <div class="badge bg-white h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
                                        <span id="cartCount" class="absolute">2</span>
                                    </div>
                                </li>
                                <li class="px-1 leading-none"><a class="font-medium text-ovalGreen" href="#"><i class="fas fa-shopping-cart text-lg"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mobile-menu p-5 py-10" style="height: 650px">
                    <ul class="flex flex-col">
                        <li><a class="text-2xl leading-snug text-gray-400 hover:text-gray-600 font-medium" href="#">Our Products</a></li>
                        <li><a class="text-2xl leading-snug text-gray-900 font-medium" href="#">Technology</a></li>
                        <li><a class="text-2xl leading-snug text-gray-400 hover:text-gray-600 font-medium" href="#">Blog</a></li>
                        <li><a class="text-2xl leading-snug text-gray-400 hover:text-gray-600 font-medium" href="#">About Us</a></li>
                        <li><a class="text-2xl leading-snug text-gray-400 hover:text-gray-600 font-medium" href="#">Events</a></li>
                        <hr class="spacer invisible my-10">
                        <li><a class="text-2xl leading-snug text-gray-400 hover:text-gray-600 font-medium" href="#">Account</a></li>
                        <li><a class="text-2xl leading-snug text-gray-400 hover:text-gray-600 font-medium" href="#">Cart<span class="text-ovalGreen ml-3">(2)</span></a></li>
                    </ul>
                </div>
            </div>


        </div>
    </div>
</section>