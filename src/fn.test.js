const fn = require('./fn')

// test('1은 1이야', ()=>{
//   expect(1).toBe(1)
// })

// test("2더하기 3은 5야.", ()=>{
//   expect(fn.add(2,3)).toBe(5)
// })

// test("2더하기 3은 5야.", ()=>{
//   expect(fn.add(2,3)).toEqual(5)
// })

// test("2더하기 3은 5야.", ()=>{
//   expect(fn.add(3,3)).not.toBe(5)
// })

// test("null은 null이야.", ()=>{
//   expect(null).toBeNull()
// })

// test('이름과 나이를 전달받아서 객체를 반환해줘.', ()=>{
//   expect(fn.makeUser("Blanc", 28)).toEqual({
//     name: "Blanc",
//     age: 28, 
//   })
// })

// test('비어있지 않은 문자열은 true 입니다', ()=>{
//   expect(fn.add("aa",-1)).toBeTruthy()
// })

// test('ID는 10자 이하여야 합니다.',()=>{
//   const id = "abcbddkf"
//   expect(id.length).toBeLessThanOrEqual(10)
// })

// test('비밀번호 4자리',()=>{
//   const pw = "1234"
//   expect(pw.length).toBe(4)
// })

// test('0.1 더하기 0.2 는 0.3입니다',()=>{
//   expect(fn.add(0.1,0.2)).toBeCloseTo(0.3)})

// test("Hello World 에 a라는 글자가 있나?",() =>{
//   expect("Hello World").toMatch(/H/i)
// })

// test("유저리스트에 Blanc이 있나?", () =>{
//   const user = "Blanc"
//   const userList = ["Blanc", "Hulk", "IronMan"]
//   expect(userList).toContain(user)
// })


// test("이것은 에러를 발생시키는 테스트입니다.", () =>{
//   expect(()=>fn.throwErr()).toThrow("xx")
// })

// test("3초 후에 받아온 이름은 Blanc입니다.", (done)=>{
//   function callback(name){
//     try{
//     expect(name).toBe("Blanc")
//     done()
//   } catch(errot) {
//     done(error)
//   }
//   }
//   fn.getName(callback) 
// })

// test("3초 후에 받아온 이름은 Blanc입니다.", async () => {
//   // const age = await fn.getAge();
//   // expect(age).toBe(30)

//   await expect(fn.getAge()).resolves.toBe(30)
// })

// let num = 0 
// test("0더하기 1은 1이야", () => {
//   num = fn.add(num,1);
//   expect(num).toBe(1)
// })



// let user ;
// beforeEach(async()=>{
//   user = await fn.connectUserDb();
// })

// afterEach(async()=>{
//   user = await fn.disConnectUserDb();
// })

// test("이름은 Blanc", () => {
//   expect(user.name).toBe("Blanc")
// })
// test("나이는 30", () => {
//   expect(user.age).toBe(30)
// })
// test("성별은 남성", () => {
//   expect(user.gender).toBe("male")
// })

// describe("차 관련 작업", () => {
//   let carl

//   beforeAll(async ()=>{
//     car = await fn.connectCarDb();
//   })
//   afterAll(()=>{
//     return fn.disConnectCarDb
//   })


//   test("차 이름은 Blanc", () => {
//     expect(car.name).toBe("z4")
//   })
//   test("차 나이는 30", () => {
//     expect(car.brand).toBe("bmw")
//   })
//   test("차 성별은 남성", () => {
//     expect(car.color).toBe("red")
//   })
// })



// mock function




// const mockFn = jest.fn()

// mockFn()
// mockFn(1)

// // test("dd", () =>{
// //   console.log(mockFn.mock.calls);
// //   expect("dd").toBe("dd")
// // })
// test("함수는 2번 호출됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// })
// test("2번째로 호출된 함수에 전달된 첫번째 인수는 1 입니다.", () => {
//   expect(mockFn.mock.calls[1][0]).toBe(1);
// })


// const mockFn = jest.fn()

// function forEachAdd1(arr){
//   arr.forEach(num => {
//     mockFn(num +1)
//   })
// }

// forEachAdd1([10,20,30])

// test("함수 호출은 3번 됩니다",() =>{
//   expect(mockFn.mock.calls.length).toBe(3)
// });
// test("전달된 값은 11,21,31입니다", () =>{
//   expect(mockFn.mock.calls[0][0]).toBe(11);
//   expect(mockFn.mock.calls[1][0]).toBe(21);
//   expect(mockFn.mock.calls[2][0]).toBe(31);
// })

// const mockFn = jest.fn(num=>num + 1)

// mockFn(10)
// mockFn(20)
// mockFn(30)

// test("함수 호출은 3번 됩니다", () => {
//   console.log(mockFn.mock.results)
//   expect(mockFn.mock.calls.length).toBe(3)
// })
jest.mock("./fn")
fn.createUser.mockReturnValue({name:"Blanc"})

test("유저를 만든다", () => {
  const user = fn.createUser("Blanc");
  expect(user.name).toBe("Blanc")
})