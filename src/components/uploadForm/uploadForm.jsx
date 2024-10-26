import { useState } from 'react';
import printImage from '../../assets/docimg.jpg'
import './uploadForm.css'
function UploadForm({ setDocument }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (file && file.type === "application/pdf") {
      setDocument(URL.createObjectURL(file)); // Create a Blob URL
       setFileName(file.name);
      setErrorMessage(""); // Clear any error messages
  } else {
      setErrorMessage("Please upload a valid PDF file.");
      setDocument(null); // Reset the document if invalid
  }
};

  return (
    <div className="row justify-content-center mt-4">
       
    <div className="col-md-6 ">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-7">
          <h2 className="card-title">Documents</h2>
          <ul className="list-unstyled ">
            <li >✨ Price starting at ₹3/page</li>
            <li>✨ Paper quality: 70 GSM</li>
            <li>✨ Single side prints</li>
          </ul>
    
          {/* Upload Button */}
          <div className="upload-form">
        <input 
          type="file" 
          id="file-upload" 
          style={{ display: 'none' }} 
          accept="application/pdf" 
          onChange={handleUpload} 
        />
        <label 
          htmlFor="file-upload" 
          className=" upload-label  btn btn-success mt-3" 
           
        >
          Upload PDF
        </label>
        {fileName && <p>Selected File: {fileName}</p>}
      </div>
      </div>
        {/* Image Section */}
        <div className="col-5">
                  <img 
                    src={printImage} 
                    alt="Documents Preview" 
                    className="img-fluid"
                    style={{ width: '100%' }}
                  />
                </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default UploadForm;

