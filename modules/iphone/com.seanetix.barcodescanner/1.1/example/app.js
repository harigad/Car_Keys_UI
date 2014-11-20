var ios_module_barcode_scanner = require('com.seanetix.BarcodeScanner');

var win = Ti.UI.createWindow({
    backgroundColor : 'white'
});

var btn = Ti.UI.createButton({
    title : 'Scan',
    width : '100%',
});

win.add(btn);
win.open();

Ti.API.log(Ti.Platform.name);
btn.addEventListener('click', function(e) {
    if (Ti.Platform.osname != 'ipad') {
        // iPone
        ios_module_barcode_scanner.start({
            overlay : win,
            success : readSuccess
        });

        function readSuccess(ev) {
            Ti.API.log('ipone success');
            Ti.API.log(ev.barcode);
            btn.title = ev.barcode;
        }

    } else {
        // iPad
        var scanBtn = Ti.UI.createButton({
            title : 'Scan'
        });
        var stopBtn = Ti.UI.createButton({
            title : 'Done'
        });
        var resultLabel = Ti.UI.createLabel({
            text : "Here you'll see scanned code"
        });

        var popWin = Ti.UI.createWindow({
            title : 'Scanner',
            rightNavButton : stopBtn,
            leftNavButton : scanBtn
        });
        popWin.add(resultLabel);

        var popNav = Ti.UI.iOS.createNavigationWindow({
            window : popWin,
            width : '320dp',
            height : '320dp'
        });

        var poper = Ti.UI.iPad.createPopover({
            width : '300dp',
            height : '300dp',
        });
        poper.contentView = popNav;

        poper.show({
            view : e.source
        });

        onStartClick();

        scanBtn.addEventListener('click', onStartClick);
        stopBtn.addEventListener('click', onStopClick);

        poper.addEventListener('hide', function() {
            ios_module_barcode_scanner.fastStop();
        });
        //---------------------------------------
        function onStartClick() {
            ios_module_barcode_scanner.start({
                overlay : popWin,
                success : iPadReadSuccess
            });
        }

        function onStopClick() {
            ios_module_barcode_scanner.stop();
            poper.hide();
        }

        function iPadReadSuccess(e) {
            Ti.API.log('ipad success');
            resultLabel.text = e.barcode;
        }

    }

});