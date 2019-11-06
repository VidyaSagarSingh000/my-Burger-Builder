import React from "react";
import classes from "./BuiltControls.module.css";
import BuiltControl from "./BuiltControl/BuiltControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const builtControls = props => {
  return (
    <div className={classes.BuiltControls}>
      <p>
        <strong>Current Price: $ {props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuiltControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        {props.isAuth ? "ORDER NOW" : "SIGNUP TO ORDER"}
      </button>
    </div>
  );
};
export default builtControls;
