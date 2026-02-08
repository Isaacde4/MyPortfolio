window.onload = () => {
    const title = document.getElementById('welcomeTitle');
    const hour = new Date().getHours();
    let greeting = '';

    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    if (title) {
        title.textContent = `${greeting}, welcome to Isaac's Interactive Projects!`;
    }
};
