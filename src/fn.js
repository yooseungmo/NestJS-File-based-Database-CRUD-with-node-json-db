const fn = {
  add: (num1, num2) => num1 + num2,
  createUser: name => {
    console.log("실제로 사용자가 생성되었습니다.")
    return {
      name,
    }
  },
  connectUserDb: ()=>{
    return new Promise(res=>{
      setTimeout(()=>{
        res({
          name: "Blanc",
          age: 30,
          gender: "male"
        })
      }, 500)
    })
  },
  disConnectUserDb: ()=>{
    return new Promise(res=>{
      setTimeout(()=>{
        res()
      }, 500)
    })
  },
  connectCarDb: ()=>{
    return new Promise(res=>{
      setTimeout(()=>{
        res({
          brand: "bmw",
          name: "z4",
          color: "red"
        })
      }, 500)
    })
  },
  disConnectCarDb: ()=>{
    return new Promise(res=>{
      setTimeout(()=>{
        res()
      }, 500)
    })
  }
  // getName: callback => {
  //   const name = "Blanc";
  //   setTimeout(()=>{
  //     callback(name)
  //   }, 3000)
  // },
  // getAge: () => {
  //   const age = 30;
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       res(age)
  //     }, 3000)
  //   })
  // }
}

module.exports = fn

