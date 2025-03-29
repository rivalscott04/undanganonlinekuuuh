
// Retirement Data Management JavaScript

// Initialize DataTable when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DataTable if the table exists
    const pensiunTable = document.getElementById('pensiun-table');
    if (pensiunTable) {
        const dataTable = new DataTable('#pensiun-table', {
            responsive: true,
            lengthMenu: [5, 10, 25, 50],
            pageLength: 10,
            dom: '<"d-flex justify-content-between align-items-center mb-3"lBf>rt<"d-flex justify-content-between align-items-center mt-3"ip>',
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="bi bi-file-earmark-excel me-1"></i> Excel',
                    className: 'btn btn-sm btn-outline-primary-custom',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5]
                    }
                },
                {
                    extend: 'pdf',
                    text: '<i class="bi bi-file-earmark-pdf me-1"></i> PDF',
                    className: 'btn btn-sm btn-outline-primary-custom',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5]
                    }
                },
                {
                    extend: 'print',
                    text: '<i class="bi bi-printer me-1"></i> Print',
                    className: 'btn btn-sm btn-outline-primary-custom',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5]
                    }
                }
            ],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Cari...",
                lengthMenu: "_MENU_ data per halaman",
                zeroRecords: "Tidak ada data yang ditemukan",
                info: "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
                infoEmpty: "Tidak ada data yang tersedia",
                infoFiltered: "(difilter dari _MAX_ total data)",
                paginate: {
                    first: '<i class="bi bi-chevron-double-left"></i>',
                    last: '<i class="bi bi-chevron-double-right"></i>',
                    previous: '<i class="bi bi-chevron-left"></i>',
                    next: '<i class="bi bi-chevron-right"></i>'
                }
            }
        });

        // Customize DataTable search field
        const searchInputs = document.querySelectorAll('.dataTables_filter input');
        searchInputs.forEach(input => {
            input.classList.add('form-control', 'form-control-sm');
            input.setAttribute('placeholder', 'Cari...');
        });

        const filterContainers = document.querySelectorAll('.dataTables_filter');
        filterContainers.forEach(container => {
            container.classList.add('mb-2');
        });

        const lengthSelects = document.querySelectorAll('.dataTables_length select');
        lengthSelects.forEach(select => {
            select.classList.add('form-select', 'form-select-sm');
        });
    }

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Handle delete button actions
    const deleteButtons = document.querySelectorAll('.btn-delete-trigger');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            
            Swal.fire({
                title: 'Konfirmasi Hapus',
                text: "Apakah Anda yakin ingin menghapus data ini?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#E35D6A',
                cancelButtonColor: '#6B7280',
                confirmButtonText: 'Ya, Hapus!',
                cancelButtonText: 'Batal',
                customClass: {
                    confirmButton: 'btn btn-danger',
                    cancelButton: 'btn btn-secondary'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById('delete-form-' + id).submit();
                }
            });
        });
    });
    
    // Refresh button action
    const refreshButton = document.getElementById('refreshData');
    if (refreshButton) {
        refreshButton.addEventListener('click', function() {
            // Show loading indicator
            Swal.fire({
                title: 'Memuat Data...',
                html: 'Mohon tunggu sebentar',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
            
            // Reload the page after a short delay for better UX
            setTimeout(() => {
                location.reload();
            }, 500);
        });
    }
    
    // Add animation classes to cards and elements for better UX
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.1) + 's';
        card.classList.add('fade-in');
    });
    
    const mainCard = document.querySelector('.card');
    if (mainCard) {
        mainCard.classList.add('fade-in');
    }
});
