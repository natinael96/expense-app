import React, { useEffect } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import AddTransaction from './AddTransaction';
import Balance from './Balance';
import Expenses from './Expenses';
import Income from './Income';
import TransactionList from './TransactionList';

export default function MainContainer() {
  useEffect(() => {
    // add overflow hidden in body class
    document.body.classList.add('overflow-hidden');
    document.getElementById('transactionList').classList.add('overflow-y');
    document.getElementById('main').classList.add('h-75');
    document.getElementById('mainRow').classList.add('h-100');

    if (window.matchMedia('screen and (max-width: 768px)').matches) {
      document.getElementById('main').classList.remove('h-75');
      document.getElementById('transactionList').classList.remove('overflow-y');
      document.body.classList.remove('overflow-hidden');
      document.getElementById('mainRow').classList.remove('h-100');
    }

    //simply called when leave|transition link in order to remove overflow-hidden
    return () => {
      console.log('leave');
      document.body.classList.remove('overflow-hidden');
      document.getElementById('main').classList.remove('h-75');
    };
  }, []);

  return (
    <>
      <Row id='mainRow' className='gx-5 h-100'>
        <Col md={8} id='main'>
          <h3 className='mt-4 text-secondary fw-bold'>Overview</h3>
          <Row className='my-4 gx-2'>
            <Col md={4} xs={12} className="mb-3">
              <Card className='p-3 rounded shadow-sm h-100'>
                <Balance />
              </Card>
            </Col>
            <Col md={4} xs={12} className="mb-3">
              <Card className='p-3 rounded shadow-sm h-100'>
                <Income />
              </Card>
            </Col>
            <Col md={4} xs={12} className="mb-3">
              <Card className='p-3 rounded shadow-sm h-100'>
                <Expenses />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card className='p-4 rounded shadow-sm mb-3'>
                <AddTransaction />
              </Card>
            </Col>
          </Row>
        </Col>

        <Col md={4} >
          <h3 className='mt-sm-0 text-secondary fw-bold'>History</h3>
          <Card className='p-3 rounded shadow-sm h-75'>
            <TransactionList />
          </Card>
        </Col>
      </Row>
    </>
  );
}
