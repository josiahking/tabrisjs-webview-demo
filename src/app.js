const {WebView, contentView, app} = require('tabris');

let lastBackClickTime = 0;

let webView = new WebView({
  left: 0, right: 0, top: 0, bottom: 0,
  url: 'http://jobman.uk.tempcloudsite.com'
  //url: 'https://tabris.com'
}).appendTo(contentView);

app.onBackNavigation((e) => {
	let now = Date.now();
	if((now - lastBackClickTime) >= 900 && (now - lastBackClickTime) <= 1200){
		e.preventDefault();
		window.plugins.toast.showLongBottom('Press back again to exit');
		lastBackClickTime = now;
	}
	if ((now - lastBackClickTime) >= 1210){
		e.preventDefault();
		webView.goBack();
		lastBackClickTime = now;
	}
});