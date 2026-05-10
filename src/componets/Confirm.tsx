import { Toast } from "react-bootstrap";
interface Prop {
  toggle: (arg0: boolean) => void;
}
export function Confirm({ toggle }: Prop) {
  return (
    <div className="z-3">
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
          your atom will be with you shortly in 0-1 billion business days
        </Toast.Body>
      </Toast>
    </div>
  );
}
