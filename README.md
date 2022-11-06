# React Test App - React/Redux - TypeScript

Application developed by **Thilina Dinith Fonseka** 

## Technology Stack

 - React 18 
 - Redux toolkit 1.8
 - Webpack 5
 - React Router 5
 - React TypeScript 18
 - Axios 1.x
 - WebVitals 2
 - Cross-env 7

## How to Run

 1. Clone the reposotiry. navigate inside react-test folder. 
 2. Run **npm install** to download node packages required 
 3. Run **npm run start** to run the development server.
 4. Open **http://localhost:8080/** to load the application ( you will see a redirect to /women-clothes )
 

## Implementation of Requirnments

 - ### React framework
	 - Application developed with React/Redux
 - ### Data retrive from JSON
	 - Application is developed to retrieve data from API and using Async Thunk to store data into Redux. this data will be used in child components
 - ### Responsive Layout
	 - layout has been developed with mobile 1st approach. 
minimum mobile size supports is **375px ( Iphone SE)**  and the code is supporting Tablet and Desktop Screens
 - ### Filter Creation based on API Data
	 - Filter has been developed based on response data and will be do a array operation to have a unique set of data.
 - ### Hide and show data depending on the dropdown filters
	 - Data will be dynamically filter based on filter selection. All Selection is added to show full data without any filters.

##  Recommendations Implemented

 - ### Implementation of Types
	 - I have used typescripts to develop this application. I have used types efficently in the code using interface and type definitions.
	 - I had no time to implement testing framework. 
 - ###  React Hooks and Redux
	- Code is implemented with React Hooks and Redux also connected Thunk with React 18. 
- ### Use of Webpack
	- Webpack has been used and coded with ts configurations. I have used sass-loader, asset loader, ts-loader, htmlwebpackPlugin, MiniCssExtractPlugin etc. 
- ### Do not use pre-made boilerplates
	- I haven't use any pre-made boilerplates code. But I have searched some configurations in web 
		- ( specially with webpack 5 and ts configurations )