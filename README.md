# states-ui-angular

This project provides a UX/UI for the states REST API currently being developed
at [https://github.com/dlwhitehurst/states-api-express](https://github.com/dlwhitehurst/states-api-express)

It has been found the npm dependencies need to be refactored so 
that an `npm install` works correctly without error. After cloning
an options flag is needed to install the dependencies without error.
This note will be removed once `package.json` has been fixed.

```bash
npm install --legacy-peer-deps
```

To run the Angular app locally (after installing dependencies) use:

```bash
ng serve
```
