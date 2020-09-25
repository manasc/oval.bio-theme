<?php

// TODO: add nimaroh block
// function my_plugin_block_categories($categories, $post)
// {
//     if ($post->post_type !== 'post') {
//         return $categories;
//     }
//     return array_merge(
//         $categories,
//         array(
//             array(
//                 'slug' => 'my-category',
//                 'title' => __('My category,my-plugin'),
//                 'icon'  => 'wordpress',
//             ),
//         )
//     );
// }

// add_filter('block_categories', 'my_plugin_block_categories', 10, 2);


function my_acf_init_block_types()
{

    // Check function exists.
    if (function_exists('acf_register_block_type')) {

        $defaults = [
            "description" => "One of the blocks specifically developed by Nimaroh",
            "icon" => "admin-comments",
            "category" => "layout"
        ];


        $gBlocks = [

            // pod page blocks 
            [
                'name'              => 'therapeutic',
                'title'             => 'Therapeutic',
                'keywords'          => 'therapeutic'
            ],
            [
                'name'              => 'diagnostics',
                'title'             => 'Diagnostics',
                'keywords'          => 'diagnostics'
            ],
            [
                'name'              => 'highlight',
                'title'             => 'Highlight',
                'keywords'          => 'highlight'
            ],
            [
                'name'              => 'image-text',
                'title'             => 'Image & Text',
                'keywords'          => 'image,text'
            ],
            [
                'name'              => 'synergies',
                'title'             => 'Synergies',
                'keywords'          => 'synergies'
            ],
            [
                'name'              => '5-pillars',
                'title'             => '5',
                'keywords'          => '5-pillars'
            ],

            // manifesto blocks
            [
                'name'              => 'quote',
                'title'             => 'Quote',
                'keywords'          => 'quote'
            ],
            [
                'name'              => 'accordion',
                'title'             => 'Accordion',
                'keywords'          => 'accordion'
            ],
            [
                'name'              => 'presentation',
                'title'             => 'Presentation',
                'keywords'          => 'presentation'
            ],
            [
                'name'              => 'milestones',
                'title'             => 'Milestones',
                'keywords'          => 'milestones'
            ],

            [
                'name'              => 'profiles-intro',
                'title'             => 'Profiles Intro',
                'keywords'          => 'profiles,intro'
            ],
            [
                'name'              => 'interactive-diagram',
                'title'             => 'Interactive Diagram',
                'keywords'          => 'interactive,diagram'
            ],

            // general
            [
                'name'              => 'modular',
                'title'             => 'Modular',
                'keywords'          => 'modular'
            ],
            [
                'name'              => 'title',
                'title'             => 'Title',
                'keywords'          => 'testimonial,quote'
            ],
            [
                'name'              => 'values',
                'title'             => 'Values',
                'keywords'          => 'values'
            ],
        ];


        // register all testimonial block.
        foreach ($gBlocks as $key => $block) {
            acf_register_block_type([
                'name'              => "nmr-{$block['name']}-block",
                'title'             => __("{$block['title']} Block"),
                // 'description'       => __(!($block['description']) ? $block['description'] : $defaults["description"]),
                'render_template'   => "source/gutenberg-blocks/nmr-{$block['name']}-block.php",
                'category'          => !empty($block['category']) ? $block['category'] : $defaults["category"],
                'icon'              => !empty($block['icon']) ? $block['icon'] : $defaults["icon"],
                'keywords'          => explode(',', "nmr,nimaroh,{$block['keywords']}"),
            ],);
        }
    }
}

add_action('acf/init', 'my_acf_init_block_types');
