import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  
  private masalar: { numara: number; tutar: number }[][] = [];

  constructor() {
    for (let i = 1; i <= 18; i++) {
      this.masalar.push([{ numara: i, tutar: Math.floor(Math.random() * 501) }]);
    }
  }

  getMasalar(): { numara: number; tutar: number }[][] {
    return this.masalar;
  }

  getMasaTutar(masaNumarasi: number): number {
    const masa = this.masalar.find(satir => satir.some(masa => masa.numara === masaNumarasi));
    return masa ? masa[0].tutar : 0;
  }

  setMasaTutar(masaNumarasi: number, tutar: number): void {
    const masa = this.masalar.find(satir => satir.some(masa => masa.numara === masaNumarasi));
    if (masa) {
      masa[0].tutar = tutar;
    }
  }
}
