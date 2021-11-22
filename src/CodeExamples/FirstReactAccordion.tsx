import * as React from "react";
import { body } from "../sections/shared";

type Item = { title: string; body: React.ReactNode; open?: boolean };

type Props = {
  items: Item[];
  itemClassName?: string;
};

export type openState = Record<string, boolean>;

export function createOpenState(items: Item[]) {
  let openState: openState = {};

  items.forEach((item) => (openState[item.title] = item.open || false));

  return openState;
}

export function updateOpenState(oldOpenState: openState, itemToOpen: string) {
  let newOpenState = {} as openState;

  Object.keys(oldOpenState).forEach((key) => {
    newOpenState[key] = false;
  });

  newOpenState[itemToOpen as string] = !oldOpenState[itemToOpen];

  return newOpenState;
}

export function Accordion({ items, itemClassName }: Props) {
  const [open, setOpen] = React.useState(createOpenState(items));

  return (
    <div style={{ overflowY: "auto", height: "100%" }}>
      {items.map((item) => {
        return (
          <details
            key={item.title}
            open={open[item.title]}
            onClick={() => setOpen(updateOpenState(open, item.title))}
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
    open: true,
  },
  {
    title: "3. Punkt",
    body,
  },
];

export function FirstReactAccordion() {
  return <Accordion items={items} itemClassName="small-heading" />;
}
