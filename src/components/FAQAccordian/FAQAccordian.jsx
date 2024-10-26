import Accordion from 'react-bootstrap/Accordion';
import './FAQAccordian.css'

export default function FAQAccordian(){
    const faqs = [
        { question: "Accordion Item #1", answer: "Your answer here." },
        { question: "Accordion Item #2", answer: "Your answer here." },
        { question: "Accordion Item #3", answer: "Your answer here." },
        { question: "Accordion Item #4", answer: "Your answer here." },
        { question: "Accordion Item #5", answer: "Your answer here." },
        { question: "Accordion Item #6", answer: "Your answer here." },
    ];
    
   
    return (
        <div className="accordion mt-4">
            <h5>FAQs</h5>
            <Accordion defaultActiveKey="0">
        {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
        ))}
    </Accordion>
        </div>
      );
}