import React,{useState,useEffect} from 'react'
import CgpaComponent from './CgpaComponent';
import {Container,Row,Col,Button} from 'react-bootstrap';
import './Cgpa.css'


function Cgpa(){

   const [cgpa,setCgpa] = useState(0);

   const [semester,setSemester] = useState(['semester No']);
   const [totalCredits,setTotalCredits]= useState([1]);
   const [totalSgpa,setTotalSgpa] = useState([0]);

   function handleAddSemester(){
       
       setSemester( (prevValues)=>{
         return [...prevValues,' '];
        })
       setTotalSgpa((prevValues) => [...prevValues,0]);
       setTotalCredits((prevValues) => [...prevValues,0])
   }
   function handleSgpa(event,i){
    
    let newSgpa = [...totalSgpa];
    newSgpa[i] = event.target.value;
    setTotalSgpa(newSgpa);
    console.log(totalSgpa);

     event.preventDefault();

   }
   function handleTotalCredits(event,i){
    
      let newTotalCredits = [...totalCredits];
      newTotalCredits[i] = event.target.value;
      setTotalCredits(newTotalCredits);

      event.preventDefault();
   }

   function calcCgpa(){
    let sumOfCredits = 0;
    let sumOfSgpa = 0  
    for (let i = 0 ; i<totalCredits.length ; i++){
  
        if (totalCredits[i]!==0){
          sumOfSgpa += (parseFloat(totalSgpa[i]) * parseFloat(totalCredits[i]));
          sumOfCredits += parseFloat(totalCredits[i]); 
        }
          
    }
    
    setCgpa(sumOfSgpa/sumOfCredits);

   }
   useEffect(()=>{
     calcCgpa();
   })

    return <Container>
      <Row className='align-items-center justify-content-center'>
       <div className='cgpa'> Cgpa : {cgpa}</div>
      </Row>
      <Row className='heading-row'>
        <Col className='headings'>Semester</Col>
        <Col className='headings'>Sgpa</Col>
        <Col className='headings'>Total Credits</Col>

      </Row>
      <Row className='align-items-center justify-content-center' >
    { semester.map((semester,i)=>{
      
        return <CgpaComponent key={i} index={i} handleTotalCredits={handleTotalCredits}
          handleSgpa={handleSgpa} totalCredits={totalCredits[i]}
          totalSgpa={totalSgpa[i]}
        />
     
    })

    }
      </Row>
      <Button variant='warning' className='add-btn'
        onClick={handleAddSemester}>+</Button>
    </Container>
}

export default Cgpa;