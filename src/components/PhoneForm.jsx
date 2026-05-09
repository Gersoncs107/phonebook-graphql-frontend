import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { EDIT_NUMBER } from "../queries";

const PhoneForm = () => {
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");

   const changeNumber = useMutation(EDIT_NUMBER);
}