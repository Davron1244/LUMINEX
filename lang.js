i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        }
    }, function(err, t) {
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
        $('body').localize();
    });

// Tilni almashtirish
$('#langSwitcher').on('change', function() {
    const selectedLang = $(this).val();
    i18next.changeLanguage(selectedLang, () => {
        $('body').localize();
    });
});