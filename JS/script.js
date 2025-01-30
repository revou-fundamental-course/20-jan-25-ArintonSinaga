document.getElementById('calculate-btn').addEventListener('click', function () {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters

    if (isNaN(weight) || isNaN(height)) {
        alert('Mohon masukkan berat dan tinggi badan yang valid.');
        return;
    }

    const bmi = weight / (height * height);
    let composition = '';

    if (bmi < 18.5) {
        composition = 'Berat badan Anda kurang.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        composition = 'Berat badan Anda ideal.';
    } else if (bmi >= 25 && bmi < 29.9) {
        composition = 'Anda kelebihan berat badan.';
    } else if (bmi >= 30) {
        composition = 'Anda mengalami obesitas.';
    }

    const compositionElement = document.getElementById('composition');
    compositionElement.innerHTML = `BMI Anda adalah.<br><span style="font-size: 2em;">${bmi.toFixed(2)}</span><br>${composition}`;

    if (bmi >= 25 && bmi < 29.9) {
        alert('Perhatian: Berat badan Anda berlebih. Disarankan untuk konsultasi dengan dokter.');
    }
    if (bmi <= 18.5) {
        alert('Perhatian: Berat badan Anda kurang. Disarankan untuk konsultasi dengan dokter.');
    }
    if (bmi >= 18.5 && bmi < 24.9) {
        alert('Selamat: Berat badan Anda Ideal. Tetap jaga pola makan dan olah raga teratur.');
    }
    if (bmi >= 30) {
        alert('Perhatian: Anda menderita Obesitas. Segera konsultasi dengan dokter.');
    }

    // Fungsi untuk menampilkan pilihan aplikasi dokter setelah BMI dihitung
    function konsultasi() {
        // Menampilkan elemen untuk memilih aplikasi dokter (Good Doctor / Halodoc)
        document.getElementById("doctor-options").style.display = "block";
    }

    konsultasi();

    // Menambahkan event listener pada tombol "Konsultasi Dokter Via Aplikasi"
    document.getElementById("consult-doctor").addEventListener("click", function () {
        // Menampilkan pilihan aplikasi dokter setelah tombol diklik
        document.getElementById("doctor-options").style.display = "block";
    });
});