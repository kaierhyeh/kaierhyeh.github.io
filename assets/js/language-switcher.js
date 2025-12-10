/**
 * Language Switcher for Portfolio
 * Supports English and French translations
 */

(function() {
    'use strict';

    // Default language
    let currentLang = localStorage.getItem('portfolio-language') || 'en';

    // Initialize language switcher
    function init() {
        // Set initial language
        setLanguage(currentLang);
        
        // Add event listeners to language buttons
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                setLanguage(lang);
            });
        });
    }

    // Set language
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-language', lang);
        
        // Update all elements with data-lang attributes
        updateTextContent(lang);
        updatePlaceholders(lang);
        updateSubmitButton(lang);
        
        // Update active button style
        updateActiveButton(lang);
    }

    // Update text content for elements with data-lang-{lang} attributes
    function updateTextContent(lang) {
        const elements = document.querySelectorAll('[data-lang-' + lang + ']');
        elements.forEach(element => {
            const text = element.getAttribute('data-lang-' + lang);
            element.innerHTML = text;
        });
    }

    // Update input placeholders
    function updatePlaceholders(lang) {
        const inputs = document.querySelectorAll('[data-lang-' + lang + '-placeholder]');
        inputs.forEach(input => {
            const placeholder = input.getAttribute('data-lang-' + lang + '-placeholder');
            input.setAttribute('placeholder', placeholder);
        });
    }

    // Update submit button value
    function updateSubmitButton(lang) {
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
            const value = submitBtn.getAttribute('data-lang-' + lang + '-value');
            if (value) {
                submitBtn.value = value;
            }
        }
    }

    // Update active button styling
    function updateActiveButton(lang) {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(button => {
            if (button.getAttribute('data-lang') === lang) {
                button.style.fontWeight = 'bold';
                button.style.textDecoration = 'underline';
            } else {
                button.style.fontWeight = 'normal';
                button.style.textDecoration = 'none';
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
