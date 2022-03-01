#  Валидация веб-форм

##  Старт
  * Сделайте форк этого репозитория https://github.com/fufaev/js_lesson8.

###  Task А
1. Откройте task_a.html в редакторе VSCode.
2. Создайте форму со следующими полями ввода
  * Имя
  * Фамилия
  * Электронная почта
  * Номер телефона
  * Адрес
  * Почтовый индекс
  * Пароль
  * Кнопка отправки
3. Проверьте HTML на http://validator.w3.org. Внесите изменения, которые предлагает валидатор.
4. Реализуйте проверку формы с помощью HTML5
  * Имя и фамилия обязательны
  * Электронная почта должна быть действительной, и это обязательное условие
  * Формат номера телефона должен быть +3529 0123456
  * Адрес и почтовый индекс не требуются, но почтовый индекс должен состоять ровно из 6 цифр (если он введен)
  * Требуется пароль
  * Подсказки
    * http://www.the-art-of-web.com/html/html5-form-validation/
    * http://www.w3schools.com/TAgs/att_input_pattern.asp
    * http://www.regular-expressions.info/tutorial.html
    * https://regex101.com/
  * Обязательно стилизуйте саму форму и её поля с использованием CSS (измените css/main.css)

###  Task B
1. Откройте task_b.html в редакторе VSCode.
2. Скопируйте/вставьте форму, которую вы сделали в задаче A.
3. Добавьте атрибут novalidate к элементу формы (отключите проверку HTML5) .
4. Реализуйте проверку формы с помощью JavaScript
  * Проверить те же свойства, что и в задаче A
  * Подсказки:
    * `const element = document.querySelector()`
    * `const elements = document.querySelectorAll()`
    * `element.addEventListener('submit', functionName)`
    * `element.setAttribute('style', 'cssProperty: value')`
    * `elelment.cssProperty = value`
  * Если форма невалидна, остановите событие отправки данных формы с помощью `preventDefault()`
  * Подсказки
    * https://www.w3schools.com/jsref/jsref_regexp_exec.asp
    * https://www.w3schools.com/jsref/jsref_obj_regexp.asp
