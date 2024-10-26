import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import UploadForm from './components/uploadForm/uploadForm';
import DocumentPreview from './components/documentPreview/documentPreview';
import Features from './components/features/features';
import FAQAccordian from './components/FAQAccordian/FAQAccordian';
function App() {
  const [document, setDocument] = useState(null);

  return (
    <>
      
      
      <div className="app">
      {!document ? (
        <div className="">
        <h1 className="row justify-content-center store-title">Print Store</h1>
        <UploadForm  setDocument={setDocument} />
        <Features />
        <FAQAccordian/>
        </div>
      ) : (
        <div className="preview-and-payment">
          <DocumentPreview document={document} />

        </div>
      )}
    </div>
      
    </>
  )
}

export default App
