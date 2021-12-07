// function recurse//
// function recurse(number){
//     console.log(number);
//     let newNumber=number+1;
//     if ((newNumber<10)){
//         recurse(newNumber);
//     }
// }
// recurse(5);


/////////////////////////////////////factorial function//

// function factorial(x){
//     if (x===0){
//         return 1;
//     }
//     else {
//         return x*factorial(x-1);
//     }
// }
//
// let num=3;
// if (num>0){
//     let result= factorial(num)
//     console.log(`
//     The factorial of ${num} is ${result}`);
// }

////////////////////////////////////   sum Num   /////
// function sum(num){
//     if (num===0){
//         return 0;
//     }
//     else {
//         return num+sum(num-1)
//     }
// }
//
// console.log(sum(6))


//////////////////////////////////////// star Rectangular //////

////برنامه‌ای بنویسید که عدد n را از ورودی دریافت کرده و سپس یک مربع توخالی به طول و عرض n با ستاره چاپ کند.
//
// function starRec(num) {
//     if (typeof (num) != 'number' || num > 10) {
//         return "wrong"
//     }
//     for (let i = 1; i <= num; i++) {
//             if (i === 1 || i === num) console.log('*'.repeat(num))
//
//             else console.log('*' + ' '.repeat(num - 2) + "*")
//         }
// }
//
// console.log(starRec(5))

////////////////////////////////////////////////////////////////////////////////

////برنامه‌ای بنويسيد كه یک عدد صحيح را که تعداد ارقامش مشخص نيست از کاربر گرفته و هر رقم را به تعداد آن رقم چاپ کند.

// function repeatNum(n){
//     let strNum = n.toString();
//     for (let i = 0; i < strNum.length; i++) {
//         let m = strNum.substring(i, i + 1);
//         console.log('%s: %s', m, m.repeat(Number(m)));
//     }
// }
// repeatNum(2304695)

////////////////////////////////////////////////////////////////////////////////

////با استفاده از روش خودبازگشتی در توابع تابعی بنویسید که یک رشته را از ورودی گرفته و برعکس آن‌را برگرداند.
// function reversStr(str){
//     if(typeof(str)!='string') return 'wrong'
//     if (str.length===0) return ''
//     return str[str.length-1]+reversStr(str.substring(0,(str.length)-1))
// }
// console.log(reversStr("sahar"))

////////////////////////////////////////////////////////////////////////////////

//// تابعی بنویسید که دو رشته به عنوان ورودی بگیرید و اگر رشته دوم در رشته اول وجود داشت اندیس آن‌را برگرداند.
// function findStr(str1,str2){
//     if(str1.length<str2.length || (typeof (str1)!= 'string') ||(typeof (str2)!= 'string') ) return'wrong!'
//     for (let i=0;i<str1.length;i++){
//         for(let j=0;j<str2.length;j++ ){
//             if (str1[i+j]!==str2[j]) break
//             if (j===(str2.length-1)) return i
//         }
//     }
//     return '-1'
// }
// console.log(findStr('abcdefeb','cde'))

////////////////////////////////////////////////////////////////////////////////

//// تابعی بنویسید که دو آرایه را از ورودی گرفته و آیتم‌های آرایه دوم را از آرایه اول حذف کرده و باقی‌مانده آرایه اول را برگرداند.
// function cleanList(arr1,arr2){
//     if (arr1.length<arr2.length) return false
//     let result=[...arr1];
//     for (let i of arr2){
//         if (result.includes(i)){
//             result.splice(result.indexOf(i),1)
//         }
//     }
//     return result
// }
// let arr1=[1,2,3,4,65,78]
// let arr2=[2,65]
// console.log(cleanList(arr1,arr2))


//-------------روش دوم با مپ کردن-------------------------------------
// function cleanList2(arr1,arr2) {
//     if (arr1.length < arr2.length) return false
//     let result = [...arr1];
//     arr2.map(item => {if (result.includes(item)) result.splice(result.indexOf(item),1)})
//     return result
// }
// console.log(cleanList2(arr1,arr2))

////////////////////////////////////////////////////////////////////////////////

//// تابعی بنویسید که یک آرایه و دو عدد index و offset را گرفته و آیتم موجود در index را به اندازه offset در جهت مثبت یا منفی (راست یا چپ در آرایه) انتقال دهد.
function changeArr(arr,index,offset){
    let loc=index+offset
    if (loc<0 || loc>=arr.length) return 'wrong!'
    let n=arr.splice(index,1)
    arr.splice(loc,0,n[0])
    return arr
}
console.log(changeArr([1,2,3,4,5],2,-1))

////////////////////////////////////////////////////////////////////////////////
////تابعی بنویسید که یک رشته را به عنوان ورودی گرفته و کاراکترهای تکراری مجاور هم را حذف کند و فقط یکی از آن‌ها را باقی بگذارد. مثال: ورودی) aabbbcdd خروجی) abcd

function cleanStr(str){
    if (typeof(str)!='string') return 'wrong!'
    let result=''
    for (let i=0; i<str.length;i++){
        if (str[i]!==str[i+1]) result+=str[i]
    }
    return result
}

console.log(cleanStr('aabbsdsa'))
