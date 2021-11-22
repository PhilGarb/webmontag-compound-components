import * as React from "react";
import { body } from "../sections/shared";

export function Accordion({ items, itemClassName }) {
  const [openItem, setOpenItem] = React.useState("");

  const toggleItem = (newOpenItem) =>
    setOpenItem((oldOpenItem) =>
      oldOpenItem === newOpenItem ? "" : newOpenItem
    );

  return (
    <div style={{ overflowY: "auto", height: "100%" }}>
      {items.map((item) => {
        return (
          <details
            key={item.title}
            open={openItem === item.title}
            onClick={() => toggleItem(item.title)}
          >
            <summary
              className={itemClassName}
              onClick={(event) => event.preventDefault()}
            >
              {item.title}
            </summary>
            {item.body}
          </details>
        );
      })}
    </div>
  );
}

// ------------------------------------------------------------------
// Nutzung

export const items = [
  {
    title: "1. Punkt",
    body,
  },
  {
    title: "2. Punkt",
    body,
  },
  {
    title: "3. Punkt",
    body,
  },
];

export function FirstReactAccordion() {
  return <Accordion items={items} itemClassName="small-heading" />;
}
