document.addEventListener('DOMContentLoaded', () => {
    const clubSelect = document.getElementById('club-select');
    const positionSelect = document.getElementById('position-select');
    const submitBtn = document.getElementById('submitNomination');
    const successPopup = document.getElementById('successPopup');
    const closePopupBtn = document.getElementById('closePopup');
    const okPopupBtn = document.getElementById('okPopup');
    
    // Image Upload Handling elements
    const pictureUpload = document.getElementById('picture-upload');
    const imageUploadInput = document.getElementById('image-upload-input');
    const uploadedImagePreview = document.getElementById('uploaded-image-preview');
    const cameraIconPlaceholder = document.getElementById('camera-icon-placeholder');

    // --- Image Upload Logic ---
    pictureUpload.addEventListener('click', () => {
        imageUploadInput.click();
    });

    imageUploadInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImagePreview.src = e.target.result;
                uploadedImagePreview.style.display = 'block';
                cameraIconPlaceholder.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    });

    // --- Position Dropdown Data ---
    const clubPositions = {
        'ssc': ['President', 'Vice President', 'Secretary', 'Treasurer', 'Auditor'],
        'skc': ['Chairperson', 'Co-Chairperson', 'Board Member'],
        'jpia': ['Governor', 'Vice Governor', 'Executive Secretary'],
        'book-club': ['President', 'Vice President', 'Public Relations Officer'],
        'nstp': ['Coordinator', 'Program Head', 'Project Officer'],
        'rcyc': ['Youth Leader', 'Team Coordinator'],
        'stand': ['Lead Organizer', 'Finance Officer'],
        'freethinker': ['Chair', 'Co-Chair', 'Member']
    };

    // --- Position Dropdown Logic ---
    function updatePositions() {
        const selectedClub = clubSelect.value;
        // Use the actual club positions, or an empty array if not defined.
        const positions = clubPositions[selectedClub] || ['Officer', 'Member at Large']; 

        positionSelect.innerHTML = '<option value="">-- Select --</option>';

        positions.forEach(position => {
            const option = document.createElement('option');
            option.value = position.toLowerCase().replace(/\s/g, '-');
            option.textContent = position;
            positionSelect.appendChild(option);
        });
    }

    clubSelect.addEventListener('change', updatePositions);
    updatePositions(); 


    // --- Core Navigation Logic ---
    function goToHome() {
        successPopup.classList.remove('show'); 
        // Redirects to the homepage as requested
        window.location.href = 'homeplage.html'; 
    }
    
    // --- Form Submission and Popup Handling ---
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault(); 

        // Basic validation check
        const nomineeName = document.getElementById('nominee-name').value.trim();
        const selectedPosition = positionSelect.value;
        const confirmationChecked = document.getElementById('confirm-meet').checked;

        if (!nomineeName || !selectedPosition || !confirmationChecked) {
             alert('Please fill out Nominee Name, Position, and confirm eligibility.');
             return;
        }

        // Simulate successful submission: Show success pop-up
        successPopup.classList.add('show');
    });

    // Event listeners to redirect to the homepage
    closePopupBtn.addEventListener('click', goToHome); // X button
    okPopupBtn.addEventListener('click', goToHome); // OK button
    
    // Click outside the modal just hides the popup
    successPopup.addEventListener('click', (e) => {
        if (e.target === successPopup) {
            successPopup.classList.remove('show');
        }
    });
});