import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { colors } from "../../theme";
import DogDetails from "./DogDetails";
import messages from "../../constants/messages";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  avatar: {
    backgroundColor: colors.primaryLighten30,
  },
}));

function DogCard({ dog, index, openDetails, onDelete }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const backgroundColor =
    index % 2 === 0 ? colors.primaryLighten30 : colors.primary;
  return (
    <Grid
      data-testid={`e2e-dog-master-name-${dog.get("name")}`}
      item
      key={`${dog.get("name")}-${dog.get("id")}`}
      xs={12}
      sm={6}
      md={4}
    >
      <Card className={classes.card} data-testid={dog.get("name")}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              style={{ color: "white", backgroundColor: backgroundColor }}
              data-testid={`e2e-dog-card-avatar-name-${dog.get('name')}`}
            >
              {dog.get("name").charAt(0).toUpperCase()}
            </Avatar>
          }
          title={dog.get("name").toUpperCase()}
          subheader={`${messages.dogCard.lifeExpectancy}: ${
            dog.get("lifeExpectancy") || "Not defined"
          }`}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            style={{ color: colors.grey800 }}
            data-testid={`e2e-dog-card-height-${dog.get('name')}`}
          >
            {`${messages.dogCard.height}: ${
              dog.get("height") || "Not defined"
            }`}
          </Typography>
          <Typography
            style={{ color: colors.grey800 }}
            data-testid={`e2e-dog-card-weight-${dog.get('name')}`}
          >
            {`${messages.dogCard.weight}: ${
              dog.get("weight") || "Not defined"
            }`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            data-testid={`e2e-dog-card-view-details-button-${dog.get('name')}`}
            onClick={() => setOpen(true)}
          >
            <VisibilityIcon style={{ marginRight: "5px" }} />
            {messages.dogCard.viewDetails}
          </Button>
          <Button
            size="small"
            color="primary"
            data-testid={`e2e-dog-card-edit-button-${dog.get('name')}`}
            onClick={() => openDetails(dog)}
          >
            {messages.dogCard.edit}
          </Button>
          <IconButton
            onClick={() => onDelete(dog)}
            data-testid={`e2e-dog-card-delete-button-${dog.get('name')}`}
          >
            <DeleteForeverIcon
              style={{ marginRight: "5px", color: "primary", fontSize: "24px" }}
            />
          </IconButton>
        </CardActions>
      </Card>
      <DogDetails onClose={() => setOpen(false)} open={open} dog={dog} />
    </Grid>
  );
}

DogCard.propTypes = {
  dog: ImmutablePropTypes.map.isRequired,
  index: PropTypes.number.isRequired,
  openDetails: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DogCard;
