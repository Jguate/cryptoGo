import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CryptoService {

  result:any;

  constructor(private _http: HttpClient) {}

  getPrices() {
    return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,SOL,LUNA,AVAX,DOT,MATIC,USDT,SLP,CVP,AXS,CAKE&tsyms=USD").toPromise();
      // .pipe(result => this.result = result);
  }

}
