import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature='recipe';

  onNavigate(featureName:string){
    this.loadedFeature=featureName;
  }


}
