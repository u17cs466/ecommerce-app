import React ,{useState} from 'react';

function Sigin() {
const [formData, setFormData] = useState({})
const handleClick=(e)=>{
const newForm = {...formData}
newForm[e.target.name]= e.target.value;
setFormData(newForm)
console.log(formData)

}
  return (
    <div className=" px-10 py-12 mt-10 bg-gray-100 space-y-3 rounded-md max-w-md mx-auto ">
      <form onChange={handleClick} >
      <div className=" space-x-4  h-11">
<label className="p-2">username</label>
<input className=" rounded-sm border-2 m-2 outline-none"placeholder="username" name="name" id="name" required />
      </div>
      <div className=" space-x-4 h-11 ">
        <label className="p-2">password</label>
        <input className=" rounded-sm border-2 m-2 outline-none" placeholder="password" name="password" id="password" required />
      </div>
      <div><button className="h-9 w-20 bg-gray-500" type="submit" >login</button></div>
      </form>
    </div>
  );
}

export default Sigin;
