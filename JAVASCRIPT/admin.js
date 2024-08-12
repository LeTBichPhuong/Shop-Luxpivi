document.getElementById('logoutButton').addEventListener('click', function() {
    alert('Logged out!');
    // Logic để đăng xuất có thể thêm vào đây
});

const sections = document.querySelectorAll('.content-section');
const links = document.querySelectorAll('.sidebar ul li a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        sections.forEach(section => section.classList.remove('active'));
        const targetId = this.id.replace('Link', '');
        document.getElementById(targetId).classList.add('active');
    });
});

// Hiển thị phần Dashboard khi tải trang
document.getElementById('dashboard').classList.add('active');

// Tạo biểu đồ sử dụng Chart.js
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9'],
        datasets: [{
            label: 'Sales',
            data: [3000, 6000, 4000, 6000, 10000, 8000,15000,20000,30000],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Xóa sản phẩm
document.querySelectorAll('.Action-2').forEach(button => {
    button.addEventListener('click', function() {
        if (confirm('Bạn có chắc chắn muốn xóa mục này?')) {
            const row = this.closest('tr');
            row.remove();
        }
    });
});

// Sửa sản phẩm