// Quest2: Print the flags of the countries form the given API


// Step 01: Create a XHR Object to fetch datas from API
var request = new XMLHttpRequest();
// Step 02: Specify the API
request.open("GET", "https://restcountries.com/v2/all");
// Step 03: Sending the request
request.send();
//Step 04: Once the requested data is there in server once data is successfully loaded
//Server response will be of 200 status code.
//Functions: they are used to perform specific task
request.onload=function()
{
    var result = JSON.parse(request.response);
    var countryFlag;
    for(i=0;i<=result.length;i++)
    {
        // console.log(result.length);exit;
        for(var key in result[i])
        {
            // console.log(key);
            if(key=="flags")
            {
                countryFlag = result[i][key];
                console.log(countryFlag);
                // console.log(countryFlag.length);
            }
        }
    }
    

}
