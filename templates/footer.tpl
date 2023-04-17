<script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" data-cfasync="false"></script>
<script>
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#000",
    },
    "button": {
      "background": "#f1d600",
    }
  },
  "theme": "classic",
  "content": {
    "message": "{translate key="plugins.generic.cookiesConsent.description.message"}",
    "dismiss": "{translate key="plugins.generic.cookiesConsent.description.dismiss"}",
    "link": "{translate key="about.privacyStatement"}",
    "href": "{url router=$smarty.const.ROUTE_PAGE page="about" op="privacy"}"
  }
});
</script>