document.addEventListener('DOMContentLoaded', function() {
    // Create mobile nav button
    const mobileNavButton = document.createElement('button');
    mobileNavButton.className = 'mobile-nav-button';
    mobileNavButton.textContent = 'Menu';
    
    // Create mobile nav container
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    
    // Get the content from sidebars
    const leftSidebar = document.getElementById('left');
    const rightSidebar = document.getElementById('right');
    
    if (leftSidebar || rightSidebar) {
        // Insert the button before the content
        const content = document.getElementById('content');
        content.parentNode.insertBefore(mobileNavButton, content);
        content.parentNode.insertBefore(mobileNav, content);
        
        // Clone sidebar content into mobile nav
        if (leftSidebar) {
            const leftContent = leftSidebar.cloneNode(true);
            mobileNav.appendChild(leftContent);
        }
        if (rightSidebar) {
            const rightContent = rightSidebar.cloneNode(true);
            mobileNav.appendChild(rightContent);
        }
        
        // Toggle mobile nav
        mobileNavButton.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            mobileNavButton.textContent = mobileNav.classList.contains('active') ? 'Close' : 'Menu';
        });
    }
}); 