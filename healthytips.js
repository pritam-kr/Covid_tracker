let health = [{
    tips: "COVID-19",
    link: "https://www.who.int/health-topics/coronavirus#tab=tab_1"
},
{
    tips: "If you have been diagonsed with covid -19?",
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/tile_prepare_your_space_self_isolation_5_3.jpg"
},
{
    tips: "How to protect yourself and others?",
    link: "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"
},
{
    tips: "Travel advice?",
    link: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/travel-advice"
},
{
    tips: "COVID-19 vaccines",
    link: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines"
},
{
    tips: "COVID-19 outbreaks in India",
    link: "https://www.covid19india.org/"
},
{
    tips: "Symptoms of COVID-19",
    link: "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
}]


window.addEventListener('load', (gettips) => {
    //console.log(gettips);
    let outPut = '';
    health.forEach((el) => {
        //console.log(el);
        outPut += `
            <ul>
               <li><a href="${el.link}" target="_blank"> ${el.tips}</a></li>
            </ul>
        `
    })
    document.querySelector('.tips-container').innerHTML = outPut;
})

//console.log(health);