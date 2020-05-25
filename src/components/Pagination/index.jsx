import React from "react";

function Pagination() {
  return (
    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center pr-2 mt-3">
    <li className="page-item"><a className="page-link" href="#88">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#99">1</a></li>
    <li className="page-item"><a className="page-link" href="#88">2</a></li>
    <li className="page-item"><a className="page-link" href="#88">3</a></li>
    <li className="page-item"><a className="page-link" href="#88">Next</a></li>
  </ul>
</nav>
  );
}

export default Pagination;
