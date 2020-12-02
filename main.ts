input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showNumber(randint(1, 6))
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.clearScreen()
})
