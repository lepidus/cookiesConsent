<?php
/**
 * @file plugins/generic/cookiesConsent/CookiesConsentPlugin.inc.php
 *
 * Copyright (c) 2021 Lepidus Tecnologia
 * Distributed under the GNU GPL v3. For full terms see LICENSE or https://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @class CookiesConsentPlugin
 * @ingroup plugins_generic_cookiesConsent
 *
 */

import('lib.pkp.classes.plugins.GenericPlugin');
class CookiesConsentPlugin extends GenericPlugin {

	public function register($category, $path, $mainContextId = NULL) {
		$success = parent::register($category, $path, $mainContextId);
		
		if (!Config::getVar('general', 'installed') || defined('RUNNING_UPGRADE')) return true;
		if ($success && $this->getEnabled($mainContextId)) {

		}
		return $success;
	}

	public function getDisplayName() {
		return __('plugins.generic.cookiesConsent.displayName');
	}

	public function getDescription() {
		return __('plugins.generic.cookiesConsent.description');
	}


}
