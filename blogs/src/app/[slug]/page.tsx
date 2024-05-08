"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Container } from "react-bootstrap";
import useSWR, { Fetcher } from "swr";
import axios from "axios";

const ViewDetal = ({ params }: { params: { slug: number } }) => {
  const router = useRouter();
  const fetcher: Fetcher<IBlog> = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND}/blogs/${params.slug}`,
    fetcher
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleBack = () => {
    router.push("/");
  };
  return (
    <Container style={{ marginTop: 20, marginBottom: 20 }}>

      <Card>
        <Card.Body>
          <Card.Title>{data?.title}</Card.Title>
          <Card.Text>{data?.content}</Card.Text>
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={() => handleBack()} style={{marginTop:5}}>
        BACK HOME
      </Button>
    </Container>
  );
};

export default ViewDetal;
