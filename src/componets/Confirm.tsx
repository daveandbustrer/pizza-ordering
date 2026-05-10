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
          <strong className="mr-auto"> your oder is in the oven </strong>
          <small> just now</small>
        </Toast.Header>
        <Toast.Body>
          Your delisous pizza will be with you in 30 mins!
        </Toast.Body>
      </Toast>
    </div>
  );
}
