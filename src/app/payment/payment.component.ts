import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';
import { PaymentService } from './service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  masalar: { numara: number; tutar: number }[][] = [];

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.masalar = this.paymentService.getMasalar();
  }

  masaPayment(masa: number) {
    console.log('Payment butonuna tıklanan masa:', masa);
    const masaTutar = this.paymentService.getMasaTutar(masa);
    const uniqueId = this.generateUniqueId();
    const qrContent = `${uniqueId}${masa}${masaTutar}`;

    const qrCanvas = document.createElement('canvas');
    QRCode.toCanvas(qrCanvas, qrContent, { errorCorrectionLevel: 'H' }, (error: Error | null | undefined) => {
      if (error != null) {
        console.error('QR Kod oluşturma hatası:', error);
      } else {
        const qrDiv = document.getElementById('qrDiv-' + masa);
        if (qrDiv) {
          qrDiv.innerHTML = 'Hesap Tutarı:'+ masaTutar;
          qrDiv.appendChild(qrCanvas);
        }
      }
    });
  }
  private generateUniqueId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
