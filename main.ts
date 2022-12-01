input.onPinPressed(TouchPin.P0, function () {
    In = input.runningTime()
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    Time_ms = Time_ms * 0.001
    Time_s = 0
    basic.showNumber(Time_s)
})
input.onButtonPressed(Button.B, function () {
    Dis = 0.3
    Speed = Dis / Time_s
    basic.showNumber(Speed)
})
input.onPinPressed(TouchPin.P1, function () {
    Final = input.runningTime()
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        # . . . .
        `)
})
let Final = 0
let Speed = 0
let Dis = 0
let Time_s = 0
let Time_ms = 0
let In = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
