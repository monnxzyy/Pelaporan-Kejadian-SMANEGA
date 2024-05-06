document.getElementById('incidentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const photo = document.getElementById('photo').files[0]; // Mendapatkan file foto
    
    console.log('Nama Pelapor:', name);
    console.log('Tanggal Insiden:', date);
    console.log('Deskripsi Insiden:', description);
    
    if (photo) {
        console.log('Foto:', photo.name); // Menampilkan nama file foto
    }
    
    alert('Laporan telah berhasil dikirim!');
});