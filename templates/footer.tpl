<script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" data-cfasync="false"></script>

<script>
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "rgba(64,64,64,.9)"
      },
      "button": {
        "background": "#f1d600"
      }
    },
    "theme": "classic",
    "content": {
      "dismiss": "{translate key="plugins.generic.cookiesConsent.description.dismiss"}"
    },
    "elements": {
      "messagelink": `{include file=$bannerTemplatePath}`
    }
  });
</script>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var settingsLink = document.getElementById('cookie-settings-link');
    var settingsContent = document.getElementById('cookie-settings');

    settingsLink.addEventListener('click', function(event) {
      event.preventDefault();
      if (settingsContent.style.maxHeight === '0px' || settingsContent.style.maxHeight === '') {
        settingsContent.style.maxHeight = settingsContent.scrollHeight + 'px';
      } else {
        settingsContent.style.maxHeight = '0px';
      }
    });
  });
</script>
