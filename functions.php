<?php

/**
 * oval.bio functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package oval.bio
 */

if (!defined('_S_VERSION')) {
    // Replace the version number of the theme on each release.
    define('_S_VERSION', '1.0.0');
}

require_once(__DIR__ . '/vendor/autoload.php');

if (!function_exists('oval_bio_setup')) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function oval_bio_setup()
    {
        /*
             * Make theme available for translation.
             * Translations can be filed in the /languages/ directory.
             * If you're building a theme based on oval.bio, use a find and replace
             * to change 'oval-bio' to the name of your theme in all the template files.
        */
        load_theme_textdomain('oval-bio', get_template_directory() . '/languages');

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
             * Let WordPress manage the document title.
             * By adding theme support, we declare that this theme does not use a
             * hard-coded <title> tag in the document head, and expect WordPress to
             * provide it for us.
        */
        add_theme_support('title-tag');
        add_theme_support('woocommerce');
        add_theme_support('wc-product-gallery-zoom');
        add_theme_support('wc-product-gallery-lightbox');
        add_theme_support('wc-product-gallery-slider');

        /*
             * Enable support for Post Thumbnails on posts and pages.
             *
             * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
        */
        add_theme_support('post-thumbnails');

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus(
            array(
                'main-menu' => esc_html__('Primary', 'oval-bio'),
            )
        );

        /*
             * Switch default core markup for search form, comment form, and comments
             * to output valid HTML5.
        */
        add_theme_support(
            'html5',
            array(
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
                'style',
                'script',
            )
        );

        // Set up the WordPress core custom background feature.
        add_theme_support(
            'custom-background',
            apply_filters(
                'oval_bio_custom_background_args',
                array(
                    'default-color' => 'ffffff',
                    'default-image' => '',
                )
            )
        );

        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');

        /**
         * Add support for core custom logo.
         *
         * @link https://codex.wordpress.org/Theme_Logo
         */
        add_theme_support(
            'custom-logo',
            array(
                'height' => 250,
                'width' => 250,
                'flex-width' => true,
                'flex-height' => true,
            )
        );
    }
endif;
add_action('after_setup_theme', 'oval_bio_setup');

function dequeue_styles_woo($enqueue_styles)
{
    unset($enqueue_styles['woocommerce-general']);    // Remove the gloss
    unset($enqueue_styles['woocommerce-layout']);        // Remove the layout
    unset($enqueue_styles['woocommerce-smallscreen']);    // Remove the smallscreen optimisation
    return $enqueue_styles;
}

add_filter('woocommerce_enqueue_styles', 'dequeue_styles_woo');


/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function oval_bio_content_width()
{
    // This variable is intended to be overruled from themes.
    // Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
    // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
    $GLOBALS['content_width'] = apply_filters('oval_bio_content_width', 640);
}

