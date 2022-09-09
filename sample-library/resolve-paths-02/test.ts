async function test1() {
    let regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;

    let str = "2019-10-30, 2020-01-01";

    console.log(str.replace(regexp, '$<day>.$<month>.$<year>'));
// 30.10.2019, 01.01.2020
}
test1();

async function test2() {
    let regexp = /(?<first>\w+) (?<second>\w+)/
    let str = "John Smith";
    console.log(str.replace(regexp, '$<second>, $<first>'));
}
test2();

async function test3() {
    let regexp = /(?<first>\w+)AAAA/
    let str = "abcdefgAAAA";
    console.log(str.replace(regexp, '$<first>BBBB'));
}
test3();

async function test4() {
    let regexp = /^AAAA(?<first>\w+)$/
    let str = "AAAAabcdefg";
    console.log(str.replace(regexp, 'BBBB$<first>'));
}
test4();

async function test5() {
    let regexp = /^AAAA\/(?<first>\w+)$/
    let str = "AAAA/abcdefg";
    if (str.match(regexp) !== null)
        console.log(str.replace(regexp, 'BBBB/$<first>'));
    else
        console.log('No match found!');
}
test5();

async function test6() {
    let regexp = /^AAAA\/(?<first>\w+)$/
    let str = "XAAAA/abcdefg";
    if (str.match(regexp) !== null)
        console.log(str.replace(regexp, 'BBBB/$<first>'));
    else
        console.log('No match found!');
}
test6();

export { };

