/// <reference types="node" />
/**
 * Utility class that sets and clears timeoutServices
 */
export declare class TimeoutService {
    static id: NodeJS.Timer;
    static arrayOfIds: NodeJS.Timer[];
    /**
     * Method that creates a timeoutService
     *
     * @param milliseconds Duration of the timer in milliseconds before executing the callback function
     * @param {(...args: any) => any | void} callback Callback function that will be called after the timer runs out
     * @param {...functionArguments} functionArguments Arguments for the callback function
     *
     * @returns A number as an ID for the timeoutService
     *
     * @example
     * let fct = (text) => {
     *   console.log(text);
     * };
     *
     * let timeoutServiceTrigger = TimeoutService.set(2_500, fct, "Hello world!");
     *
     */
    static set(milliseconds: number, callback: (...functionArguments: any) => any, ...functionArguments: any[]): NodeJS.Timer;
    /**
     * Method that clears an timeoutService
     *
     * @param {number} id ID of the timeoutService to clear (stored inside the trigger of the timeoutService)
     *
     * @example
     *
     * let fct = (text) => {
     *   console.log(text);
     * };
     *
     * let timeoutServiceTrigger = TimeoutService.set(2_500, fct, "Hello world!");
     *
     * // ...
     *
     * TimeoutService.clear(timeoutServiceTrigger);
     *
     */
    static clear(id: NodeJS.Timer): void;
}
