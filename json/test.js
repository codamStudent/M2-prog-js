let test = {
    foo: 12,
    bar: true,
    baz: "aaa",
    qux: [69, true],
    jab: "bhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
}
console.log(test.qux[1]);
let test2 = test;
test2.qux = { pos: 69, quest: true }
console.log(test2.qux.quest);
let dataToSend = JSON.stringify(test2)
console.log(dataToSend);
let test3 = JSON.parse(dataToSend)
console.log(test3);
fetch("le")