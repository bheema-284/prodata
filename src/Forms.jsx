import axios from 'axios';
import { useState, React } from 'react';
function BasicForm() { 
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    address: '',
    deportment: '',
    salary: '',
    materialstatus: '',
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    const url = 'http://localhost:3001/userss';
    axios.post(url, formData).then(() => {
      alert('Submitted successfully');
      console.log('Submitted successfully');
    });
  };
  document.getElementById('data');
  console.log(typeof formData);
   
  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          id="age"
          placeholder="Enter age"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>address</label>
        <textarea
          onChange={handleChange}
          id="address"
          cols="25"
          rows="4"></textarea>
      </div>
      <div>
        <label>Deportment</label>
        <select onChange={handleChange} id="deportment">
          <option value="Civil">Civil</option>
          <option value="Mech">Mech</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="IT">IT</option>
        </select>
      </div>
      <div>
        <label>Salary</label>
        <input
          type="salary"
          id="salary"
          placeholder="Enter salary"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Materialstatus</label>
        <input
          type="checkbox"
          id="materialstatus"
          placeholder="Enter materialstatus"
          onClick={handleChange}
        />
      </div>
      <div>
        <label>Email address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;


 // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [address, setAddress] = useState('');
  // const [deportment, setDeportment] = useState('');
  // const [salary, setSalary] = useState('');
  // const [materialstatus, setMaterialstatus] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

// const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };
  // const handleAgeChange = (event) => {
  //   setAge(event.target.value);
  // };
  // const handleAddressChange = (event) => {
  //   setAddress(event.target.value);
  // };
  // const handleDeportmentChange = (event) => {
  //   setDeportment(event.target.value);
  // };
  // const handleSalaryChange = (event) => {
  //   setSalary(event.target.value);
  // };
  // const handleMaterialstatusChange = (event) => {
  //   setMaterialstatus(event.target.value);
  // };
  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const url = 'http://localhost:3001/userss';
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       name,
  //       age,
  //       address,
  //       deportment,
  //       salary,
  //       materialstatus,
  //       email,
  //       password,
  //     }),
  //   };
  //   fetch(url, requestOptions)
  //     .then((response) =>alert('Submitted successfully'); console.log('Submitted successfully'))
  //     .catch((error) => console.log('Form submit error', error));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const url = 'http://localhost:3001/userss';
  //   const requestOptions = {
  //     name,
  //     age,
  //     address,
  //     deportment,
  //     salary,
  //     materialstatus,
  //     email,
  //     password,
  //   };
  //   axios.post(url, requestOptions).then(() => {
  //     alert('Submitted successfully');
  //     console.log('Submitted successfully');
  //   });
  // };
  // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label>Name</label>
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Enter Name"
    //       onChange={handleNameChange}
    //       value={name}
    //     />
    //   </div>
    //   <div>
    //     <label>Age</label>
    //     <input
    //       type="number"
    //       name="age"
    //       placeholder="Enter age"
    //       onChange={handleAgeChange}
    //       value={age}
    //     />
    //   </div>
    //   <div>
    //     <label>address</label>
    //     <textarea
    //       onChange={handleAddressChange}
    //       value={address}
    //       name="address"
    //       cols="25"
    //       rows="4"></textarea>
    //   </div>
    //   <div>
    //     <label>Deportment</label>
    //     <select
    //       onChange={handleDeportmentChange}
    //       value={deportment}
    //       name="deportment">
    //       <option value="Civil">Civil</option>
    //       <option value="Mech">Mech</option>
    //       <option value="CSE">CSE</option>
    //       <option value="ECE">ECE</option>
    //       <option value="IT">IT</option>
    //     </select>
    //   </div>
    //   <div>
    //     <label>Salary</label>
    //     <input
    //       type="salary"
    //       name="salary"
    //       placeholder="Enter salary"
    //       onChange={handleSalaryChange}
    //       value={salary}
    //     />
    //   </div>

    //   <div>
    //     <label>Materialstatus</label>
    //     <input
    //       type="checkbox"
    //       name="materialstatus"
    //       placeholder="Enter materialstatus"
    //       onClick={handleMaterialstatusChange}
    //       value={materialstatus}
    //     />
    //   </div>
    //   <div>
    //     <label>Email address</label>
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Enter email"
    //       onChange={handleEmailChange}
    //       value={email}
    //     />
    //   </div>
    //   <div>
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Enter password"
    //       onChange={handlePasswordChange}
    //       value={password}
    //     />
    //   </div>
    //   <button type="submit">Submit</button>
    // </form>