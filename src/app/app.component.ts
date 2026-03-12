import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, personOutline, logOutOutline, informationCircleOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonSearchbar, RouterModule],
})
export class AppComponent {
  constructor() {
    
    addIcons({ 
  homeOutline, 
  personOutline, 
  logOutOutline, 
  informationCircleOutline
});
  }
}