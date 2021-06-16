import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  Typography,
  Button,
  CardContent,
} from "@material-ui/core";
import useStyles from "./styles";

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={item.media.source}
        alt={item.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5"> {item.name}</Typography>
          <Typography variant="subtitle1" color="secondary">
            {item.price.formatted_with_symbol}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
