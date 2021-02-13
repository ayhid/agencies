# Coding Exercice

A quick coding exercise consisting of an GUI written in ReactJs `frontend` displaying a list of agencies from a microservice written in NodeJs `backend`.
The selected agency is toreUpon agency selection is persisted in the browser's local storage.

## Project File structure
```
agencies (project root)
└───backend
│   
└───frontend
```
### Backend

The backend directory holds the server part application responsible for exposing data as a REST webservice.


#### technical stack

The application is based on [NestJS](https://nestjs.com/) a Node.js server-side framework fully supporting Typescript.

#### Installation

Please refer to the [`README.md`](backend/README.md) file in the `backend` directory

#### endpoints

**List Agencies**

Returns json array list of all available agencies.

* **URL**
`/agencies`

* **Method:**
  `GET`

* **Success Response:**

```
[
  {
    name: "Agence Paris Opera",
    manager: "Philipe Dayan",
    activity: "Electrique"
  },
  {
    name: "Agence Paris Madeleine",
    manager: "Adel Chibane",
    activity: "Electrique"
  },
  {
    name: "Agence Strasbourg",
    manager: "Bruno Brassard",
    activity: "Climatisation"
  }
]
```

### Frontend

The frontend directory holds the client part application responsible for displaying data from the backend by consuming the exposed REST service.

The frontend application displays a list of 5 agencies by default.

The selected agency is stored to the browser's local storage.

#### technical stack

The application is written in [ReactJs](https://fr.reactjs.org/) and genertated with [Create React App](https://create-react-app.dev/) and the `typescript` template in order to fully support Typescript written components.


#### Installation

Please refer to the [`README.md`](frontend/README.md) file in the `frontend` directory

#### Vendors

* **axios**
  
[axios](https://github.com/axios/axios) is a promise based HTTP client for both browser an node.js.

It's used here to consume the REST endpoints from the backend application. 

* **react-select**

The agencies list is displayed using [react-select](https://react-select.com) a component to display an enhanced Select Input Control.


#### Components

* **App**
  
  src: `./components/App.tsx`

  The main application component. It's responsible for querying the REST webservice and  dispatching the data down to the children components (AgenciesSelector & SelectedAgency)

* **AgenciesSelector**
  
  src: `./components/AgenciesSelector.tsx`

  A small wrapper component around react-select's Select components
  
  - **props**
    - options: array of agencies 
    - limit: integer, the number of agencies to display. defaults to 5
    - value: the currently selected agency.
  
    The component also supports [all Select's component props](https://react-select.com/props)

* **SelectedAgency**
  
  src: `./components/SelectedAgency.tsx`

  Displays details about the selected agency

  - **props**
    - agency: the selected agency

* **Card**

  src: `./components/AgenciesSelector.tsx`

  Mainly a dummy component to add a beautiful card look the wrapped components.

* **Loading**
  
  src: `./components/Loading.tsx`

  Displays a loading message
    