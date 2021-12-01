import { Button, Container, Col, Row } from 'react-bootstrap';



function header({ title, showTask, showAdd }) {

  const onClick = (e) => {
    console.log(e)
    }
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={8} style={{ display: "inline-flex", padding: "15px", alignItems: "center", justifyContent: "center" }}>
                    <h1>{title}</h1>
                    <Button onClick={showTask} variant={showAdd ? "danger" : "primary"} style={{ marginLeft: "40px" }}>{showAdd ? "Close" : "Add"}</Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}





header.defaultProps = {
    title: "Task Tracker"
}


//CSS in JS
// const headingStyle ={
//     color: "red",
//     backgroundColor: "black",
// }

export default header
