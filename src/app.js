const {WebView, contentView, app} = require('tabris');

let lastBackClickTime = 0;
let website = "http://192.168.43.252:9000/";

let webView = new WebView({
  left: 0, right: 0, top: 0, bottom: 0,
  url: website
  //url: 'http://jobman.uk.tempcloudsite.com'
  //url: 'https://tabris.com'
}).appendTo(contentView);

app.onBackNavigation((e) => {
	/*let now = Date.now();
	if((now - lastBackClickTime) >= 900 && (now - lastBackClickTime) <= 1200){
		e.preventDefault();
		window.plugins.toast.showLongBottom('Press back again to exit');
		lastBackClickTime = now;
		console.log(1)
	}
	else if ((now - lastBackClickTime) >= 1210){
		e.preventDefault();
		webView.goBack();
		lastBackClickTime = now;
		window.plugins.toast.showLongBottom('Press back again to exit');
		console.log(webView.url)
	}
	else{
		e.preventDefault();
		window.plugins.toast.showLongBottom('Press back again to exit');
		console.log(3)
		app.close();
	}*/
	e.preventDefault();
	webView.goBack();
	if(website == webView.url){
		app.close();
	}
});