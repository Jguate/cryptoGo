import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/services/crypto.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  objectKeys = Object.keys;
  cryptos: any;

  constructor(
    private cryptoService: CryptoService
  ) { }

  ngOnInit(){
    this.cryptoService.getPrices()
      .then((res:any) => {
        this.cryptos = res;
      });
  }

}
