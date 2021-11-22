import * as Collapsible from "@radix-ui/react-collapsible";
import classes from "./notes.module.css";
import { ChevronLeft } from "react-feather";

type Props = { children: React.ReactNode };

export function Notes({ children }: Props) {
  return (
    <Collapsible.Root>
      <div className={classes.container}>
        <Collapsible.Trigger asChild>
          <button
            className={`${classes.trigger} shadow-left`}
            style={{ zIndex: 1 }}
          >
            <ChevronLeft />
            Notes
          </button>
        </Collapsible.Trigger>
        <Collapsible.Content className={`${classes.content} shadow-left`}>
          <div style={{ padding: "20px", width: "360px" }}>{children}</div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
}
