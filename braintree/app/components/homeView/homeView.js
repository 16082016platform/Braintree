'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),
    // additional requires
    viewModel = require('./homeView-view-model');

var braintree = require('braintree');

var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'your_merchant_id',
    publicKey: 'your_public_key',
    privateKey: 'your_private_key'
});

gateway.transaction.sale({
    amount: '5.00',
    paymentMethodNonce: 'nonce-from-the-client',
    options: {
        submitForSettlement: true
    }
}, function (err, result) {
    if (err) {
        alert(err);
        return;
    }

    if (result.success) {
        alert('Transaction ID: ' + result.transaction.id);
    } else {
        alert(result.message);
    }
}); var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'your_merchant_id',
    publicKey: 'your_public_key',
    privateKey: 'your_private_key'
});

gateway.transaction.sale({
    amount: '5.00',
    paymentMethodNonce: 'nonce-from-the-client',
    options: {
        submitForSettlement: true
    }
}, function (err, result) {
    if (err) {
        alert(err);
        return;
    }

    if (result.success) {
        alert('Transaction ID: ' + result.transaction.id);
    } else {
        alert(result.message);
    }
});

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
}

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
exports.pageLoaded = pageLoaded;