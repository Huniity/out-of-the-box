

import type { EventModalProps } from "../../../types/modal";
import EventView from "./EventView";
import EventForm from "./EventForm";

const EventModal = (props: EventModalProps) => {
    if (props.mode === "view") {
        return (
            <EventView
                row={props.row}
                onClose={props.onClose}
                formatValue={props.formatValue}
            />
        );
    }

    return (
        <EventForm
            open={props.open}
            onClose={props.onClose}
            onSave={props.onSave}
            initial={props.initial ?? undefined}
            fields={props.fields}
        />
    );
};

export default EventModal;