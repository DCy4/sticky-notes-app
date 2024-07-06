import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>David Calle Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
