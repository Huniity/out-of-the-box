

export type ModalAction =
    | { mode: "closed" }
    | { mode: "view"; row: Record<string, unknown> }
    | { mode: "edit"; row: Record<string, unknown> }
    | { mode: "add" };

export type EventModalProps =
    | {
          mode: "view";
          row: Record<string, unknown>;
          onClose: () => void;
          formatValue: (val: unknown) => string;
      }
    | {
          mode: "add" | "edit";
          open: boolean;
          onClose: () => void;
          onSave: (data: Record<string, unknown>) => Promise<void>;
          initial: Record<string, unknown> | null;
          fields?: string[];
      };