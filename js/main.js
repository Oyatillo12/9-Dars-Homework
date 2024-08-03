// 1 Task
// let arrNums = [55,3,2,11,3,4,6,7,12];

// function arrangedFnc(arr){
//     return arr.sort((a, b) => a - b)
// }
// console.log(arrangedFnc(arrNums));


// 2 Task
// let yigindi = 0
// let arr = [1,6,9,5,8,10,15].slice(2,5).filter(value => yigindi += value)
// console.log(`2dan 5gacha bolgan qiymatlar: ${arr}`);
// console.log(`Ularning yigindisi: ${yigindi}ga teng`);

// yoki function bilan
// let arr = [1,6,9,5,8,10,15]
// function rangeSum(arr, startIndex, endIndex){
//     let sum = 0
//     const res = arr.slice(startIndex, endIndex)
//     res.forEach(value => sum += value)
//     return sum
// }
// console.log("Yigindisi:", rangeSum(arr, 2, 5));

// 3 Task 

// let arr = [2,4,5,6,6,3,2,1]

// function deleteSameNums(arr){
//     let notSameArr = []
//     return arr.filter(value => !notSameArr.includes(value) ? notSameArr.push(value) : '')
// }
// console.log(deleteSameNums(arr));

// 4 Task 

// let arrNums = [2,4,5,6,6,3,2,1]

// function Nums(arrNums){
//     let min = arrNums[0]
//     arrNums.filter(value => {
//         if(value < min){
//             min = value
//         }
//         })
//     let max = arrNums[0]
//     arrNums.filter(value => {
//         if(value > max){
//             max = value
//         }
//         })
//     console.log("Eng kichik qiymati:", min,"ga teng");
//     console.log("Eng katta qiymati:",max,"ga teng");
// }
// Nums(arrNums);

// 5 Task 
// let arr = [1,5,8,9,10]

// function changeVAlue(arr){
//     let arrNum = arr[0]
//     arr.shift(arrNum)
//     arr.push(arrNum)
//     return arr
// }
// console.log(changeVAlue(arr));


// 6 Task

// let arr = [2,4,5,6,6,3,2,1]

// function reverseArr(arr) {
//    return arr.reverse()
// }
// console.log(reverseArr(arr));


// 7 Task

// let arr = [5,4,36,7,3,2,9,6,1].filter(value => value % 2 !== 0)
// console.log(arr);
// console.log("Toq sonlarning soni:", arr.length,"ta");

//  8 Task

// let arr= [2,3,4,5,7].filter((value, index) => index % 2 !== 0)
// console.log(arr);

// yoki 8chi Masala bu usulda

// let arr= [2,3,4,5,7]
// function oddNums(arr) {
//     return arr.filter((value, index) => index % 2 !== 0)
// }
// console.log(oddNums(arr));


// 9 Task

// let arr= [2,8,4,5,7]
// function oddNums(arr) {
//     let maxOdd = arr[0]
//    arr.filter((value, index) => {
//         if(index % 2 !== 0 && value >  maxOdd){
//             maxOdd = value
//         }
//         })
//      return maxOdd
// }
// console.log("index toq bolgan eng kattasi:", oddNums(arr));


// 10 Task 
// let arr = [2,1,3,5,8,4]
// function normalNum(arr){
//     let min = arr[0]
//     arr.filter(value => {if(value < min){min = value}})

//      let max = arr[0]
//     arr.filter(value => {if(value > max){max = value}})

//     let minNum = arr.indexOf(min)
//     let maxNum = arr.indexOf(max)

//     let indexes = [maxNum, minNum].sort((a,b) => a-b)
//     const first = indexes[0]
//     const last = indexes[1]

//     let res =  arr.map((value,index) => {
//     if(first < index && index < last){
//        return 0
//     }
//     return value
//    })
//    return res
// }
// console.log(normalNum(arr));

// 11 Task

// let enterNum = prompt("Son kiriting") - 0;

// function oddArray(enterNum){
//     let oddNums = []
//     for(let i = 1; i <= enterNum; i++){
//         i % 2 !== 0 ? oddNums.push(i) : ''
//     }
//     return oddNums
// }
// console.log(oddArray(enterNum));

// 12 Task

// let arr = [22,3,5,6,3,2,3]

// function reverseArr(arr){
//     let reverseNms = []
//     // arr.filter(value => reverseNms.unshift(value)) // filter bilan yoki for bilan
//     for(let i = 0; i < arr.length; i++){
//         reverseNms.unshift(arr[i])
//     }
//     return reverseNms
// }
// console.log(reverseArr(arr));


// 13 Task ???
// let arr = [3,5,6,3,2,3]

// function deleteSameNums(arr){
//     let notSameArr = []
//     return arr.filter(value => !notSameArr.includes(value) ? notSameArr.push(value) : '').sort((a,b) => a-b); // togri tartibda joylashtirsek
// }
// console.log(deleteSameNums(arr));

// 14 Task Juft indexlarini eng kichik qiymati pasroqda ham bor 14chi misol
// let arr =[12,15,5,4,54]

// function evenIndex(arr){
//     let evenMinNum = arr[0]
//      arr.filter((value, index) => {
//         if(index % 2 == 0 && value < evenMinNum){
//             evenMinNum = value
//         }
//     })
//     return evenMinNum
// }
// console.log("index juft bolgan eng kihik qiymat:", evenIndex(arr));

