myUrl = 'https://api.covid19india.org/data.json';
url = 'https://api.covid19india.org/state_district_wise.json';
//url = 'https://ghoapi.azureedge.net/api/Dimension';
//url = 'https://api.covid19india.org/csv/latest/districts.csv';
//url = 'https://apps.who.int/gho/athena/api/GHO/WHOSIS_000001.json?profile=simple';

function myGetData() {
    fetch(myUrl)
        .then((response) => {
            return response.json();
        })
        .then(function (data) {
            const lastUpdatedTime = data.statewise[0].lastupdatedtime;
            document.querySelector('.last-update').textContent = `Last updated:  ${lastUpdatedTime}`
            const totalConfirmed = data.statewise[0].confirmed;
            document.querySelector('#tconfirmed').textContent = `${totalConfirmed}`;
            const todayConfirmed = data.statewise[0].deltaconfirmed;
            document.querySelector('#dconfirmed').textContent = `+ ${todayConfirmed}`;
            const totalActive = data.statewise[0].active;
            document.querySelector('#tactive').textContent = totalActive;
            const totalRecover = data.statewise[0].recovered;
            document.querySelector('#trecover').textContent = totalRecover;
            const totalDead = data.statewise[0].deaths;
            document.querySelector('#tdeceased').textContent = totalDead;
            const todayRecover = data.statewise[0].deltarecovered;
            document.querySelector('#drecover').textContent = `+ ${todayRecover}`;
            const todayDead = data.statewise[0].deltadeaths;
            document.querySelector('#ddeceased').textContent = `+ ${todayDead}`;
            console.log(data);
        })
}

myGetData();

/*function getData(){
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
}

getData();

*/