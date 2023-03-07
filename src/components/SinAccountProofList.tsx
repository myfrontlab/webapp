import {
  useContext,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from "react";
import { observer } from "mobx-react-lite";
import { Card, CardHeader, CardBody, CardFooter, Button, Video, Anchor } from "grommet";
import { Favorite, Next, ShareOption } from "grommet-icons";
import { Col, Container, Row } from "reactstrap";
import Top from "./Top";
import SinAccountProofStore from "../stores/SinAccountProofStore";

const minioBaseUrl = "https://minio-api.vnmntn.com";

const SinAccountProofList = () => {
  const sinAccountProofStore = useContext(SinAccountProofStore);
  const { sinaccountproof, loading } = sinAccountProofStore;
  useEffect(() => {
    sinAccountProofStore.loadNextSinAccountProof("-");
  }, [sinAccountProofStore.loadNextSinAccountProof]);

  return (
    <>
      <Top />
      <Container>
      <Row className="vh-100">
        {loading || sinaccountproof === null ? null : (
          <Col
            lg="10"
            md="10"
            sm="12"
            className="offset-lg-1 offset-md-1 mx-auto my-auto"
          >
            <Card background="light-1" >
              <Video
                playsInline
                autoPlay={true}
                poster={minioBaseUrl + "/" + sinaccountproof.url}
                src={minioBaseUrl + "/" + sinaccountproof.url}
              />
              <CardHeader pad="medium">{sinaccountproof.title}</CardHeader>
              <CardBody pad="medium">{sinaccountproof.description}</CardBody>
              <CardFooter pad={{ horizontal: "small" }} background="light-2">
                <Button icon={<Favorite color="red" />} hoverIndicator />
                <Button className="position-fixed bottom-0 end-0" icon={<Next color="plain" />} hoverIndicator onClick={e => sinAccountProofStore.loadNextSinAccountProof(sinaccountproof.updated_on)} />
              </CardFooter>
            </Card>
          </Col>
        )}
      </Row>
      </Container>
    </>
  );
};

export default observer(SinAccountProofList);
