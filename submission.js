// JavaScript untuk Form Submission
const form = document.querySelector('.contact-form');
const submitBtn = document.querySelector('.submit-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulasi loading
    submitBtn.classList.add('sending');
    submitBtn.innerHTML = '<div class="loader"></div>';
    
    // Simulasi pengiriman sukses
    setTimeout(() => {
        submitBtn.classList.remove('sending');
        submitBtn.innerHTML = '<span>Message Sent!</span>';
        
        // Reset form setelah 2 detik
        setTimeout(() => {
            form.reset();
            submitBtn.innerHTML = '<span>Send Message</span><div class="wave"></div>';
            
            // Tambahkan pesan sukses
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.textContent = '🎉 Thanks! I\'ll respond within 24 hours.';
            form.parentElement.appendChild(successMsg);
            
            // Hapus pesan setelah 5 detik
            setTimeout(() => {
                successMsg.remove();
            }, 5000);
        }, 2000);
    }, 1500);
});

// Animasi floating label saat halaman dimuat
document.querySelectorAll('.input-group input, .input-group textarea').forEach(input => {
    if(input.value) input.previousElementSibling.style.top = '-1.2rem';
});