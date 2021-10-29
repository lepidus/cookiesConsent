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

	var $headerWasInjected = false;

	public function register($category, $path, $mainContextId = NULL) {
		$success = parent::register($category, $path, $mainContextId);
		
		if (!Config::getVar('general', 'installed') || defined('RUNNING_UPGRADE')) return true;
		if ($success && $this->getEnabled($mainContextId)) {
			HookRegistry::register('TemplateManager::display', array($this, 'insertInHeader'));
			HookRegistry::register('Templates::Common::Footer::PageFooter', array($this, 'insertInFooter'));
		}
		return $success;
	}

	public function getDisplayName() {
		return __('plugins.generic.cookiesConsent.displayName');
	}

	public function getDescription() {
		return __('plugins.generic.cookiesConsent.description');
	}


	public function insertInHeader($hookName, $params) {
		if (!$this->headerWasInjected) {
			$templateMgr =& $params[0];
			$header = $templateMgr->fetch($this->getTemplateResource('header.tpl'));
			$templateMgr->addHeader('cookiesConsentHeader', $header);
			$this->headerWasInjected = true;
		}
		return false;
	}

	public function insertInFooter($hookName, $params) {
		$templateMgr =& $params[1];
		$output =& $params[2];
		$request = Application::get()->getRequest();
		
		$templateMgr->assign(['context' => $request->getContext()]);
		$output .= $templateMgr->fetch($this->getTemplateResource('footer.tpl'));
		return false;
	}
}
