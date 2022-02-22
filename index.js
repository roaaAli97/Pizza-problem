const fs=require('fs')
const data = fs.readFileSync('./a_an_example.in.txt',
            {encoding:'utf8', flag:'r'});
            
const fileParsesd=data.toString().split('\n')


const numberOfClients=fileParsesd[0]
const ingeredientsClientsLike=[]
const ingeredientsClientsHate=[]
const finalIngeredients=[]
for(let i=1;i<=numberOfClients*2;i++){
    // splitting  every line of the file it to get the number of ingeredients the ingeredients  themselves
   const ingeredients=fileParsesd[i].toString().split(" ")
   //number of ingerdients the client listed
   const ingeredientsNumber=ingeredients[0]
   if(i%2!=0){
       for(let i=0;i<ingeredientsNumber;i++){
           ingeredientsClientsLike.push(ingeredients[i+1])
       }
   }
   else if(i%2===0){
     for(let i=0;i<ingeredientsNumber;i++){
         ingeredientsClientsHate.push(ingeredients[i+1])
     }
   }
}
console.log(ingeredientsClientsHate)
console.log(ingeredientsClientsLike)

