import { memo } from "react";
import { string } from "prop-types";
import { IcLogo } from "../assets/icons/IcLogo";

const Quote = ({ quote, author }) => (
  <>
    <IcLogo className="logo" />
    <blockquote className="blockquote">
      <span>
        <q className="quote-msg">{quote}</q>
        <footer className="blockquote-footer">
          <cite className="quote-author">&#8211; {author}</cite>
        </footer>
      </span>
    </blockquote>
  </>
);

Quote.propTypes = {
  quote: string,
  author: string
};

Quote.defaultProps = {
  quote: "",
  author: ""
};

const QuoteMemo = memo(Quote);
export { QuoteMemo as Quote };
