// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                const isOpened = item.classList.contains('opened');
                
                // Close all FAQ items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('opened');
                    const icon = faqItem.querySelector('.faq-icon');
                    if (icon) {
                        icon.style.transform = 'rotate(45deg)';
                    }
                });
                
                // Open clicked item if it wasn't already open
                if (!isOpened) {
                    item.classList.add('opened');
                    const icon = item.querySelector('.faq-icon');
                    if (icon) {
                        icon.style.transform = 'rotate(0deg)';
                    }
                }
            });
        }
    });
});

