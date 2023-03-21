import { object, string } from "yup";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const eMoneySchema =
    body.paymethod === "emoney"
      ? {
          emoneyNumber: string().required("e-Money number is required"),
          emoneyPin: string().required("e-Money pin is required"),
        }
      : {};
  const schema = object().shape({
    name: string()
      .matches(/^[A-Za-z\s]+$/, "Enter a valid Name")
      .required("Name is required"),
    email: string().email("Enter a valid email").required("Email is required"),
    phone: string().required("Phone number is required"),
    address: string().required("Address is required"),
    zipcode: string()
      .matches(/^[0-9]+$/, "Zipcode must only contain numbers")
      .required("Zipcode is required"),
    city: string()
      .matches(/^[A-Za-z\s]+$/, "Enter a valid City")
      .required("City is required"),
    country: string()
      .matches(/^[A-Za-z\s]+$/, "Enter a valid Country")
      .required("Country is required"),
    paymethod: string()
      .oneOf(["emoney", "cash"], "Please select a payment method")
      .required("Payment method is required"),
    ...eMoneySchema,
  });
  try {
    const validation = await schema.validate(body);
    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 400,
    };
  }
});
