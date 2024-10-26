import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Button,Form, Card } from 'react-bootstrap';
import { useState,useEffect } from 'react';
 import './documentPreview.css'
import { PdfJs } from '@react-pdf-viewer/core';


function DocumentPreview({ document }) {
  const [numPages, setNumPages] = useState(1);
  const [numCopies, setNumCopies] = useState(1);
  const [colorMode, setColorMode] = useState('bw'); // default to black & white
  
  useEffect(() => {
    if (document) {
      const loadPDF = async () => {
        const loadingTask = PdfJs.getDocument(file);
        const pdf = await loadingTask.promise;
        setNumPages(pdf.numPages);  // Get the total number of pages
      };
      
      loadPDF();
    }
  }, [document]);

  const pricePerPage = colorMode === 'bw' ? 2 : 5;
  const totalPrice = numCopies * numPages * pricePerPage;

//   const handleNumPagesChange = (e) => {
//     const pages = Number(e.target.value) || 1; // Default to 1 if NaN
//     setNumPages(pages);
//     onChangeSettings(pages, colorMode);
// };


//   const handleColorModeChange = (e) => {
//     setColorMode(e.target.value);
//     onChangeSettings(numPages, e.target.value);
//   };

  return (
    <div className="document-preview-container row   ">
      
      <div className={colorMode=='color'?'pdf-viewer-wrapper col-5':'pdf-viewer-wrapper col-5 bw-filter'}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
        <Viewer fileUrl={document} 
         />
      </Worker>
      </div>

      
      <div className="customization col-7 justify-content-center align-self-center mobile-opt ">
        
      <Form.Group>
      <Form.Label>Number of Copies</Form.Label>
      <div className='d-flex mobile-opt'>
           <Button
              variant="outline-dark"
              onClick={() => setNumCopies(numCopies > 1 ? numCopies - 1 : 1)}
          >
              -
          </Button>
          <Form.Control
              type="number"
              value={numCopies}
              onChange={(e) => setNumCopies(Number(e.target.value))}
              style={{ width: '50px', textAlign: 'center' }}
          />
          <Button variant="outline-dark" onClick={() => setNumCopies(numCopies + 1)}>
              +
          </Button>
      </div>
      </Form.Group>

      <Form.Group className="mt-3">
          <Form.Label>Choose Print Color</Form.Label>
          <div className="d-flex mobile-opt">
              <Button
                  variant={colorMode === 'color' ? 'dark' : 'outline-dark'}
                  className="me-2 mobile-opt"
                  onClick={() => setColorMode('color')}
              >
                  Color 
              </Button>
              <Button
                  className="mobile-opt"
                  variant={colorMode === 'bw' ? 'dark' : 'outline-dark'}
                  onClick={() => setColorMode('bw')}
              >
                  B & W 
              </Button>
          </div>
      </Form.Group>

      <Form.Group className="mt-3">
          <Form.Label>Choose Print Orientation</Form.Label>
          <div className="d-flex mobile-opt">
              <Button variant="outline-dark mobile-opt" className="me-2">
                  Portrait
              </Button>
              <Button variant="outline-dark mobile-opt">Landscape</Button>
          </div>
      </Form.Group>
      <Card className="sticky-bottom-card">
      <div className="d-flex justify-content-between align-items-center mx-2 my-2">
                            <p className="mb-0"><strong>Total: ₹{totalPrice}</strong></p>
                            <Button variant="success"  >Proceed to Payment</Button>
                        </div>
      </Card>
      

    </div>
      </div>
      
  );
}

export default DocumentPreview;
{/* <label>
Number of Pages:
<input type="number" value={numPages} onChange={handleNumPagesChange} />
</label>

<label>
Color Mode:
<select value={colorMode} onChange={handleColorModeChange}>
  <option value="bw">Black & White</option>
  <option value="color">Colored</option>
</select>
</label>
<div className="payment">
  <h3>Total Cost: ₹{payment}</h3>
  <button className="pay-button">Proceed to Payment</button>
</div> */}