import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'product';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDc-7MsJqpnmm274mDlSNuPNibnN2wRqY4",
      authDomain: "https://sicapp-598f4.firebaseio.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
