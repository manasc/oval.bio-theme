<section>
    <div class="container mx-auto mb-10">
        <div class="grid">
            <div class="text-sm font-mono mb-2">Desktop 12 column Grid</div>
            <div class="grid-wrapper">
                <div class="flex -mx-2">
                    <?php foreach (range(1, 12) as $number) : ?>
                        <div class="w-1/12 px-2">
                            <div class="card rounded border border-ovalGreenDark bg-ovalGreen"></div>
                        </div>
                    <?php endforeach ?>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto mb-10">
        <div class="grid grid-padded">
            <div class="text-sm font-mono mb-2">Desktop, Padded Grid</div>
            <div class="grid-wrapper px-10">
                <div class="flex -mx-2">
                    <?php foreach (range(1, 12) as $number) : ?>
                        <div class="w-1/12 px-2">
                            <div class="card rounded border border-ovalGreenDark bg-ovalGreen"></div>
                        </div>
                    <?php endforeach ?>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto mb-10">
        <div class="grid grid-padded">
            <div class="text-sm font-mono mb-2">Desktop, No-Gutter Grid</div>
            <div class="grid-wrapper">
                <div class="flex">
                    <?php foreach (range(1, 12) as $number) : ?>
                        <div class="w-1/12">
                            <div class="card rounded border border-ovalGreenDark bg-ovalGreen"></div>
                        </div>
                    <?php endforeach ?>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto mb-10">
        <div class="-mx-5 flex">
            <div class="w-2/3 px-5">
                <div class="grid grid-no-gutter">
                    <div class="text-sm font-mono mb-2">Tablet, 6-Column Grid</div>
                    <div class="grid-wrapper">
                        <div class="flex flex-wrapper -mx-2">
                            <?php foreach (range(1, 6) as $number) : ?>
                                <div class="w-full md:w-1/2 lg:w-1/6 px-2">
                                    <div class="card rounded border border-ovalGreenDark bg-ovalGreen"></div>
                                </div>
                            <?php endforeach ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-1/3 px-5">
                <div class="grid grid-no-gutter">
                    <div class="text-sm font-mono mb-2">Mobile, 6-Column Grid</div>
                    <div class="grid-wrapper">
                        <div class="flex flex-wrap -mx-2">
                            <?php foreach (range(1, 6) as $number) : ?>
                                <div class="w-full md:w-1/2 lg:w-1/6 px-2">
                                    <div class="card rounded border border-ovalGreenDark bg-ovalGreen"></div>
                                </div>
                            <?php endforeach ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>