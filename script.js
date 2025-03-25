document.addEventListener('DOMContentLoaded', function() {
    // 侧边栏菜单项点击事件
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有活跃状态
            menuItems.forEach(i => i.classList.remove('active'));
            // 添加当前点击项的活跃状态
            this.classList.add('active');
        });
    });

    // 分段控制器点击事件
    const segmentItems = document.querySelectorAll('.segment-item');
    segmentItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有活跃状态
            segmentItems.forEach(i => i.classList.remove('active'));
            // 添加当前点击项的活跃状态
            this.classList.add('active');
        });
    });

    // 按钮点击事件
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('按钮被点击了！');
        });
    }
});