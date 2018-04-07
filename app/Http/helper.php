<?php

/**
 * Gets the site config based on the current theme value
 * or loads the default if the current theme value does not
 * exist
 *
 * Use the themeOveride param to force a value from a certain theme
 *
 * Add data to the config areas in site.php
 *
 * @param $configValue
 * @param bool $themeOverride
 * @return mixed
 */
function site($configValue)
{
	return Config::get('admin.'. $configValue);
}
