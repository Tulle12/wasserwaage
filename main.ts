let gx = 0
let gy = 0
let res = 0
let k = 0
let bright = 0
basic.forever(function () {
    gx = input.acceleration(Dimension.X)
    gy = input.acceleration(Dimension.Y)
    res = Math.sqrt(gx * gx + gy * gy)
    k = 1
    bright = k * res
    basic.setLedColor(basic.rgbw(
    bright,
    bright,
    bright,
    0
    ))
    basic.pause(200)
})
