<div class="cookieConsentContainer">
    <span id="cookieconsent:desc" class="cc-message">
        {translate key='plugins.generic.cookiesConsent.description.message'}
        <a aria-label="{translate key='about.privacyStatement'}" tabindex="0" class="cc-link" href="{url router=$smarty.const.ROUTE_PAGE page='about' op='privacy'}" target="_blank">
            {translate key='about.privacyStatement'}
        </a>.
        <br>
        <a id="cookie-settings-link" class="cc-link">
            {translate key='plugins.generic.cookiesConsent.description.cookiesConfiguration'}
        </a>
    </span>
    <div id="cookie-settings" class="info">
        <p>
            <a class="cc-link" href="{url router=$smarty.const.ROUTE_PAGE page='about' op='privacy'}" target="_blank">
                {translate key='plugins.generic.cookiesConsent.description.readOurPrivacyStatement'}
            </a><br>
            {translate key='plugins.generic.cookiesConsent.description.disableCookies'}
        </p>
        <ul>
            <li>
                <a class="cc-link" href="https://support.google.com/chrome/answer/95647" target="_blank">Chrome</a>
            </li>
            <li>
                <a class="cc-link" href="https://support.mozilla.org/kb/enable-and-disable-cookies-website-preferences" target="_blank">Firefox</a>
            </li>
            <li>
                <a class="cc-link" href="https://support.microsoft.com/help/4027947/microsoft-edge-delete-cookies" target="_blank">Microsoft Edge</a>
            </li>
        </ul>
    </div>
</div>