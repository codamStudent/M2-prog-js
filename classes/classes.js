class AAAAAA {
    constructor() {
        this.tea = "coffee"
        console.log("AAAAAAAAAAAA");
        this.inheretance = new childObject("ddd", "eee", "fff")
        console.log(this.inheretance.aaa, this.inheretance.bbb, this.inheretance.ccc);
    }
    log() {
        console.log("aaaaaaaaaaaaaaa");
        console.log(this.tea);
    }

}

class DCCCCC {
    constructor() {
        console.log("CCCCCCCCCCCCCC");
    }
    log() {
        console.log("ccccccccccccc");
    }
}

class BBBBBB {
    constructor() {
        console.log("BBBBBBBBBBBBBBB");
    }
    log() {
        console.log("bbbbbbbbbbbbbb");
    }
}

class childObject { constructor(aaa, bbb, ccc) { this.aaa = aaa; this.bbb = bbb; this.ccc = ccc } }
let aaaa = new AAAAAA
let cccc = new DCCCCC
let bbbb = new BBBBBB

console.log(aaaa.tea);
aaaa.log()
cccc.log()
bbbb.log()

// let abbbbaaa = new AAAAAA
// let aacaa = new AAAAAA