import React from "react";

const PaginationArtworks = () => {
    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link">Anterior</button>
                </li>
                <li className="page-item">
                    <button className="page-link">Siguiente</button>
                </li>
            </ul>    
        </nav>
    )
}

export {PaginationArtworks};
