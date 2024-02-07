// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
   const headQuatersStreet = 42

   if (streetNumber > headQuatersStreet) {
    return streetNumber - headQuatersStreet
   } else if (streetNumber < headQuatersStreet) {
    return headQuatersStreet - streetNumber
   }
}

function distanceFromHqInFeet(distanceInBlocks) {
   let numberOfBlocks = distanceFromHqInBlocks(distanceInBlocks)
   let blockSizeInFeet = 264
   return numberOfBlocks * blockSizeInFeet
}

function distanceTravelledInFeet(startLocation, endingLocation) {
    let distanceInBlocks 

    if (startLocation > endingLocation) {
        distanceInBlocks = startLocation - endingLocation
    } else if ( startLocation < endingLocation) {
        distanceInBlocks = endingLocation - startLocation
    }
    
    let total = distanceInBlocks * 264

    return total
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination)

    let cost 
    const freePass = 400
    
    if (distanceInFeet <= 400) {
        cost = 0;
    } else if (distanceInFeet <= 2000) {
        cost = (distanceInFeet - freePass) * 0.02;
    } else if (distanceInFeet > 2000) {
        cost = 25
        if (distanceInFeet > 2500) {
            cost = "cannot travel that far"
        }
    }
    return cost
}
