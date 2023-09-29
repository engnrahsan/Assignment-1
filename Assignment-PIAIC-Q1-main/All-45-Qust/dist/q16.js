"use strict";
/*Q16.More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalguedt = exports.newguestlist = void 0;
let moreguest = ['Ahmed', 'Bilal', 'omer'];
/* . Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table. */
/* Q15 */
let guestname = ['Azwer', 'waleed', 'junaid', 'tasadaq', 'ali'];
let guestcantcome = 'junaid';
let newguest = 'Waqas';
let indexofguestcantcome = guestname.indexOf(guestcantcome);
/*Start with your program from Exercise 14. Add a print statement at the end of your program
stating the name of the guest who can’t make it.*/
console.log(guestcantcome, 'will not come');
/* • Modify your list, replacing the name of the guest who can’t make it
with the name of the new person you are inviting.*/
if (indexofguestcantcome !== -1) {
    guestname[indexofguestcantcome] = newguest;
}
/* Print a second set of invitation messages, one for each person who is still in your list.*/
exports.newguestlist = guestname;
console.log('new GUest list');
guestname.forEach((i) => {
    console.log(`hello ${i} You are invited to the dinner`);
});
console.log(`Hello Guests We just found a bigger dinner table we have three more spaces`);
/*Add one new guest to the beginning of your array.*/
let addoneguest = exports.newguestlist.splice(0, 0, 'Ahmed');
console.log(exports.newguestlist);
/*.• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. •
 Print a new set of invitation messages, one for each person in your list. */
let middleguest = exports.newguestlist.splice(3, 0, 'bilal');
let endguest = exports.newguestlist.push('omer');
exports.totalguedt = exports.newguestlist;
console.log(exports.newguestlist);
exports.newguestlist.forEach((i) => {
    console.log(`Hello Dear ${i} You are invited to the dinner`);
});
