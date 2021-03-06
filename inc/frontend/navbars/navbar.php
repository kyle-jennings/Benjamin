<?php
$sticky = get_theme_mod( 'navbar_sticky_setting', 'no' ) === 'yes' ? 'sticky' : '';
?>
<header class="usa-header usa-header-basic
	<?php echo esc_attr( benjamin_navbar_header_class() ) . ' ' . esc_attr( $sticky ); ?>" role="banner">
	<div class="usa-nav-container">

		<div class="usa-navbar">
			<button class="usa-menu-btn">
				<?php esc_html_e( 'Menu', 'benjamin' );  //WPCS: xss ok.?>
			</button>
			<?php benjamin_navbar_brand(); ?>
		</div>

		<nav role="navigation" class="usa-nav">
			<button class="usa-nav-close"></button>

			<?php
				$args = array(
					'theme_location' => 'primary',
					'container'      => '',
					'menu_class'     => 'usa-nav-primary usa-accordion',
					'walker'         => new BenjaminNavbarWalker(),
					'fallback_cb'    => 'benjamin_set_default_menu',
				);

				wp_nav_menu( $args );

				if ( get_theme_mod( 'navbar_search_setting', 'none' ) === 'navbar' ) {
					get_search_form();
				}
				?>
		</nav>
	</div>

</header>
