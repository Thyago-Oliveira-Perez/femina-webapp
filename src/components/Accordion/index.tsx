import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionProps {
    expanded?: string;
    isTable?: boolean;
  }
  
  export const Accordions = ({expanded, isTable}: AccordionProps) => {
    return (
      <div>
        <Accordion style={{}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                    backgroundColor: "#D4A9A7",
                }}
                >
                <Typography style={{ color: "#ffff" }}>Quais são as formas de pagamento?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography >
                Aceitamos cartões de débito, crédito, pix e pagamentos à vista.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion style={{}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                    backgroundColor: "#D4A9A7",
                }}
                >
                <Typography style={{ color: "#ffff" }}>Pedidos e envios</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography >
                Aceitamos pedidos por WhatsApp e E-mail. Enviamos para todo Brasil.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion style={{}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                    backgroundColor: "#D4A9A7",
                }}
                >
                <Typography style={{ color: "#ffff" }}>Formas de troca e devolução</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography >
                Não aceitamos trocas ou devoluções de produtos usados. Trocas somente no condicional e devoluções
                somente com defeito de fabricação.
                </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
          )
 }