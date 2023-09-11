#!/usr/bin/node

/**
 * Generates a welcome message for a person based on their first and last name.
 *
 * @param {string} firstName - The first name of the person.
 * @param {string} lastName - The last name of the person.
 */
const welcome = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    const displayFullName = () => {
        alert(`Welcome ${fullName}!`);
    };
    displayFullName();    
}