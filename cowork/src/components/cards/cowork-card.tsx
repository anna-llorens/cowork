import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import coworkImage from "../../static/cowork.jpeg";

export const CoworkCard = ({ description, url }) => {
  return (
    <Card sx={{ display: "flex", height: "160px", marginBottom: "16px" }}>
      <CardMedia
        component="img"
        sx={{ width: 160 }}
        image={coworkImage}
        alt="Live from space album cover"
      />

      <Box sx={{ display: "flex", flexDirection: "column", width: "350px" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {description}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {url}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
