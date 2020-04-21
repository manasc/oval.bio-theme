<?php $icons = [
		[
			"name" => 'Anti-Inflammatory',
			"icon" => "../../images/icons/AntiInflammatory.svg",
		],
		[
			"name" => 'Pain Relief',
			"icon" => "../../images/icons/PainRelief.svg",
		],
		[
			"name" => 'Nano Bubbles',
			"icon" => "../../images/icons/NanoBubbles.svg",
		],
		[
			"name" => 'Electrons',
			"icon" => "../../images/icons/Electrons.svg",
		]];
?>
<div class="icons">
    <div class="container mx-auto p-5">
        <div class="py-20 flex flex-wrap items-center">
            <div class="relative content w-full md:w-1/3 mr-10 mb-10 md:mb-0">
                <h1 class="text-2xl font-light mb-5 leading-tight">Buy now and invest in your future.</h1>
                <p class="mb-8 text-base text-slateBlue">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus a amet volutpat vel.</p>
                <a class="button">Read More</a>
            </div>
            <div class="flex-1 flex flex-wrap -mx-5">
                <?php foreach ($icons as $icon): ?>
                    <div class="w-1/2 md:w-1/4 px-5 mb-10 md:mb-0">
                        <div class="square-image rounded-full overflow-hidden w-full bg-transparent bg-contain bg-center bg-no-repeat" style="background-image: url(<?php echo $icon['icon'] ?>); background-color: white;"></div>
                        <p class="text-center text-base mt-4"><?php echo $icon['name'] ?></p>
                    </div>
                <?php endforeach;?>
            </div>
        </div>
    </div>
</div>