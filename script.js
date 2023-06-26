// Mengambil data dari local storage (jika ada)
var akanDilakukan = JSON.parse(localStorage.getItem('akanDilakukan')) || [];
var sudahDilakukan = JSON.parse(localStorage.getItem('sudahDilakukan')) || [];

// Memuat daftar task yang akan dilakukan dan sudah dilakukan saat memulai aplikasi
loadTasks();

// Fungsi untuk menambahkan task baru
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskTgl = document.getElementById('taskk');
    var taskText = taskInput.value.trim();
    var taskDate = taskTgl.value.trim();
    if (taskText !== '' & taskDate !== '') {
        var task = {
            text: taskText,
            date: taskDate
        };
        akanDilakukan.push(task);
        saveTasks();
        taskInput.value = '';
        loadTasks();
    }
    else {
        alert("Mohon Masukkan Input teks dan Input tanggal yang benar!");
    }
}

// Fungsi untuk menyelesaikan suatu task
function completeTask(index) {
    var task = akanDilakukan.splice(index, 1)[0];
    sudahDilakukan.push(task);
    saveTasks();
    loadTasks();
}

// Fungsi untuk mengembalikan task yang sudah sudahDilakukan ke daftar "Yang akan dilakukan"
function restoreTask(index) {
    var task = sudahDilakukan.splice(index, 1)[0];
    akanDilakukan.push(task);
    saveTasks();
    loadTasks();
}

// Fungsi untuk menghapus task yang sudah sudahDilakukan
function deleteTask(index) {
    sudahDilakukan.splice(index, 1);
    saveTasks();
    loadTasks();
}

// Fungsi untuk memuat ulang daftar task
function loadTasks() {
    var todoList = document.getElementById('todoList');
    var doneList = document.getElementById('doneList');

    // Mengosongkan daftar task sebelum memuat yang baru
    todoList.innerHTML = '';
    doneList.innerHTML = '';

    // Memuat task yang akan dilakukan
    for (var i = 0; i < akanDilakukan.length; i++) {
        var task = akanDilakukan[i];
        var listItem = createTaskListItem(task.text, task.date, i, false);
        todoList.appendChild(listItem);
    }

    // Memuat task yang sudah dilakukan
    for (var j = 0; j < sudahDilakukan.length; j++) {
        var doneTask = sudahDilakukan[j];
        var doneListItem = createTaskListItem(doneTask.text, doneTask.date, j, true);
        doneList.appendChild(doneListItem);
    }
}

// Fungsi untuk membuat elemen daftar task
function createTaskListItem(text, date, index, isDone) {
    var listItem = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isDone;
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            completeTask(index);
        } else {
            restoreTask(index);
        }
    });
    listItem.appendChild(checkbox);

    var taskText = document.createElement('span');
    taskText.textContent = '' + date + ' : ' + text;
    listItem.appendChild(taskText);

    if (isDone) {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.addEventListener('click', function () {
            deleteTask(index);
        });
        listItem.appendChild(deleteButton);
    }

    return listItem;
}

// Fungsi untuk menyimpan data ke local storage
function saveTasks() {
    localStorage.setItem('akanDilakukan', JSON.stringify(akanDilakukan));
    localStorage.setItem('sudahDilakukan', JSON.stringify(sudahDilakukan));
}