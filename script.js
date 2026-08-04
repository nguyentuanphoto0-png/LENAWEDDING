document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle (Bật/tắt menu trên giao diện điện thoại)
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Đổi icon hamburger sang biểu tượng dấu X (Close)
            const icon = mobileToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Tự động đóng menu khi bấm chọn một mục liên kết
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // 2. Hiệu ứng thêm bóng đổ cho Thanh Navigation khi cuộn trang
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)';
        }
    });

    // 3. Đảm bảo toàn bộ liên kết mở Drive luôn bật ở tab mới an toàn
    const driveLinks = document.querySelectorAll('.btn-card');
    driveLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

});
