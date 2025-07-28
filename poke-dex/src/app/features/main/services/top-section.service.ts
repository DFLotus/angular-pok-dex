import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class TopSectionService {
    private searchInput = new BehaviorSubject<string>(""); //can be a number. 
    //would have to convert number string into a number

    setSearchInput(userInput: string) {
        //have to vaildate input -> can be string or number. No special characters
        this.searchInput.next(userInput);
    }
}