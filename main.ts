function onpress () {
    gamePad.vibratorMotorSpeed(255)
    gamePad.led(gamePad.Led.ON)
    basic.pause(100)
    gamePad.vibratorMotor(gamePad.Vibrator.V0)
    gamePad.led(gamePad.Led.OFF)
}
let msg = ""
serial.redirectToUSB()
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.analogSetPeriod(AnalogPin.P12, 20000)
basic.forever(function () {
    msg = ""
    msg = "x" + pins.analogReadPin(AnalogPin.P1) + " y" + pins.analogReadPin(AnalogPin.P2) + " z" + pins.digitalReadPin(DigitalPin.P8) + " A" + pins.digitalReadPin(DigitalPin.P5) + " B" + pins.digitalReadPin(DigitalPin.P11) + " RED" + pins.digitalReadPin(DigitalPin.P15) + " YELLO" + pins.digitalReadPin(DigitalPin.P14) + " GREEN" + pins.digitalReadPin(DigitalPin.P13) + " BLUE" + pins.digitalReadPin(DigitalPin.P16)
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        pins.analogWritePin(AnalogPin.P12, 512)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P12, 0)
    } else if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        pins.analogWritePin(AnalogPin.P12, 512)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P12, 0)
    }
    serial.writeLine(msg)
    basic.pause(500)
})
