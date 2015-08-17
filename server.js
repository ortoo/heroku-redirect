var koa = require('koa');
var app = koa();

app.use(function *(){
  this.status = 301;
  this.redirect(process.env.NEW_BASE_URL + this.request.originalUrl);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