add_action('after_setup_theme', 'oval_bio_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function oval_bio_widgets_init()
{
    register_sidebar(
        array(
            'name' => esc_html__('Sidebar', 'oval-bio'),
            'id' => 'sidebar-1',
            'description' => esc_html__('Add widgets here.', 'oval-bio'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget' => '</section>',
            'before_title' => '<h2 class="widget-title">',
            'after_title' => '</h2>',
        )
    );
}

add_action('widgets_init', 'oval_bio_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function oval_bio_scripts()
{

    wp_enqueue_style(
        'oval-bio-styles',
        get_template_directory_uri() . '/dist/styles.css',
        [], // no deps for css
        // $styles_assets['version'],
        date('h:i:s'),
        null
    );

    wp_enqueue_style(
        'rubik-google-font-styles',
        'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap',
        [], // no deps for css
        // $styles_assets['version'],
        date('h:i:s'),
        null
    );

    wp_enqueue_style(
        'lato-google-font-styles',
        'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        [], // no deps for css
        // $styles_assets['version'],
        date('h:i:s'),
        null
    );

    wp_enqueue_script(
        'font-awesome',
        'https://kit.fontawesome.com/2f39459834.js',
        [],
        [],
        false
    );

    wp_enqueue_script(
        'oval-bio-blocks',
        get_template_directory_uri() . '/dist/blocks.js',
        [],
        [],
        true
    );

    wp_enqueue_script(
        'oval-bio-app',
        get_template_directory_uri() . '/dist/app.js',
        [],
        date('h:i:s'),
        true
    );

    wp_enqueue_script(
        'oval-bio-general',
        get_template_directory_uri() . '/dist/general.js',
        [],
        date('h:i:s'),
        true
    );

    // paths
    $paths = [
        "template" => get_template_directory(),
        "templateDirectory" => get_template_directory(),
        "templateDirectoryUri" => get_template_directory_uri()
    ];

    wp_localize_script("oval-bio-app", "wpPaths", $paths);
    wp_localize_script("oval-bio-general", "wpPaths", $paths);
}

add_action('wp_enqueue_scripts', 'oval_bio_scripts');

// add API endpoints
function acf_to_rest_api($response, $post, $request)
{
    if (!function_exists('get_fields')) return $response;

    if (isset($post)) {
        $acf = get_fields($post->id);
        $response->data['acf'] = $acf;
    }
    return $response;
}

add_filter('rest_prepare_post', 'acf_to_rest_api', 10, 3);

add_filter('wp_check_filetype_and_ext', function ($data, $file, $filename, $mimes) {

    global $wp_version;
    if ($wp_version !== '4.7.1') {
        return $data;
    }

    $filetype = wp_check_filetype($filename, $mimes);

    return [
        'ext' => $filetype['ext'],
        'type' => $filetype['type'],
        'proper_filename' => $data['proper_filename']
    ];
}, 10, 4);

function cc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}

add_filter('upload_mimes', 'cc_mime_types');

// TODO: remove
function nmr_button($atts)
{
    $a = shortcode_atts(array(
        'text' => 'This is your button text',
        'url' => '#'
    ), $atts);

    return "<a class='button' href=" . $a["url"] . ">" . $a["text"] . "<i class='button-icon fas fa-arrow-circle-right'></i></a>";
}

add_shortcode('nmrbutton', 'nmr_button');

/*
 * Include ACF Custom fields code
 */
include get_template_directory() . '/source/functions/custom-fields.php';

// Register Gutenberg Blocks
include get_template_directory() . '/source/functions/custom-blocks.php';

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
    require get_template_directory() . '/inc/jetpack.php';
}


function get_nav_menu_items_by_location($location, $args = [])
{
    $locations = get_nav_menu_locations();
    $object = wp_get_nav_menu_object($locations[$location]);
    $menu_items = wp_get_nav_menu_items($object->name, $args);

    return $menu_items;
}


// custom html for oval.bio
function get_fake_images()
{
    $images = json_decode(file_get_contents(get_template_directory() . "/source/temp/images.json"));
    shuffle($images);

    return $images;
}

function get_fake_posts($limit = -1)
{
    $query = new WP_Query([
        'post_type' => 'post',
        'posts_per_page' => $limit,
    ]);

    return $query->posts;
}

function get_logo()
{
    return '<span class="text-ovalGreen font-bold text-2xl">oval.bio</span>';
}

class Header_Nav extends Walker_Nav_Menu
{

    public function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        $classes = is_page($item->title) ? 'text-ovalGreen' : 'opacity-75 hover:opacity-100';
        $output .= "<li class=\"px-2 truncate $classes\"><a href=\"$item->url\">$item->title</a></li>";
    }
}

class Mobile_Nav extends Walker_Nav_Menu
{
    public function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        $classes = is_page($item->title) ? 'text-ovalGreen' : 'opacity-75 hover:opacity-100';
        $output .= "<li class=\"px-2 truncate $classes\"><a href=\"$item->url\">$item->title</a></li>";
    }
}


// limit posts to current author
function nmr_posts_access_limit($query)
{
    global $pagenow;

    // check if admin
    if ('edit.php' != $pagenow || !$query->is_admin)
        return $query;

    // check if current user can edit_other_posts
    if (!current_user_can('edit_others_posts')) {
        global $user_ID;

        // set query paramters to monologi's taxonomy
        // _molongui_author
        $query->set('meta_query', array(
            array(
                'key' => '_molongui_author',
                'value' => 'user-' . $user_ID,
                'compare' => 'IN',
            ),
        ));
    }
    return $query;
}

add_filter('pre_get_posts', 'nmr_posts_access_limit');

// create nonce
$nonceId = wp_create_nonce("wc_store_api");
function getNonceID()
{
    global $nonceId;
    return $nonceId;
}
