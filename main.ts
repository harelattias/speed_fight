let game_ready = 0
let A_click = 0
let B_click = 0
input.onButtonPressed(Button.A, function () {
    if (game_ready == 1) {
        basic.showString("A")
        A_click += 1
    }
    if (A_click == 3) {
        game_ready = 0
        basic.showString("A winner")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (game_ready == 1) {
        basic.showString("=")
    }
})
input.onButtonPressed(Button.B, function () {
    if (game_ready == 1) {
        basic.showString("B")
        B_click += 1
    }
    if (B_click == 3) {
        game_ready = 0
        basic.showString("B winner")
    }
})
input.onGesture(Gesture.ThreeG, function () {
    game_ready = 0
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    game_ready = 1
})
basic.forever(function () {
	
})
