const indexedDB = window.indexedDB;

// create a database
const request = indexedDB.open('CashRecord', 1);

request.onerror = function (event) {
    console.error(event);
};

request.onupgradeneeded = function () {
    const db = request.result;

    // create a table and its schema
    const store = db.createObjectStore('cars', {keyPath: 'id'});

    store.createIndex('id', 'id', {unique: true});
    store.createIndex('color', 'color', {unique: false});
    store.createIndex('make', 'make', {unique: false});
};

request.onsuccess = function () {
    const db = request.result;
    const transaction = db.transaction('cars', 'readwrite');

    const store = transaction.objectStore('cars');
    const colorIndex = store.index('color');
    const makeModeIndex = store.index('make');

    store.put({id: 1, color: 'blue', make: 'Toyota'});
};