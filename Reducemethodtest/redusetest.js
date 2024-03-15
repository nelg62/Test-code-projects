// const items = [
//     { name: 'Apple', price: 1 },
//     { name: 'Orange', price: 2 },
//     { name: 'Mango', price: 3 },
//   ];

const items = [
    { name: 'Apple', category: 'Fruit', price: 1},
    { name: 'Onion', category: 'Vegetable', price: 5},
    { name: 'Orange', category: 'Fruit', price: 2},
    { name: 'Lettuce', category: 'Vegetable', price: 3},
    { name: 'Mango', category: 'Fruit', price: 10},
    { name: 'Knife', category: 'Utesil', price: 20},
]
  
// //   let totalPrice = 0;

// //   items.forEach(item => {
// //     totalPrice += item.price;
// //   })

// const totalPrice = items.reduce((accumulator ,item) => {
//     return accumulator += item.price;
//   }, 0)
  
//   console.log(totalPrice); // 6



// const items = [
//     { name: 'Apple', category: 'Fruit' },
//     { name: 'Onion', category: 'Vegetable' },
//     { name: 'Orange', category: 'Fruit' },
//     { name: 'Lettuce', category: 'Vegetable' },
//   ];

//   const groupedItems = items.reduce((accumulator, item) => {
//     const category = item.category;
//     if (!accumulator[category]) {
//       accumulator[category] = []
//     }
//     accumulator[category].push(item.name);
//     return accumulator
//   }, {})

const groupAndPrice = items.reduce((accumulator,item) => {
    const category = item.category
    if (!accumulator[category]) {
        accumulator[category] = { 
            items: [],
            totalPrice: 0
        }
    }
    accumulator[category].items.push(item.name)
    accumulator[category].totalPrice += item.price
    document.querySelector('#additemshere').innerHTML += `<li>${item.name} ${item.price} ${item.category}</li>`
    return accumulator
}, {})

const totalPrice = items.reduce((accumulator ,item) => {
    return accumulator += item.price;
  }, 0)


  
console.log(groupAndPrice)

console.log(totalPrice)
//   console.log(groupedItems);
//   // { Fruit: [ 'Apple', 'Orange' ], Vegetable: [ 'Onion', 'Lettuce' ] }






// ref https://www.freecodecamp.org/news/how-to-use-javascript-array-reduce-method/