import { Badge, Button, Card } from "react-bootstrap";
interface Prop {
  data: {
    id: number;
    name: string;
    image: string;
    desc: string;
    price: number;
  };
  setOrdered: any;
}
function PizzaCard({ data, setOrdered }: Prop) {
  return (
    <Card className="h-100 shawdow-sm bg-white rounded">
      <Card.Img variant="top" src={data.image} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-between">
          <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
          <Badge pill bg="warning" text="black" className="mb-1">
            ${data.price}
          </Badge>
        </div>
        <Card.Text className="text-secondary">{data.desc}</Card.Text>
        <Button
          onClick={() => setOrdered(data.name)}
          className="mt-auto font-weight-bold"
          variant="success"
        >
          Buy the Pizza
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;
