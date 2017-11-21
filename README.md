# slot-me-in-server

*************************************

This is a web server application for the slot-me-in-client web application. Currently these two are seperately created and there is 
a plan to merge both repositories into a single source and served from a single web server. This application can only be run locally and there is plan to extend this to provide environment configuration

*************************************

## Pre-requisites:

### NodeJS 
	Follow the installation instrcution provided here - https://nodejs.org/en/
###MongoDB
	Follow the installation instructions provided here - https://www.mongodb.com/

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory. 

## Serve the application

Run `npm run serve` to serve the web server and the sevices provided by the web server. This will serve the application from the `build/` directory. Please make sure you build the application before serving.

## Start the application

Run `npm start` simply that will concurrently builds the application and serves the application.


