function distanceFromHqInBlocks(start) {
    return Math.abs(start - 42)
}

function distanceFromHqInFeet(start) {
    return distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
  }

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    console.log(distance)
    switch (true) {
        case distance<=400:
            return 0
        case distance<=2000 && distance>400:
            return (distance-400)*0.02
            debugger
        case distance<=2500:
            return 25
        case distance>2500:
            return 'cannot travel that far'
        default: return "ERROR"
       }
}
calculatesFarePrice(32, 34)
