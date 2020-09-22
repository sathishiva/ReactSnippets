import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import AlarmOn from "@material-ui/icons/AlarmOn";
import AlarmOff from "@material-ui/icons/AlarmOff";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#eaeaea",
    margin: "1rem"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  code: {
    backgroundColor: "#ffffff"
  },
  actions: {
    backgroundColor: "#dadada"
  }
}));

export default function JSArrayCards({ method }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid>
      <Card className={classes.root}>
        <CardHeader title={method.name} subheader={method.syntax} />
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Returns: {method.returns}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {method.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.actions}>
          <IconButton aria-label="is Mutates">
            {method.isMutates ? (
              <AlarmOn aria-label="mutates" />
            ) : (
              <AlarmOff aria-label="do not mutates" />
            )}
          </IconButton>
          {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
          <Typography variant="body2" color="textSecondary" component="p">
            {method.category.toUpperCase()} METHOD
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.code}>
            <Typography paragraph>code will go here...</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
