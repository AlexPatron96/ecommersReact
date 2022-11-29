return (
        <div className='contHome'>
            Home
            <Container>
                <Row>
                    <Col sm={8}>
                        sm=8
                    
                    </Col>
                    <Col sm={4}>
                        sm=4
                    
                    </Col>
                </Row>
            </Container>

            
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    value={inputSearch}
                    onChange={e => setInputSearch(e.target.value)}
                />
                {/* <Button onClick={( ) => dispatch(filterHeadLineThunk(inputSearch))} variant="outline-danger" id="button-addon1">
                    <i className='bx bx-search-alt bx-sm'></i>
                </Button> */}
                <Button onClick={searchProduct} variant="outline-danger" id="button-addon1">
                    <i className='bx bx-search-alt bx-sm'></i>
                </Button>
            </InputGroup>

            <div className='bodyhome'>
                <aside>
                    <div>
                        <Accordion className='acordion' defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>PRICE</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>CATEGORY</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup defaultActiveKey="#link1">
                                        {
                                            categories?.map(categiesItem => (
                                                <ListGroup.Item action
                                                    onClick={() => dispatch(getfilterThunk(categiesItem.id))}
                                                    className="colorList"
                                                    key={categiesItem.id}
                                                >
                                                    {categiesItem.name}
                                                </ListGroup.Item>
                                            ))
                                        }
                                        <ListGroup.Item action
                                            onClick={() => dispatch(getProductsThunk())}
                                            className="colorList"
                                        >
                                            All
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </aside>


                <div className='contCard-Product'>
                    {product?.map(productItem => (

                        <Card key={productItem.id} >
                            <div className='contLink'>
                                <Link to={`/product/${productItem.id}`} key={productItem.id} className='linkCard-ProductItem'>
                                    <Card.Img variant="top" src={productItem.productImgs[0]} />
                                    <Card.Body>
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{productItem?.title}</Tooltip>}>
                                            <span className="d-inline-block">
                                                <Card.Title className="text-secondary" style={{ pointerEvents: 'none' }}>
                                                    {
                                                        (productItem?.title).slice(0, (productItem?.title).length >= 20 ? 20 : (productItem?.title).length)
                                                    }{'...'}
                                                </Card.Title>
                                            </span>
                                        </OverlayTrigger>
                                    </Card.Body>
                                </Link>
                            </div>
                            <ListGroup.Item>{productItem.category.name}</ListGroup.Item>
                            <ListGroup.Item>{ }</ListGroup.Item>

                            <ListGroup.Item>$ {productItem.price}</ListGroup.Item>
                            <ListGroup className="list-group-flush blackFriday">
                                BLACK-FRIDAY
                            </ListGroup>
                        </Card>
                    ))}
                </div>
            </div>
            Home
        </div>
    );