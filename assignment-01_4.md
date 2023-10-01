# Assignment 01

Group members

1. Varrel Kaleb Ropard Pasaribu (10231089) (problem 5)
2. Betran (10231023)(problem 6)
3. najwa putri salsabila (20231051) (problem 3)
4. Muhammad Rozan Rifdah Putra Noer (11231063)
5. Elfrida Eka Ayuningtyas (16231019) (problem 2)
6. Rian Yabers Penata Manullang (16231050) (problem 4)


## Problem 1

Diberikan sebuah keluaran dari suatu program sebagai berikut:

```
 =====    =====    =   =
   =        =      =  =
   =        =      = = 
   =        =      =  =
 =====      =      =   =
```

Menggunakan perintah `print()` dalam Python, tuliskan program
Python untuk mencetak tulisan ITK di atas.

### Answer
print(" =====     =====     =   = ")
print("   =         =       =  = ")
print("   =         =       = = ")
print("   =         =       =  = ")
print(" =====       =       =   = ")
## Problem 2
Diberikan suatu bilangan bulat `n`, buatlah _flowchart_ untuk perintah berikut
- Jika `n` adalah bilangan ganjil, cetak `Aneh`
- Jika `n` adalah bilanga bulat yang berada di rengang dari 2 sampai 5,
  cetak `Tidak Aneh`
- Jika `n` adalah bilangan bulat yang berada di rentang dari 6 sampai 20,
  cetak `Aneh`
- Jika `n` adalah bilangan bulat dan lebh besar dari 20, cetak `Tidak Aneh`.

### Answer
![problrm 1.jpg](..%2FDocuments%2Fproblrm%201.jpg)
![problem 2.jpg](..%2FDocuments%2Fproblem%202.jpg)
![problem 3.jpg](..%2FDocuments%2Fproblem%203.jpg)
![problem 4.jpg](..%2FDocuments%2Fproblem%204.jpg)
## Problem 3
Lengkapi potongan kode Python berikut supaya ketika _user_ memberikan 
dua masukan angka, sebut sebagai variabel `a` dan `b` maka akan 
tercetak 3 baris tambahan sebagai berikut
1. Baris pertama merupakan jumlahan dari dua angka tersebut
2. Baris kedua merupakan selisih dua angka tersebut (angka masukan pertama 
   dikurangi angka masukan kedua)
3. Baris ketiga merupakan hasil kali dari angka tersebut.

```py
a = int(input("Masukkan angka pertama"))
b = int(input("Masukkan angka kedua"))
### Tulis kode sesuai 3 perintah di atas 
```

Tampilkan juga tiga contoh _test cases_ masukan `a` dan `b`

### Answer
a = int(input("Masukkan angka pertama: "))
b = int(input("Masukkan angka kedua: "))

# Menghitung jumlah
jumlah = a + b

# Menghitung selisih
selisih = a - b

# Menghitung hasil kali
hasil_kali = a * b

# Mencetak hasil
print("Baris pertama: Jumlah =", jumlah)
print("Baris kedua: Selisih =", selisih)
print("Baris ketiga: Hasil Kali =",hasil_kali)
## Problem 4
Bakteri _Bacillus cereus_ membelah diri rata-rata setiap 20 menit sekali.
Jika di awal suatu cawan petri terdapat 100 bakteri _Bacilus cerues_, 
ada berapa bakteri setelah satu hari?

Jawablah pertanyaan tersebut dengan membuat program Python.
Gunakan variabel `jumlah_bakteri` dan variabel `waktu`.

### Answer
jumlah_bakteri_awal = 100  # Jumlah bakteri awal
waktu = 24 * 60  # Waktu dalam menit setelah satu hari (1 hari = 24 jam x 60 menit)

# Menghitung jumlah bakteri setelah satu hari
jumlah_bakteri_setelah_sehari = jumlah_bakteri_awal * (2 ** (waktu / 20))

print("Jumlah bakteri setelah satu hari:", jumlah_bakteri_setelah_sehari)
## Problem 5
Masih mengacu pada Problem (4). Jika bakteri _Bacillus cereus_ 
meninggal setelah hidup satu hari. Ada berapa bakteri 
yang masih hidup setelah 500 jam?

Jawablah pertanyaan tersebut dengan membuat program Python.
Gunakan variabel `jumlah_bakteri_hidup`, variabel `jumlah_bakteri_meninggal` dan variabel `waktu`.

### Answer
jumlah_bakteri_awal = 100  # Jumlah bakteri awal
waktu = 500  # Waktu dalam jam

# Menghitung jumlah bakteri yang masih hidup setelah 500 jam
jumlah_bakteri_hidup = jumlah_bakteri_awal * (2 ** (waktu / 20))

# Jumlah bakteri yang meninggal
jumlah_bakteri_meninggal = jumlah_bakteri_awal - jumlah_bakteri_hidup

print("Jumlah bakteri yang masih hidup setelah 500 jam:", jumlah_bakteri_hidup)
print("Jumlah bakteri yang meninggal setelah 500 jam:", jumlah_bakteri_meninggal)
## Problem 6
Satu hari akan ditambahkan pada kalender hampir tiap empat tahun sekali
yaitu pada tanggal 29 Februari, hari tersebut disebut _hari kabisat_.
Hari kabisat tersebut ditambahkan dengan tujuan karena dalam satu tahun
planet bumi mengelilingi matahari tidak tepat bilangan bulat, namun
365.25 hari. Suatu tahun yang memuat hari kabisat disebut _tahun kabisat_.

Di dalam kalender Masehi (kalender yang umum digunakan di seluruh dunia),
ada tiga kondisi untuk mengidentifikasikan suatu tahun adalah tahun kabisat

- Jika suatu tahun habis dibagi 4 maka tahun tersebut
  adalah tahun kabisat jika TIDAK habis dibagi 100.
  - Jika habis dibagi 100 maka tahun tersebut adalah tahun kabisat 
    jika habis juga dibagi 400.
    - Jika tidak habis dibagi 400, maka tersebut BUKAN tahun kabisat.


Buatlah _flowchart_ dari program penentuan suatu tahun 
apakah tahun kabisat atau bukan.
Ujilah program dengan tahun-tahun berikut: 2024, 2023, 2000, 1900.

### Answer
![problem 6.jpg](..%2FDocuments%2Fproblem%206.jpg)