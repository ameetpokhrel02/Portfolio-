// Script to handle the CV download functionality
document.addEventListener('DOMContentLoaded', function() {
    const resumeLink = document.querySelector('.download-btn');
    
    if (resumeLink) {
        resumeLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Change the href attribute to point to the HTML resume
            const resumeUrl = '/Modern-Peronal-Profile-main/resume/ameet-pokhrel-resume.html';
            
            // Open the resume in a new window
            window.open(resumeUrl, '_blank');
        });
    }
}); 