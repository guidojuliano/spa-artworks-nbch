import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { allArtowrks } from "../functions/functions";
import { Grid } from "@mui/material";
import Preloader from "./Preloader";
import { PaginationArtworks } from "./PaginationArtworks";

const TablesArtworks = () => {
  const [artworks, setArtworks] = useState(null);
  

  useEffect(() => {
    allArtowrks().then((data) => {
      setArtworks(data);
      console.info(data);
    });
  }, []);


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
      border: 0,
    },
  }));

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">TITULO</StyledTableCell>
              <StyledTableCell align="center">ARTISTA</StyledTableCell>
              <StyledTableCell align="center">ORIGEN</StyledTableCell>
              <StyledTableCell align="center">FECHA</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artworks ? (
              artworks?.data?.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    <a href={`/artwork/${row.id}`}>{row.title}</a>
                  </StyledTableCell>
                  <StyledTableCell>{row.artist_title}</StyledTableCell>
                  <StyledTableCell>{row.place_of_origin}</StyledTableCell>
                  <StyledTableCell>{row.date_display}</StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <div className="center-preloader-table">
                <Preloader />
              </div>
            )}
            <PaginationArtworks />
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export { TablesArtworks };
