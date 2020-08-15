function economyBowlers(matches, deliveries)
{
    let result={}
    for(let i=2008; i<=2019; i++){
        result[i]=calculate(matches, deliveries, i)
    }
    return result
}

function calculate(matches, deliveries, year)
{
    let total_runs={};
    let overs={};
    let economy;
    const selectId = (matches.filter(i=>i.season==year)).map(i=>parseInt(i.id))
    const deli = deliveries.filter(i=> selectId.includes(parseInt(i['match_id'])))
  
    for(let i in deli)
    {
        const runs = deli[i]['total_runs']
        const bowler = deli[i].bowler
        if(total_runs[bowler])
        {
            total_runs[bowler]+=parseInt(runs)
            if(parseInt(deli[i].ball)==6)
            {
                overs[bowler]+=1
            }
        }
        else
        {
            total_runs[bowler]=parseInt(runs)
            overs[bowler]=0
        }
    }
    for(let i in total_runs)
    {
        total_runs[i]=total_runs[i]/overs[i]
    }
    economy=(Object.entries(total_runs).sort((a,b)=>a[1]-b[1])).slice(0, 10)

    return economy;
}

module.exports = economyBowlers