// 14 Task yoki Juft indexlarini kichigini qiymati
// let arr =[12,2,3,4,2]

// function evenIndex(arr){
//     let evenMinNum = arr.indexOf(arr[0])
//      arr.filter((value, index) => {
//         if(index % 2 == 0 && index > evenMinNum){
//             evenMinNum = value
//         }
//     })
//     return evenMinNum
// }
// console.log("index juft bolgan eng kihik qiymat:", evenIndex(arr));


// 2chi rasm Masalalar

// bu Object uchta masala uchun 1,2,3

//  let arr = [
//     {
//         id:1,
//         name:"Ulugbek",
//         age:17,
//         salary:1900
//     },
//     {
//         id:2,
//         name:"Oyatillo",
//         age:19,
//         salary:900
//     },
//     {
//         id:3,
//         name:"Abdulloh",
//         age:21,
//         salary:1800
//     }
// ] 

//  1 Task
// let yigindi = null
// function salariesFnc(arr){
//    let arrSalaries =  arr.map(value => value.salary)
//    yigindi = arrSalaries.reduce((acc,num) => acc += num,0),arrSalaries
//    return arrSalaries
// }
// console.log("Hodimlar oyligi:", salariesFnc(arr));
// console.log("Yigindisi: ", yigindi);


// 2 Task
// let sum = null
// function biggestSalary(arr){
//     arr.filter(value => {
//         if(value.salary > sum){
//             sum = value.salary
//         }
//     })
//     arr.filter(value => {
//         if(sum == value.salary){
//             console.log("Oyligini katta bolgan hodim:", value.name);
//         }
//     })
// }
// biggestSalary(arr)


// 3 Task 

// function sortValues(n){
//     arr.sort((a,b) => a[n] > b[n] ? 1 : -1)
//     console.log(arr);
// }
// sortValues('name')


//  4 Task

// let arrNumbers = [43,12,76,23,97,28,11].sort((a,b) => a-b)
// console.log(arrNumbers);

//  5 Task
// let arrNumbers = [43,12,76,23,97,28,11]

// function smallestValue(arr){
//     let sum = arr[0]
//     arr.filter(value => {
//         if(value < sum){
//             sum = value
//         }
//     })
//     return sum
// }
// console.log("Eng kichik qiymati:", smallestValue(arrNumbers));


//  6 Task 

// let size = prompt("Arrayni sizeni kiriting") - 0;
// let arr = []
// function developedObj(n){
//     if(n === 0){
//         return
//     }
//     else{
//         let enterName = prompt(arr.length + 1 +" - Object uhcun Ism kiriting !")
//         let obj = {
//             id:arr.length + 1,
//             name:enterName
//         }
//         arr.push(obj)
//         return developedObj(n - 1)
//     }
// }
// developedObj(size)

// function arrNames(arr){
//    return arr.map(value => value.name)
// }
// console.log(arrNames(arr));


// 7 Task

//  let arr = [
//     {
//         id:1,
//         name:"Ulugbek",
//         age:17,
//         salary:1900
//     },
//     {
//         id:2,
//         name:"Oyatillo",
//         age:19,
//         salary:900
//     },
//     {
//         id:3,
//         name:"Abdulloh",
//         age:21,
//         salary:1800
//     }
// ] 

// let enterId = prompt("ID kiriting") - 0;

// function findID(n){
//     let found = false
//     n.filter((value,index) => {
//         if(enterId == value.id){
//             found = true
//             console.log("Index orni: " + index);
//             console.log(value);
//         }
       
//     })
//     if(!found){
//         console.log("Bunday ID yoq, 1dan 3gacha kiritib koring");
//     } 
// }
// findID(arr)



//  Qoshimcha HOF Masalalar 5ta

// 1 Map orqali foydalanish raqamni qvadratiga oshirish
// let arr = [1,2,3,4,5]

// let res = arr.map(value => value * value)
// console.log(res);

// 2 Foreach - har bir raqamni chiqarish
// let arr = [1,2,3,4,5]

// let res = arr.forEach(item => console.log(item))

//  3 Sort - arrayni eng kichigini va kattasini yigindisini chiqarish
// let arr = [12,45,56,78,15,4,23]

// function findTotal(arr){
//     let values = arr.sort((a,b) => b-a)
//     return values[0] + values[values.length - 1]
// }
// console.log("Ularning yigindisi:", findTotal(arr));

// 4 find - 10dan katta bolgan birinchi raqamni topish
// let arr = [1,2,12,3,6,23,38]

// const res = arr.find(value => value > 10)
// console.log(res);

// 5 reduce - arrayni yigindisini toping va arrayni birinchi qiymati juft bolsa boshiga toq bolsa ohiriga qoshish
// let arr = [6,2,12,3,6,23,38]

// function findTotal(arr){
//     let totalValue = arr.reduce((acc,num) => acc + num,0)
//     if(arr[0] % 2 == 0){
//         arr.unshift(totalValue)
//     }
//     else{
//         arr.push(totalValue)
//     }
//     return arr
// }
// console.log(findTotal(arr));
