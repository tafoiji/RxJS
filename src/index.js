import { Observable, fromEvent, from } from "rxjs";

//const { Observable, fromEvent } = require("rxjs");

var area = document.getElementById("start");

function switchToState()
{
    area.innerHTML = "";
        from($.getJSON("http://localhost:3000/files/звукозапись.json")).subscribe(
            {
                next: x => DataLoaded(x),
                error: err => ErrorHandler(err),
                complete: () => undefined
            });
}

function DataLoaded(data)
{
    area.innerHTML = "";
    
    var table = document.createElement("table");
    table.border = 1;
    var header = document.createElement("tr");
    var col1 = document.createElement("th");
    col1.textContent = "предмет звукозаписи";
    header.appendChild(col1);

    var col2 = document.createElement("th");
    col2.textContent = "описание";
    header.appendChild(col2);
    table.appendChild(header);
    for (var i in data)
    {
        var cortezh = document.createElement("tr");
        var col1 = document.createElement("td");
        col1.textContent = i;
        cortezh.appendChild(col1);

        var col2 = document.createElement("td");
        col2.textContent = data[i];
        cortezh.appendChild(col2);
        table.appendChild(cortezh);
    }

    area.appendChild(table);
}

function ErrorHandler(err)
 {
    
    alert(err.status + ': ' + err.statusText);
    console.log(err);
 }

var main = document.createElement("input");
main.type = "button";
main.value = 'Показать данные';

var secPage = document.createElement("input");
secPage.type = "button";
secPage.value = 'Удалить данные';

document.body.appendChild(main);
document.body.appendChild(secPage);

fromEvent(main, "click").subscribe(switchToState);
fromEvent(secPage, "click").subscribe(() => {
    if (area.childNodes[0].lastChild != null)
    {
        area.childNodes[0].lastChild.remove();
    }
    else
    {
        alert("nothing to remove");
    }
});