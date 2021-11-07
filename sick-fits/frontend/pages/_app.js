import React from "react";
import { Container } from "next/app";
import Page from "../components/Page";

const MyApp = ({ Component }) => {
  return (
    <Container>
      <Page>
        <Component />
      </Page>
    </Container>
  );
};

export default MyApp;
