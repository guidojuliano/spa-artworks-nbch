import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { allArtowrks } from "../functions/functions";

function TablesArtworks() {
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

  function createData(title, artist, origin, date, exhibition) {
    return { title, artist, origin, date, exhibition };
  }
  const [artworks, setArtworks] = React.useState(null);
  React.useEffect(() => {
    allArtowrks(setArtworks);
  }, []);

  const rows = [
    artworks.map((artwork) =>
      createData(
        artwork.title,
        artwork.artist_title,
        artwork.place_of_origin,
        artwork.date_display,
        artwork.exhibition_history
      )
    ),
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">TITULO</StyledTableCell>
              <StyledTableCell align="right">ARTISTA</StyledTableCell>
              <StyledTableCell align="right">ORIGEN</StyledTableCell>
              <StyledTableCell align="right">FECHA</StyledTableCell>
              <StyledTableCell align="right">EXHIBICION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artworks !== null
              ? rows.map((row) => (
                  <StyledTableRow key={row.title}>
                    <StyledTableCell component="th" scope="row">
                      {row.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.artist}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.origin}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.date}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.exhibition}
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              : "Loading..."}{" "}
            {/* preloader */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export { TablesArtworks };
