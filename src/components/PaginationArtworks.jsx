import React from "react";
import "../App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const PaginationArtworks = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination d-flex justify-content-center">
        <Stack direction="row" spacing={3}>
          {prev ? (
            <li className="page-item">
              <Button
                variant="outlined"
                color="secondary"
                onClick={handlePrevious}
              >
                Anterior
              </Button>
            </li>
          ) : (
            <li className="page-item">
              <Button
                variant="outlined"
                color="secondary"
                onClick={handlePrevious}
                disabled
              >
                Anterior
              </Button>
            </li>
          )}
          {next ? (
            <li className="page-item">
              <Button variant="outlined" color="secondary" onClick={handleNext}>
                Siguiente
              </Button>
            </li>
          ) : (
            <li className="page-item">
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleNext}
                disabled
              >
                Siguiente
              </Button>
            </li>
          )}
        </Stack>
      </ul>
    </nav>
  );
};

export { PaginationArtworks };
