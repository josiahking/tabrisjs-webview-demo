const {WebView, contentView, app} = require('tabris');

let webView = new WebView({
  left: 0, right: 0, top: 0, bottom: 0,
  url: 'http://jobman.uk.tempcloudsite.com'
  //url: 'https://tabris.com'
}).appendTo(contentView);

app.onBackNavigation((e) => {
	e.preventDefault();
	console.log('back fired');
	webView.goBack();
});