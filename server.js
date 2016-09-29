var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var Articleone= {
    title: 'Article one @ Anshuman sarangi' ,
    heading:'Article 1' ,
    date :'sep 25,2016' ,
    content:`
            <p>
                       Start up INDIA Stand up INDIA is an ambitious scheme to 
                       put INDIA in the elite slot of most innovative nations.
                       Let's grab it and start thinking to how become an enterpreneur!
            </p>
            <p>
                       These schemes are showing signs of a better tomorrow 
                       as INDIA moves up in the global innovation index and 
                       competition index.
            </p>`
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content; 
    
var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name= "viewport" content= "width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        
        <div class ="container">
          <div>
                <a href="/">Home</a>
          </div>
          <hr/>
          <hr3>
            ${heading}
          </hr3>
          <div>
            ${date}
          </div>
        <div>
        ${content}
         </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res) {
   res.send(createTemplate(Articleone));
});

app.get('/article-two', function(req,res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
 });
 
app.get('/article-three', function(req,res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
 });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
