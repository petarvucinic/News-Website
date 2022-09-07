import React from "react";
import { Card, Image, Text, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ data }) => {
  const navigate = useNavigate();

  // const slicingDescription = () => {
  //   const helper = data.description.slice(0, 100) + "...";
  //   return helper;
  // };

  return (
    <Card
      shadow="md"
      p="lg"
      radius="md"
      withBorder
      sx={{ height: "450px"}}
    >
      <Card.Section>
        <Image src={data.urlToImage} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={700}>{data.author}</Text>
        <Text>{data.date}</Text>
      </Group>

      <Text weight={400}>{data.title}</Text>

      <Text size="sm" color="dimmed">
        {data.description.length > 100
          ? data.description.substring(0, 100) + "..."
          : data.description}
      </Text>

      <Button
        sx={{  width: "100%"}}
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() =>
          navigate("/expand", {
            state: {
              image: data.urlToImage,
              author: data.author,
              title: data.title,
              description: data.description,
            },
          })
        }
      >
        READ FULL ARTICLE
      </Button>
    </Card>
  );
};

export default NewsCard;
