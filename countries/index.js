function createFlag(countriesInfo,index){
    const info=document.createElement("div");
    info.setAttribute("class","container");
    info.innerHTML=`<div class="flag-container">
    <img class="flag" src=${countriesInfo[index].flag} width="250px" height="150px" />
    </div>
    <div class="details">
    <h1>${countriesInfo[index].name}</h1>
    <p><b>Population:</b>${countriesInfo[index].population}</p>
    <p><b>Region:</b>${countriesInfo[index].region}</p>
    <p><b>Capital:</b>${countriesInfo[index].capital}</p>
    </div>
    </div>
`
    document.body.append(info);
}
let countriesInfo=[{
    name:"India",
    population:"1295210000",
    region:"Asia",
    capital:"New Delhi",
    flag:"https://restcountries.eu/data/ind.svg"
},
{
    name:"Canada",
    population:"36155487",
    region:"Americas",
    capital:"Ottawa",
    flag:"https://restcountries.eu/data/can.svg" 
},
{
    name:"New Zealand",
    population:"4697854",
    region:"Oceania",
    capital:"Wellington",
    flag:"https://restcountries.eu/data/nzl.svg"
},
{
    name:"USA",
    population:"323947000",
    region:"Americas",
    capital:"Washington D.C",
    flag:"https://restcountries.eu/data/usa.svg"
},
{
    name:"South Africa",
    population:"55653654",
    region:"Africa",
    capital:"Pretoria",
    flag:"https://restcountries.eu/data/zaf.svg"
}];
for(let index=0;index<countriesInfo.length;index++){
    createFlag(countriesInfo,index);
}
