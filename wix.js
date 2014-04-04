var siteTitle;
var referrer;
var url;

Wix.getSiteInfo(function onSuccess(siteInfo) {

	siteTitle= siteInfo.siteTitle;
	referrer= siteInfo.referrer;
	url= siteInfo.url;__internal.api= {

	getPageTitle: function() {
		return siteTitle;
	}, 
	getReferer: function() {
		return referrer;
	}, 
	getUrl: function() {
		return url;
	} 
};

