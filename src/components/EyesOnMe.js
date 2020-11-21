// Code EyesOnMe Component Here

const onBlur = () => {return console.log('Hey! Eyes on me!')}
const onFocus = () => {return console.log('Good')}
export default const EyesOnMe = () => {
  
  return <button onBlur = {handleOnBlur} onFocus = {handleOnFocus}/>
}
