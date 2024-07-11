<div class="cookieConsentContainer" style="width: 100%;">
    <span id="cookieconsent:desc" class="cc-message">
    {translate key='plugins.generic.cookiesConsent.description.message'}
    <a aria-label="{translate key='about.privacyStatement'}" tabindex="0" class="cc-link" href="{url router=$smarty.const.ROUTE_PAGE page='about' op='privacy'}" target="_blank">
        {translate key='about.privacyStatement'}
    </a>.
    <br>
    <a id="cookie-settings-link" class="cc-link" style="text-decoration:underline;" href="#">
        Configuração de cookies
    </a>
    </span>
    <div id="cookie-settings" class="info" style="max-height: 0; overflow: hidden; transition: max-height 0.5s ease;">
    <p>
        <a class="cc-link" href="{url router=$smarty.const.ROUTE_PAGE page='about' op='privacy'}" target="_blank">Ler a nossa Política de Privacidade</a><br>
        Você pode desabilitá-los alterando as configurações do seu navegador:
    </p>
    <ul>
        <li><a class="cc-link" href="https://support.google.com/chrome/answer/95647" target="_blank">Chrome</a></li>
        <li><a class="cc-link" href="https://support.mozilla.org/kb/enable-and-disable-cookies-website-preferences" target="_blank">Firefox</a></li>
        <li><a class="cc-link" href="https://support.microsoft.com/help/4027947/microsoft-edge-delete-cookies" target="_blank">Microsoft Edge</a></li>
    </ul>
    </div>
</div>