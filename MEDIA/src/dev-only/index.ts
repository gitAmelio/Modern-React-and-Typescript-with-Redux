// DEV ONLY!!!
export const pause = (duration: number) => {
  return new Promise((resolve)=>{
    setTimeout(resolve, duration);
  })
}