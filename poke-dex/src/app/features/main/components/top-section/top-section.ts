import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ValidationResult } from '../../types/validation-result.type';
import { TopSectionService } from '../../services/top-section.service';
import { InputValidator } from '../../validators/input.validator';
import { InputValidationState } from '../../enums/input-validation-state.enum';
import { PokemonApiService } from '../../../api/pokemon-api.service';
import { PokemonDTO } from '../../dto/pokemon.dto';
import { PokemonResponseAdapter } from '../../../../core/adapter/pokemon-response.adapter';

@Component({
  selector: 'app-top-section',
  imports: [AsyncPipe],
  templateUrl: './top-section.html',
  styleUrl: './top-section.scss'
})
export class TopSection {
  userInput$: Observable<string>; //track's the value of BSubject
  vaildationResult?: ValidationResult;

  /**
   * Inject service into class
   * userInput$ initlized here due to DI (dependency injection) 
  */
  constructor(private topBarService: TopSectionService, private pokemonAPI: PokemonApiService) {
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
      this.pokemonAPI.getPokemonByName(currInput).subscribe({
        next: (response) => {
          const pokeData: PokemonDTO = PokemonResponseAdapter.filterPokeData(response);
          console.log("API success:", pokeData);
          //Next reflect changes in UI those are next steps.
          //Add spinner
        },
        error: (error) => {
          console.error("API error:", error);
          // handle UI/html reflection to user 
        }
      });
    }
    else {
      alert(`Validation failed: ${this.vaildationResult.message}`);
    }

  }

}
