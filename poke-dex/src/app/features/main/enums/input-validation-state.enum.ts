/**
 * Represents different states a string can be in the vaildation process
*/
export enum InputValidationState {
    VALID = 'vaild',
    HAS_INTERNAL_SPACES = "interal spaces",
    EMPTY = 'empty',
    INVALID_CHARACTERS = 'invalild_characters'
}