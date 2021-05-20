import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    Typography
} from "@material-ui/core";
import React, {useState} from "react";
import { colors } from "../../theme";
import DogDetails from "./DogDetails";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    avatar: {
        backgroundColor: colors.primaryLighten30,
    },
}));

function DogCard({ dog, index}) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const backgroundColor = index % 2 === 0 ? colors.primaryLighten30 : colors.primary;
    return (
        <Grid item key={`${dog.get('name')}-${dog.get('id')}`} xs={12} sm={6} md={4}>
            <Card className={classes.card} data-testid={dog.get('name')}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" style={{ color: 'white', backgroundColor: backgroundColor }}>
                            {dog.get('name').charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    title={dog.get('name').toUpperCase()}
                    subheader= {`Life expectancy: ${dog.get('lifeExpectancy')}`}
                />
                <CardContent className={classes.cardContent}>
                    <Typography style={{ color: colors.grey800 }}>
                        {`Height: ${dog.get('height')}`}
                    </Typography>
                    <Typography style={{ color: colors.grey800 }}>
                        {`Weight: ${dog.get('weight')}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => setOpen(true)}>
                        <VisibilityIcon style={{ marginRight: '5px' }}/>
                        View details
                    </Button>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                </CardActions>
            </Card>
            <DogDetails onClose={() => setOpen(false)} open={open} dog={dog} />
        </Grid>
    )
}

DogCard.propTypes = {
    dog: ImmutablePropTypes.map.isRequired,
    index: PropTypes.number.isRequired,
}

export default DogCard;
