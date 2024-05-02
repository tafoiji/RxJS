# RxJS
## Задание 1.  
1.1 Создать новый JS проект с зависимостями: RxJS, webpack, express. Приблизительная структура проекта показана на рисунке 1.  
1.2 Создать файл настроек для webpack  -  webpack.config.js.  
1.3. Для запуска сервера express использовать конфигурационный файл server.js, созданный в лаб. 7.  

![image](https://github.com/tafoiji/RxJS/assets/126417382/f77a9941-2556-4cd6-86d7-75ef24b9cb31)
Рисунок1 - Структура проекта

## Задание 2.  
Добавить в проект страницу index.html, с которой начинается выполнение проекта.  
В папке src находятся js и ts файлы, index.js – точка входа в приложение.  

Создать одностраничное приложение.  
На странице обрабатывать события:  
Щелчок по кнопке «Показать данные». Это событие скачивает с сервера json файл (из лаб. 7) и отображает его содержимое на странице index.html.  
Щелчок по кнопке «Удалить» удаляет последнюю добавленную строку с данными со страницы.   

Обработку событий выполнить с помощью оператора fromEvent библиотеки RxJS.  
Замечание. Вместо щелчка по кнопке можно обрабатывать другое событие, в результате которого данные будут показаны на странице.  

Получить json файл как Observable объект можно с помощью метода ajax.getJSON(url).  
Для преобразования одного Observable в другой использовать операторы трансформации библиотеки RxJS, такие как map, switchmap.  
