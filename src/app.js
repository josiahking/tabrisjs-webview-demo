const {WebView, contentView, app, ImageView, Button, TextView, Composite, AlertDialog} = require('tabris');

const NETWORK_IMG_BASE64 = 'data:image/png;base64,' +"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";

let noNetworkPage = new Composite({
	left: 0, 
	top: 0,
	right: 0,
	bottom: 0
})
.append(new ImageView({
	image:{
		//src:'src/img/no-wifi.png',
		src: NETWORK_IMG_BASE64,
	}, 
	scaleMode:'fit', 
	width:250, 
	height:250, 
	centerX: 0,
	top: 100
}))
.append(new TextView({
	text: 'Conection Error!',
	top: 'prev() 20',
	font: 'bold 22px',
	left: 3,
	right: 3,
	alignment: 'centerX'
}))
.append(new TextView({
	text: 'Sorry, we cannot reach the internet. Please check your network connection.',
	top: 'prev() 5',
	left: 3,
	right: 3,
	alignment: 'centerX',
	font: '16px',
}))
.append(new Button({
	text: 'Check again',
	top: 'prev() 5',
	alignment: 'centerX',
	centerX: 0,
	background: '#1da1ff'
}).onSelect(() => {
	if(checkConnection() != Connection.NONE && checkConnection != Connection.UNKNOWN){
		webView.url = website;
		webView.on({
			load: () => {
				noNetworkPage.dispose();
				webView.appendTo(contentView);
			}
		});
	}
}));
let website = "https://jobman.uk.tempcloudsite.com/";//"http://192.168.43.252:9000/";//https://jobman.uk.tempcloudsite.com

const webView = new WebView({
	left: 0, right: 0, top: 0, bottom: 0,
	url: website
});

var networkState = navigator.connection.type;
if(networkState == Connection.NONE || networkState == Connection.UNKNOWN){
	noNetworkPage.appendTo(contentView);
}
else{
	webView.appendTo(contentView);
}

function checkConnection() {
    let networkState = navigator.connection.type;
	return networkState;
}

document.addEventListener("offline", onOffline, false);
function onOffline() {
    // Handle the offline event
	//disable link click
	new AlertDialog({
		title: 'Connection lost!',
		buttons: {
			ok: 'Retry',
			cancel: 'Close'
		}
	})
	.on({
		closeOk: () => retryConnection(),
		closeCancel: () => {}
	})
	.open();
	webView.postMessage('disableclick',website);
}

document.addEventListener("online", onOnline, false);
 
function onOnline() {
    // Handle the offline event
	webView.postMessage('enableclick',website);
}

app.onBackNavigation((e) => {
	e.preventDefault();
	webView.goBack();
	if(website == webView.url){
		app.close();
	}
});

function showRetry(){
	new AlertDialog({
		title: 'Connection lost!',
		buttons: {
			ok: 'Retry',
			cancel: 'Close'
		}
	})
	.on({
		closeOk: () => retryConnection(),
		closeCancel: () => {}
	})
	.open();
}

function retryConnection(){
	if(checkConnection() != Connection.NONE && checkConnection != Connection.UNKNOWN){
		webView.postMessage('enableclick',website);
	}
	else{
		showRetry();
	}
}
webView.postMessage('apploaded',website);
window.addEventListener('message', function(e){
	console.log(e)
});
webView.on({
	message: (e) => {
		console.log(e.data);
		if(e.data == "showretry"){
			showRetry();
		}
	}
});