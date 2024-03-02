import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function OrderUpdate({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default OrderUpdate;

export async function action({ requst, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
