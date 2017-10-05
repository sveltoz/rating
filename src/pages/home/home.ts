import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanData: {};
  scannedCode: any;
  options :BarcodeScannerOptions;

  constructor(public navCtrl: NavController,public barcodeScanner: BarcodeScanner) {

  }

  async scan(){
    debugger;
    this.options = {
        prompt : "Scan your barcode "
    }      
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
        debugger;
        this.scannedCode = barcodeData.text;
        this.scanData = barcodeData;
        alert(this.scanData);
    }, (err) => {
        console.log("Error occured : " + err);
    });     
  
}


}
