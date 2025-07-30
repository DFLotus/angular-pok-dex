import { Component } from '@angular/core';
import { ValidationResult } from '../../types/validation-result.type';
import { TopSectionService } from '../../services/top-section.service';
import { InputValidator } from '../../validators/input.validator';
import { Observable } from 'rxjs';
import { InputValidationState } from '../../enums/input-validation-state.enum';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-top-section',
  imports: [AsyncPipe],
  templateUrl: './top-section.html',
  styleUrl: './top-section.scss'
})
export class TopSection {
  userInput$: Observable<string>;
  vaildationResult?: ValidationResult;

  /**
   * Inject service into class
   * userInput$ initlized here due to DI (dependency injection) 
  */
  constructor(private topBarService: TopSectionService) {
    this.userInput$ = this.topBarService.inputData$;
  }

  /**
   * Updates the state of the Behaviroal Subject
   * @param - event input from web
  */
  onInputChange(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.topBarService.setSearchInput(input);
  }

  /**
   * Handles API and vaildates input
  */
  onSubmit(): void {
    const currInput: string = this.topBarService.getCurrentInput();

    this.vaildationResult = InputValidator.validate(currInput);

    if (this.vaildationResult.state === InputValidationState.VALID) {
      //api logic here.
      console.log("Input is valid: ", currInput)
    }
    else {
      alert(`Validation failed: ${this.vaildationResult.message}`);
    }

  }

}
