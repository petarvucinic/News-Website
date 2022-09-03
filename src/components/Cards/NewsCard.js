import React from "react";
import { Card, Image, Text, Button, Group } from "@mantine/core";

const NewsCard = ({ data }) => {
  // <Grid>
  //     <Grid.Col md={6} lg={3}>
  //       1
  //     </Grid.Col>
  //     <Grid.Col md={6} lg={3}>
  //       2
  //     </Grid.Col>
  //     <Grid.Col md={6} lg={3}>
  //       3
  //     </Grid.Col>
  //     <Grid.Col md={6} lg={3}>
  //       4
  //     </Grid.Col>
  //   </Grid>
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={data.urlToImage} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={700}>{data.author}</Text>
        <Text>{data.date}</Text>
      </Group>
      <Text weight={400}>{data.title}</Text>

      <Text size="sm" color="dimmed">
        {data.description}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        READ FULL ARTICLE
      </Button>
    </Card>
  );
};

export default NewsCard;
