export const theAction = <T>(object : T) => {
    let uid = Math.floor(Math.random()*100)
    return {...object, uid}
  
  }