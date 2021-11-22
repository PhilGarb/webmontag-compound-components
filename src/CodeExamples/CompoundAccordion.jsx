import * as React from "react";
import { body } from "../sections/shared";

// ------------------------------------------------------------------
// Context

const AccordionContext = React.createContext(undefined);

const useAccordionContext = (title) => {
  const context = React.useContext(AccordionContext);

  if (!context)
    throw new Error(
      `The useAccordionContext Hook can only be used inside of an Accordion Component`
    );

  return {
    open: context.openItem === title,
    toggleItem: () => context.toggleItem(title),
  };
};

// ------------------------------------------------------------------
// Implenementation

export function Accordion({ children }) {
  const [openItem, setOpenItem] = React.useState("");

  const toggleItem = (newOpenItem) =>
    setOpenItem((oldOpenItem) =>
      oldOpenItem === newOpenItem ? "" : newOpenItem
    );

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div style={{ overflowY: "auto", height: "100%" }}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function Item({ children, title, className, style }) {
  const { toggleItem, open } = useAccordionContext(title);

  return (
    <details id="accordion-item" open={open} onClick={toggleItem}>
      <summary
        className={className}
        style={style}
        onClick={(event) => event.preventDefault()}
      >
        {title}
      </summary>
      {children}
    </details>
  );
}

// ------------------------------------------------------------------
// Nutzung

export function CompoundAccordion() {
  return (
    <Accordion>
      <Item
        className="small-heading"
        style={{ fontSize: "2em", textDecoration: "underline" }}
        title="1. Punkt"
      >
        {body}
      </Item>
      <Item className="small-heading" title="2. Punkt">
        {body}
      </Item>
      <Item className="small-heading" title="3. Punkt">
        {body}
      </Item>
    </Accordion>
  );
}
