/**
 * Class representing a Rectangle.
 */
export default class Rectangle {

    /**
     * A Rectangle object.
     * 
     * @param  {number} x      - The x coordinate.
     * @param  {number} y      - The y coordinate.
     * @param  {number} width  - The width.
     * @param  {number} height - The height.
     */
    constructor (x = 0, y = 0, width = 0, height = 0) {

        /**
         * The x coordinate.
         * @type {number}
         */
        this.x = x;

        this.y = y;

        this.width = width;

        this.height = height;

    }

}
