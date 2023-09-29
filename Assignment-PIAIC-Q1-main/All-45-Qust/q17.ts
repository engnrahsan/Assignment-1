/*Q17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that 
you can invite only two people for dinner.*/

/*Q16.More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner. */

let moreguest=['Ahmed','Bilal','omer'];

/* . Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
that you found a bigger dinner table. */

/* Q15 */
let guestname=['Azwer','waleed','junaid','tasadaq','ali'];
let guestcantcome='junaid';
let newguest='Waqas';
let indexofguestcantcome=guestname.indexOf(guestcantcome);
/*Start with your program from Exercise 14. Add a print statement at the end of your program 
stating the name of the guest who can’t make it.*/
console.log(guestcantcome,'will not come')
/* • Modify your list, replacing the name of the guest who can’t make it 
with the name of the new person you are inviting.*/
if (indexofguestcantcome !==-1){
    guestname[indexofguestcantcome]=newguest;
       
}
/* Print a second set of invitation messages, one for each person who is still in your list.*/
let newguestlist=guestname;
console.log('new GUest list')
guestname.forEach((i)=>{
    console.log(`hello ${i} You are invited to the dinner`)           
})

console.log(`Hello Guests We just found a bigger dinner table we have three more spaces`)

/*Add one new guest to the beginning of your array.*/
let addoneguest=newguestlist.splice(0,0,'Ahmed')
console.log(newguestlist)

/*.• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. •
 Print a new set of invitation messages, one for each person in your list. */
 let middleguest=newguestlist.splice(3,0,'bilal')
 let endguest= newguestlist.push('omer')
 console.log(newguestlist)
newguestlist. forEach((i)=>{
             
    console.log(`Hello Dear ${i} You are invited to the dinner` )
 
})


/* priting message to invite only two people*/

console.log('Dear All we have only two spaces for dinner and we can invite only two')

/*.Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list, print a message to that person letting them know you’re sorry 
 you can’t invite them to dinner. */


 for (let i=newguestlist.length; i>2; i--){

        let cancellguest=newguestlist.splice(0,1)
      console.log(`sorry ${cancellguest} We can not invite you to dinner`)
      
 }
 console.log(newguestlist)

 /*.Print a message to each of the two people still on your list, letting them know they’re still invited.  */
 newguestlist.forEach((i)=>{
    console.log(`Dear ${i} You are still invited to the dinner`)

 })
 /*. Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
  have an empty list at the end of your program. */

  let removelasttwonames=newguestlist.splice(0,2);
  console.log('Below is Empty list for guests')
  console.log(newguestlist)