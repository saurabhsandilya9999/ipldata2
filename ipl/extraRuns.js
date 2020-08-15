function extraRuns(matches, deliveries)
{
 const selectId = []; 
    result = {};
    for(let match of matches){
      const id = match.id;
      const season = match.season;
      if(season == 2016){
        selectId.push(id);
      } 
    }
    for (let i of selectId) {
        for (let delivery of deliveries) {   
          if (delivery.match_id === i) {
            team = delivery.bowling_team;
            if (result[team]) {
              result[team] += parseInt(delivery.extra_runs);
            } else {
              result[team] = parseInt(delivery.extra_runs);
            }
          }
        }
      }  
      return result;
}

module.exports = extraRuns;
