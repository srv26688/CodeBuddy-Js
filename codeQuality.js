// level {1/2/3}
// Level 1: async function GET_daTA() {
//     let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let DATA = await r.json();
//     return DATA;
//   }

  async function getData() {
      await fetch("https://jsonplaceholder.typicode.com/todos/1").then((res)=>{
         return res.json();
      })
  }