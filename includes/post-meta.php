<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Type_Post_Meta
{
    public function __construct()
    {
        add_action('init', array($this, 'register_meta'));
    }

    /**
     * Register meta
     */
    public function register_meta()
    {
        // `_eb_attr` is shared across the whole Essential Blocks family and the
        // registration is identical everywhere (see Essential Blocks core,
        // includes/Core/PostMeta.php). Re-registering it replaces the previous
        // plugin's auth_callback with an equivalent one for no benefit, so only
        // claim the key when nobody else has.
        if ( function_exists( 'registered_meta_key_exists' ) && registered_meta_key_exists( 'post', '_eb_attr' ) ) {
            return;
        }

        register_meta(
            'post',
            '_eb_attr',
            array(
                'show_in_rest' => true,
                'single' => true,
                'auth_callback' => [$this, 'auth_callback'],
            )
        );
    }

    /**
     * Determine if the current user can edit posts
     *
     * @return bool True when can edit posts, else false.
     */
    public function auth_callback()
    {
        return current_user_can('edit_posts');
    }
}

new Type_Post_Meta();
