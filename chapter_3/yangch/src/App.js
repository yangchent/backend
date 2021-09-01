import {useState, useEffect } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState();
  const [user, setUser]= useState();
  const [userList, setUserList]= useState([]);

  useEffect(() => {
    store();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
      const formData = new FormData();
        formData.append("image", image);
        fetch(`http://localhost:3000/user?name=${user}`, {
        method: "POST",
        body: formData,
    });setUserList([...userList, user])
  };
const store = ()=>{
  fetch('http://localhost:3000/user/list')
  .then((res) => res.json())
  .then((res) => {
   setUserList(res);
  })
}

  return (
    <div>
       <ul>
        {userList.map(a=> <li>{a}</li>)}
      </ul>
      <form>
      <input
        type="text"
        onChange={(event) => setUser(event.target.value)}
      />
      <input
        type="file"
        onChange={(event) => setImage(event.target.files[0])}
      />
      <button onClick={handleClick}>Send</button>
      </form>
    </div>
  );
}

export default App;
