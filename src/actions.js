import * as constants from './constants';

/**
 * - Action is an object that describe the changes we want to see.
 * - Most of the time the action is exposed from the container
 */
export function add(name, family_name, age) {
    return {
        type: constants.ADD,
        name: name,
        family_name: family_name,
        age: age
    }
}

export function remove(index) {
    return {
        type: constants.REMOVE,
        index: index
    }
}