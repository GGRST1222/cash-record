# Cash Record Application Using IndexedDB

Hello everyone, this project was developed during my university years for the "Basic Web Design" course.


This application provides simple bookkeeping functionality, allowing users not only to view records of expenses but also to modify and delete entries.

The tools used for developing this application primarily include Bootstrap for the frontend and IndexedDB and jQuery for the backend.

In the future, I plan to deploy this application to my website (http://ggrstwebsite.com).

## Instructions

1. index.html<br>
Users can directly enter the data required for bookkeeping (item, amount, note). Once the input is confirmed, the data will be uploaded to the browser's IndexedDB. Users can also navigate to the record page through the navigation bar.

2. record.html<br>
All records after bookkeeping are displayed, and data can be modified/deleted through the right side of each row. The total amount is also shown at the bottom.

3. replace.html<br>
Users can modify the data, including item, amount, and note.

4. delete.html<br>
Users can delete the data entry.