// let arr = [1,2,3,4];
// Array.prototype.concat = function (arr) {
//     let new_arr = [];
//     for (let i = 0; i< this.length ; i++ ){
//         new_arr.push(this[i]);
//     }
//     for(let z = 0; z< arr.length; z++){
//         new_arr.push(arr[z]);
//     }
//     return new_arr
// };

// const massiv = arr.concat([5,6]);
// console.log(massiv , arr);




// Array.prototype.every = function (cb) {
//     for (let i = 0; i < this.length; i++) {
//     const nat = cb(this[i],i,this)
//     if(!nat){
//         return false;
//     }        
//     }
//     return true;
// }

// let bool = arr.every(function (el) {
//     return el > 0;    
// });

// console.log(bool);




// let arr = [1,2,3,4];
// Array.prototype.slice = function (el,index) {
//     for(let i = 0 ; i < this.length ; i++){
//        return this[el] + this[i] + this[index]

//     }
// }

// let new_arr = arr.slice[1,3] 
// console.log(new_arr);








// let arr = [1,2,3,4,5,6,7];
// Array.prototype.filter = function (cb) {
//     let new_arr = [];
//     for (let i = 0; i < this.length; i++) {
//     const nat = cb(this[i],i,this)
//     if(nat){
//         new_arr.push(this[i]) 
//         }
//     }
//     return new_arr
// }
// let bool = arr.filter(function (el){
//     return el > 3
// })
// console.log(bool);




// let arr = [1,2,3,4,5,6,7];

// Array.prototype.find = function (cb) {
//     for (let i = 0; i < this.length; i++) {
//         const nat = cb(this[i],i,this)
//         if (nat){
//             return this[i]
//         }
//     }
//     return undefined
// }



