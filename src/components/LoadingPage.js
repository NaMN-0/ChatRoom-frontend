import React, { useState, useEffect } from "react";

import "./loadingPage.css"

import { BiLoaderCircle } from "react-icons/bi";

function LoadingPage(props) {
  return (
		<>
      <div className="loadingDiv m-0 p-0 d-flex align-items-center justify-content-center">
        {/* <BiLoaderCircle className="loader" size={25}/> */}
        <div className="loader loader1 d-flex align-items-center justify-content-center">
          <div className="loader loader2 mx-2"></div>
        </div>
      </div>
    </>
	);
}

export default LoadingPage;