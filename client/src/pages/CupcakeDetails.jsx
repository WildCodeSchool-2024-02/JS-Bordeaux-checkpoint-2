import { useLoaderData } from "react-router-dom"
import Cupcake from "../components/Cupcake"

export default function CupcakeDetails() {
  const data = useLoaderData()

  return (
    <Cupcake data={data}/>
  )
}
