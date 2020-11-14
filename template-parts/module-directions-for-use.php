<section>
    <h1 class="subtitle text-center">Directions for Use</h1>
    <!-- <div class="mb-10">
        <div class="labels">
            <div class="label">
                <span class="label-text">Video</span>
            </div>
        </div>
        <div class="content-box-p-none">
            <div class="bg-gray-500 relative" style="padding-top: <?= 9 / 16 * 100 ?>%">
                <div class="bg-blue-500 absolute top-0 left-0 w-full h-full" id="nmr-bg-video-player"></div>
            </div>
        </div>
    </div> -->
    <div class="">
        <!-- <div class="labels">
            <div class="label">
                <span class="label-text">Directions</span>
            </div>
        </div> -->
        <?php foreach ($args["fields"]["instructions"] as $key => $step) : ?>
            <div class="flex flex-wrap mb-5">
                <div class="w-full lg:w-1/2 flex items-center justify-center">
                    <div class="content px-10 py-10">
                        <div class="flex flex-wrap -mx-2 mb-5">
                            <div class="flex-none px-2">
                                <div class="round-full w-5 h-5 bg-ovalGreen text-xs flex items-center justify-center"><?= $key + 1 ?></div>
                            </div>
                            <div class="content flex-1 px-2">
                                <div class="text-lg mb-5"><?= $step['description'] ?></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="bg-gray-200 h-64 lg:h-full bg-cover bg-center bg-no-repeat" style="background-image:url(<?= $step["image"]["sizes"]["large"] ?>)"></div>
                </div>
            </div>
        <?php endforeach ?>
    </div>
</section>
<script>
    function YouTubeGetID(url) {
        var ID = '';
        url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        } else {
            ID = url;
        }
        return ID;
    }

    var videoId = YouTubeGetID("<?= $args["fields"]["instructional_video"] ?>");

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('nmr-bg-video-player', {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                loop: 1,
                mute: 1,
                rel: 0,
                controls: 0,
                modestbranding: 1,
                origin: "<?php the_permalink() ?>"
            }
        });
    }
</script>