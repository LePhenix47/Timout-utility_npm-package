/**
 * Represents a customizable timer that supports starting, stopping, resuming, restarting, and retrieving the remaining time.
 * Utilizes the `requestAnimationFrame` and `performance` APIs for efficient and precise timing.
 *
 * @example
 * const timer = new Timer(5_000, () => console.log('Timer ended!'));
 * timer.start();
 * timer.pause();
 * timer.resume();
 * timer.clear();
 * timer.restart();
 * console.log(timer.getRemainingTime());
 */
var Timer = /** @class */ (function () {
    /**
     * Initializes a new instance of the `Timer` class with the specified duration and callback function.
     *
     * @param {number} duration - The total duration of the timer in milliseconds.
     * @param {Function} callback - The callback function to execute when the timer ends.
     */
    function Timer(duration, callback) {
        /**
         * The total duration of the timer in milliseconds.
         * @type {number}
         */
        this.duration = duration;
        /**
         * The callback function to execute when the timer ends
         *
         * @type {Function}
         */
        this.callback = callback;
        /**
         * The timestamp when the timer starts or resumes
         *
         * @type {null | number}
         */
        this.startTime = null;
        /**
         * The timestamp when the timer is paused
         *
         * @type {null | number}
         */
        this.pauseTime = null;
        /**
         * The elapsed time during the timer's lifetime in milliseconds
         *
         * @type {number}
         */
        this.elapsedTime = 0;
        /**
         * A flag indicating whether the timer is running or not
         * @type {boolean}
         */
        this.isRunning = false;
        /**
         * The reference to the `requestAnimationFrame`
         * @type {null | number}
         */
        this.countdownId = null;
    }
    /**
     * Starts the timer if the timer is not already running, it initializes the timer, starts tracking elapsed time,
     * and schedules the countdown.
     */
    Timer.prototype.start = function () {
        if (!this.isRunning) {
            this.isRunning = true;
            this.startTime = performance.now() - this.elapsedTime;
            this.startCountdown();
        }
    };
    /**
     * Pauses the timer if the timer is running, it stops tracking elapsed time and cancels the countdown animation.
     */
    Timer.prototype.pause = function () {
        if (this.isRunning) {
            this.isRunning = false;
            this.pauseTime = performance.now();
            this.stopCountdown();
        }
    };
    /**
     * Resumes the timer if the timer is paused, it resumes tracking elapsed time and schedules the countdown animation.
     */
    Timer.prototype.resume = function () {
        var hasStartedTimer = this.pauseTime !== null;
        if (!this.isRunning && hasStartedTimer) {
            this.isRunning = true;
            this.startTime += performance.now() - this.pauseTime;
            this.startCountdown();
        }
    };
    /**
     * Clears the timer by stopping it, resets elapsed time, and cancels the countdown animation.
     */
    Timer.prototype.clear = function () {
        this.isRunning = false;
        this.elapsedTime = 0;
        this.startTime = null;
        this.pauseTime = null;
        this.stopCountdown();
    };
    /**
     * Restarts the timer from the beginning, discards any previously accumulated elapsed time, and updates the internal timer status.
     */
    Timer.prototype.restart = function () {
        this.isRunning = true;
        this.startTime = performance.now();
        this.pauseTime = null;
        this.elapsedTime = 0;
        this.startCountdown();
    };
    /**
     * Starts the countdown animation and tracks the elapsed time and schedules the next animation frame until the timer ends or is paused.
     */
    Timer.prototype.startCountdown = function () {
        var _this = this;
        var currentTime = performance.now();
        this.elapsedTime = currentTime - this.startTime;
        var timerFinished = this.elapsedTime >= this.duration;
        if (timerFinished) {
            this.callback();
            this.clear();
            return;
        }
        this.countdownId = requestAnimationFrame(function () {
            _this.startCountdown();
        });
    };
    /**
     * Stops the countdown animation by cancelling the animation frame.
     */
    Timer.prototype.stopCountdown = function () {
        cancelAnimationFrame(this.countdownId);
    };
    /**
     * Retrieves the remaining time of the timer.
     * Calculates and returns the remaining time based on the total duration and elapsed time.
     * @returns {number} The remaining time in milliseconds.
     */
    Timer.prototype.getRemainingTime = function () {
        var remainingTime = Math.max(0, this.duration - this.elapsedTime);
        return Math.round(remainingTime);
    };
    /**
     * Modifies the callback function to be executed when the timer ends.
     *
     * @param {Function} callback - The new callback function.
     * @returns {Timer} The instance of the timer
     */
    Timer.prototype.modifyCallback = function (callback) {
        this.callback = callback;
        return this;
    };
    /**
     * Modifies the duration of the timer.
     *
     * @param {number} duration - The new duration.
     * @returns {Timer} The instance of the timer
     */
    Timer.prototype.modifyDuration = function (duration) {
        this.duration = duration;
        return this;
    };
    return Timer;
}());
export default Timer;
