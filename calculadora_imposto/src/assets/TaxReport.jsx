/* eslint-disable react/prop-types */
import { Container, Typography } from "@mui/material";

function TaxReport({ taxData }) {
  return (
    <Container>
      <Typography variant='h5'>Relatório de impostos</Typography>
      <Typography variant='body1'>Nome: {taxData.name}</Typography>
      <Typography variant='body1'>Idade: {taxData.age} anos</Typography>
      <Typography variant='body1'>Renda:
        {parseFloat(taxData.income).toLocaleString('pr-BR', {
        style: 'currency',
        currency: 'BRL',
      })}</Typography>
      <Typography variant='body1'>Imposto a pagar: {parseFloat(taxData.tax).toLocaleString('pr-BR', {
        style: 'currency',
        currency: 'BRL',
      })}</Typography>
    </Container>
  )
}

export default TaxReport