function distanceFromHqInBlocks(locBlock) {
    let dist = locBlock - 42;
    if(dist<0){
        dist *= -1;
    }

    return dist;
}

function distanceFromHqInFeet(locBlock){
    let distBlock = distanceFromHqInBlocks(locBlock);
    let distFeet = distBlock * 264 ;
    return distFeet;
}

function distanceTravelledInFeet(locA, locB){
    let disBlock = locA - locB;
    if(disBlock<0){
        disBlock *= -1;
    }

    return disBlock * 264 ;
}

function calculatesFarePrice(locA, locB){
    let dist = distanceTravelledInFeet(locA, locB);
    let fare;
    if(dist<=400)
    {
        fare = 0;
    }
    else if(dist>400 && dist<2000)
    {
        fare = 0.02*(dist-400);
    }
    else if(dist>2000 && dist<2500)
    {
        fare = 25;
    }
    else if(dist>2500)
    {
        fare = "cannot travel that far";
    }

    return fare;
}