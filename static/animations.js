document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Get DOM elements
    const form = document.querySelector('.summarizer-form');
    const loadingOverlay = document.getElementById('loading-overlay');
    const submitButtons = document.querySelectorAll('button[type="submit"]');
    const resultBox = document.getElementById('result-container');
    const outputText = document.getElementById('output_text');
    const inputField = document.getElementById('input_text');

    // Observe all animated elements
    document.querySelectorAll('.slide-up, .fade-in, .pop-in').forEach(el => {
        observer.observe(el);
    });

    // Form submission with AJAX
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputText = inputField.value.trim();
            if (!inputText) return;

            // Show loading overlay
            loadingOverlay.classList.add('active');

            // Disable submit buttons and show loading state
            submitButtons.forEach(button => {
                button.disabled = true;
                button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
            });

            // Send request
            fetch('/summarize', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ input_text: inputText })
                })
                .then(response => response.json())
                .then(data => {
                    outputText.textContent = data.summary || 'No summary returned.';
                    resultBox.style.display = 'block';
                })
                .catch(err => {
                    outputText.textContent = 'Error occurred during summarization.';
                    resultBox.style.display = 'block';
                })
                .finally(() => {
                    loadingOverlay.classList.remove('active');
                    submitButtons.forEach(button => {
                        button.disabled = false;
                        button.innerHTML = '<i class="fas fa-rocket"></i> Generate Summary';
                    });
                });
        });
    }

    // Form input animations
    document.querySelectorAll('.floating-input').forEach(input => {
        const label = input.parentNode.querySelector('.input-label');

        input.addEventListener('focus', () => {
            label.style.color = '#3498db';
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                label.style.color = '#666';
            }
        });

        // Initialize label position
        if (input.value) {
            label.style.top = '-0.6rem';
            label.style.left = '0.8rem';
            label.style.fontSize = '0.8rem';
        }
    });

    // Hide loading overlay when page finishes loading
    window.addEventListener('load', () => {
        loadingOverlay.classList.remove('active');
        submitButtons.forEach(button => {
            button.disabled = false;
            button.innerHTML = '<i class="fas fa-rocket"></i> Generate Summary';
        });
    });

    // Reset loading state if page reloads
    window.addEventListener('beforeunload', () => {
        loadingOverlay.classList.remove('active');
        submitButtons.forEach(button => {
            button.disabled = false;
            button.innerHTML = '<i class="fas fa-rocket"></i> Generate Summary';
        });
    });
});