import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Powered By</span>
        <a
          key="website"
          href="https://reactavancado.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Avançado
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;