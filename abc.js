var siteTitle;
var referrer;
var url;

getSiteInfo(function onSuccess(siteInfo) {

	siteTitle= siteInfo.siteTitle;
	referrer= siteInfo.referrer;
	url= siteInfo.url;
}eturn referrer;
	}, 
	getUrl: function() {
		return url;
	} 
};

