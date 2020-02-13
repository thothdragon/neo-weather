#  :cloud: MeteoApp
> Web and mobile project for a weather app
##  :package: Backlog
*  :package: Weather for current city
*  :package: Weather for submitted city
*  :package: List of cities
*  :package: Delete city from list
*  :package: Forecast for 3 day
*  :package: Save the list
*  :package: Weather for a city list
## :image_encadrée: Wireframes
![wireframes](./wireframes.png)
##  :hammer: Environment
> :iphone: [@see ionic framework](https://ionicframework.com/)
*  :hammer: Install ionic
```bash
npm install ionic
```
*  :hammer: Generate project
```bash
./node_modules/.bin/ionic start
> Angular
> Blank
```
*  :hammer: Slide project folder in VSCode
```bash
cd ./my-project
```
*  :hammer: Re install ionic
```bash
npm install ionic --save-dev
```
*  :hammer: Create script for ionic
```json
"scripts": {
...
"ionic": "ionic"
...
```
*  :hammer: Modify start script
```json
"scripts": {
...
"start": "ionic serve"
...
```
##  :rocket: Run project
*  :rocket: Run in web browser
```bash
npm start
```
*  :rocket: Run on device
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