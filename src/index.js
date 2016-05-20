/**
 * modern-alert
 * @author ydr.me
 * @create 2016-04-22 20:03
 */



'use strict';

var Dialog =   require('blear.ui.dialog');
var object =   require('blear.utils.object');
var Template = require('blear.classes.template');
var template = require('./template.html', 'html');


var tpl = new Template(template);
var defaults = {
    width: 300,
    sure: {
        text: '好',
        type: 'primary'
    },
    title: '提醒',
    message: '',
    addClass: ''
};

var Alert = Dialog.extend({
    className: 'Alert',
    constructor: function (options) {
        var the = this;

        options = object.assign(true, {}, defaults, options);
        Alert.parent(the, {
            buttons: [options.sure],
            closeable: false,
            headable: true,
            title: options.title,
            width: options.width,
            addClass: options.addClass,
            template: tpl.render({options: options})
        });

        // init event
        the.on('action', function () {
            the.emit('sure');
            the.close();
        });
    }
});

require('./style.css', 'css|style');
Alert.defaults = defaults;
module.exports = Alert;
