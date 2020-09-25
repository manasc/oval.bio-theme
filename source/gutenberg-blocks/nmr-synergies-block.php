<?php
$synergies = [
    ["name" => "hello"],
    ["name" => "hello"],
    ["name" => "hello"],
    ["name" => "hello"]
];

?>

<div class="container mx-auto px-5 py-10 relative">
    <div class="absolute h-full w-32 left-0 top-0 z-30" style="background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);"></div>
    <div class="absolute h-full w-32 right-0 top-0 z-30" style="background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);"></div>

    <div class="mb-3">
        <h1 class="text-4xl text-center">Synergies of Therapeutics</h1>
    </div>

    <!-- FAQ -->
    <section class="synergies-block relative">
        <div class="synergies-slides">

            <?php foreach ($synergies as $key => $synergy) : ?>
                <div class="synergies-slide synergy">
                    <div class="max-w-6xl mx-auto">
                        <div class="flex flex-wrap items-center -mx-8">
                            <div class="synergy-diagram <?php echo $key % 2 ? "order-1" : "order-2" ?> w-full md:w-1/2 px-8 relative">
                                <div class="w-full">
                                    <div class="" style="padding-top: 100%"></div>
                                </div>
                                <div class="absolute z-0 hover:z-20" style="width: 55%; top: 50%; left:50%; transform: translate(-50%,-50%)">
                                    <div class="rounded-full hover:bg-green-200 border border-gray-400" style="padding-top: 100%"></div>
                                </div>
                                <div class="synergy-1">
                                    <p class="synergy-text">Red Light</p>
                                    <div class="rounded-full bg-ovalGreen shadow-md" style="padding-top: 100%"></div>
                                </div>
                                <div class="synergy-2">
                                    <p class="synergy-text">Nano Bubbles</p>
                                    <div class="rounded-full bg-ovalGreenDark shadow-xl" style="padding-top: 100%"></div>
                                </div>
                            </div>
                            <div class="<?php echo $key % 2 ? "order-2" : "order-1" ?> w-full md:w-1/2 px-8">
                                <div class="text">
                                    <h2 class="text-3xl mb-2">Red Light & Nano Bubbles</h2>
                                    <p>
                                        Being in a pod that will have water and the person submerged – allows for not just combinatory therapies but sensors as well. For example our ability to measuring body fat and muscle mass will be better than even many clinics as we can do what’s called a multi-compartment analysis. As we can take the data from the 3-d body scanner, hydrostatic weighing and bioelectrical impedance. Where each of these has limitations with accuracy based on missing information that the others can help provide.
                                    </p>
                                </div>
                                <div class="mt-10">
                                    <div class="label-text">Hello</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>

        </div>
        <div class="synergies-nav">
            <div class="flex flex-wrap items-center my-5 -mx-4 ">
                <div class="synergies-nav-prev px-4 flex-1 text-right">
                    <a class="flex text-sm items-center label-text justify-end" href="#">
                        <i class="mr-2 fas text-xs fa-caret-left"></i>
                        <span>Prev</span>
                    </a>
                </div>
                <div class="synergies-nav-dots px-4 flex">
                    <?php foreach ($synergies as $synergy) : ?>
                        <div class="synergies-nav-dot h-2 w-2 mx-1 rounded-full bg-gray-500"></div>
                    <?php endforeach; ?>
                </div>
                <div class="synergies-nav-next px-4 flex-1 text-left">
                    <a class="flex text-sm items-center label-text text-gray-700 hover:text-ovalGreen" href="#">
                        <span>Next</span>
                        <i class="ml-2 fas text-xs fa-caret-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>