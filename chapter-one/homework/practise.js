//问题1
const removeRepeat = () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    const a = [...new Set(arr)]
    console.log(a);
}
removeRepeat();

//问题2
const findRepeat = () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    const arraySorted = array.sort();
    let repeat = []
    for (let i = 0; i < arraySorted.length; i++) {
        if (arraySorted[i] === arraySorted[i + 1]) {
            repeat.push(arraySorted[i])
        }
    }
    console.log([...new Set(repeat)])
}
findRepeat();


//问题3
const clone = () => {
    return JSON.parse(JSON.stringify(obj));
}
const obj = {
    arr: [{a: 1, f: {q: 1}}, 2, 3],
    obj: {key: 'value'},
    string: 'hello world',
};
const obj1 = clone(obj);
console.log(obj1.string === obj.string);


//问题4
const question4 = () => {
    var j;
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
        j = i + 1;
    }
    console.log(j);
}
question4();
