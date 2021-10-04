# test-avtormedia

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```



# Задача

Разработать Single Page Application с использованием Vue.js. 

Приложение представляет из себя список постов с возможностью просмотреть конкретный пост по его ID и комментарии к нему, отредактировать текст.

Макет: https://www.figma.com/file/OBZ9BnxVRoAPDOA2FtBckw/Single-Page-Application 

Используем тестовый API: https://jsonplaceholder.typicode.com

Получение списка постов: 	[GET] https://jsonplaceholder.typicode.com/posts?_embed=comments 
Получение поста по ID: 	[GET] https://jsonplaceholder.typicode.com/posts/1
Получение комментариев: 	[GET] https://jsonplaceholder.typicode.com/posts/1/comments 
Обновление полей поста: 	[PATCH] https://jsonplaceholder.typicode.com/posts/1 {“body”: “...”}

Поиск: https://github.com/typicode/json-server#full-text-search
Пагинация: https://github.com/typicode/json-server#paginate
Требования
CSS-фреймворки, UI-киты использовать нельзя;
всё взаимодействие с данными должно происходить через Vuex;
для роутинга использовать Vue router;
верстка должна быть адаптивной с использованием SCSS по методологии БЭМ.

Задача со звездочкой: реализовать SSR на Nuxt.

Решение любых возникших вопросов по заданию оставляем на твое усмотрение. Мы можем спросить, какие вопросы возникли, каким было твое решение и почему именно таким.

Исходный код решения нужно выложить в любой публичный репозиторий (Github, Gitlab, Bitbucket) и отправить нам ссылку.
В описании к решению (файле README.md) указать инструкцию по запуску/развертыванию приложения.
