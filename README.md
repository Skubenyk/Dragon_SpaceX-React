# Dragon SpaceX
This project is a test task
<br>
Аuthor: Skubenyk Yevhenii skubenik@gmail.com

## Description of the project
<ul><h3>Technologies used:</h3>
  <li>React.js - create-react-app (npx create-react-app name-of-project)</li>
  <li>Axios - sending asynchronous requests (npm install axios)</li>
  <li>Yup - validation forms and not only (npm install yup --save)</li>
  <li>Formik - forms management (npm install formik --save)</li>
  <li>Swiper - creation of carussel pictures (npm install swiper)</li>
  <li>React Router DOM - dynamic page subkey (npm i react-router-dom --save)</li>
  <li>React lazy - the components load is postponed</li>
  <li>Node sass - package connection sass (npm i node-sass --save)</li>
</ul>

<h3>Instructions for project deployment on Heroku hosting</h3>
https://skubenyk-dragon-space-x-heroku.herokuapp.com/
<ol>The first stage - configure the server
  <li>Сreate app as indicated on Heroku website</li>
  <li>Еnter the command in the terminal - <b>heroku login</b></li>  
  <li>Еnter the command in the terminal - <b>git init</b></li>
  <li>Еnter the command in the terminal - <b>heroku git:remote -a skubenyk-dragon-space-x-heroku</b></li>
  <li>Еnter the command in the terminal - <b>npm init</b></li>
  <li>Create at the root <b>index.js</b></li>
  <li>Еnter the command in the terminal - <b>npm i nodemon --save</b></li>
  <li>In the file <b>package.json => scripts {  "start:dev": "nodemon index.js", "start": "node index.js" }</b></li>
  <li>Еnter the command in the terminal - <b>npm i express --save</b></li>
  <li>Enter the following commands in turn in the terminal: <b>git add .</b> ; <b>git commit -m "text commit"</b> ; <b>git push heroku master</b> .</li>
  <li>Create a <b>public</b> folder and this file <b>index.html</b> with be-some text</li>
  <li>In <b>index.js</b> record:
    <br>
    <b>const express = require('express');
    <br/>
    const app = express();
    <br/>
    const port = process.env.PORT || 3000;
    <br/>
    app.use(express.static('public'));
    <br/>
    app.listen(port, () => console.log(`Server is running on: http://localhost:${port}`));</b>
  </li>
  <li>Enter the following commands in turn in the terminal: <b>git add .</b> ; <b>git commit -m "text commit"</b> ; <b>git push heroku master</b> .</li>
</ol>
<ol>Second stage - loading the App
  <li>Build your ready project in the project working folder (just a project, not a server) - npm run build</li>
  <li>Transfer your build files to a public folder, which you should know in <b>skubenyk-dragon-space-x-heroku</b> and delete the previous test file index.html</li>
  <li>Enter the following commands in turn in the terminal: <b>git add .</b> ; <b>git commit -m "text commit"</b> ; <b>git push heroku master</b> .</li>
</ol>
