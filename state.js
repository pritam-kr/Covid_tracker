myUrl = 'https://api.covid19india.org/data.json';

function myGetData() {
    fetch(myUrl)
        .then((response) => {
            return response.json();
        })
        .then(function (data) {

            var state = data.statewise;

            var stateData = '';
            state.forEach(function (el) {

                stateData += `
            
            <table border ="0" style="width: 100%">
                 <tr>
                     <th color: var(--state-color); class="tone">State</th>
                     <th class="confirmed" class="ttwo">Confirmed</th>
                     <th class="active" class="tthree">Active</th>
                     <th class="recover" class="tfour">Recovered</th>
                     <th class="tsix">Deceased</th>
                 </tr>
                 <tr>
                     <td style="color: #fff;" class="tone">${el.state}</td>
                     <td class="ttwo">${el.confirmed}</td>
                     <td class="tthree">${el.active}</td>
                     <td class="tfour">${el.recovered}</td>
                     <td class="tsix">${el.deaths}</td>
                 </tr>
             </table>`

            });
            document.querySelector('.state-table').innerHTML = stateData;
        });
};

myGetData();