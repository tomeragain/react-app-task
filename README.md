# React App with simple login and home access
This is a React App build it with [Vite](https://vite.dev/), Styling was made with help from [TailWind css](https://tailwindcss.com/)

This project has a dependency on this other project [laravel-task](https://github.com/tomeragain/laravel-task)

so is **Important** to have installed and running before the [laravel-task](https://github.com/tomeragain/laravel-task) project

## setting up the project
once this Project is cloned and inside project folder next step is install all dependencies
```
npm install
```

Once we have all the dependencies installed we can proceed to run the project, we can achieve this running the next command: 
```
npm run dev
```
This command will initialize the project, and make it available at something like this: 

```
http://localhost:5173/
```

this should display a login form, the data used there should be the same as created on the user for [laravel-task](https://github.com/tomeragain/laravel-task) project 
once 'logged in' it should redirect to this url (port number can change):

```
http://localhost:5173/home
```