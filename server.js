var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title:'ARTICLE ONE | PARTH GUPTA',
        heading:'ARTICLE ONE',
        date:'FEB 14, 2107',
        content: `
                  <p>
                     THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.
                 </p> `
        
} ,
    'article-two' : {
        title:'ARTICLE TWO | PARTH GUPTA',
        heading:'ARTICLE TWO',
        date:'FEB 14, 2107',
        content: `
         <p>
             THIS IS MY ARTICLE TWO.
         </p>
             `} ,
    'article-three' : { 
        title:'ARTICLE THREE | PARTH GUPTA',
        heading:'ARTICLE THREE',
        date:'FEB 14, 2107',
        content: `
         <p>
          THIS IS MY ARTICLE THREE
          </P> ` 
          }
  };
  
function createTemplate(data){
          var title= data.title;
          var heading= data.heading;
          var date= data.date;
          var content= data.content;
          var htmlTemplate= `
                    <html>
                        <head>
                            <title>
                                ${title}
                            </title>
                            <meta name="viewport" content="width=decice-width, initial-scale=1" />
                            <link href="/ui/style.css" rel="stylesheet" />
                         </head>
                        <body>
                            <div class="container">
                                <div>
                                    <a href="/">home </a>
                                     </div>
                                     <hr/>
                                <div>
                                    
                                  <h3>
                                    ${heading}
                                 </h3> 
                                 </div>
                                 <div>
                                    ${date}
                                     
                                 </div>
                                 
                                 ${content}
                             </div>
                         </body>    
                    </html>
                    `;
            return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req,res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/resume.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'resume.jpg'));
});

app.get('/ui/prof-pic.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'prof-pic.jpg'));
});
app.get('/ui/background.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'background.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
