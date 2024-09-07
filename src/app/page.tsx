"use client";
import { Container, Title, Pagination, Group } from "@mantine/core";
import Footer from "@components/Footer";
import YourReview from "@components/YourReview";
import Review from "@components/Review";

export default function Home() {

  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <YourReview/>

      <Review name="Elon Musk" rating={5} comment="Best pizza in  this world. I give you X score."/>
      <Review name="Mark Zuck" rating={4} comment="My favourite part is pepperoni"/>

      <Group justify="center" mt="md">
          <Pagination total={20} siblings={1} color="orange" />
      </Group>

      <Footer year="2024" fullName="Natchanan Phattarapraditkul" studentId="660612143"/>
      
    </Container>
  );
}