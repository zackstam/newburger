import React from "react";
import styles from "./BuildControls.module.scss";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const BuildControls = props => {
  return (
    <div className={styles.BuildControls}>
      <p>Current Price: {props.price.toFixed(2)}</p>
      {controls.map(ctrl => (
        <BuildControl
          disabled={props.disabled[ctrl.type]}
          removed={() => props.ingredientRemoved(ctrl.type)}
          added={() => props.ingredientAdded(ctrl.type)}
          key={ctrl.label}
          label={ctrl.label}
        />
      ))}
      <button disabled={!props.purchaseable} 
              className={styles.OrderButton}
              onClick={props.ordered}>
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
