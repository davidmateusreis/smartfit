import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UnitsService } from 'src/app/services/units.service';
import { Location } from 'src/app/types/location.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitsService: UnitsService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
    this.unitsService.getAllUnits().subscribe(data => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
  }

  onSubmit(): void {
    if (!this.formGroup.value.showClosed) {
      this.filteredResults = this.results.filter(location => location.opened === true);
    } else {
      this.filteredResults = this.results;
    }
  }

  onClean(): void {
    this.formGroup.reset();
  }
}
