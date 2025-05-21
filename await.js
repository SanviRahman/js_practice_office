async function fetchData()
{
    let res= await fetch('http://studentportal.diu.edu.bd/');
    let data =await res.json();
    console.log(data);
}
fetchData();