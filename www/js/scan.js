function scan() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if(!result.cancelled) {
                alert("Barcode type is: " + result.format + "\n" + "Decoded text is: " + result.text);
            } else {
                alert("You have cancelled scan");
            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
}