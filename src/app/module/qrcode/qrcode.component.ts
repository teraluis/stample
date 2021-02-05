import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {
  public myAngularxQrCode: string;

  constructor() {
    this.myAngularxQrCode = 'https://www.npmjs.com/package/angularx-qrcode';
  }

  ngOnInit(): void {
  }
}
