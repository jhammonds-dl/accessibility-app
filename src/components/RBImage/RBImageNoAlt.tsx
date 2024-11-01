import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { imageList } from "../../assets/imageList";

export default function RBImageNoAlt() {
  return (
    <Container>
      <Row lg={6}>
        {imageList.map((item) => (
          <Col xs={6} md={4} key={item.img}>
            <Image src={item.img} fluid width={500} tabIndex={0} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
