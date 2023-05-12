import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import coworkImage from "../../static/cowork.jpeg";
import styled from "styled-components";
import { gray00 } from "../../utils";

const StyledCard = styled(Card)`
  &:hover {
    background-color: ${gray00};
    cursor: pointer;
  }
`;

export const CoworkCard = ({ description, url }) => {
  return (
    <StyledCard sx={{ display: "flex", height: "160px", marginBottom: "16px" }}>
      <CardMedia
        component="img"
        sx={{ width: 160 }}
        image={coworkImage}
        alt="Live from space album cover"
      />

      <Box sx={{ display: "flex", flexDirection: "column", width: "600px" }}>
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
    </StyledCard>
  );
};
