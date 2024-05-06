<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $date = $_POST['date'];
    $description = $_POST['description'];
    
    // Handle file upload
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["photo"]["name"]);
    move_uploaded_file($_FILES["photo"]["tmp_name"], $targetFile);
    
    // Simpan data ke database atau lakukan tindakan lain sesuai kebutuhan
    
    // Redirect user after submission
    header("Location: thank-you.html");
    exit();
}
?>