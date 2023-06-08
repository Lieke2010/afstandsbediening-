let ir_waarde = 0
let vooruit = 1
let achteruit = 2
let links = 3
let rechts = 4
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
basic.forever(function () {
    let stop = 0
    if (vooruit == ir_waarde) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
    if (achteruit == ir_waarde) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    }
    if (rechts == ir_waarde) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    }
    if (links == ir_waarde) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    }
    if (stop == ir_waarde) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
