document.addEventListener("DOMContentLoaded", () => {
    
    const registrationForm = document.getElementById('registrationForm');
    const formSuccess = document.getElementById('formSuccess');

    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Collect form data mockup
            const formData = new FormData(registrationForm);
            const userSubmission = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                highSchool: formData.get('highSchool'),
                grade: formData.get('grade'),
                role: formData.get('role'),
                interests: formData.get('interests'),
                motivation: formData.get('motivation')
            };

            console.log("New Sanovate Registration:", userSubmission);

            // Hide form and show success state
            registrationForm.style.display = 'none';
            formSuccess.classList.remove('hidden');
        });
    }
});
