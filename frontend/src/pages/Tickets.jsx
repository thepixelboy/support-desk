import { getTickets, reset } from "../features/tickets/ticketSlice";
import { useDispatch, useSelector } from "react-redux";

import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useEffect } from "react";

function Tickets() {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return <div>Tickets</div>;
}
export default Tickets;
