<section>
    <div class="container mx-auto flex flex-wrap">
        <div class="w-full md:w-1/2 mb-5">
            <div class="text-sm font-mono mb-2">Tags</div>
            <div class="labels flex flex-wrap -mx-1">
                <?php foreach ($arr as $label) : ?>
                    <div class="px-1">
                        <div class="label"><span class="label-text"><?php echo $label ?></span></div>
                    </div>
                <?php endforeach ?>
            </div>
        </div>
        <div class="w-full md:w-1/2 mb-5">
            <div class="text-sm font-mono mb-2">Tag Links</div>
            <div class="labels flex flex-wrap -mx-1">
                <?php foreach ($arr as $label) : ?>
                    <div class="px-1">
                        <div class="label clickable"><span class="label-text"><?php echo $label ?></span></div>
                    </div>
                <?php endforeach ?>
            </div>
        </div>
        <div class="w-full md:w-1/2 mb-5">
            <div class="text-sm font-mono mb-2">Simple Tags</div>
            <div class="labels flex flex-wrap -mx-1">
                <?php foreach ($arr as $label) : ?>
                    <div class="px-1">
                        <div class="label simple"><span class="label-text"><?php echo $label ?></span></div>
                    </div>
                <?php endforeach ?>
            </div>
        </div>
        <div class="w-full md:w-1/2 mb-5">
            <div class="text-sm font-mono mb-2">Simple Tag Links</div>
            <div class="labels flex flex-wrap -mx-1">
                <?php foreach ($arr as $label) : ?>
                    <div class="px-1">
                        <div class="label simple clickable"><span class="label-text"><?php echo $label ?></span></div>
                    </div>
                <?php endforeach ?>
            </div>
        </div>
    </div>
</section>