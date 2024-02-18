<?php
/**
 * Plugin Name:       Portfolio-testimony
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            emily
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       portfolio-testimony-block
 *
 * @package           portfolio-testimony-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function portfolio_testimony_block_portfolio_testimony_block_block_init() {
	register_block_type( __DIR__ . '/build/blocks/testimonial' );
//	register_block_type( __DIR__ . '/build/blocks/testimonial' ); MAKE THIS FOR EVERY BLOCK

}
add_action( 'init', 'portfolio_testimony_block_portfolio_testimony_block_block_init' );
