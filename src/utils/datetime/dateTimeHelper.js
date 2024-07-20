import { isEmpty } from "lodash"

/**
 * Check where a date is expried or not 
 * @param {*} expriesAt 
 * @returns 
 */
export function checkExpiration(expriesAt) {
    if (isEmpty(expriesAt)) return false;
    const today = new Date();
    const expiresDate = new Date(expriesAt);
    // return compareAsc(expiresDate, today) >= 0;
    return today <= expiresDate;
}

export function setCurrentTime(date) {
    const currDate = new Date();
    const currHours = currDate.getHours()
    const currMinutes = currDate.getMinutes()
    const currSeconds = currDate.getSeconds()
    const currMiliseconds = currDate.getMilliseconds();

    return new Date(new Date(date).setHours(currHours, currMinutes, currSeconds, currMiliseconds))
}

export function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);

    return previous;
}