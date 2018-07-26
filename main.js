/*
    Initialize the database in memory as an object
*/
const HomeInventoryDatabase = {}

/*
    Initilize all of the tables (i.e. arrays) that you want to
    use in your database.
*/
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

/*
    Time to create some data that will inserted into the database
*/

// The ink well is a craft data item
const vintageInkwell = {
  name: "Vintage Ink Well",
  location: "Writing desk",
  description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

// The writing desk is a furniture data item
const writingDesk = {
  name: "Shaker Writing Desk",
  location: "Bedroom",
  description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}
const myelectronics =
{
    name :"Headphone",
    location:"personal",
    description:"This headphone belongs to Priyanka Garg"
}
const painting = {
    name:"flower painting",
    location:"Living",
    description:"my Husband bought this painting from pier1"
}
const dinning={
    name:"farmhouse table",
    location:"dinning",
    description:"This Farm house table looks awesome"
}
const xbox={
    name:"xbox",
    location:"loft",
    description:"my 8 yr old boy love his xbox"
    
}
// Add the data to the appropriate tables
HomeInventoryDatabase.crafts.push(vintageInkwell)
HomeInventoryDatabase.furniture.push(writingDesk)
HomeInventoryDatabase.electronics.push(myelectronics)
HomeInventoryDatabase.crafts.push(painting)
HomeInventoryDatabase.furniture.push(dinning)
HomeInventoryDatabase.electronics.push(xbox)


// Persist the database to localStorage
const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
   const stringifiedDatabase = JSON.stringify(databaseObject)

   /*
       Create a key in local storage, and store the string
       version of your inventory database as the value
   */
   localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(HomeInventoryDatabase, "HomeInventory")
//saveDatabase(HomeInventoryDatabase, "HomeInventory")



const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
console.log(loadDatabase("HomeInventory"));