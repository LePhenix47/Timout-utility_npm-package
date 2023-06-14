/**
 * Utility class that sets and clears intervals
 */
export var IntervalService = /** @class */ (function () {
    function IntervalService() {
    }
    /**
     * Method that creates an interval
     *
     * @param milliseconds Duration of the timer in milliseconds before executing the callback function
     * @param {(...args: any) => any | void} callback Callback function that will be called after the timer runs out
     * @param {...functionArguments} functionArguments Arguments for the callback function
     *
     * @returns A number as an ID for the interval
     *
     * @example
     * let fct = (text) => {
     *   console.log(text);
     * };
     *
     * let intervalTrigger = Interval.set(2_500, fct, "Hello world!");
     *
     */
    IntervalService.set = function (milliseconds, callback) {
        var functionArguments = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            functionArguments[_i - 2] = arguments[_i];
        }
        this.id = setInterval(function () {
            callback.apply(void 0, functionArguments);
        }, milliseconds);
        this.arrayOfIds.push(this.id);
        return this.id;
    };
    /**
     * Method that clears an interval
     *
     * @param {number} id ID of the interval to clear (stored inside the trigger of the interval)
     *
     * @example
     *
     * let fct = (text) => {
     *   console.log(text);
     * };
     *
     * let intervalTrigger = Interval.set(2_500, fct, "Hello world!");
     *
     * // ...
     *
     * Interval.clear(intervalTrigger);
     *
     */
    IntervalService.clear = function (id) {
        var actualId = this.arrayOfIds.find(function (idNumber) {
            return idNumber === id;
        });
        clearInterval(actualId);
        this.arrayOfIds = this.arrayOfIds.filter(function (idNumber) {
            return idNumber !== actualId;
        });
    };
    IntervalService.arrayOfIds = [];
    return IntervalService;
}());
