document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        const children = sidebar.children;
            children[0].style.borderRadius = "28px 28px 8px 8px";
            children[children.length - 1].style.borderRadius = "8px 8px 28px 28px";
    }
});