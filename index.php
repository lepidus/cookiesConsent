<?php
/**
 * @defgroup plugins_generic_cookiesConsent
 */
/**
 * @file plugins/generic/cookiesConsent/index.php
 *
 * Copyright (c) 2021 Lepidus Tecnologia
 * Distributed under the GNU GPL v3. For full terms see LICENSE or https://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @ingroup plugins_generic_cookiesConsent
 * @brief Wrapper for the Cookies Consent plugin.
 *
 */
require_once('CookiesConsentPlugin.inc.php');
return new CookiesConsentPlugin();