<section>
    <div class="max-w-6xl px-5 py-12 mx-auto">
        <div class="mb-10">
            <h1 class="text-4xl">Directions For Use</h1>
        </div>
        <div class="mb-10">
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
        </div>
        <div class="">
            <div class="meta py-5 max-w-md">
                <div class="label-text mb-3">Why do I need to use this?</div>
                <p>Ipsum ad consequatur hic fugit sed consequuntur debitis et non. Ut assumenda vero rerum dolor. Distinctio sint et pariatur consequatur. Dolor itaque doloremque ipsam beatae eos cumque.</p>
            </div>
        </div>
    </div>
</section>
<script>
    // function YouTubeGetID(url) {
    //     var ID = '';
    //     url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    //     if (url[2] !== undefined) {
    //         ID = url[2].split(/[^0-9a-z_\-]/i);
    //         ID = ID[0];
    //     } else {
    //         ID = url;
    //     }
    //     return ID;
    // }

    // var videoId = YouTubeGetID("<?= $args["fields"]["instructional_video"] ?>");

    // // 2. This code loads the IFrame Player API code asynchronously.
    // var tag = document.createElement('script');

    // tag.src = "https://www.youtube.com/iframe_api";
    // var firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // // 3. This function creates an <iframe> (and YouTube player)
    // //    after the API code downloads.
    // var player;

    // function onYouTubeIframeAPIReady() {
    //     player = new YT.Player('nmr-bg-video-player', {
    //         height: '100%',
    //         width: '100%',
    //         videoId: videoId,
    //         playerVars: {
    //             loop: 1,
    //             mute: 1,
    //             rel: 0,
    //             controls: 0,
    //             modestbranding: 1,
    //             origin: "<?php the_permalink() ?>"
    //         }
    //     });
    // }
</script>