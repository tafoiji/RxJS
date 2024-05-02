import { Observable, fromEvent, from, EMPTY} from "rxjs";
import { ajax } from 'rxjs/ajax';
import {switchMap, map, catchError, tap} from 'rxjs/operators'

//const { Observable, fromEvent } = require("rxjs");

var area = document.getElementById("start");

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
    
    alert("Error code: " + err.status);
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

fromEvent(main, "click").pipe(
    switchMap(
        () => ajax.getJSON("http://localhost:3000/files/звукозапись.json").pipe
        (
            map(
                data => {DataLoaded(data);},
            )
            ,
            catchError(error => {
                ErrorHandler(error);
                return EMPTY;
            })
        )
    )
    
)
.subscribe(
    () => console.log('Completed')
)


fromEvent(secPage, "click").pipe(
    tap(
        () => {
            if (area.childNodes != null && area.childNodes[0].lastChild != null)
            {
                area.childNodes[0].lastChild.remove();
            }
            else
            {
                alert("nothing to remove");
            }
        }
    )

)
.subscribe()

/*fromEvent(secPage, "click").subscribe(() => {
    if (area.childNodes[0].lastChild != null)
    {
        area.childNodes[0].lastChild.remove();
    }
    else
    {
        alert("nothing to remove");
    }
});*/