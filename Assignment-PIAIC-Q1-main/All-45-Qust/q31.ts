// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users=['admin','user1','user2','user3','user4','user5','user6']
let usersnotempty=[];
for(let i=0; i<users.length ; i++){
    usersnotempty.push(users[i])

    
}
console.log(`list of the users:`,usersnotempty)
if(users.length===usersnotempty.length){
    console.log(`List of Users is not empty`);
}
     else if(users.length==0){
          console.log(`users are empty we need to find more users`)
    } 
    

let removedusers:any=[];
   users.forEach((i)=>{
     removedusers=users.slice(users.length)
   })
console.log(`Removed list: `, removedusers)
if(users!=removedusers){
    console.log(`users are empty we need to find more users`)
}