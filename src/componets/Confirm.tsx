import { Toast } from "react-bootstrap";

interface Prop {
  toggle: (id: number) => void;
  name: string;
  id: number;
}

export function Confirm({ toggle, name, id }: Prop) {
  return (
    <Toast onClose={() => toggle(id)}>
      <Toast.Header>
        <img src="/pizza.png" alt="Pizza" />
        <strong className="me-auto">Your order is on the way</strong>
        <small>just now</small>
      </Toast.Header>

      <Toast.Body>
        Your {name} will be with you shortly in 0–1 billion business years
      </Toast.Body>
    </Toast>
  );
}
