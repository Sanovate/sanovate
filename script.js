document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling logic is largely handled by CSS (scroll-behavior: smooth)
    // Here we handle the Form Submission Mockup
    
    const registrationForm = document.getElementById('registrationForm');
    const formSuccess = document.getElementById('formSuccess');

    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload

            // Collect form data (Can be sent to SQLite, Supabase, or JSON store later)
            const formData = new FormData(registrationForm);
            const userSubmission = {
                name: formData.get('fullName'),
                email: formData.get('email'),
                highSchool: formData.get('highSchool'),
                grade: formData.get('grade'),
                role: formData.get('role'),
                message: formData.get('message')
            };

            // Log output to console for development verification
            console.log("New Sanovate Registration:", userSubmission);

            // Hide form and show success message
            registrationForm.style.display = 'none';
            formSuccess.classList.remove('hidden');
        });
    }
});
