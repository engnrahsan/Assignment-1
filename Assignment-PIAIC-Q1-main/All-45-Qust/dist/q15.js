"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Q15.Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.*/
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
let newguestlist = guestname;
console.log('new GUest list');
guestname.forEach((i) => {
    console.log(`hello ${i} You are invited to the dinner`);
});
