document.addEventListener('DOMContentLoaded', function() {
    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');

            if (content.style.display === 'block') {
                content.style.display = 'none';
                icon.textContent = '+';
            } else {
                content.style.display = 'block';
                icon.textContent = '-';
            }
        });
    });

    // Consultation Button Redirect (Replace with your form URL)
    document.getElementById('consultationBtn').addEventListener('click', () => {
        window.location.href = 'https://forms.gle/HnqWAFMEb8cFrWEi9';
    });
    
    // Testimonial Slider (One at a time)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonialSlider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds

    // Initial display
    showTestimonial(0);
});