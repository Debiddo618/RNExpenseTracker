import { FlatList, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of Shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of Shorts",
    amount: 159.99,
    date: new Date("2024-12-7"),
  },
  {
    id: "e3",
    description: "A pair of Shoes",
    amount: 259.99,
    date: new Date("2024-12-6"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;