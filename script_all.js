// Quest:3 Print countries name, region, subregion, populations in given API

// Create a XHR Object to fetch datas from API
var request= new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();

// Click event with function declaration for process
request.onload= function(){
    var result = JSON.parse(request.response);
    var countryName;
    var subregion;
    var region;
    var population;
    var array=[];
    
//    Loop to parse the index value
    for(i=0;i<result.length;i++)
    {
        // Loop to parse the only key(key of the value)
        for(var key in result[i])
        {
        //   console.log(key);
        if(key == "name")
        {
           countryName= result[i][key];
        //    console.log(countryName);
        }
        else if(key == "subregion")
        {
           subregion= result[i][key];
        //    console.log(subregion);
        }
       else if(key == "region")
        {
           region= result[i][key];
        //    console.log(region);
        }
       else if(key == "population")
        {
           population= result[i][key];
        //    console.log(population);
        }
        }
        // Array variable to store the specific details about the countries
        array[i] = [countryName,subregion,region,population];
    }
    console.log(array);
}