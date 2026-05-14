# VPWA
## Vulnerable Portal Web Application

Стенд для проверки знаний и навыков по эксплуатации веб-уязвимостей на примере уязвимого портала с котиками.

## Installation
> 1. git clone https://github.com/achufistov/VPWA.git
> 2. cd VPWA
> 3. docker-compose build
> 4. docker-compose up
> 5. Приложение будет доступно по адресу localhost:3001

> 
> Этот проект поддерживает сборку на `amd64` и `arm64` (Apple Silicon) при использовании Docker. В случае, если у вас `amd64`, дополнительных действий не требуется. Если используется `arm64`, допишите строку `platform: linux/arm64/v8` на 18 строке файла docker-compose.yml
