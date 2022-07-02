import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import {
  getArtworks,
  prepareUrlSearch,
  prepareUrlPagination,
} from "../functions/functions";
import {
  Grid,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
  TextField,
  Pagination,
} from "@mui/material";
import Preloader from "./Preloader";

const TablesArtworks = () => {
  const base_url = "https://api.artic.edu/api/v1/artworks";
  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState({});

  const updateArtworks = (url) => {
    getArtworks(url)
      .then((data) => {
        setArtworks(data.data);
        setPage(data.pagination);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Paginacion

  useEffect(() => {
    getArtworks(base_url).then((data) => {
      setArtworks(data.data);
      setPage(data.pagination);
    });
  }, []);

  const onPageChange = (event, value) => {
    updateArtworks(prepareUrlPagination(value));
  };

  //Busqueda

  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    setSearch(e.target.value);
    updateArtworks(prepareUrlSearch(e.target.value));
    const value = e.target.value;
    if (value.trim() === "") {
      getArtworks(base_url)
        .then((data) => {
          setArtworks(data.data);
          setPage(data.pagination);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //Construccion de tabla MUI

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: "none",
    },
  }));

  return (
    <>
      <Grid container justifyContent="start" alignItems="start">
        <div className="search-container">
          <TextField
            color="secondary"
            id="outlined-basic"
            label="Búsqueda"
            variant="outlined"
            value={search}
            onChange={onSearch}
          />
        </div>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow className="table-row">
                <StyledTableCell align="center">
                  <p>TITULO</p>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <p>ARTISTA</p>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <p>ORIGEN</p>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <p>FECHA</p>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <>
                {artworks ? (
                  artworks.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        <a href={`/artwork/${row.id}`}>{row.title}</a>
                      </StyledTableCell>
                      {row.artist_title ? (
                        <StyledTableCell align="center">
                          {row.artist_title}
                        </StyledTableCell>
                      ) : (
                        <StyledTableCell align="center">
                          Anónimo
                        </StyledTableCell>
                      )}
                      <StyledTableCell align="center">
                        {row.place_of_origin}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.date_display}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                ) : (
                  <div className="center-preloader-table">
                    <Preloader />
                  </div>
                )}
              </>
            </TableBody>
          </Table>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="pagination-container"
          >
            <Pagination
              count={page.total_pages}
              color="secondary"
              onChange={onPageChange}
              className="pagination"
            />
          </Grid>
        </TableContainer>
      </Grid>
    </>
  );
};

export { TablesArtworks };
