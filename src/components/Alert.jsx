import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissibleExample(props) {
  const [show, setShow] = useState(true);
  setTimeout(() => {
    if (show) {
      return (
        <Alert
          variant={props.variant}
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>{props.message}</Alert.Heading>
        </Alert>
      );
    }
  }, 2000);
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AlertDismissibleExample;
