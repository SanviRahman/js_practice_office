let day=9;
let dayName;

switch(day){
    case 1:
        dayName='Saterday';
        break;
    case 2:
        dayName='Sunday';
        break;
    case 3:
        dayName='Monday';
        break;
    case 4:
        dayName='Tuesday';
        break;
    case 5:
        dayName='Wednestday';
        break;
    case 6:
        dayName='Thursday';
        break;
    case 7:
        dayName='Friday';
        break;

    default:
        dayName="Invalid number";
}

console.log(dayName);