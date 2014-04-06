var args = arguments[0] || {};

var tweet = args.content;

var date = args.createdAt;

Ti.API.info('detail window: ' + tweet + date);

$.image.image = args.image;
$.name.text = 'name';
$.user.text = 'userId:' + args.userId;
$.text.text = tweet;
$.time.text = date;
