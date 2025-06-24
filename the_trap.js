/**
 * Baldonitech - String Utilities Module
 * Author: Baldonitech
 * License: Custom
 */

const BaldonitechUtils = {
    /**
     * Capitalizes the first letter of a string.
     * @param {string} str - The string to capitalize.
     * @returns {string} - The capitalized string.
     */
    capitalizeFirst(str) {
        if (typeof str !== 'string' || str.length === 0) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    /**
     * Reverses a string.
     * @param {string} str - The string to reverse.
     * @returns {string} - The reversed string.
     */
    reverse(str) {
        if (typeof str !== 'string') return '';
        return str.split('').reverse().join('');
    }
};

module.exports = BaldonitechUtils;
