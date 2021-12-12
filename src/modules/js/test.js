function test() {
  const arr = [51, 8, 99, 2, 63];

  function arrRevert(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      console.log(`Под свойством ${i} лежит значение ${array[i]}`);
      //   for (let i = 1; i <= arr.length; i++) {
      //     console.log(arr[arr.length - i]);
      //   }
    }
  }
  arrRevert(arr);
}
export default test;
