/**
 * Utility class that creates timeouts
 */
class Timeout {
  constructor() {
    this.id = "";
    this.arrayOfIds = [];
  }

  /**
   *Methods that creates a timeout
   *
   * @param callback Callback function that will be called after the timer runs out
   * @param milliseconds Duration of the timer in milliseconds before executing the callback function
   * @returns A number as an ID for the timeout
   * 
   *   ```js
   * const timeoutCreator = new Timeout();
   *
   * let fct = ()=>{
   *  console.log("Hello World")
   * };
   * 
   * let timeoutTrigger = timeoutCreator.addTimeout(fct, 1_000);
   * 
   *  
   * ```

   */
  addTimeout(callback, milliseconds) {
    this.id = setTimeout(() => {
      callback();
    }, milliseconds);
    this.arrayOfIds.push(this.id);
    return this.id;
  }

  /**
   * Method that removes a timeout
   * @param id
   * @returns void
   *
   * ex:
   * ```js
   * function fct(){
   *   console.log("Hello World")
   * }
   *
   * const timeoutCreator = new Timeout();
   *
   * let timeoutTrigger = timeoutCreator.addTimeout(fct, 1_000);
   *
   * timeoutCreator.removeTimeout(timeoutTrigger);
   * ```
   */
  removeTimeout(id) {
    const actualId = this.arrayOfIds.filter((idNumber) => {
      return idNumber === id;
    })[0];

    clearTimeout(actualId);
    this.arrayOfIds = this.arrayOfIds.filter((idNumber) => {
      return idNumber !== actualId;
    });
  }
}

module.exports = Timeout;
