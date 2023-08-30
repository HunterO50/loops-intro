// 1. Student Names
var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]
for(var i = 0; i < cohortOneStudents.length; i++) {
  console.log(cohortOneStudents[i]);
} 

// 2. Interests
 
/* const interestsArray = ["reading", "coding", "crying at videos of soldiers reuniting with dogs.", "The marvelous Mrs. Maisel.", "cryptids" ]

for(i = 0; i < interestsArray.length; i++) {
  console.log("One of my favorite interests is:" + interestsArray[i]); 
}  */


 




//3. Favorite Interests


const interestsArray = ["reading", "coding", "crying at videos of soldiers reuniting with dogs.", "The marvelous Mrs. Maisel.", "cryptids" ]
for(i = 0; i < interestsArray.length; i++) 

if (interestsArray[i].length <=6 ) {
  console.log('My absolute favorite interest is : ' + interestsArray[1]);
} else {
  console.log('One of my interests is: ' + interestsArray[i]);
}




  