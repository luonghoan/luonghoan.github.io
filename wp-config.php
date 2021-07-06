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
define( 'DB_NAME', 'wordpress_demo_01' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'D13?k<i)4Zsjdp+Q$){C2#W96uo<aAr7DUnc}|N^D;zWu#LvC!J9SpvueX`[F|$Q' );
define( 'SECURE_AUTH_KEY',  'U8b8a)`%IgNl/,&^F:sv]i].=[*0_-K.LCTt`g$6rgCy>y_/KyZ:8o|96]Ufd6e<' );
define( 'LOGGED_IN_KEY',    'NN+ly]M%44b,:s2@uekAg{!JpL`,] s96[goOd08-D_6-N#ThE>S9SLIeWmY`JNv' );
define( 'NONCE_KEY',        '^k!zJ<74=LE0cA0Rd_.X357Y|cN-4dJ$<Rgz/;TH@w>z;y_%-w]WYS*HYk{Wsv k' );
define( 'AUTH_SALT',        'guPu!&((6cb!as^>]Qx0*f#}tIz^CwvW/%d_mMYsc5,k#hv/U{e:6~})I0*yFkK3' );
define( 'SECURE_AUTH_SALT', 'kF~W(C5zajJod7H|_Do+VcvoYm>~Dsgua :}l`/&#%nLsb$Vkc($W$]d_9n`*1q>' );
define( 'LOGGED_IN_SALT',   '$NLM+6W1+f/ p4qEpq^!S0BwQrpI.k%<K(gRZ/Rr#cC#LodUA(i;Iiz:3%h<40jC' );
define( 'NONCE_SALT',       'N2A_ R:cW;YchM-,01MoJ2qYYxQan4_Ws{hR-iDV-. J{6P8>+!xUk7Rx^(&i>9:' );

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
