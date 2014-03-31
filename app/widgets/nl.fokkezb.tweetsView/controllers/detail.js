var args = arguments[0] || {};

var tweet = args.get('content');

var date = args.get('createdAt');

Ti.API.info('detail window: ' + args.get('content') + date.toLocaleString());

$.image.image = args.get('image');
$.name.text = 'name';
$.user.text = 'userId:' + args.get('userId');
$.text.text = args.get('content');
$.time.text = date.toLocaleString();
