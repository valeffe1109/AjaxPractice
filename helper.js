





getEvents = async () => {
    var myHeaders = new Headers({


        "Authorization": "Basic " + btoa("user9:sP4YMKhBpqQHAPJN"),
        "Content-Type": "application/json"



    });
    const url = "https://strivetestapi.azurewebsites.net/api/product/"; 
    var response = await fetch(url,{
        headers: myHeaders
    });
    return await response.json();
};

getEvent = async id => {
    var myHeaders = new Headers({


        "Authorization": "Basic " + btoa("user9:sP4YMKhBpqQHAPJN"),
        "Content-Type": "application/json"



    });
    const url = `https://strivetestapi.azurewebsites.net/api/product/${id}`; 
    var response = await fetch(url,{
    headers:myHeaders});

    return await response.json();
};