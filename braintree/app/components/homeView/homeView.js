'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),
    // additional requires
    viewModel = require('./homeView-view-model');

// var braintree = require('braintree');

// var gateway = braintree.connect({
//     environment: braintree.Environment.Sandbox,
//     merchantId: 'your_merchant_id',
//     publicKey: 'your_public_key',
//     privateKey: 'your_private_key'
// });

// gateway.transaction.sale({
//     amount: '5.00',
//     paymentMethodNonce: 'nonce-from-the-client',
//     options: {
//         submitForSettlement: true
//     }
// }, function (err, result) {
//     if (err) {
//         alert(err);
//         return;
//     }

//     if (result.success) {
//         alert('Transaction ID: ' + result.transaction.id);
//     } else {
//         alert(result.message);
//     }
// }); var gateway = braintree.connect({
//     environment: braintree.Environment.Sandbox,
//     merchantId: 'your_merchant_id',
//     publicKey: 'your_public_key',
//     privateKey: 'your_private_key'
// });

// gateway.transaction.sale({
//     amount: '5.00',
//     paymentMethodNonce: 'nonce-from-the-client',
//     options: {
//         submitForSettlement: true
//     }
// }, function (err, result) {
//     if (err) {
//         alert(err);
//         return;
//     }

//     if (result.success) {
//         alert('Transaction ID: ' + result.transaction.id);
//     } else {
//         alert(result.message);
//     }
// });

// additional functions

var app = require("application");
var observable = require("data/observable");

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);

    //viewModel.set("htmlString", '<iframe width="100%" height="540" src="components/homeView/video/index.html" frameborder="0"></iframe>');

    var glyphs = new Array();    
    var charCode = 0xF102;
    for (; charCode <= 0xF113; charCode++) {
        var glyph = new observable.Observable();

        glyph.set("icon", String.fromCharCode(charCode));
        glyph.set("code", charCode.toString(16));
        glyphs.push(glyph);
    }
    viewModel.set("glyphs", glyphs);


    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }

    var webview = page.getViewById("wv");
    if (app.android) {
        var wvSettings = webview.android.getSettings();
        wvSettings.setJavaScriptEnabled(true);
        wvSettings.setJavaScriptCanOpenWindowsAutomatically(true);
        wvSettings.setDomStorageEnabled(true);

        viewModel.set("htmlString", '<iframe width="100%" height="540" src="components/homeView/video/index.html" frameborder="0"></iframe>');
    }
}

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
exports.pageLoaded = pageLoaded;