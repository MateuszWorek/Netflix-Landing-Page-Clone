const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

// Select tab content item
function selectItem(e) {
    removeBorder();
    removeShowClass();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShowClass() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

