import React, {useState} from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

function UploadButton(props) {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    uploadBytes(ref(getStorage(), props.path), file).then((snapshot) => {
      props.state(snapshot);
      console.log("test");
    })
  }

  return (
    <div className="resume-container">
        <form id="file-select" onSubmit={handleSubmit}>
          <input id="select" type="file" onChange={handleChange}/>
          <button id="upload" type="submit">Upload</button>
        </form>
    </div>
  );
}

export default UploadButton;