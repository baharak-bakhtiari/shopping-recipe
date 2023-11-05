import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})
export class HeaderComponent {
  @Output() FeatureSelected=new EventEmitter<string>();

  onSelectFeature(featureName:string) {
    this.FeatureSelected.emit(featureName);
  }
}
