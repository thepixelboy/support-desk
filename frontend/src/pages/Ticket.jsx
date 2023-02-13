import { closeTicket, getTicket, reset } from "../features/tickets/ticketSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { useEffect } from "react";

function Ticket() {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ticketId } = params;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, message, ticketId]);

  // Close ticket
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    // dispatch(reset());
    toast.success("Ticket closed successfully");
    navigate("/tickets");
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <>
        <BackButton url="/tickets" />
        <h3>Something went wrong</h3>
      </>
    );
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/tickets" />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submited: {new Date(ticket.createdAt).toLocaleString("en-US")}
        </h3>
        <h3>Product: {ticket.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>

      {ticket.status !== "closed" && (
        <button onClick={onTicketClose} className="btn btn-block btn-danger">
          Close Ticket
        </button>
      )}
    </div>
  );
}
export default Ticket;
