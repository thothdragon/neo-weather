# :nuage: MeteoApp
> Web and mobile project for a weather app
## :colis: Backlog
* :colis: Weather for current city
* :colis: Weather for submitted city
* :colis: List of cities
* :colis: Delete city from list
* :colis: Forecast for 3 day
* :colis: Save the list
* :colis: Weather for a city list
## :image_encadrée: Wireframes
![wireframes](./wireframes.png)
## :marteau: Environment
> :iphone: [@see ionic framework](https://ionicframework.com/)
* :marteau: Install ionic
```bash
npm install ionic
```
* :marteau: Generate project
```bash
./node_modules/.bin/ionic start
> Angular
> Blank
```
* :marteau: Slide project folder in VSCode
```bash
cd ./my-project
```
* :marteau: Re install ionic
```bash
npm install ionic --save-dev
```
* :marteau: Create script for ionic
```json
"scripts": {
...
"ionic": "ionic"
...
```
* :marteau: Modify start script
```json
"scripts": {
...
"start": "ionic serve"
...
```
## :fusée: Run project
* :fusée: Run in web browser
```bash
npm start
```
* :fusée: Run on device
> You must install Java JDK 8, android studio and accept license
 [@see prerequist](https://ionicframework.com/docs/installation/android)
:danger: Install cordova
```bash
npm install cordova --save-dev
```
:danger: Install native-run
```bash
npm install native-run
```
:danger: Prepare android
```bash
npm run ionic cordova prepare android
```
:danger: Customize *config.xml*
```xml
<widget id="io.cyril.weather" ...>
    <name>Weather</name>
    <description>An awesome Weather app</description>
    <author email="cyril@cyril.com" href="http://cyril.com/">Cyril</author>
```
:danger: Customize *package.json*
```json
  "author": "cyril",
  "description": "An awesome Weather app"
```
:coche_trait_plein: Run on device
```bash
npm run ionic cordova run android --device
```
## :prise_électrique: Build modules and components
* Clear generated components and modules
delete /home/ folder
Remove app-routing-module.ts
Remove AppRoutingModule references from AppModule
Edit app.component.html with
```html
Hello World
```