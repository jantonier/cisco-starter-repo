import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import doggy from '../assets/doggy.jpg'


function Cardss({ data }) {
    return (
        <div>
            <Card className='p-6 max-w-sm mx-auto bg-slate-600 rounded-xl shadow-lg flex items-center' style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src={doggy} height={50} width={50} className='h-13 w-13'/> */}
                <Card.Body>
                    <Card.Title className='text-center underline'>{data.tittle}</Card.Title>
                    <Card.Text className=' text-red-600'>
                        {data.description}
                    </Card.Text>
                    {/* <Button variant="primary">Cute Dog!</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cardss;