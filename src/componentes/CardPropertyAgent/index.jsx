import { Card, CardMedia } from "@mui/material";

export default function CardPropertyAgent({ images, state }) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia component="img" all={state} image={images[0]} />
    </Card>
  );
}
