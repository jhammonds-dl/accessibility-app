import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { imageList } from "../../assets/imageList";

export default function RBImage() {
  return (
    <Container>
      <Row lg={6}>
        {imageList.map((item) => (
          <Col xs={6} md={4} key={item.img}>
            <Image
              src={item.img}
              alt={item.title}
              fluid
              width={500}
              tabIndex={0}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
