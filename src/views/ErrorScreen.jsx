import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../Components/Button";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <section id="error-page">
      <h1>Oh no!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button children={'Go to homepage'} type={'primary'} onClick={() => navigate('/home')} />
    </section>
  );
}