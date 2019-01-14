# Klimawende von unten - Prototype

## Structure

- `data/` data for the prototype, which are passed into components, templates
  and pages later on. All json files are also added to the GraphQL API.
- `lib/` helper functions for the build process
- `public/` and `.cache/` are Gatsby specific and contain all compiled files
- `src/`
  - `src/components` all React components, which are shared across pages
  - `src/pages` all files and folders in this directory are used to create
    the accessible routes of the prototype
  - `src/templates` templates are similar to pages, except they represent
    dynamic pages (such as projects)
  - `src/_mixins.scss` SASS mixins
  - `src/_variables.scss` SASS variables (fonts, colors ...)
  - `src/style.scss` entry file for the compiled CSS file, which contains all
    styles
- `static/` static files, such as images and fonts
- `webpack.config.js` webpack configuration for the extra CSS build step, which
  generates a CSS file in public containing all CSS used in components

## Develop

The prototype is based on [Gatsby](https://www.gatsbyjs.org/), a very flexible
static site generator.

After you checked out the repository, you have to install dependencies

`npm install`

Afterwards you are able to start the development server.

`npm run develop`

The prototype is now running on [localhost:8000](http://localhost:8000/).


## Production

Running

`npm run build`

will build the static site into one single folder, which can then be served
by any webserver.
