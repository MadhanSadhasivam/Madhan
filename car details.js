var details = {
    dimensions:
    {
        overAllLength:"3500 mm",
        overAllWidth:"1600 mm",
        overAllHeight:"1490 mm",
        wheelBase:"2360 mm",
        trackWidth:{
            front:"1405 mm",
            rear:"1400 mm"
        },
        minimumTurningRadius:"4.5 m",
        minimumGroundClearance:"170 mm"
    },
    capacities:
    {
        seatingCapacity:"5 persons",
        fuelTankCapacity:"35 litres"
    },
    engine:
    {
        type:"KB-series",
        numberOFCylinders:3,
        numberOfValves:12,
        capacity:"998cc/cm^3",
        boreXStroke:"73.0*79.5mm",
        compressionRatio:"10.1",
        maximumPower:"63/6.200PS/rpm",
        maximumTorque:"90/3500Nm/rpm",
        fuelDistrubution:"Multipoint Injection"
    },
    transmission:
    {
        type:"5speed MT"
    },
    chassis:
    {
        steering:"Rack&Pinion,Power Assisted",
        brakes:{
            front:"Ventilated discs",
            rear:"drums"
        },
        suspension:{
            front:"Macpherson strut & coil spring",
            rear:"Isolated trailing link & coil spring"
        },
        shockAbsorbers:"Gas filled",
        tyre:"Tubeless 155/80R13"
    },
    weights:{
        kerbWeight:"860-880kg",
        grossVehicleWeight:"1320kg"
    },
}
console.log(details);
