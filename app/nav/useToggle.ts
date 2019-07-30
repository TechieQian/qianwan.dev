import React, { useState } from "react";

export default function Toggle(): [boolean, Function] {
  const [toggleState, setToggleState] = useState(false);

  function toggle() {
    setToggleState(toggleState === false ? true : false);
  }

  return [toggleState, toggle];
}
