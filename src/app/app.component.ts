import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './types/location.interface';
import { UnitsService } from './services/units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitsService: UnitsService) { }

  onSubmit() {
    this.showList.next(true);
    this.unitsList = this.unitsService.getFilteredUnits();
  }
}
