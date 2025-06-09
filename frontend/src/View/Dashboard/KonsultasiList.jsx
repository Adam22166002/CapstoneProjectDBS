import { useState } from "react";
import { Container, Row, Col, Card, Table, Button, Form, InputGroup, Badge, Pagination, Image } from 'react-bootstrap';
import { FaSearch, FaEdit, FaTrash, FaPlus, FaEye } from 'react-icons/fa';

const KonsultasiList = () => {
    const [konsultasi, setKonsultasi] = useState(null);
    const [renderkonsultasi, setRenderKonsultasi] = useState(null);


    return (
        <Container fluid>
            <Row className="mb-4">
                <Col>
                    <h2 className="mb-3">Data Konsultasi Penyakit User</h2>
                    <Card>
                        <Card.Body>
                            <Row className="mb-3">
                                <Col md={5}>
                                    <InputGroup>
                                        <Form.Control
                                            placeholder="cari...."
                                        />
                                        <Button variant="outline-secondary">
                                            <FaSearch />
                                        </Button>
                                    </InputGroup>
                                </Col>
                                <Col md={3}>
                                    <Form.Select>
                                        <option value="">Filter Kategori</option>
                                        {/* {kategoris ? kategoris.map(value => (
                                            <option value={value.id} key={value.id}>{value.nama_kategori}</option>
                                        )) : <></>} */}
                                    </Form.Select>
                                </Col>
                            </Row>

                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nama User</th>
                                        <th>Prediksi Penyakit</th>
                                        <th>Saran</th>
                                        <th>Tanggal</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { renderkonsultasi?.map((value, index) => (
                                        <tr key={value?.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <Image src={value?.images} rounded width={50} height={50} />
                                            </td>
                                            <td>{value?.judul}</td>
                                            <td>{value?.category}</td>
                                            <td>{value?.author}</td>
                                            <td>
                                                {new Date(value?.createdAt).toLocaleDateString('id-ID', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </td>
                                            <td>
                                                <Badge bg={
                                                    value?.status === 'publish' ? 'success' :
                                                        value?.status === 'draft' ? 'secondary' : 'warning'
                                                }>
                                                    {value?.status}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Button variant="info" size="sm" className="me-1">
                                                    <FaEye />
                                                </Button>
                                                <Button variant="warning" size="sm" className="me-1" onClick={() => handleEdit(value.id)}>
                                                    <FaEdit />
                                                </Button>
                                                <Button variant="danger" size="sm" onClick={() => handleDelete(value?.id)}>
                                                    <FaTrash />
                                                </Button>
                                            </td>
                                        </tr>
                                    )) }
                                </tbody>
                            </Table>

                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>Menampilkan 1-5 dari 5 entries</div>
                                <Pagination>
                                    <Pagination.Prev disabled />
                                    <Pagination.Item active>{1}</Pagination.Item>
                                    <Pagination.Next disabled />
                                </Pagination>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};


export default KonsultasiList;