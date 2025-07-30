import { InputValidationState } from "../enums/input-validation-state.enum";
import { ValidationResult } from "../types/validation-result.type";

export class InputValidator {
    /**
     * Validates the input string.
     * @param input - The string to validate.
     * @returns The validation state of the string.
     */
    static validate(input: string): ValidationResult {
        if (!input) {
            return {
                state: InputValidationState.EMPTY,
                message: 'Input cannot be empty.'
            };
        }
        if (this.hasInternalSpace(input)) {
            return {
                state: InputValidationState.HAS_INTERNAL_SPACES,
                message: 'Input must not contain spaces between characters.'
            };
        }
        if (this.hasSpecialCharacter(input)) {
            return {
                state: InputValidationState.INVALID_CHARACTERS,
                message: 'Input contains invalid characters.'
            };
        }

        return {
            state: InputValidationState.VALID,
            message: 'Input is vaild.'
        };
    }


    /**
     * Checks if input contains internal whitespace.
     * @param input - The string to check.
     * @returns True if the string contains whitespace.
     */
    private static hasInternalSpace(input: string): boolean {
        return /\s/.test(input.trim());
    }


    /**
     * Checks if input contains any special characters.
     * @param input - The string to check.
     * @returns True if the string contains special characters.
     */
    private static hasSpecialCharacter(input: string): boolean {
        return /[^a-zA-Z0-9]/.test(input);
    }
}