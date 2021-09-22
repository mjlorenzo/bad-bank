// simple wrapper for cards describing pages to streamline styling
import Card from "react-bootstrap/Card";

function PageCard({ header, children }) {
  return (
    <Card className="page-card">
      <Card.Header>{header}</Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  )
}

export default PageCard;