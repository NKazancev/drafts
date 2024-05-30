function createCalendar(year, month, elem) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.append(thead, tbody);

    let weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    for (let i = 0; i < 7; i++) {
        let th = document.createElement('th');
        th.textContent = weekdays[i];
        thead.append(th);
    }
    
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement('tr');
        tbody.append(tr);
        for (let j = 0; j < 7; j++) {
            let td = document.createElement('td');
            tr.append(td);
        }
    }
    
    let firstDay = new Date(year, month - 1).getDay() - 1;
    let lastDay = new Date(year, month, 0).getDate();

    let days = table.querySelectorAll('td');
    for (let i = firstDay, day = 1; i < days.length; i++) {
        days[i].textContent = day++;
        if (day === (lastDay + 1)) break;
    }

    elem.append(table);
}