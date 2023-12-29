
class randShit {
    runApplication() {
        console.log(this.add(137, 373289));
        this.AMRIO()
        console.log(this.SCARE());
        console.log(this.VERZONNE("dit kun je niet lezen"));
        console.log(this.VERZONNE(this.VERZONNE("dit kun je wel lezen")));
    }

    takeParameter(params) {
        if (params) {
            return "you gave a parameter"
        }
        else {
            return "you didn't give a parameter"
        }
    }

    takeParameterV2(params) {
        if (params) {
            return "you gave a parameterV2"
        }
        else {
            return "you didn't give a parameteV2"
        }
    }

    add(a, b) {
        return a + b;
    }
    AMRIO() { console.log("MARIO!!"); }
    SCARE() { return "BWAHAHA!!!" }
    VERZONNE(str) {
        return str + str + str
    }
}

let tmekp = new randShit()

tmekp.runApplication()
console.log(tmekp.takeParameter("aqaaaaaa"));
console.log(tmekp.takeParameter());
console.log(tmekp.takeParameterV2("aqaaaaaa"));