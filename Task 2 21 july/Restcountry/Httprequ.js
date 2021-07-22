
var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          for(var i=0;i<data.length;i++)
          {
            //console.log(data[i]);
             console.log(data[i].flag);
             console.log(data[i].name);
             console.log(data[i].population);
             console.log(data[i].region);
             console.log(data[i].subregion);
          }         
        };
        xhr.send();