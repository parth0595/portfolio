var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleOne : {
        title:'ARTICLE ONE | PARTH GUPTA',
        heading:'ARTICLE ONE',
        date:'FEB 14, 2107',
        content: `
                  <p>
                     THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.THIS IS MY CONETNT.
                 </p> `
        
} ,
    articleTwo : {
        title:'ARTICLE TWO | PARTH GUPTA',
        heading:'ARTICLE TWO',
        date:'FEB 14, 2107',
        content: `
         <p>
             THIS IS MY ARTICLE TWO.
         </p>
             `} ,
    articleThree : { 
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

app.get('/article-one',function (req,res) {
    res.send(createTemplate(articleOne));
});

app.get('/article-two',function (req,res) {
     res.send(createTemplate(articleTwo));
});

app.get('/article-three',function (req,res) {
   res.send(createTemplate(articleThree));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
