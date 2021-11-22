import * as React from "react";
import { body } from "../sections/shared";

type toggleItemFn = (newOpenItem: string) => void;
type AccordionContext =
  | { toggleItem: toggleItemFn; openItem: string }
  | undefined;

const AccordionContext = React.createContext<AccordionContext>(undefined);

const useAccordionContext = (title: string) => {
  const context = React.useContext(AccordionContext);

  if (!context)
    throw new Error(
      `The useAccordionContext Hook can only be used inside of an Accordion Component`
    );

  return {
    toggleItem: () => context.toggleItem(title),
    open: context.openItem === title,
  };
};

type AccordionProps = {
  children: React.ReactNode;
};

export function Accordion({ children }: AccordionProps) {
  const [openItem, setOpenItem] = React.useState("");

  const toggleItem: toggleItemFn = (newOpenItem) =>
    setOpenItem((oldOpenItem) =>
      oldOpenItem === newOpenItem ? "" : newOpenItem
    );

  return (
    <AccordionContext.Provider value={{ toggleItem, openItem }}>
      <div style={{ overflowY: "auto", height: "100%" }}>{children}</div>
    </AccordionContext.Provider>
  );
}

type ItemProps = {
  children?: React.ReactNode;
  title: string;
  className?: string;
};

export function Item({ children, title, className }: ItemProps) {
  const { toggleItem, open } = useAccordionContext(title);

  return (
    <details id="accordion-item" open={open} onClick={toggleItem}>
      <summary
        className={className}
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
      <Item className="small-heading" title="1. Punkt">
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
