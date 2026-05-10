import { Toast } from "react-bootstrap";
interface Prop {
  toggle: (arg0: boolean) => void;
  name: string;
}
export function Confirm({ toggle, name }: Prop) {
  return (
    <Toast
      onClose={() => {
        toggle(false);
      }}
    >
      <Toast.Header>
        <img src="\pizza.png" alt="Pizza"></img>
        <strong className="me-auto"> your order is on the way </strong>
        <small> just now</small>
      </Toast.Header>
      <Toast.Body>
        your {name} will be with you shortly in 0-1 billion business years
      </Toast.Body>
    </Toast>
  );
}
