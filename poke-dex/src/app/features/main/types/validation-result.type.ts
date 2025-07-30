import { InputValidationState } from "../enums/input-validation-state.enum"

export type ValidationResult = {
    state: InputValidationState;
    message?: string;
}