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
declare class Timer {
    duration: number;
    callback: (...args: any[]) => any;
    startTime: number;
    pauseTime: number;
    elapsedTime: number;
    isRunning: boolean;
    countdownId: number;
    /**
     * Initializes a new instance of the `Timer` class with the specified duration and callback function.
     *
     * @param {number} duration - The total duration of the timer in milliseconds.
     * @param {Function} callback - The callback function to execute when the timer ends.
     */
    constructor(duration: number, callback: (...args: any[]) => any);
    /**
     * Starts the timer if the timer is not already running, it initializes the timer, starts tracking elapsed time,
     * and schedules the countdown.
     */
    start(): void;
    /**
     * Pauses the timer if the timer is running, it stops tracking elapsed time and cancels the countdown animation.
     */
    pause(): void;
    /**
     * Resumes the timer if the timer is paused, it resumes tracking elapsed time and schedules the countdown animation.
     */
    resume(): void;
    /**
     * Clears the timer by stopping it, resets elapsed time, and cancels the countdown animation.
     */
    clear(): void;
    /**
     * Restarts the timer from the beginning, discards any previously accumulated elapsed time, and updates the internal timer status.
     */
    restart(): void;
    /**
     * Starts the countdown animation and tracks the elapsed time and schedules the next animation frame until the timer ends or is paused.
     */
    startCountdown(): void;
    /**
     * Stops the countdown animation by cancelling the animation frame.
     */
    stopCountdown(): void;
    /**
     * Retrieves the remaining time of the timer.
     * Calculates and returns the remaining time based on the total duration and elapsed time.
     * @returns {number} The remaining time in milliseconds.
     */
    getRemainingTime(): number;
    /**
     * Modifies the callback function to be executed when the timer ends.
     *
     * @param {Function} callback - The new callback function.
     * @returns {Timer} The instance of the timer
     */
    modifyCallback(callback: (...args: any[]) => any): Timer;
    /**
     * Modifies the duration of the timer.
     *
     * @param {number} duration - The new duration.
     * @returns {Timer} The instance of the timer
     */
    modifyDuration(duration: number): Timer;
}
export default Timer;
