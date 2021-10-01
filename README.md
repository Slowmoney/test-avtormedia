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

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).


Задача

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
