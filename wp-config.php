<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'oval.bio' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('ALLOW_UNFILTERED_UPLOADS', true);

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=rWqc ^t-)t`9Gi!>s58ifKKAdt+K5m)eA$6 Yom9`$,()y$fHi!xwk(0SKQep[O' );
define( 'SECURE_AUTH_KEY',  'kYnS,2hT-R6:qH@<O9W+vnnW^%vNBMWTvs[HYe_evUfq*%jS=:-P<.%uvf=xDWk#' );
define( 'LOGGED_IN_KEY',    'NS?eoApg<3Zh%ij3nvxje?I}n}ZN|cv>`/#`1@Gjfw-09&9K<Yk8d]O/RtDr`!a ' );
define( 'NONCE_KEY',        '4<$&yT-1dGkfMpU^;Vx,A{!35$ni[y7#xB_&C_n`5ELZM-5iAVAN;O&r|u7MQ%0c' );
define( 'AUTH_SALT',        '{Y=zFbZ-=e=O2R.7?g9W]{#=|Csh,SwI;bXzKUVG$vz2]+Yvm%h/9;`H,;?R >D?' );
define( 'SECURE_AUTH_SALT', '(HsowDDG/Bha2YCdm4Uf%<,Lx:Vxun}eq,Y;AI~4EG3q`I{b:~wIK[TM<]REpQ(*' );
define( 'LOGGED_IN_SALT',   'y|P^ R9E5*1M^KL1[(s@HwolWGd,IkKF{%O5fM}$6v(~0YJ2QC_!s[C<xB!NpQ7-' );
define( 'NONCE_SALT',       'vynZx,)|T=]w&w2jH4Xx:@w7_G+54a?>;Y_Frg3WA[l<FM}hP~ug67l  jm.`b`<' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
