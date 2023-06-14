/**
 * Utility class that sets and clears timeoutServices
 */
export var TimeoutService = /** @class */ (function () {
    function TimeoutService() {
    }
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
    TimeoutService.set = function (milliseconds, callback) {
        var functionArguments = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            functionArguments[_i - 2] = arguments[_i];
        }
        this.id = setTimeout(function () {
            callback.apply(void 0, functionArguments);
        }, milliseconds);
        this.arrayOfIds.push(this.id);
        return this.id;
    };
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
    TimeoutService.clear = function (id) {
        var actualId = this.arrayOfIds.find(function (idNumber) {
            return idNumber === id;
        });
        clearTimeout(actualId);
        this.arrayOfIds = this.arrayOfIds.filter(function (idNumber) {
            return idNumber !== actualId;
        });
    };
    TimeoutService.arrayOfIds = [];
    return TimeoutService;
}());
