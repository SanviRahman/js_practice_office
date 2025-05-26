async function fetchData(){
    try
    {
        let res= await fetch('http://studentportal.diu.edu.bd/');
        let data =await res.json();
        console.log(data);
    }
    catch(err){
        console.error("Error fetching data:" + err);
    }
}

fetchData();