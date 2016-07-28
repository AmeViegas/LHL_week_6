# WK6_API_MADNESS

Option 1: Flickr Photos
Lighthouses are in. They are the fashion.

So let’s follow the trend and create an app that gets all recent images tagged with "lighthouse" from Flickr and shows them to us, one by one.

Signup URL: https://www.flickr.com/services/api/misc.api_keys.html

The following Flickr API endpoint allows us to search recent images (media) by tag. In our case, we’ll be using the tag "lighthouse" tag (or get creative!): [https://www.flickr.com/services/api/flickr.photos.search.html]

Your app should display only one image at a time. Every seconds, fade out that image and fade in the next image from the results from Flickr. It will essentially be slideshow of lighthouse imagery from instagram.

Hint #1: This API is a bit older so it's example shows XML response data. While we could work with XML, it's a bit more arduous and JSON is easier and more mainstream for APIs now. That said, they do support JSON. See: https://www.flickr.com/services/api/response.json.html.

The important part is this:

To return an API response in JSON format, send a parameter "format" in the request with a value of "json".
Hint #2: Try out the API URLs in your browser or using CURL to see what data/response comes back before plugging that URL into your JavaScript code.

For example, open https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json in your browser. Notice what comes back is an error but it gives you insight. Now try to make it work (you'll need to register for and append a valid API KEY parameter to the URL).

Hint #3: Since we'll be accessing the API from the user's browser (client) from our own domain (localhost) to another domain (flickr), browsers don't allow cross domain AJAX requests. A work-around to this is to use "JSONP", which the API needs to support. Luckily Flickr supports JSONP.

Enhancements: 1. Display the caption - Display the image caption underneath the image. It should of course change when the image changes. 2. Display additional data - Somewhere alongside the image, display the number of likes and comments. 3. Link to flickr page - Either make the entire image a link or add a link/button alongside the image that will take you to the flickr page for that image. It should open the URL in a new window or tab.
