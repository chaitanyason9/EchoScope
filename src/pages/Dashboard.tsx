import Sidebar from "../components/Sidebar";
import Appbar from "../components/Appbar";
import { Flex } from "@mantine/core";

export default function Dashboard() {
  return (
    <Flex direction="column">
        <Appbar />
        <Sidebar />
    </Flex>
  );
}