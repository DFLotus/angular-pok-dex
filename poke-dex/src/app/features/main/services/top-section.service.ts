import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class TopSectionService {
    private searchInput = new BehaviorSubject<string>("");
    inputData$: Observable<string> = this.searchInput.asObservable() //asObersavble conceals the upstream observable making it read-only

    /**
     * Setter to set value of Behavioral subject
     * @param inputted string to update subject
    */
    public setSearchInput(userInput: string): void {
        this.searchInput.next(userInput);// .next sets a new value to searchInput
    }

    /**
     * Getter to get value of Beavioral subject
     * @return the value of the Beavioral subject.
    */
    public getCurrentInput(): string {
        return this.searchInput.getValue();
    }
}