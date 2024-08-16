import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Row, Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalPurchase = ({ book }) => {
    const [show, setShow] = useState(false);
    const [sum, setSum]=useState(0);
    const [qnt, setQnt]=useState({ qnt: 0 });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (e) => {
        const newQnt = { ...qnt, [e.target.name]: e.target.value };
        setQnt(newQnt);
        total(book.price, newQnt.qnt);
    };

    const total = (price, qnt) => {
        setSum(parseInt(price) * parseInt(qnt));
    };
    
    const onOrder =async ()=>{
        if(!window.confirm('도서를 주문하시겠습니까?')) return;
        //주문하기
        await axios.post('/')
    }


    return (
        <>
            <Button variant="outline-danger" className='me-2' onClick={handleShow}>
                바로구매
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>바로구매</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={5}>
                            <img src={book.bigimage || "http://via.placeholder.com/120x170"} width="100%" />
                        </Col>
                        <Col lg={7} className='align-center'>
                        <div className='mb-2'><b>{book.title}</b></div>
                        <div className='mb-2'> 저자: {book.author} </div>
                        <div className='mb-2'> 출판사: {book.publisher} </div>
                        </Col>
                    </Row>
                    <hr/>
                    
                    <InputGroup className='mb-4' size="sm">
                    <h5 className='me-5'> 가격: {book.fmtprice}원 </h5>
                    <h5 className='me-3'>수량:</h5>  <Form.Control size="sm"  onChange={handleInputChange} value={qnt.qnt} name="qnt" type="number" min="0"/>
                    </InputGroup>
                    <h4>총 금액: {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="warning">주문하기</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalPurchase