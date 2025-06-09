const discoverBtn = document.querySelector('#Discover');
const backToDeskBtn = document.querySelector('#back-to-desk');

//discover and back to desk btn 
function discover() {
    if (discoverBtn) {
        discoverBtn.addEventListener('click', () => {
            window.location.href = 'blog.html';
        });
    }

    if (backToDeskBtn) {
        backToDeskBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
};
discover();
