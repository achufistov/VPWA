# VPWA
## Vulnerable Portal Web Application

Стенд для проверки знаний и навыков по эксплуатации веб-уязвимостей на примере уязвимого портала с котиками.

<details>
<summary>Реализовано несколько модулей с возможностью их переключения:</summary>
  
>1. **Регистрация**:
>+ 1.1 Отключена (_disabled_)
>+ 1.2 Возможность перерегистрации (_insecure_)
>+ 1.3 Безопасная реализация (_patched_)
>2. **Логин**:
>+ 2.1 Boolean-SQL инъекция (_booleansql_)
>+ 2.2 Безопасная реализация (_patched_)
>3. **Поиск постов**
>+ 3.1 SSTI Jinja в параметре value (_jinjassti_value_)
>+ 3.2 SSTI псевдо-Groovy в параметре value (_groovyssti_value_)
>+ 3.3 SSTI псевдо-Codepen в параметре value (_codepenssti_value_)
>+ 3.4 Boolean-SQL в параметре value (_booleansql_value_)
>+ 3.5 Union-SQL в параметре value (_unionsql_value_)
>+ 3.6 Boolean-SQL в параметре filter (_booleansql_column_)
>+ 3.7 Union-SQL в параметре filter (_unionsql_column_)
>4. **Обновление JWT-токена**:
>+ 4.1 Небезопасная реализация с возможностью подмены UserID (_insecure_)
>+ 4.2 Безопасная реализация (_patched_)
>5. **Комментарии постов**:
>+ 5.1 Только XSS в комментариях (_only_xss_)
>+ 5.2 XSS и SSTI Jinja в комментариях (_xss_and_jinjassti_)
>+ 5.3 XSS и SSTI псевдо-Groovy в комментариях (_xss_and_groovyssti_)
>+ 5.4 XSS и SSTI псевдо-Codepen в комментариях (_xss_and_codepenssti_)
>6. **Загрузка файлов**:
>+ 6.1 XXE в SVG в явном виле (_xxe_)
>+ 6.2 Blind XXE в SVG (_xxe_blind_)

Помимо этого есть встроенные (вне модулей) уязвимости:
>1. **Bruteforce Hash** - возможность подобрать пароль для пользователя **support** путём брутфорса хэша, получаемого при SQLi (в иных случаях "Support так просто не сдаётся")
>2. **Path Traversal** - в функционале пользователя **support**
>3. **SSRF** - в функционале пользователя **admin**
>4. **Insecure Cookie** - имеется бот со своими печеньками и флагом

</details>

## Installation
> 1. git clone git@github.com:aexord/VPWA.git
> 2. Настройка файла profile.yaml (указать необходимые модули)
> 3. docker-compose build
> 4. docker-compose up
