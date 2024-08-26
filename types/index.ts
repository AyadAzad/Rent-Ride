import {MouseEventHandler} from "react";
import Manufacturer from "@/components/Manufacturer";

export interface CustomButtonProps {
    title : string
    containerStyles : string
    handleClick? : MouseEventHandler<HTMLButtonElement>
    btnType : "button" | "submit" | "reset"
}

export interface ManufacturerProps {
    manufacturer : string
    setmanufacturer : (manufacturer : Manufacturer) => void
}