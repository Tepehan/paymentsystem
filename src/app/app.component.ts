import { Component, OnInit } from '@angular/core';
import { EthereumProvider } from "@walletconnect/ethereum-provider";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  provider: any;
  async ngOnInit(): Promise<void> {
    this.provider = await EthereumProvider.init({
      projectId: "766d3144641429fef1166edfe8e26624", // REQUIRED your projectId
      chains: [56], // REQUIRED chain ids
      showQrModal: true, // REQUIRED set to "true" to use @walletconnect/modal,
    });
  }
  title = 'PaymentProvider';

  async enable() {
    //  Initialize the provider 766d3144641429fef1166edfe8e26624

   await this.provider.enable();


  }
  
// // chain changed
// provider.on("chainChanged", handler);
// // accounts changed
// provider.on("accountsChanged", handler);
// // session established
// provider.on("connect", handler);
// // session event - chainChanged/accountsChanged/custom events
// provider.on("session_event", handler);
// // connection uri
// provider.on("display_uri", handler);
// // session disconnect
// provider.on("disconnect", handler);

}
