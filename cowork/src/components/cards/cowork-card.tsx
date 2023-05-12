import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import coworkImage from "../../static/cowork.jpeg";
import styled from "styled-components";
import { gray00, spaceL } from "../../utils";
import { Button, CardActions } from "@mui/material";
import { useMutation } from "@apollo/client";
import { VOTE_MUTATION } from "../../graphql/mutations";

const StyledCard = styled(Card)`
  &:hover {
    background-color: ${gray00};
    cursor: pointer;
  }
`;
const StyledCardActions = styled(CardActions)`
  margin-right: ${spaceL};
`;

export const CoworkCard = ({ companyName, url, votes, postedBy, id }) => {
  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      linkId: id,
    },
  });

  console.log(votes, id);

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
            {companyName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {url}
          </Typography>
          <div className="f6 lh-copy gray">
            {votes?.length} votes | by {postedBy ? postedBy.name : "Unknown"}{" "}
          </div>
        </CardContent>
      </Box>
      <StyledCardActions>
        <Button size="small" variant="contained" onClick={() => vote()}>
          Book
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
};
