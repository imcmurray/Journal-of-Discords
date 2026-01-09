// Share Button Dropdown
// Handles click toggle for mobile, close on outside click, and copy link

(function() {
  'use strict';

  function initShareButtons() {
    var dropdowns = document.querySelectorAll('.song-share-dropdown');

    dropdowns.forEach(function(dropdown) {
      var toggle = dropdown.querySelector('.share-toggle');
      var copyBtn = dropdown.querySelector('.copy-link-btn');

      if (!toggle) return;

      // Click to toggle (primarily for mobile, but works as fallback on desktop)
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var isOpen = dropdown.classList.contains('is-open');

        // Close any other open dropdowns
        closeAllDropdowns();

        // Toggle this one
        if (!isOpen) {
          dropdown.classList.add('is-open');
          toggle.setAttribute('aria-expanded', 'true');
        }
      });

      // Keyboard support: Escape to close
      toggle.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && dropdown.classList.contains('is-open')) {
          closeDropdown(dropdown);
          toggle.focus();
        }
      });

      // Copy link functionality
      if (copyBtn) {
        copyBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();

          var url = copyBtn.dataset.url;

          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(function() {
              showCopyFeedback(copyBtn);
            }).catch(function() {
              fallbackCopyToClipboard(url, copyBtn);
            });
          } else {
            fallbackCopyToClipboard(url, copyBtn);
          }
        });
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.song-share-dropdown')) {
        closeAllDropdowns();
      }
    });

    // Close on escape key (global)
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeAllDropdowns();
      }
    });
  }

  function closeDropdown(dropdown) {
    dropdown.classList.remove('is-open');
    var toggle = dropdown.querySelector('.share-toggle');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
    }
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.song-share-dropdown.is-open').forEach(function(dropdown) {
      closeDropdown(dropdown);
    });
  }

  function showCopyFeedback(btn) {
    var textSpan = btn.querySelector('.copy-link-text');
    var originalText = textSpan.textContent;

    btn.classList.add('copied');
    textSpan.textContent = 'Copied!';

    setTimeout(function() {
      btn.classList.remove('copied');
      textSpan.textContent = originalText;
    }, 2000);
  }

  function fallbackCopyToClipboard(text, btn) {
    // Fallback for older browsers
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      showCopyFeedback(btn);
    } catch (err) {
      console.error('Failed to copy:', err);
    }

    document.body.removeChild(textarea);
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShareButtons);
  } else {
    initShareButtons();
  }
})();
