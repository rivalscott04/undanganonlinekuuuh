
// Retirement Data Management JavaScript

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
    
    // Custom Select2 formatting functions - update these to show NIP only once
    window.formatPegawai = function(pegawai) {
        if (pegawai.loading) {
            return pegawai.text;
        }
        
        // Updated format to show name as primary and NIP as secondary information
        var $container = $(
            '<div class="select2-result-pegawai d-flex flex-column">' +
                '<div class="select2-result-pegawai__name font-weight-bold">' + pegawai.text + '</div>' +
                '<div class="select2-result-pegawai__nip text-muted small">' + pegawai.id + '</div>' +
            '</div>'
        );
        
        return $container;
    }
    
    window.formatPegawaiSelection = function(pegawai) {
        // Display NIP only once followed by the name
        return pegawai.id ? pegawai.id + ' - ' + pegawai.text : pegawai.text;
    }

    // Show incomplete data notification
    showIncompleteDataNotification(3); // Show notification for 3 incomplete records
});

// Function to show a notification for incomplete employee data
function showIncompleteDataNotification(count) {
    // Create the notification HTML
    const notificationHtml = `
        <div class="toast-notification fade-in" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <div class="d-flex align-items-center">
                    <span class="bg-retirement-light text-retirement p-1 rounded-circle me-2">
                        <i class="bi bi-bell"></i>
                    </span>
                    <strong class="me-auto">Perhatian!</strong>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                <p>Terdapat ${count} data pegawai yang belum lengkap. Silakan lengkapi data tersebut.</p>
                <div class="mt-2 pt-2 border-top d-flex gap-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary" id="ignoreNotification">Abaikan</button>
                    <button type="button" class="btn btn-sm btn-primary-custom" id="completeData">Lengkapi</button>
                </div>
            </div>
        </div>
    `;

    // Create container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
        document.body.appendChild(toastContainer);
    }

    // Add the notification to the container
    toastContainer.innerHTML = notificationHtml;

    // Initialize the toast
    const toastElement = toastContainer.querySelector('.toast-notification');
    const toast = new bootstrap.Toast(toastElement, { autohide: false });
    toast.show();

    // Add event listeners to buttons
    const ignoreButton = document.getElementById('ignoreNotification');
    const completeButton = document.getElementById('completeData');

    if (ignoreButton) {
        ignoreButton.addEventListener('click', function() {
            toast.hide();
            
            // Show feedback toast
            Swal.fire({
                title: 'Notifikasi diabaikan',
                icon: 'info',
                timer: 2000,
                showConfirmButton: false
            });
        });
    }

    if (completeButton) {
        completeButton.addEventListener('click', function() {
            toast.hide();
            
            // Show feedback and redirect
            Swal.fire({
                title: 'Mengarahkan...',
                text: 'Mengarahkan ke halaman pelengkapan data',
                icon: 'info',
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                // In a real app, you would redirect to the data completion page
                console.log('Navigate to data completion page');
            });
        });
    }
}
