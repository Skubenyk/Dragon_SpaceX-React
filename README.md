# Dragon SpaceX
This project is a test task
<br/>
Аuthor: Skubenyk Yevhenii 
<br/>
skubenik@gmail.com
<br/>
<a href='https://t.me/Skubenik_E'>Telegram</a> 
<br/>
<a href='https://www.linkedin.com/in/yevhenii-skubenyk-a8969a125'>Linkedin</a>

## Description of the project
<ul><h3>Technologies used:</h3>
  <li>React.js - create React App</li>
  <li>Axios - sending asynchronous requests</li>
  <li>Yup - validation forms and not only</li>
  <li>Formik - forms management</li>
  <li>Swiper - creation of carussel pictures</li>
  <li>React Router DOM - dynamic page subkey</li>
  <li>React lazy - the components load is postponed</li>
  <li>Node sass - package connection sass</li>
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

<h3>Additional information about the project</h3>
The App supports the adaptive interface (1366px - 320px);
<br/>
The page-by-page download is implemented with <b>React lazy</b> and <b>React Router DOM</b>
Data cache is done with React hook useEffect


<h3>Tests React App</h3>

<h3>Dev environment</h3>
<ul><h5>Software versions:</h5>
  <li>React.js - 18.2.0</li>
  <li>Node.js - v16.15.0</li>
  <li>Formik - 2.2.9</li>
  <li>Axios - 0.27.2</li>
  <li>Yup - 0.32.11</li>
  <li>Swiper - 8.4.2</li>
  <li>Node sass - 7.0.3</li>
  <li>Sass - 1.55.0</li>
  <li>Webpack - 5.74.0</li>
<ul>
<ul><h5>Commands to install packages:</h5>
  <li><b>npx create-react-app skubenyk_dragon_space-x</b></li>
  <li><b>npm run start</b></li>
  <li><b>npm run build</b></li>
  <li><b>npm install axios</b></li>
  <li><b>npm install yup --save</b></li>
  <li><b>npm install formik --save</b></li>
  <li><b>npm install swiper</b></li>
  <li><b>npm i react-router-dom --save</b></li>
  <li><b>npm i node-sass --save</b></li>
  <li><b>npm i webpack webpack-cli --save-dev</b></li>
  <li><b>npm install classnames --save</b></li>
<ul>
  
