import classes from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
      <div className={`${classes['not-found-page-container']}`}>
        <h1>Page not found</h1>
        <Link to="/">
          <button type="button" className="btn btn-primary">
            Go Home
          </button>
        </Link>
      </div>
  );
}
