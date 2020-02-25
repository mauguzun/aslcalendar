import { Component, OnInit } from '@angular/core';
import { OptionService } from 'src/app/option.service';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { ReplaySubject } from 'rxjs';



@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less']
})
export class ConfirmComponent implements OnInit {


  private _formControlValue: string = '';

  get formControlValue(): string {
    return this._formControlValue;
  }

  set formControlValue(newName: string) {


    this._formControlValue = newName;
    this.update()
  }
  clearArray = [];
  constructor() { }

  ngOnInit() {
  }


  findChoices(searchText: string) {
    return ['info@lifa.lv',
      'fbrisedoux@aslairlines.com',
      'rkyrnytskyi@aslairlines.com',
      'vadims.krutovs@gmail.com',
      'schebour@aslairlines.com',
      'denis@lifa.lv', 'FDEBIASIO@aslaviationholdings.com'].filter(item =>
        item.toLowerCase().includes(searchText.toLowerCase())
      );

  }

  getChoiceLabel(choice: string) {
    return `${choice} \n`;
  }

  remove(email: string) {
    this.clearArray = this.clearArray.filter(x => x !== email);
    this.formControlValue = this.formControlValue.split(email + '\n').join("");


  }

  update() {
    this.clearArray = Array.from(new Set(this.formControlValue.split('\n')));
    this.clearArray = this.clearArray.filter(col => col);
    this.clearArray.forEach(element => {
      element.trim();
    });
  }

}
