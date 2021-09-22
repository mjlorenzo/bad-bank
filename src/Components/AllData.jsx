// this page will list all records kept within the system

// React hooks
import { useContext } from "react";

// React Bootstrap components
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";

// page container
import PageCard from "./PageCard";

// import context
import { UserContext } from "../App";

function AllData() {
  // grab our context
  const context = useContext(UserContext);

  return (
    <PageCard header="All Data">
      <Table bordered>
        <thead>
          <tr>
            <th colSpan={4}>All Transactions</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {context.transactions.map(({ name, email, type, amount }) => {
            return (
              <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{type}</td>
                <td>{amount}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Table bordered>
        <thead>
          <tr>
            <th colspan={4}>All Users</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {context.users.map(({ name, email, password, balance }) => {
            return (
              <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>{balance}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </PageCard>
  );
}

export default AllData;
