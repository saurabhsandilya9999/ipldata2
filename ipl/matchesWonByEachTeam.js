function matchesWonByEachTeam(matches)
{
   let result = {};
   for(let i=0;i<matches.length;i++)
   {
       let season = matches[i].season;
       let winner = matches[i].winner;
       if(result[season]){
           if(result[season][winner]){
               result[season][winner] += 1;
           }else{
               result[season][winner]  = 1;  
           }
       }else{
           result[season] = {};
           result[season][winner] = 1; 
       } 
   }
   
   return result;
}

module.exports = matchesWonByEachTeam